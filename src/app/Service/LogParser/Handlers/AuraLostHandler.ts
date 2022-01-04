import { LogParser }        from '../LogParser';
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

export class AuraLostHandler implements HandlerInterface {
	eventId = 0x1E;
	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const statusId = parseInt(event[indexes.statusId]?.toUpperCase() ?? '');
		const statusName = event[indexes.statusName] ?? '';
		const duration = parseFloat(event[indexes.durationString] ?? '');
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const targetId = parseInt(event[indexes.targetId] || '0', 16);
		const targetName = event[indexes.targetName] ?? '';
		const stacks = parseInt(event[indexes.stacks] ?? '0');
		const targetHp = parseInt(event[indexes.targetHp] ?? '');
		const hp = parseInt(event[indexes.sourceHp] ?? '');

		if (!targetId) {
			return;
		}

		const combatant = this.parser.findCombatant(targetId, targetName);
		if (!combatant) {
			console.log('WOT?');
			return;
		}

		combatant.removeStatus(statusId, statusName);

		if (this.parser.debugMode) {
			console.log(`Combatant: ${ combatant.name } lost aura ${ statusName }`, combatant);
		}
	}
}