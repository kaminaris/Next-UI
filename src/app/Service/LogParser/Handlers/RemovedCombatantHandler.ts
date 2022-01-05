import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2
};

export class RemovedCombatantHandler implements HandlerInterface {
	eventId = 0x04;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);

		this.act.parser.removeCombatant(id);

		if (this.act.parser.debugMode) {
			console.log('Removed combatant ' + id);
		}
	}
}