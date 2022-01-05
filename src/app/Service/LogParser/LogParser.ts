import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EffectData }      from 'src/app/Interface/EffectData';
import { ConfigService }   from 'src/app/Service/ConfigService';
import { EventDispatcher } from './EventDispatcher';
import { TTSService }      from '../TTSService';
import { Combatant }       from '../../Model/Combatant';

@Injectable({ providedIn: 'root' })
export class LogParser {
	debugMode = false;

	/**
	 * Zone Events
	 */
	zoneId = new BehaviorSubject<number>(0);
	zoneName = new BehaviorSubject<string>('');

	/**
	 * Combatant Events
	 */
	player = new BehaviorSubject<Combatant>(null);
	target = new BehaviorSubject<Combatant>(null);
	targetOfTarget = new BehaviorSubject<Combatant>(null);
	focus = new BehaviorSubject<Combatant>(null);

	/**
	 * Combatants
	 */
	combatants = new BehaviorSubject<Combatant[]>([]);
	party = new BehaviorSubject<Combatant[]>([]);
	partyLeader = new BehaviorSubject<Combatant>(null);
	aggroList = new BehaviorSubject<Combatant[]>([]);

	constructor(
		public tts: TTSService,
		public eventDispatcher: EventDispatcher,
		public config: ConfigService
	) {
		// guard target of target in case of target dying
		this.target.subscribe((v) => {
			if (!v && this.targetOfTarget.value) {
				this.targetOfTarget.next(null);
			}
		});
	}

	changeZone(zoneId: number, zoneName?: string) {
		this.zoneId.next(zoneId);
		if (zoneName) {
			this.zoneName.next(zoneName);
		}

		const combatants = this.combatants.value;
		const toRemove = combatants.filter(c => !c.isPlayer && !c.inParty.value);
		for (const c of toRemove) {
			this.removeCombatant(c);
		}

		for (const c of this.combatants.value) {
			c.clearPermaStatuses();
		}
	}

	registerPlayer(name: string, id: number) {
		let player = this.findCombatant(id, name);
		if (!player) {
			player = this.createAndAddCombatant(id, name);
		}

		player.isPlayer = true;
		player.name = name;
		player.id = id;

		this.player.next(player);
	}

	createCombatant(id: number, name?: string) {
		const c = new Combatant();
		c.id = id;
		if (name) {
			c.name = name;
		}

		c.statusGained.subscribe((s) => {
			this.eventDispatcher.status.next({
				type: 'gained',
				status: s,
				target: c
			});
		});

		c.statusLost.subscribe((s) => {
			this.eventDispatcher.status.next({
				type: 'lost',
				status: s,
				target: c
			});
		});

		return c;
	}

	createAndAddCombatant(id: number, name?: string) {
		const c = this.createCombatant(id, name);
		const combatants = this.combatants.value;
		combatants.push(c);
		this.combatants.next(combatants);

		return c;
	}

	updateCombatant(
		id: number,
		name?: string,
		hp: number = 1,
		hpMax: number = 1,
		mana: number = 10000,
		manaMax: number = 10000,
		x?: number,
		y?: number,
		z?: number,
		job?: string,
		level?: number,
		isNpc = false,
		source = 'any'
	) {
		const combatants = this.combatants.value;
		let combatant = this.findCombatant(id, name);

		let shouldAdd = false;
		if (!combatant) {
			combatant = this.createCombatant(id, name);
			combatant.isNPC = isNpc || !Combatant.isPlayerId(id);
			shouldAdd = true;
		}

		if (name) {
			combatant.name = name;
		}
		combatant.updatePosition(x, y, z);
		combatant.updateJob(job);
		combatant.updateLevel(level);
		combatant.updateHp(hp, hpMax);

		// TODO: fix this, cactbot supposedly have this
		if ((mana || manaMax) && !(source === 'hp-updated' && combatant.isCrafterOrGatherer)) {
			combatant.updateMana(
				mana, combatant.isCrafterOrGatherer && source === 'action-sync' ? null : manaMax
			);
		}

		if (shouldAdd) {
			combatants.push(combatant);
			this.combatants.next(combatants);
		}

		return combatant;
	}

	removeCombatant(id: number | Combatant) {
		const combatants = this.combatants.value;
		const idx = id instanceof Combatant ? combatants.indexOf(id) : combatants.findIndex(c => c.id === id);
		if (idx >= 0) {
			const c = combatants[idx];
			c.statusGained.unsubscribe();
			c.changeTrigger.unsubscribe();
			c.inParty.unsubscribe();
			c.sign.unsubscribe();
			c.hp.unsubscribe();
			c.job.unsubscribe();
			c.level.unsubscribe();
			c.mana.unsubscribe();

			combatants.splice(idx, 1);
			this.combatants.next(combatants);
		}
	}

	setParty(combatants: Combatant[]) {
		if (this.config.partySorter) {
			combatants.sort(this.config.partySorter);
		}

		this.party.next(combatants);
	}

	setTarget(
		type: keyof Pick<LogParser, 'target' | 'targetOfTarget' | 'focus'>,
		c: Combatant | number,
		name?: string
	) {
		if (type === 'target') {
			for (const combatant of this.combatants.value) {
				if (combatant.isTarget) {
					combatant.isTarget = false;
					combatant.changeTrigger.next(true);
				}
			}
		}

		const subject = this[type];
		if (c === null) {
			if (subject.value) {
				subject.next(null);
			}
			return;
		}

		if (!(c instanceof Combatant)) {
			c = this.findCombatant(c, name);
		}

		const currentTarget = subject.value;
		if (currentTarget && currentTarget.id === c.id && currentTarget.name === c.name) {
			return;
		}

		if (type === 'target') {
			c.isTarget = true;
			c.changeTrigger.next(true);
		}
		subject.next(c);
	}

	setAggroList(combatants: Combatant[]) {
		if (this.config.aggroSorter) {
			combatants.sort(this.config.aggroSorter);
		}

		this.aggroList.next(combatants);
	}

	findCombatant(id: number, name?: string) {
		if (id !== Combatant.ENV_ID) {
			return this.combatants.value.find(c => c.id === id);
		}

		return this.combatants.value.find(c => c.name === name);
	}

	updateEffectsFromEnmity(c: Combatant, effects: EffectData[]) {
		for (const effect of effects) {
			c.updateStatus(effect.BuffID, null, effect.Stack, effect.ActorID, null, null);
		}
	}

	isPlayerPartyLeader() {
		if (!this.player.value || !this.partyLeader.value) {
			return false;
		}

		return this.player.value.id === this.partyLeader.value.id;
	}

	chatMessage(type: string, speaker: string, message: string) {
		this.eventDispatcher.chat.next({ type, speaker, message });

		// so far we don't need that
		if (speaker) {
			this.tts.say(type, speaker, message);
		}
	}
}