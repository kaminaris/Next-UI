import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	operation: 2,
	markerId: 3,
	id: 4,
	name: 5,
	targetId: 6,
	targetName: 7
};

export class PlayerMarkerHandler implements HandlerInterface {
	eventId = 0x1D;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.targetId] || '0', 16);
		const name = event[indexes.targetName] ?? '';
		const operation = (event[indexes.operation] ?? '').toLowerCase();
		const markerId = parseInt(event[indexes.markerId] ?? '0');

		if (!operation) {
			return;
		}

		this.parser.eventDispatcher.playerMarker.next({
			markerId: markerId,
			operation: operation as any,
			targetId: id,
			targetName: name
		});

		if (this.parser.debugMode) {
			console.log(
				`Player marker ${ operation } ${ markerId } set on ${ name } ${ id }`
			);
		}
	}
}