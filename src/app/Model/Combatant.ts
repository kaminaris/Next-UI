import { BehaviorSubject, first, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                       from 'rxjs/operators';
import { Aura }                                               from './Aura';

export const healers = ['CNJ', 'WHM', 'SCH', 'AST'];
export const tanks = ['GLA', 'MRD', 'PLD', 'WAR', 'DRK', 'GNB'];
export const dpses = [
	'PGL', 'LNC', 'ARC', 'THM', 'MNK', 'DRG', 'BRD', 'BLM', 'ACN', 'SMN', 'ROG', 'NIN', 'MCH', 'SAM', 'RDM', 'BLU',
	'DNC'
];
export const crafters = ['CRP', 'BSM', 'ARM', 'GSM', 'LTW', 'WVR', 'ALC', 'CUL'];
export const gatherer = ['BTN', 'MIN', 'FSH'];

export class Combatant {
	static ENV_ID = 3758096384;

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

	inParty = new BehaviorSubject<boolean>(false);
	sign = new BehaviorSubject<number>(null);

	hp = new BehaviorSubject<number>(100);
	hpMax = 100;

	mana = new BehaviorSubject<number>(10000);
	manaMax = 10000;

	role: 'tank' | 'healer' | 'dps' = null;

	auras = new BehaviorSubject<Aura[]>([]);

	changeTrigger = new Subject<boolean>();
	anyChanged: Observable<any>;
	anyChangedDelayed: Observable<any>;

	constructor() {
		this.anyChanged = merge(
			this.job,
			this.level,
			this.inParty,
			this.hp,
			this.mana,
			this.auras,
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

	getAura(id?: number, name?: string, filter?: (a: Aura) => boolean) {
		const auras = filter ? this.auras.value.filter(filter) : this.auras.value;
		return auras.find(a => (id && a.id === id) || (name && a.name === name));
	}

	updateAura(
		id: number,
		name: string,
		stacks: number,
		appliedBy: number,
		duration: number,
		gainedAt?: Date
	) {
		const auras = this.auras.value;
		let aura = auras.find(a => {
			return a.appliedBy === appliedBy && (a.id === id || a.name === name);
		});
		if (!aura) {
			aura = Aura.createAura(id, name, stacks, appliedBy, duration, gainedAt);
			auras.push(aura);
			this.auras.next(auras);
		}
		else {
			aura.updateAura(
				name,
				stacks,
				appliedBy,
				duration,
				gainedAt
			);
		}

		aura?.expired.asObservable().pipe(first()).subscribe(() => {
			this.removeAura(aura.id, aura.name);
			console.log('REM AURA', aura.id, aura.name);
		});
		return aura;
	}

	removeAura(id: number, name: string) {
		const auras = this.auras.value;
		let auraIdx = auras.findIndex(a => a.id === id || a.name === name);
		if (auraIdx < 0) {
			return;
		}

		auras.splice(auraIdx, 1);
		this.auras.next(auras);
	}

	clearAuras() {
		if (this.auras.value.length === 0) {
			return;
		}

		this.auras.next([]);
	}

	clearPermaAuras() {
		const auras = this.auras.value.filter(a => a.expiresAt.value);
		this.auras.next(auras);
	}
}