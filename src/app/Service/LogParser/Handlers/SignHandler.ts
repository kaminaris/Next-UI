import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	operation: 2,
	markerId: 3,
	id: 4,
	name: 5,
	targetId: 6,
	targetName: 7
};

export class SignHandler implements HandlerInterface {
	eventId = 0x1D;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.targetId] || '0', 16);
		const name = event[indexes.targetName] ?? '';
		const operation = (event[indexes.operation] ?? '').toLowerCase();
		const markerId = parseInt(event[indexes.markerId] ?? '0');

		if (!operation) {
			return;
		}

		const combatant = this.act.parser.findCombatant(id, name);
		if (combatant) {
			combatant.sign.next(operation === 'add' ? markerId : null);
		}

		this.act.parser.eventDispatcher.playerMarker.next({
			markerId: markerId,
			operation: operation as any,
			targetId: id,
			targetName: name
		});

		if (this.act.parser.debugMode) {
			console.log(
				`Sign ${ operation } ${ markerId } set on ${ name } ${ id }`
			);
		}
	}
}