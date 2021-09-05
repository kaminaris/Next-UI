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
		const combatants = this.parser.combatants.value;

		// has to stay this way
		const combatantIdx = combatants.findIndex(c => c.id === id);
		if (combatantIdx >= 0) {
			combatants.splice(combatantIdx, 1);

			this.parser.combatants.next(combatants);
		}

		if (this.parser.debugMode) {
			console.log(
				':Removed combatant ' + id +
				combatants[combatantIdx]
			);
		}
	}
}