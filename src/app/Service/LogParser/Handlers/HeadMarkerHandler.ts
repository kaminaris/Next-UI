import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	targetId: 2,
	targetName: 3,
	headMarkerId: 6
};

export class HeadMarkerHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x1B) {
			return;
		}

		const id = event[indexes.targetId]?.toUpperCase() ?? '';
		const name = event[indexes.targetName] ?? '';
		const headMarkerId = event[indexes.headMarkerId] ?? '';

		if (this.parser.debugMode) {
			console.log(
				`Headmarker ${ headMarkerId } set on ${ name } ${ id }`
			);
		}
	}
}