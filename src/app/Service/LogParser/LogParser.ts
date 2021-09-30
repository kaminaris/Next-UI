import { Injectable }                                      from '@angular/core';
import { BehaviorSubject }                                 from 'rxjs';
import { EffectData }                                      from 'src/app/Interface/EffectData';
import { AggroTarget, AggroTargetTarget, EnmityAggroList } from 'src/app/Interface/EnmityAggroList';
import { ActorInterface, EnmityTargetData }                from 'src/app/Interface/EnmityTargetData';
import { PartyMember }                                     from 'src/app/Interface/PartyMember';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { AbilityHitCloneHandler }                          from 'src/app/Service/LogParser/Handlers/AbilityHitCloneHandler';
import { EventDispatcher }                                 from './EventDispatcher';
import { Util }                                            from './Util';
import { TTSService }                                      from '../TTSService';
import { Combatant }                                       from '../../Model/Combatant';
import { FloorMarkerHandler }                              from './Handlers/FloorMarkerHandler';
import { HeadMarkerHandler }                               from './Handlers/HeadMarkerHandler';
import { JobGaugeHandler }                                 from './Handlers/JobGaugeHandler';
import { HpUpdatedHandler }                                from './Handlers/HpUpdatedHandler';
import { AuraGainedHandler }                               from './Handlers/AuraGainedHandler';
import { AuraLostHandler }                                 from './Handlers/AuraLostHandler';
import { PlayerChangedHandler }                            from './Handlers/PlayerChangedHandler';
import { RemovedCombatantHandler }                         from './Handlers/RemovedCombatantHandler';
import { AddedCombatantHandler }                           from './Handlers/AddedCombatantHandler';
import { ChatEventHandler }                                from './Handlers/ChatEventHandler';
import { HandlerInterface }                                from './Handlers/HandlerInterface';
import { ZoneChangedHandler }                              from './Handlers/ZoneChangedHandler';
import { AbilityHitHandler }                               from './Handlers/AbilityHitHandler';
import { AbilityUseHandler }                               from './Handlers/AbilityUseHandler';
import { ActionSyncHandler }                               from './Handlers/ActionSyncHandler';
import { CombatantDefeatedHandler }                        from './Handlers/CombatantDefeatedHandler';
import { NetworkStatusHandler }                            from './Handlers/NetworkStatusHandler';
import { OverTimeTickHandler }                             from './Handlers/OverTimeTickHandler';
import { PlayerStatsHandler }                              from './Handlers/PlayerStatsHandler';
import { LimitGaugeHandler }                               from './Handlers/LimitGaugeHandler';
import { NameplateToggleHandler }                          from './Handlers/NameplateToggleHandler';
import { TetherHandler }                                   from './Handlers/TetherHandler';
import { AbilityCancelHandler }                            from './Handlers/AbilityCancelHandler';
import { SignHandler }                                     from './Handlers/SignHandler';

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
		name: string,
		hp: number,
		hpMax: number,
		mana: number,
		manaMax: number,
		job?: string,
		level?: number,
		isNpc = false,
		source = 'any'
	) {
		const combatants = this.combatants.value;
		let combatant = this.findCombatant(id, name);

		if (!combatant) {
			combatant = new Combatant();
			combatant.id = id;
			combatant.isNPC = isNpc || !Combatant.isPlayerId(id);
			combatant.name = name;
			combatant.updateJob(job);
			combatant.updateLevel(level);
			combatant.updateHp(hp, hpMax);

			combatants.push(combatant);
			this.combatants.next(combatants);
		}
		else {
			combatant.name = name;
			combatant.updateJob(job);
			combatant.updateLevel(level);
			combatant.updateHp(hp, hpMax);
		}

		if ((mana || manaMax) && !(source === 'hp-updated' && combatant.isCrafterOrGatherer)) {
			combatant.updateMana(
				mana, combatant.isCrafterOrGatherer && source === 'action-sync' ? null : manaMax
			);
		}

		return combatant;
	}

	setParty(combatants: Combatant[]) {
		if (this.config.partySorter) {
			combatants.sort(this.config.partySorter);
		}

		this.party.next(combatants);
	}

	partyChanged(party: PartyMember[]) {
		const members = this.party.value;
		let hasChange = false;
		const newMembers = [];

		// handle remove party members
		for (const member of members) {
			if (party.find(pm => parseInt(pm.id, 16) === member.id)) {
				// still a member, don't touch
				newMembers.push(member);
				continue;
			}

			// not a member anymore
			member.inParty.next(false);
			hasChange = true;
		}

		// handle new party members
		for (const partyMember of party) {
			const newMemberId = parseInt(partyMember.id, 16);
			if (members.find(m => m.id === newMemberId)) {
				// already in party, dont touch
				continue;
			}

			// new member
			const combatants = this.combatants.value;
			let combatant = this.findCombatant(newMemberId);

			if (!combatant) {
				combatant = new Combatant();
				combatant.id = newMemberId;
				combatant.name = partyMember.name;
				combatant.job.next(Util.jobEnumToJob(partyMember.job));

				// Add it back to list of all actors
				combatants.push(combatant);
				this.combatants.next(combatants);
			}

			combatant.inParty.next(true);
			newMembers.push(combatant);

			hasChange = true;
		}

		if (hasChange) {
			this.setParty(newMembers);

			if (this.debugMode) {
				console.log('PARTY CHANGED', this.party.value);
			}
		}

	}

	setTarget(
		type: keyof Pick<LogParser, 'target' | 'targetOfTarget' | 'focus'>,
		c: Combatant | number,
		name?: string
	) {
		if (type === 'target') {
			for (const combatant of this.combatants.value) {
				if (
					c === null && combatant.isTarget ||
					c instanceof Combatant && c.id !== combatant.id && c.name !== combatant.name
				) {
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

	targetUpdate(e: EnmityTargetData) {
		const newFocus = e.Focus ? this.combatantFromEnmityActor(e.Focus) : null;
		this.setTarget('focus', newFocus);

		const newTarget = e.Target ? this.combatantFromEnmityActor(e.Target) : null;
		this.setTarget('target', newTarget);

		if (newTarget) {
			const newTargetOfTarget = e.TargetOfTarget ? this.combatantFromEnmityActor(e.TargetOfTarget) : null;
			this.setTarget('targetOfTarget', newTargetOfTarget);
		}
	}

	setAggroList(combatants: Combatant[]) {
		if (this.config.aggroSorter) {
			combatants.sort(this.config.aggroSorter);
		}

		this.aggroList.next(combatants);
	}

	aggroListUpdate(e: EnmityAggroList) {
		// Most common occurrence, ignore
		if (e.AggroList.length === 0 && this.aggroList.value.length === 0) {
			return;
		}

		let combatants = [];
		// check if whole list needs change
		if (e.AggroList.length !== this.aggroList.value.length) {

			// this doesn't work
			for (const a of e.AggroList) {
				const c = this.combatantFromEnmityActor(a);
				combatants.push(c);
			}

			this.setAggroList(combatants);
			return;
		}

		// special treatment if just their data changed?
	}

	findCombatant(id: number, name?: string) {
		if (id !== Combatant.ENV_ID) {
			return this.combatants.value.find(c => c.id === id);
		}

		return this.combatants.value.find(c => c.name === name);
	}

	combatantFromEnmityActor(actor: ActorInterface | AggroTarget) {
		let hp = actor.CurrentHP;
		let hpMax = actor.MaxHP;
		let isNpc = false;
		if (!Combatant.isPlayerId(actor.ID)) {
			hp = 1;
			hpMax = 1;
			isNpc = true;
		}

		const job = (actor as ActorInterface).Job ? Util.jobEnumToJob((actor as ActorInterface).Job) : null;

		let combatant = this.findCombatant(actor.ID, actor.Name);
		if (!combatant) {
			combatant = this.updateCombatant(
				actor.ID,
				actor.Name,
				hp,
				hpMax,
				null,
				null,
				job,
				null,
				isNpc
			);
		}

		return combatant;
	}

	updateEffectsFromEnmity(c: Combatant, effects: EffectData[]) {
		for (const effect of effects) {
			c.updateAura(effect.BuffID, null, effect.Stack, effect.ActorID, null, null);
		}
	}

}