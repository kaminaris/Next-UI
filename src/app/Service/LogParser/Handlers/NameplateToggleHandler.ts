import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const fields = {
	id: 2,
	name: 3,
	targetId: 4,
	targetName: 5,
	targetable: 6,
}

export class NameplateToggleHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x22) {
			return;
		}

		const id = event[fields.id]?.toUpperCase() ?? '';
		const name = event[fields.name] ?? '';
		const targetId = event[fields.targetId]?.toUpperCase() ?? '';
		const targetName = event[fields.targetName] ?? '';
		const targetable = !!parseInt(event[fields.targetable] ?? '', 16);

		// if (this.parser.debugMode) {
			console.log(
				`Nameplate toggle ${id} ${name} target: ${targetId} ${targetName}`
			)
		// }
	}
}