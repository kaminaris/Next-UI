import { Injectable } from '@angular/core';
import { statuses }   from 'src/app/Data/status';
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
		this.randomAggroList();
		this.setParty(true);
		this.randomAuras();
		this.randomizeHp();
		this.randomizeMana();
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

	randomizeMana() {
		for (const comb of this.parser.combatants.value) {
			comb.updateMana(this.randomRange(0, comb.manaMax));
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
		const combatants = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatants);
		this.parser.targetOfTarget.next(rCombatant);
	}

	randomAggroList() {
		const combatants = this.parser.combatants.value;
		const rCombatants = [
			this.randomElement(combatants),
			this.randomElement(combatants),
			this.randomElement(combatants),
			this.randomElement(combatants),
		];

		this.parser.aggroList.next(rCombatants);
	}

	randomAuras(duration = 5) {
		const combatants = this.parser.combatants.value;
		const randomActor = this.randomElement(combatants);
		for (const comb of this.parser.combatants.value) {

			comb.updateAura(
				this.randomRange(100, 200),
				'Test',
				this.randomRange(1, 3),
				randomActor.id,
				duration
			);
		}
	}

	addPlayerAura(id: number, duration = 30, stacks = 1) {
		const s = statuses.find(s => s.id === id);
		this.parser.player.updateAura(
			s.id,
			s.name,
			stacks,
			this.parser.player.id,
			duration
		)
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