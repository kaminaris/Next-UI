import { ActService }       from 'src/app/Service/Act/ActService';
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
	eventId = 0x14;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		const abilityId = parseInt(event[indexes.abilityId] || '0', 16);
		const abilityName = event[indexes.abilityName] ?? '';

		const targetId = parseInt(event[indexes.targetId] || '0', 16);
		const targetName = event[indexes.targetName] ?? '';

		const duration = parseInt(event[indexes.duration] ?? '0');

		const target = targetName.length === 0 ? 'Unknown' : targetName;

		this.act.parser.eventDispatcher.ability.next({
			type: 'use',
			abilityName,
			abilityId,
			targetId,
			targetName,
			duration,
			sourceId: id,
			sourceName: name
		});

		const combatant = this.act.parser.findCombatant(id, name);
		if (!combatant) {
			return;
		}

		if (duration > 0) {
			// if (!(this.act.parser.xiv.connected && combatant.isPlayer)) {
				// Approximately 300ms is needed for cast bars if working with network event
				combatant.cast.start(
					abilityId,
					abilityName,
					duration,
					(this.act.parser.config.config.castDelay / 1000)
				);
			// }
		}

		if (combatant.isPlayer) {
			console.log(
				`Cast start: ${ abilityName } on ${ target } (${ duration })`
			);
		}

		if (this.act.parser.debugMode) {
			console.log(
				abilityId +
				':' + name +
				' starts using ' + abilityName +
				' on ' + target + '.'
			);
		}
	}
}