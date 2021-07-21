import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	abilityId: 4,
	abilityName: 5,
	targetId: 6,
	targetName: 7,
	duration: 8
};

export class AbilityUseHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x14) {
			return;
		}

		const id = event[indexes.id]?.toUpperCase() ?? '';
		const name = event[indexes.name] ?? '';
		const abilityIdHex = event[indexes.abilityId]?.toUpperCase() ?? '';
		const abilityId = parseInt(abilityIdHex);
		const abilityName = event[indexes.abilityName] ?? '';
		const targetId = event[indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[indexes.targetName] ?? '';
		const duration = event[indexes.duration] ?? '';

		const target = targetName.length === 0 ? 'Unknown' : targetName;

		if (this.parser.debugMode) {
			console.log(
				abilityIdHex +
				':' + name +
				' starts using ' + abilityName +
				' on ' + target + '.'
			);
		}
	}
}