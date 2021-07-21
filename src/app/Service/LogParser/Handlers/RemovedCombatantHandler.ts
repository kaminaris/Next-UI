import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class RemovedCombatantHandler implements HandlerInterface {
	indexes = {
		id: 2
	};

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x04) {
			return;
		}

		const id = event[this.indexes.id]?.toUpperCase() ?? '';
		const combatants = this.parser.combatants.value;

		const combatantIdx = combatants.findIndex(c => c.id === id);
		if (combatantIdx >= 0) {
			combatants.splice(combatantIdx, 1);

			if (this.parser.debugMode) {
				// console.log(
				// 	':Removed combatant ' + id +
				// 	combatants[combatantIdx]
				// );
			}
			this.parser.combatants.next(combatants);
		}

	}
}