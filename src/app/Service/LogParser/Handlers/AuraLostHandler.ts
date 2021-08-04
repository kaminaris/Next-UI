import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class AuraLostHandler implements HandlerInterface {
	indexes = {
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

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x1E) {
			return;
		}

		const statusId = parseInt(event[this.indexes.statusId]?.toUpperCase() ?? '');
		const statusName = event[this.indexes.statusName] ?? '';
		const duration = parseFloat(event[this.indexes.durationString] ?? '');
		const id = event[this.indexes.id]?.toUpperCase() ?? '';
		const name = event[this.indexes.name] ?? '';
		const targetId = event[this.indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[this.indexes.targetName] ?? '';
		const stacks = parseInt(event[this.indexes.stacks] ?? '0');
		const targetHp = parseInt(event[this.indexes.targetHp] ?? '');
		const hp = parseInt(event[this.indexes.sourceHp] ?? '');

		const timestamp = new Date(event[1] ?? '0');

		this.parser.eventDispatcher.status.next({
			type: 'lost',
			statusId,
			statusName,
			targetId,
			targetName
		});

		if (!targetId) {
			return;
		}

		const combatant = this.parser.combatants.value.find(c => c.id === targetId);
		if (!combatant) {
			console.log('WOT?');
			return;
		}

		combatant.removeAura(statusId, statusName);

		if (this.parser.debugMode) {
			console.log(`Combatant: ${ combatant.name } lost aura ${ statusName }`, combatant);
		}
	}
}