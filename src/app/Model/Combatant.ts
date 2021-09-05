import { BehaviorSubject, merge, Observable } from 'rxjs';
import { debounceTime }                       from 'rxjs/operators';
import { Aura }                               from './Aura';

export class Combatant {
	static ENV_ID = 3758096384;

	id: number = null;
	name: string = '';
	job = new BehaviorSubject<string>('NONE');
	level = new BehaviorSubject<number>(1);
	isPlayer = false;
	isNPC = false;
	inParty = new BehaviorSubject<boolean>(false);

	hp = new BehaviorSubject<number>(100);
	hpMax = 100;

	mana = new BehaviorSubject<number>(10000);
	manaMax = 10000;

	get isHealer() { return ['SCH', 'WHM', 'AST'].indexOf(this.job.value) >= 0 }
	get isTank() { return ['PLD', 'WAR', 'DRK', 'GNB'].indexOf(this.job.value) >= 0 }

	auras = new BehaviorSubject<Aura[]>([]);

	anyChanged: Observable<any>;
	anyChangedDelayed: Observable<any>;

	constructor() {
		this.anyChanged = merge(
			this.job,
			this.level,
			this.inParty,
			this.hp,
			this.mana,
			this.auras
		);

		this.anyChangedDelayed = this.anyChanged.pipe(debounceTime(1));
	}

	static isPlayerId(id: number) {
		return id.toString(16).startsWith('1');
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
			return a.appliedBy === appliedBy && (a.id === id || a.name === name)
		});
		if (!aura) {
			const newAura = Aura.createAura(id, name, stacks, appliedBy, duration, gainedAt);
			auras.push(newAura);
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