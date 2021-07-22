import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	operation: 2,
	headmarkerId: 3,
	id: 4,
	name: 5,
	targetId: 6,
	targetName: 7,
}

export class HeadMarkerHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x1D) {
			return;
		}

		const id = event[indexes.targetId]?.toUpperCase() ?? '';
		const name = event[indexes.targetName] ?? '';
		const operation = event[indexes.operation] ?? '';
		const headmarkerId = event[indexes.headmarkerId] ?? '';

		// if (this.parser.debugMode) {
			console.log(
				`Headmarker ${operation} ${headmarkerId} set on ${name} ${id}`
			)
		// }
	}
}