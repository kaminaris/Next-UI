import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	targetId: 4,
	targetName: 5,
	tetherId: 8
};

export class TetherHandler implements HandlerInterface {
	eventId = 0x23;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const targetId = event[indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[indexes.targetName] ?? '';
		const tetherId = event[indexes.tetherId] ?? '';

		if (this.act.parser.debugMode) {
			console.log(
				`Tether ${ id } ${ name } on target ${ targetName }: ${ tetherId }`
			);
		}
	}
}