import { Injectable } from '@angular/core';
import { statuses }   from 'src/app/Data/statuses';
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
		document.body.style.backgroundImage = 'url(https://i.imgur.com/fP3kF8J.jpeg)';
		this.parser.registerPlayer('Player Name', 1);
		const player = this.parser.player.value;
		player.job.next('MCH');
		player.level.next(65);
		player.updateHp(500, 1000);
		player.updateMana(3000);

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
		this.randomFocus();
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
			const player = this.parser.player.value;
			let hp = player.hp.value;
			hp += 100;
			if (hp > player.hpMax) {
				hp = 0;
			}
			this.parser.player.value.updateHp(hp);
		}, 500);
	}

	chatMessage(m: string, s: string = 'player') {
		this.parser.parse(['0', '', 'type', s, m, '']);
	}

	setParty(full = false) {
		const count = full ? 8 : 4;

		const combs = [this.parser.player.value];
		for (let i = 1; i < count; i++) {
			let pick: Combatant;
			do {
				pick = this.randomElement(this.parser.combatants.value);
			} while (combs.indexOf(pick) >= 0 || pick.job.value === 'NONE');
			combs.push(pick);
		}

		this.parser.setParty(combs);
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
			id, name, hp, hpMax, 10000, 10000, job, level
		);
	}

	randomTarget() {
		const combatatns = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatatns);
		this.parser.setTarget('target', rCombatant);
	}

	targetRandomPartyMember() {
		const combatatns = this.parser.party.value;
		const rCombatant = this.randomElement(combatatns);
		this.parser.setTarget('target', rCombatant);
	}

	randomTargetOfTarget() {
		const combatants = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatants);
		this.parser.targetOfTarget.next(rCombatant);
	}

	randomFocus() {
		const combatants = this.parser.combatants.value;
		const rCombatant = this.randomElement(combatants);
		this.parser.focus.next(rCombatant);
	}

	randomAggroList() {
		const combatants = this.parser.combatants.value;
		const rCombatants = [
			this.randomElement(combatants),
			this.randomElement(combatants),
			this.randomElement(combatants),
			this.randomElement(combatants)
		];

		this.parser.setAggroList(rCombatants);
	}

	randomAuras(duration = 5) {
		const combatants = this.parser.combatants.value;
		const randomActor = this.randomElement(combatants);
		for (const comb of this.parser.combatants.value) {

			comb.updateAura(
				this.randomRange(100, 200),
				'',
				this.randomRange(1, 3),
				randomActor.id,
				duration
			);
		}
	}

	abilityUse(abilityId: number, abilityName: string) {
		this.parser.parse([
			0x14.toString(),
			'',

			this.parser.player.value.id.toString(16),
			this.parser.player.value.name,

			abilityId.toString(16),
			abilityName,

			this.parser.target.value.id.toString(16),
			this.parser.target.value.name,

			'5'
		]);
	}

	addPlayerAura(id: number, duration = 30, stacks = 1) {
		const s = statuses.find(s => s.id === id);
		this.parser.player.value.updateAura(
			s.id,
			s.name,
			stacks,
			this.parser.player.value.id,
			duration
		);

		setTimeout(() => {
			this.parser.player.value.removeAura(s.id, s.name);
		}, duration * 1000);
	}

	clearTarget() {
		this.parser.target.next(null);
	}

	// Utils
	randomElement(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}