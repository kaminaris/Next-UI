import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class AuraLostHandler implements HandlerInterface {
	indexes = {
		abilityId: 2,
		abilityName: 3,
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

		const abilityId = parseInt(event[this.indexes.abilityId]?.toUpperCase() ?? '');
		const abilityName = event[this.indexes.abilityName] ?? '';
		const duration = parseFloat(event[this.indexes.durationString] ?? '');
		const id = event[this.indexes.id]?.toUpperCase() ?? '';
		const name = event[this.indexes.name] ?? '';
		const targetId = event[this.indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[this.indexes.targetName] ?? '';
		const stacks = parseInt(event[this.indexes.stacks] ?? '0');
		const targetHp = parseInt(event[this.indexes.targetHp] ?? '');
		const hp = parseInt(event[this.indexes.sourceHp] ?? '');

		const timestamp = new Date(event[1] ?? '0');

		if (!targetId) {
			return;
		}

		const combatant = this.parser.combatants.value.find(c => c.id === targetId);
		if (!combatant) {
			console.log('WOT?');
			return;
		}

		if (combatant.isPlayer) {
			console.log(`Combatant: ${ combatant.name } lost aura ${ abilityName }`, combatant);
		}

		combatant.removeAura(abilityId, abilityName);

		if (this.parser.debugMode) {
			console.log(`Combatant: ${ combatant.name } lost aura ${ abilityName }`, combatant);
		}
	}
}