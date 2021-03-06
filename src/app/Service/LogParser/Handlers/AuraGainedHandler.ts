import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	statusId: 2,
	statusName: 3,
	durationString: 4,
	id: 5,
	name: 6,
	targetId: 7,
	targetName: 8,
	stacks: 9,
	targetHp: 10,
	sourceHp: 11
};

export class AuraGainedHandler implements HandlerInterface {
	eventId = 0x1A;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		const statusId = parseInt(event[indexes.statusId]?.toUpperCase() ?? '', 16);
		const statusName = event[indexes.statusName] ?? '';
		const duration = parseFloat(event[indexes.durationString] ?? '');
		const targetId = parseInt(event[indexes.targetId] || '0', 16);
		const targetName = event[indexes.targetName] ?? '';
		const stacks = parseInt(event[indexes.stacks] ?? '0');
		const targetHp = parseInt(event[indexes.targetHp] ?? '');
		const hp = parseInt(event[indexes.sourceHp] ?? '');

		if (!targetId || !id) {
			return;
		}

		const combatant = this.act.parser.findCombatant(targetId, targetName);
		if (!combatant) {
			console.log('WOT?', targetId, targetName);
			return;
		}

		const timestamp = new Date();
		const aura = combatant.updateStatus(statusId, statusName, stacks, id, duration, timestamp);

		if (this.act.parser.debugMode) {
			console.log(`Combatant: ${ combatant.name } gained aura ${ statusName }`, combatant, aura, event);
		}
	}
}