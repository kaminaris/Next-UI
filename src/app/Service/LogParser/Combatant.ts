import { BehaviorSubject } from 'rxjs';
import { Aura }            from './Aura';

export class Combatant {
	id: string = '';
	name: string = '';
	job: string = '';
	isPlayer = false;

	hp = new BehaviorSubject<number>(0);
	hpMax = new BehaviorSubject<number>(0);
	mana = new BehaviorSubject<number>(0);
	manaMax = new BehaviorSubject<number>(0);
	auras = new BehaviorSubject<Aura[]>([]);

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
				newExpire !== null && aura.expiresAt.value !== null && newExpire.valueOf() !== aura.expiresAt.value.valueOf()
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