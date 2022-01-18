import { Injectable }        from '@angular/core';
import { statuses }          from 'src/app/Data/statuses';
import { Combatant }         from 'src/app/Model/Combatant';
import { BaseFrameConfig }   from 'src/app/Model/Config/BaseFrameConfig';
import { MainConfig }        from 'src/app/Model/Config/MainConfig';
import { PlayerFrameConfig } from 'src/app/Model/Config/PlayerFrameConfig';
import { ActService }        from 'src/app/Service/Act/ActService';
import { ConfigService }     from 'src/app/Service/ConfigService';
import { LogParser }         from 'src/app/Service/LogParser/LogParser';
import { Util }              from 'src/app/Service/LogParser/Util';
import { XivService }        from 'src/app/Service/Xiv/XivService';

@Injectable({ providedIn: 'root' })
export class TestService {
	playerHpInterval: number;

	constructor(
		protected parser: LogParser,
		protected config: ConfigService,
		protected xiv: XivService,
		protected act: ActService,
	) {
		(window as any).testService = this;
	}

	setBackground(url: string) {
		document.body.style.backgroundImage = `url(${url})`;
	}

	testMode() {
		this.setBackground('https://i.imgur.com/fP3kF8J.jpeg');
		this.parser.registerPlayer('Player Name', 1);
		const player = this.parser.player.value;
		player.job.next('MCH');
		player.level.next(65);
		player.updateHp(500, 1000);
		player.updateMana(3000);

		for (let i = 0; i < 50; i++) {
			this.addCombatant();
		}

		// add each of the job
		for (const j of Util.jobsArray()) {
			this.addCombatant(false, j.job, 'Player ' + j.job);
		}
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

	partyRandomSigns() {
		for (const c of this.parser.party.value) {
			const sign = Math.random() < 0.5 ? this.randomRange(0, 13) : null;
			console.log(sign);
			c.sign.next(sign);
		}
	}

	exportProfile(name: string) {
		const p = this.config.profiles.find(p => p.name === name);
		if (!p) {
			console.log('Profile not found: ' + name);
			return;
		}

		console.log(JSON.parse(p.config));
	}

	exportCurrentConfig() {
		const c = this.config.config;
		console.log(c);
		return c;
	}

	setFramePos(frame: keyof Omit<MainConfig['frames'], "auraBar">, x: number, y: number) {
		const f = this.config.config.frames[frame];
		if (!f) {
			return;
		}

		if (f instanceof BaseFrameConfig) {
			f.position = { x, y };
		} else if (f instanceof PlayerFrameConfig) {
			f.basic.position = { x, y };
		} else {
			console.log(`Position not set, unable to find ${frame}`);
			return;
		}
		console.log(`Position set, for frame ${frame} x: ${x} y: ${y}`);
	}

	chatMessage(m: string, s: string = 'player') {
		this.parser.chatMessage('type', s, m);
	}

	setParty(full = false) {
		const count = full ? 8 : 4;

		const combs = [this.parser.player.value];
		for (let i = 1; i < count; i++) {
			let pick: Combatant;
			do {
				pick = this.randomElement(this.parser.combatants.value, (v: Combatant) => {
					return !v.isNPC && !v.isCrafterOrGatherer;
				});
			} while (combs.indexOf(pick) >= 0 || pick.job.value === 'NONE');
			combs.push(pick);
		}

		const leader = this.randomElement(combs);
		this.parser.setParty(combs);
		this.parser.partyLeader.next(leader);
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

	castSpell(id: number, name: string, duration: number) {
		const p = this.parser.player.value;
		p.cast.start(id, name, duration, (this.parser.config.config.castDelay/1000));
	}

	cancelSpell(reason: string) {
		const p = this.parser.player.value;
		p.cast.stop(true, reason);
	}

	addCombatant(enemy = true, job = 'NONE', name?: string) {
		const id = Math.ceil(Math.random() * 10000);
		name ??= enemy ? 'Some Enemy' + id.toString(16) : 'Some NPC' + id.toString(16);
		const hpMax = Math.ceil(Math.random() * 10000);
		const hp = Math.ceil(hpMax / 2);
		const level = 5 + Math.ceil(Math.random() * 50);

		const c = this.parser.updateCombatant(
			id, name, hp, hpMax, 10000, 10000,
			job,
			level,
			enemy
		);
		this.parser.updateCombatantPosition(
			c,
			this.randomRange(-50, 50),
			this.randomRange(-50, 50),
			this.randomRange(-50, 50)
		)
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
		const rCombatants = [];

		for (let i = 0; i < 5; i++) {
			rCombatants.push(
				this.randomElement(combatants, (v: Combatant) => {
					return v.isNPC;
				}),
			);
		}

		this.parser.setAggroList(rCombatants);
	}

	randomAuras(duration = 5) {
		const combatants = this.parser.combatants.value;
		const randomActor = this.randomElement(combatants);
		const timestamp = new Date();
		for (const comb of this.parser.combatants.value) {
			comb.updateStatus(
				this.randomRange(100, 200),
				'',
				this.randomRange(1, 3),
				randomActor.id,
				duration,
				timestamp
			);
		}
	}

	abilityUse(abilityId: number, abilityName: string) {
		// TODO: fix this
		// this.parser.parse([
		// 	0x14.toString(),
		// 	'',
		//
		// 	this.parser.player.value.id.toString(16),
		// 	this.parser.player.value.name,
		//
		// 	abilityId.toString(16),
		// 	abilityName,
		//
		// 	this.parser.target.value.id.toString(16),
		// 	this.parser.target.value.name,
		//
		// 	'5'
		// ]);
	}

	addPlayerAura(id: number, duration = 30, stacks = 1) {
		const s = statuses.find(s => s.id === id);
		this.parser.player.value.updateStatus(
			s.id,
			s.name,
			stacks,
			this.parser.player.value.id,
			duration,
			new Date()
		);
	}

	clearTarget() {
		this.parser.target.next(null);
	}

	// Utils
	randomElement(arr: any[], filter?: (value: any) => boolean) {
		if (filter) {
			arr = arr.filter(filter);
		}
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}