import { BehaviorSubject, first, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                       from 'rxjs/operators';
import { Cast }                                               from 'src/app/Model/Cast';
import { Status }                                             from 'src/app/Model/Status';

export const healers = ['CNJ', 'WHM', 'SCH', 'AST', 'SGE'];
export const tanks = ['GLA', 'MRD', 'PLD', 'WAR', 'DRK', 'GNB'];
export const dpses = [
	'PGL', 'LNC', 'ARC', 'THM', 'MNK', 'DRG', 'BRD', 'BLM', 'ACN', 'SMN', 'ROG', 'NIN', 'MCH', 'SAM', 'RDM', 'BLU',
	'DNC', 'RPR'
];
export const crafters = ['CRP', 'BSM', 'ARM', 'GSM', 'LTW', 'WVR', 'ALC', 'CUL'];
export const gatherer = ['BTN', 'MIN', 'FSH'];

export class Combatant {
	static ENV_ID = 0xE0000000;

	id: number = null;
	name: string = '';
	job = new BehaviorSubject<string>('NONE');
	level = new BehaviorSubject<number>(1);
	isPlayer = false;
	isNPC = false;
	isTarget = false;
	isGatherer = false;
	isCrafter = false;

	x = 0;
	y = 0;
	z = 0;

	get isCrafterOrGatherer() { return this.isCrafter || this.isGatherer; }
	get isDummy() { return this.id.toString(16).startsWith('4'); }

	get firstName() {
		const spaceIdx = this.name.indexOf(' ');
		return spaceIdx < 0 ? this.name : this.name.slice(0, spaceIdx);
	}

	get lastName() {
		const spaceIdx = this.name.indexOf(' ');
		return spaceIdx < 0 ? '' : this.name.slice(spaceIdx + 1);
	}

	get hpDeficit() { return this.hpMax - this.hp.value; }
	get hpPercent() { return Math.min(100 * this.hp.value / this.hpMax, 100); }
	get manaDeficit() { return this.manaMax - this.mana.value; }
	get manaPercent() { return Math.min(100 * this.mana.value / this.manaMax); }

	inParty = new BehaviorSubject<boolean>(false);
	sign = new BehaviorSubject<number>(null);

	hp = new BehaviorSubject<number>(100);
	hpMax = 100;

	mana = new BehaviorSubject<number>(10000);
	manaMax = 10000;

	role: 'tank' | 'healer' | 'dps' = null;

	statuses = new BehaviorSubject<Status[]>([]);

	cast = new Cast();

	changeTrigger = new Subject<boolean>();

	statusGained = new Subject<Status>();
	statusLost = new Subject<Status>();
	statusUpdated = new Subject<Status>();

	anyChanged: Observable<any>;
	anyChangedDelayed: Observable<any>;

	constructor() {
		this.anyChanged = merge(
			this.job,
			this.level,
			this.inParty,
			this.hp,
			this.mana,
			this.statuses,
			this.changeTrigger
		);

		this.anyChangedDelayed = this.anyChanged.pipe(debounceTime(1));

		this.job.subscribe((j: string) => {
			// determine role
			if (healers.indexOf(j) >= 0) {
				this.role = 'healer';
			}
			else if (tanks.indexOf(j) >= 0) {
				this.role = 'tank';
			}
			else if (dpses.indexOf(j) >= 0) {
				this.role = 'dps';
			}

			this.isCrafter = crafters.indexOf(j) >= 0;
			this.isGatherer = gatherer.indexOf(j) >= 0;
		});
	}

	static isPlayerId(id: number) {
		return id.toString(16).startsWith('1');
	}

	calcDistance(to: Combatant) {
		return Math.hypot(this.x - to.x, this.y - to.y, this.z - to.z);
	}

	updatePosition(x: number, y: number, z: number) {
		if (typeof x !== 'undefined' && x !== null) {
			this.x = x;
		}
		if (typeof y !== 'undefined' && y !== null) {
			this.y = y;
		}
		if (typeof z !== 'undefined' && z !== null) {
			this.z = z;
		}
	}

	updateJob(job: string) {
		if (job && job !== this.job.value) {
			this.job.next(job);
		}
	}

	updateLevel(level: number) {
		if (level && level !== this.level.value) {
			this.level.next(level);
		}
	}

	updateHp(hp: number, hpMax?: number) {
		let hpMaxChanged = false;
		if (hpMax) {
			// first update hpMax if it changed
			if (this.hpMax !== hpMax) {
				hpMaxChanged = true;
				this.hpMax = hpMax;
			}
		}

		if (hp === null || this.hp.value === hp && !hpMaxChanged) {
			// no changes, dont send the event
			return;
		}

		this.hp.next(hp);
	}

	updateMana(mana: number, manaMax?: number) {
		if (this.isNPC) {
			return;
		}
		let manaMaxChanged = false;
		if (manaMax) {
			// first update manaMax if it changed
			if (this.manaMax !== manaMax) {
				manaMaxChanged = true;
				this.manaMax = manaMax;
			}
		}

		if (mana === null || this.mana.value === mana && !manaMaxChanged) {
			// no changes, dont send the event
			return;
		}

		this.mana.next(mana);
	}

	getStatus(id?: number, name?: string, filter?: (a: Status) => boolean) {
		const auras = filter ? this.statuses.value.filter(filter) : this.statuses.value;
		return auras.find(a => (id && a.id === id) || (name && a.name === name));
	}

	updateStatus(
		id: number,
		name: string = null,
		stacks: number,
		appliedBy: number,
		duration: number,
		gainedAt?: Date
	) {
		const statuses = this.statuses.value;
		if (name === null) {
			name = statuses.find(a => a.id === id)?.name;
		}
		let status = statuses.find(a => {
			return a.appliedBy === appliedBy && (a.id === id || a.name === name);
		});
		if (!status) {
			status = Status.createStatus(id, name, stacks, appliedBy, duration, gainedAt);
			statuses.push(status);
			this.statuses.next(statuses);
			this.statusGained.next(status);
		}
		else {
			status.updateStatus(
				name,
				stacks,
				appliedBy,
				duration,
				gainedAt
			);
			this.statusUpdated.next(status);
		}

		status?.expired.asObservable().pipe(first()).subscribe(() => {
			this.removeStatus(status.id, status.name);
		});
		return status;
	}

	removeStatus(id: number, name?: string, appliedBy?: number) {
		const statuses = this.statuses.value;
		let statusIndex = statuses.findIndex(
			a => (appliedBy ? a.appliedBy === appliedBy : true) && (a.id === id || a.name === name)
		);
		if (statusIndex < 0) {
			return;
		}

		const status = statuses[statusIndex];
		this.statusLost.next(status);

		statuses.splice(statusIndex, 1);
		this.statuses.next(statuses);
	}

	clearStatuses() {
		if (this.statuses.value.length === 0) {
			return;
		}

		for (const status of this.statuses.value) {
			this.statusLost.next(status);
		}

		this.statuses.next([]);
	}

	clearPermaStatuses() {
		const statuses = this.statuses.value.filter(a => a.expiresAt.value);
		for (const status of statuses) {
			this.statusLost.next(status);
		}

		this.statuses.next(statuses);
	}
}