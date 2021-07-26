import { Injectable }                                   from '@angular/core';
import { BehaviorSubject }                              from 'rxjs';
import { ActorInterface, EffectData, EnmityTargetData } from 'src/app/EnmityTargetData';
import { PartyMember }                                  from 'src/app/Interface/PartyMember';
import { Util }                                         from 'src/app/Service/LogParser/Util';
import { TTSService }                                   from '../TTSService';
import { Combatant }                                    from 'src/app/Model/Combatant';
import { FloorMarkerHandler }                           from './Handlers/FloorMarkerHandler';
import { HeadMarkerHandler }                            from './Handlers/HeadMarkerHandler';
import { JobGaugeHandler }                              from './Handlers/JobGaugeHandler';
import { HpUpdatedHandler }                             from './Handlers/HpUpdatedHandler';
import { AuraGainedHandler }                            from './Handlers/AuraGainedHandler';
import { AuraLostHandler }                              from './Handlers/AuraLostHandler';
import { PlayerChangedHandler }                         from './Handlers/PlayerChangedHandler';
import { RemovedCombatantHandler }                      from './Handlers/RemovedCombatantHandler';
import { AddedCombatantHandler }                        from './Handlers/AddedCombatantHandler';
import { ChatEventHandler }                             from './Handlers/ChatEventHandler';
import { HandlerInterface }                             from './Handlers/HandlerInterface';
import { ZoneChangedHandler }                           from './Handlers/ZoneChangedHandler';
import { AbilityHitHandler }                            from './Handlers/AbilityHitHandler';
import { AbilityUseHandler }                            from './Handlers/AbilityUseHandler';
import { ActionSyncHandler }                            from './Handlers/ActionSyncHandler';
import { CancelAbilityHandler }                         from './Handlers/CancelAbilityHandler';
import { CombatantDefeatedHandler }                     from './Handlers/CombatantDefeatedHandler';
import { NetworkStatusHandler }                         from './Handlers/NetworkStatusHandler';
import { OverTimeTickHandler }                          from './Handlers/OverTimeTickHandler';
import { PlayerStatsHandler }                           from './Handlers/PlayerStatsHandler';
import { LimitGaugeHandler }                            from './Handlers/LimitGaugeHandler';
import { NameplateToggleHandler }                       from './Handlers/NameplateToggleHandler';
import { TetherHandler }                                from './Handlers/TetherHandler';

@Injectable({ providedIn: 'root' })
export class LogParser {
	debugMode = false;

	/**
	 * Zone Events
	 */
	zoneId = new BehaviorSubject<string>('');
	zoneName = new BehaviorSubject<string>('');

	/**
	 * Player Events
	 */
	player = new Combatant();
	playerId = new BehaviorSubject<string>('');
	playerName = new BehaviorSubject<string>('');

	target = new BehaviorSubject<Combatant>(null);
	targetOfTarget = new BehaviorSubject<Combatant>(null);

	/**
	 * Combatants
	 */
	combatants = new BehaviorSubject<Combatant[]>([]);
	party = new BehaviorSubject<Combatant[]>([]);

	handlers: HandlerInterface[] = [
		new ChatEventHandler(this), // 0x00
		new ZoneChangedHandler(this), // 0x01
		new PlayerChangedHandler(this), // 0x02
		new AddedCombatantHandler(this), // 0x03
		new RemovedCombatantHandler(this), // 0x04
		new PlayerStatsHandler(this), // 0x0C
		new AbilityUseHandler(this), // 0x14
		new AbilityHitHandler(this), // 0x15, 0x16
		new CancelAbilityHandler(this), // 0x17
		new OverTimeTickHandler(this), // 0x18
		new CombatantDefeatedHandler(this), // 0x19
		new AuraGainedHandler(this), // 0x1A
		new HeadMarkerHandler(this), // 0x1D
		new FloorMarkerHandler(this), // 0x1C
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
		public tts: TTSService
	) {}

	parse(event: string[]) {
		for (const handler of this.handlers) {
			handler.handle(event);
		}
	}

	registerPlayer(name: string, id: number) {
		this.playerName.next(name);
		const hexId = id.toString(16).toUpperCase();
		this.playerId.next(hexId);
		this.player.name = name;
		this.player.id = hexId;
		this.player.isPlayer = true;

		const combatants = this.combatants.value;
		const playerFound = combatants.findIndex(c => c.id === hexId);
		if (playerFound >= 0) {
			// hmm do we need to update anything?
		}
		else {
			combatants.push(this.player);
			this.combatants.next(combatants);
		}
	}

	updateCombatant(
		id: string,
		name: string,
		hp: number,
		hpMax: number,
		mana: number,
		manaMax: number,
		job?: string,
		level?: number,
		isNpc = false,
	) {
		const combatants = this.combatants.value;
		let combatant = combatants.find((c: Combatant) => c.id === id);

		if (!combatant) {
			combatant = new Combatant();
			combatant.id = id;
			combatant.isNPC = isNpc || !id.startsWith('1');
			combatant.name = name;
			combatant.updateJob(job);
			combatant.updateLevel(level);

			combatant.updateHp(hp, hpMax);
			if (mana || manaMax) {
				combatant.updateMana(mana, manaMax);
			}

			combatants.push(combatant);
			this.combatants.next(combatants);
		}
		else {
			combatant.name = name;
			combatant.updateJob(job);
			combatant.updateLevel(level);
			combatant.updateHp(hp, hpMax);
			combatant.updateMana(mana, manaMax);
		}

		return combatant;
	}

	partyChanged(party: PartyMember[]) {
		const members = this.party.value;
		let hasChange = false;
		const newMembers = [];

		for (const member of members) {
			if (party.find(pm => pm.id === member.id)) {
				// still a member, don't touch
				newMembers.push(member);
				continue;
			}

			// not a member anymore
			member.inParty.next(false);
			hasChange = true;
		}

		for (const partyMember of party) {
			if (members.find(m => m.id === partyMember.id)) {
				// already in party, dont touch
				continue;
			}

			// new member
			const combatants = this.combatants.value;
			let combatant = combatants.find(c => c.id === partyMember.id);
			if (!combatant) {
				combatant = new Combatant();
				combatant.id = partyMember.id;
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
			this.party.next(newMembers);

			if (this.debugMode) {
				console.log('PARTY CHANGED', this.party.value);
			}
		}

	}

	targetUpdate(e: EnmityTargetData) {
		if (!e.Target) {
			// clear if there is no target and target is set
			if (this.target.value) {
				this.target.next(null);
			}

			// also clear target of target
			if (this.targetOfTarget.value) {
				this.target.next(null);
			}
		}
		else {
			const targetId = this.combatantIdFromEnmityActor(e.Target);
			// there is target set and its different from the one in memory
			if (this.target.value && this.target.value.id === targetId) {

			}
			else {
				let target = this.combatantFromEnmityActor(e.Target, targetId);
				console.log('target changed', targetId,  target, 'prev', this.target.value);
				this.target.next(target);
			}

			if (!e.TargetOfTarget) {
				if (this.targetOfTarget.value) {
					this.targetOfTarget.next(null);
				}
			}
			else {
				const targetOfTargetId = this.combatantIdFromEnmityActor(e.TargetOfTarget);
				if (
					this.targetOfTarget.value &&
					this.targetOfTarget.value.id === targetOfTargetId
				) {

				}
				else {
					let targetOfTarget = this.combatantFromEnmityActor(e.TargetOfTarget, targetOfTargetId);
					this.targetOfTarget.next(targetOfTarget);
					console.log('target of target changed', targetOfTarget);
				}
			}
		}
	}

	combatantIdFromEnmityActor(actor: ActorInterface) {
		let targetId = actor.ID.toString(16).toUpperCase();
		if (targetId === 'E0000000') {
			targetId = actor.Name;
		}

		return targetId;
	}

	combatantFromEnmityActor(actor: ActorInterface, targetId: string) {
		let hp = actor.CurrentHP;
		let hpMax = actor.MaxHP;
		let isNpc = false;
		if (actor.ID === 3758096384) {
			hp = 1;
			hpMax = 1;
			isNpc = true;
		}

		let combatant = this.combatants.value.find(c => c.id === targetId);
		if (!combatant) {
			combatant = this.updateCombatant(
				targetId,
				actor.Name,
				hp,
				hpMax,
				null,
				null,
				Util.jobEnumToJob(actor.Job),
				null,
				isNpc
			);
		}

		return combatant;
	}

	updateEffectsFromEnmity(c: Combatant, effects: EffectData[]) {
		for (const effect of effects) {
			const appliedBy = effect.ActorID.toString(16).toUpperCase();
			c.updateAura(effect.BuffID, null, effect.Stack, appliedBy, null, null);
		}
	}
}