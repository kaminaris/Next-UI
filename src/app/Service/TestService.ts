import { Injectable } from '@angular/core';
import { Combatant }  from 'src/app/Model/Combatant';
import { LogParser }  from 'src/app/Service/LogParser/LogParser';
import { Util }       from 'src/app/Service/LogParser/Util';

@Injectable({ providedIn: 'root' })
export class TestService {
	playerHpInterval: number;

	constructor(
		protected parser: LogParser
	) {
		(window as any).testService = this;
		(window as any).testMode = this.testMode.bind(this);
	}

	testMode() {
		this.parser.registerPlayer('Player Name', 1);
		this.parser.player.job.next('MCH');
		this.parser.player.level.next(65);
		this.parser.player.updateHp(500, 1000);
		this.parser.player.updateMana(3000);

		this.addCombatant();
		this.addCombatant();
		this.addCombatant();

		// add each of the job
		for (const j of Util.jobsArray()) {
			this.addCombatant(false, j.job, 'Player ' + j.job);
		}

		// this.toggleAnimatePlayerHp();
	}

	fullTest() {
		this.testMode();
		this.randomTarget();
		this.randomTargetOfTarget();
		this.setParty(true);
		this.randomAuras();
		this.randomizeHp();
	}

	toggleAnimatePlayerHp() {
		if (this.playerHpInterval) {
			clearInterval(this.playerHpInterval);
			return;
		}

		this.playerHpInterval = window.setInterval(() => {
			const player = this.parser.player;
			let hp = player.hp.value;
			hp += 100;
			if (hp > player.hpMax) {
				hp = 0;
			}
			this.parser.player.updateHp(hp);
		}, 500);
	}

	setParty(full = false) {
		const count = full ? 8 : 4;

		const combs = [this.parser.player];
		for (let i = 1; i < count; i++) {
			let pick: Combatant;
			do {
				pick = this.randomElement(this.parser.combatants.value);
			} while (combs.indexOf(pick) >= 0 || pick.job.value === 'NONE')
			combs.push(pick);
		}
		console.log('party set', combs);
		this.parser.party.next(combs);
	}

	resetParty() {
		this.parser.party.next([]);
	}

	randomizeHp() {
		for (const comb of this.parser.combatants.value) {
			comb.updateHp(this.randomRange(0, comb.hpMax));
		}
	}

	addCombatant(enemy = true, job = 'NONE', name?: string) {
		const id = Math.ceil(Math.random() * 10000);
		name ??= enemy ? 'Some Enemy' + id.toString(16) : 'Some NPC' + id.toString(16);
		const hpMax = Math.ceil(Math.random() * 10000);
		const hp = Math.ceil(hpMax / 2);
		const level = 5 + Math.ceil(Math.random() * 50);

		this.parser.updateCombatant(
			id.toString(16), name, hp, hpMax, 10000, 10000, job, level
		);
	}

	randomTarget() {
		const combatatns = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatatns);
		this.parser.target.next(rCombatant);
	}

	randomTargetOfTarget() {
		const combatatns = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatatns);
		this.parser.targetOfTarget.next(rCombatant);
	}

	randomAuras() {
		for (const comb of this.parser.combatants.value) {
			comb.updateAura(
				this.randomRange(100, 200),
				'Test',
				1,
				'123',
				5
			);
		}
	}

	clearTarget() {
		this.parser.target.next(null);
	}

	// Utils
	randomElement(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}