import { Injectable }              from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
import { AuraGainedHandler }       from './Handlers/AuraGainedHandler';
import { AuraLostHandler }         from './Handlers/AuraLostHandler';
import { PlayerChangedHandler }    from './Handlers/PlayerChangedHandler';
import { Combatant }               from './Combatant';
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

	handlers: HandlerInterface[] = [
		new ChatEventHandler(this),
		new ZoneChangedHandler(this),
		new PlayerChangedHandler(this),
		new AddedCombatantHandler(this),
		new RemovedCombatantHandler(this),
		new AuraGainedHandler(this),
		new AuraLostHandler(this),
	];

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
		} else {
			combatants.push(this.player);
			this.combatants.next(combatants);
		}
	}
}