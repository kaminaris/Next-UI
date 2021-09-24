import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	targetId: 2,
	targetName: 3,
	headMarkerId: 6
};

export class HeadMarkerHandler implements HandlerInterface {
	eventId = 0x1B;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.targetId] || '0', 16);
		const name = event[indexes.targetName] ?? '';
		const headMarkerId = parseInt(event[indexes.headMarkerId] || '0', 16);

		this.parser.eventDispatcher.headMarker.next({
			headMarkerId,
			targetId: id,
			targetName: name
		});

		if (this.parser.debugMode) {
			console.log(
				`Headmarker ${ headMarkerId } set on ${ name } ${ id }`
			);
		}
	}
}