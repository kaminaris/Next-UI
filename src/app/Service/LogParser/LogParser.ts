import { Injectable }              from '@angular/core';
import { BehaviorSubject }              from 'rxjs';
import { EffectData, EnmityTargetData } from 'src/app/EnmityTargetData';
import { PartyMember }                  from 'src/app/Interface/PartyMember';
import { Combatant }               from 'src/app/Model/Combatant';
import { ActionSyncHandler }       from 'src/app/Service/LogParser/Handlers/ActionSyncHandler';
import { NetworkStatusHandler }    from 'src/app/Service/LogParser/Handlers/NetworkStatusHandler';
import { Util }                    from 'src/app/Service/LogParser/Util';
import { TTSService }              from '../TTSService';
import { HpUpdatedHandler }        from './Handlers/HpUpdatedHandler';
import { AuraGainedHandler }       from './Handlers/AuraGainedHandler';
import { AuraLostHandler }         from './Handlers/AuraLostHandler';
import { PlayerChangedHandler }    from './Handlers/PlayerChangedHandler';
import { RemovedCombatantHandler } from './Handlers/RemovedCombatantHandler';
import { AddedCombatantHandler }   from './Handlers/AddedCombatantHandler';
import { ChatEventHandler }        from './Handlers/ChatEventHandler';
import { HandlerInterface }        from './Handlers/HandlerInterface';
import { ZoneChangedHandler }      from './Handlers/ZoneChangedHandler';

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

	/**
	 * Combatants
	 */
	combatants = new BehaviorSubject<Combatant[]>([]);
	party = new BehaviorSubject<Combatant[]>([]);

	handlers: HandlerInterface[] = [
		new ChatEventHandler(this),
		new ZoneChangedHandler(this),
		new PlayerChangedHandler(this),
		new AddedCombatantHandler(this),
		new RemovedCombatantHandler(this),
		new AuraGainedHandler(this),
		new AuraLostHandler(this),
		new HpUpdatedHandler(this),
		new NetworkStatusHandler(this),
		new ActionSyncHandler(this),
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
		level?: number
	) {
		const combatants = this.combatants.value;
		let combatant = combatants.find((c: Combatant) => c.id === id);

		if (!combatant) {
			combatant = new Combatant();
			combatant.id = id;
			combatant.isNPC = !id.startsWith('1');
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
			if (this.target.value) {
				this.target.next(null);
			}
			return;
		}

		let id = e.Target.ID.toString(16).toUpperCase();
		let hp = e.Target.CurrentHP;
		let hpMax = e.Target.MaxHP;
		if (id === 'E0000000') {
			id = e.Target.Name;
			hp = 1;
			hpMax = 1;
		}

		let combatant = this.combatants.value.find(c => c.id === id)

		if (!combatant) {
			combatant = this.updateCombatant(
				id,
				e.Target.Name,
				hp,
				hpMax,
				null,
				null,
				Util.jobEnumToJob(e.Target.Job),
			);
		}

		this.updateEffectsFromEnmity(combatant, e.Target.Effects);

		if (this.target.value === combatant) {
			return;
		}
		console.log(combatant)
		console.log('target changed', combatant.id, combatant.name, combatant.hp.value);
		this.target.next(combatant);
	}

	updateEffectsFromEnmity(c: Combatant, effects: EffectData[]) {
		for (const effect of effects) {
			const appliedBy = effect.ActorID.toString(16).toUpperCase();
			c.updateAura(effect.BuffID, null, effect.Stack, appliedBy, null, null);
		}
	}
}