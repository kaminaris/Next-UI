import { LogParser }        from '../LogParser';
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

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x1C) {
			return;
		}

		const operation = event[indexes.operation] ?? '';
		const waymark = event[indexes.waymark] ?? '';
		const id = event[indexes.id]?.toUpperCase() ?? '';
		const name = event[indexes.name] ?? '';
		const x = event[indexes.x] ?? '';
		const y = event[indexes.y] ?? '';
		const z = event[indexes.z] ?? '';

		if (this.parser.debugMode) {
			console.log(
				`Floor marker ${ operation }: ${ waymark } by ${ id } ${ name } (${x}:${y}:${z})`
			);
		}
	}
}