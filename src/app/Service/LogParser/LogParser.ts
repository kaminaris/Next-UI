import { Injectable }              from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
import { PartyMember }             from 'src/app/Service/LogParser/PartyMember';
import { Util }                    from 'src/app/Service/LogParser/Util';
import { TTSService }              from '../TTSService';
import { Combatant }               from './Combatant';
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
		new HpUpdatedHandler(this)
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
}