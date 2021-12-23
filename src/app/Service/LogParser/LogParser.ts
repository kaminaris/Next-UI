import { Injectable }               from '@angular/core';
import { BehaviorSubject }          from 'rxjs';
import { EffectData }               from 'src/app/Interface/EffectData';
import { PartyMember }              from 'src/app/Interface/PartyMember';
import { ConfigService }            from 'src/app/Service/ConfigService';
import { AbilityHitCloneHandler }   from 'src/app/Service/LogParser/Handlers/AbilityHitCloneHandler';
import { EventDispatcher }          from './EventDispatcher';
import { TTSService }               from '../TTSService';
import { Combatant }                from '../../Model/Combatant';
import { FloorMarkerHandler }       from './Handlers/FloorMarkerHandler';
import { HeadMarkerHandler }        from './Handlers/HeadMarkerHandler';
import { JobGaugeHandler }          from './Handlers/JobGaugeHandler';
import { HpUpdatedHandler }         from './Handlers/HpUpdatedHandler';
import { AuraGainedHandler }        from './Handlers/AuraGainedHandler';
import { AuraLostHandler }          from './Handlers/AuraLostHandler';
import { PlayerChangedHandler }     from './Handlers/PlayerChangedHandler';
import { RemovedCombatantHandler }  from './Handlers/RemovedCombatantHandler';
import { AddedCombatantHandler }    from './Handlers/AddedCombatantHandler';
import { ChatEventHandler }         from './Handlers/ChatEventHandler';
import { HandlerInterface }         from './Handlers/HandlerInterface';
import { ZoneChangedHandler }       from './Handlers/ZoneChangedHandler';
import { AbilityHitHandler }        from './Handlers/AbilityHitHandler';
import { AbilityUseHandler }        from './Handlers/AbilityUseHandler';
import { ActionSyncHandler }        from './Handlers/ActionSyncHandler';
import { CombatantDefeatedHandler } from './Handlers/CombatantDefeatedHandler';
import { NetworkStatusHandler }     from './Handlers/NetworkStatusHandler';
import { OverTimeTickHandler }      from './Handlers/OverTimeTickHandler';
import { PlayerStatsHandler }       from './Handlers/PlayerStatsHandler';
import { LimitGaugeHandler }        from './Handlers/LimitGaugeHandler';
import { NameplateToggleHandler }   from './Handlers/NameplateToggleHandler';
import { TetherHandler }            from './Handlers/TetherHandler';
import { AbilityCancelHandler }     from './Handlers/AbilityCancelHandler';
import { SignHandler }              from './Handlers/SignHandler';

@Injectable({ providedIn: 'root' })
export class LogParser {
	debugMode = false;

	/**
	 * Zone Events
	 */
	zoneId = new BehaviorSubject<string>('');
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

	handlers: HandlerInterface[] = [
		new ChatEventHandler(this), // 0x00
		new ZoneChangedHandler(this), // 0x01
		new PlayerChangedHandler(this), // 0x02
		new AddedCombatantHandler(this), // 0x03
		new RemovedCombatantHandler(this), // 0x04
		new PlayerStatsHandler(this), // 0x0C
		new AbilityUseHandler(this), // 0x14
		new AbilityHitHandler(this), // 0x15,
		new AbilityHitCloneHandler(this), // 0x16
		new AbilityCancelHandler(this), // 0x17
		new OverTimeTickHandler(this), // 0x18
		new CombatantDefeatedHandler(this), // 0x19
		new AuraGainedHandler(this), // 0x1A
		new HeadMarkerHandler(this), // 0x1B
		new FloorMarkerHandler(this), // 0x1C
		new SignHandler(this), // 0x1D
		new AuraLostHandler(this), // 0x1E
		new JobGaugeHandler(this), // 0x1F
		new NameplateToggleHandler(this), // 0x22
		new TetherHandler(this), // 0x23
		new LimitGaugeHandler(this), // 0x24
		new ActionSyncHandler(this), // 0x25
		new NetworkStatusHandler(this), // 0x26
		new HpUpdatedHandler(this) // 0x27
	];

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

	parse(event: string[]) {
		const eventId = +event[0];
		for (const handler of this.handlers) {
			if (handler.eventId === eventId) {
				handler.handle(event);
				return;
			}
		}
	}

	removeHandler(eventId: number) {
		const idx = this.handlers.findIndex(v => v.eventId === eventId);
		if (idx >= 0) {
			this.handlers.splice(idx, 1);
		}
	}

	registerPlayer(name: string, id: number) {
		let player = this.findCombatant(id, name);
		if (!player) {
			player = new Combatant();
			const combatants = this.combatants.value;
			combatants.push(player);
			this.combatants.next(combatants);
		}

		player.isPlayer = true;
		player.name = name;
		player.id = id;

		this.player.next(player);
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
			combatant = new Combatant();
			combatant.id = id;
			combatant.isNPC = isNpc || !Combatant.isPlayerId(id);
			shouldAdd = true;
		}

		if (name) {
			combatant.name = name;
		}
		combatant.updatePosition(x, y, z);
		combatant.updateJob(job);
		combatant.updateLevel(level);
		// if (hp > combatant.hpMax) {
		// 	console.log(source, hp, combatant.hpMax);
		// }
		combatant.updateHp(hp, hpMax);
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
			c.updateAura(effect.BuffID, null, effect.Stack, effect.ActorID, null, null);
		}
	}

	isPlayerPartyLeader() {
		if (!this.player.value || !this.partyLeader.value) {
			return false;
		}

		return this.player.value.id === this.partyLeader.value.id;
	}
}