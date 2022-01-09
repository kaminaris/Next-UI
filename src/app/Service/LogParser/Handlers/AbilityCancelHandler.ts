import { ActService }       from 'src/app/Service/Act/ActService';
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

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		const abilityId = parseInt(event[indexes.abilityId] || '0', 16);
		const abilityName = event[indexes.abilityName] ?? '';

		const reason = event[indexes.reason] ?? '';

		this.act.parser.eventDispatcher.ability.next({
			type: 'cancel',
			abilityName,
			abilityId,
			targetId: 0,
			targetName: '',
			duration: 0,
			sourceId: id,
			sourceName: name
		});

		const combatant = this.act.parser.findCombatant(id, name);
		if (!combatant) {
			return;
		}
		combatant.cast.stop(true, reason, abilityId);

		if (this.act.parser.debugMode) {
			console.log(
				`Cancel ability: ${ id }, ${ name }, ${ abilityId }, ${ abilityName }, ${ reason }`
			);
		}
	}
}