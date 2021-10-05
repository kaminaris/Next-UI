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
	eventId = 0x17;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		const abilityId = parseInt(event[indexes.abilityId] || '0', 16);
		const abilityName = event[indexes.abilityName] ?? '';

		const reason = event[indexes.reason] ?? '';

		this.parser.eventDispatcher.ability.next({
			type: 'cancel',
			abilityName,
			abilityId,
			targetId: 0,
			targetName: '',
			duration: 0,
			sourceId: id,
			sourceName: name
		});

		const combatant = this.parser.findCombatant(id, name);
		if (!combatant) {
			return;
		}
		console.log(event);
		combatant.cast.stop(true, reason, abilityId);

		if (this.parser.debugMode) {
			console.log(
				`Cancel ability: ${ id }, ${ name }, ${ abilityId }, ${ abilityName }, ${ reason }`
			);
		}
	}
}