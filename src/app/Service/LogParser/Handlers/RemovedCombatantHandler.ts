import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2
};

export class RemovedCombatantHandler implements HandlerInterface {
	eventId = 0x04;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);

		this.parser.removeCombatant(id);

		if (this.parser.debugMode) {
			console.log('Removed combatant ' + id);
		}
	}
}