import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const fields = {
	id: 2,
	name: 3,
	targetId: 4,
	targetName: 5,
};

export class CombatantDefeatedHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x19) {
			return;
		}

		const id = event[fields.id]?.toUpperCase() ?? '';
		const name = event[fields.name] ?? '';
		const targetId = event[fields.targetId]?.toUpperCase() ?? '';
		const targetName = event[fields.targetName] ?? '';

		if (this.parser.debugMode) {
			// tested
			console.log(
				'Combatant defeated: ' + name + ' was defeated by ' + targetName + '.'
			);
		}
	}
}