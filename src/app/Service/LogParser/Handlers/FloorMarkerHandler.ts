import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	operation: 2,
	waymark: 3,
	id: 4,
	name: 5,
	x: 6,
	y: 7,
	z: 8
};

export class FloorMarkerHandler implements HandlerInterface {
	eventId = 0x1C;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const operation = event[indexes.operation] ?? '';
		const waymark = event[indexes.waymark] ?? '';
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const x = event[indexes.x] ?? '';
		const y = event[indexes.y] ?? '';
		const z = event[indexes.z] ?? '';

		if (this.act.parser.debugMode) {
			console.log(
				`Floor marker ${ operation }: ${ waymark } by ${ id } ${ name } (${ x }:${ y }:${ z })`
			);
		}
	}
}