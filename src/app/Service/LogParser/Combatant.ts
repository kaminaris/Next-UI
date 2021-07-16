import { BehaviorSubject } from 'rxjs';
import { Aura }            from './Aura';

export class Combatant {
	id: string = '';
	name: string = '';
	job = new BehaviorSubject<string>('NONE');
	level = new BehaviorSubject<number>(1);
	isPlayer = false;
	inParty = new BehaviorSubject<boolean>(false);

	hp = new BehaviorSubject<number>(100);
	hpMax = 100;

	mana = new BehaviorSubject<number>(10000);
	manaMax = 10000;

	auras = new BehaviorSubject<Aura[]>([]);

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

		if (this.hp.value === hp && !hpMaxChanged) {
			// no changes, dont send the event
			return;
		}

		this.hp.next(hp);
	}

	updateMana(mana: number, manaMax?: number) {
		let manaMaxChanged = false;
		if (manaMax) {
			// first update manaMax if it changed
			if (this.manaMax !== manaMax) {
				manaMaxChanged = true;
				this.manaMax = manaMax;
			}
		}

		if (this.mana.value === mana && !manaMaxChanged) {
			// no changes, dont send the event
			return;
		}

		this.mana.next(mana);
	}

	updateAura(newAura: Aura) {
		const auras = this.auras.value;
		let aura = auras.find(a => a.id === newAura.id || a.name === newAura.name);
		if (!aura) {
			auras.push(newAura);
			this.auras.next(auras);
		}
		else {
			aura.stacks.next(newAura.stacks.value);
			aura.gainedAt.next(newAura.gainedAt.value);
			const newExpire =
				newAura.duration.value >= 9990 ?
				null : new Date(aura.gainedAt.value.valueOf() + newAura.duration.value * 1000);

			if (
				newExpire === null && aura.expiresAt.value !== null ||
				newExpire !== null && aura.expiresAt.value === null ||
				newExpire !== null && aura.expiresAt.value !== null && newExpire.valueOf()
				!== aura.expiresAt.value.valueOf()
			) {
				aura.expiresAt.next(newExpire);
			}
		}
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
}