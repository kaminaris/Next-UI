import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	abilityId: 4,
	abilityName: 5,
	reason: 6
};

export class AbilityCancelHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x17) {
			return;
		}

		const id = event[indexes.id]?.toUpperCase() ?? '';
		const name = event[indexes.name] ?? '';
		const abilityId = parseInt(event[indexes.abilityId]?.toUpperCase() ?? '');
		const abilityName = event[indexes.abilityName] ?? '';
		const reason = event[indexes.reason] ?? '';

		if (this.parser.debugMode) {
			console.log(
				`Cancel ability: ${ id }, ${ name }, ${ abilityId }, ${ abilityName }, ${ reason }`
			);
		}
	}
}