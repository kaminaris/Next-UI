import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	targetId: 4,
	targetName: 5
};

export class CombatantDefeatedHandler implements HandlerInterface {
	eventId = 0x19;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const targetId = event[indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[indexes.targetName] ?? '';

		if (this.act.parser.debugMode) {
			// tested
			console.log(
				'Combatant defeated: ' + name + ' was defeated by ' + targetName + '.'
			);
		}
	}
}