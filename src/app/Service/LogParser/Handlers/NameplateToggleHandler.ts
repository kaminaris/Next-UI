import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	targetId: 4,
	targetName: 5,
	targetable: 6
};

export class NameplateToggleHandler implements HandlerInterface {
	eventId = 0x22;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const targetId = event[indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[indexes.targetName] ?? '';
		const targetable = !!parseInt(event[indexes.targetable] ?? '', 16);

		if (this.parser.debugMode) {
			console.log(
				`Nameplate toggle ${ id } ${ name } target: ${ targetId } ${ targetName }`
			);
		}
	}
}