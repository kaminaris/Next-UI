import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	sequenceId: 4,
	currentHp: 5,
	hpMax: 6,
	currentMp: 7,
	manaMax: 8,
	currentTp: 9,
	maxTp: 10,
	x: 11,
	y: 12,
	z: 13,
	heading: 14
};

export class ActionSyncHandler implements HandlerInterface {
	eventId = 0x25;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const sequenceId = event[indexes.sequenceId] ?? '';
		const hp = parseInt(event[indexes.currentHp] ?? '');
		const hpMax = parseInt(event[indexes.hpMax] ?? '');
		const mana = parseInt(event[indexes.currentMp] ?? '');
		const manaMax = parseInt(event[indexes.manaMax] ?? '');
		const tp = parseInt(event[indexes.currentTp] ?? '');
		const maxTp = parseInt(event[indexes.maxTp] ?? '');
		const x = parseFloat(event[indexes.x] ?? '');
		const y = parseFloat(event[indexes.y] ?? '');
		const z = parseFloat(event[indexes.z] ?? '');
		const heading = parseFloat(event[indexes.heading] ?? '');

		const c = this.act.parser.updateCombatant(
			id, name, hp, hpMax, mana, manaMax,  null, null, null, 'action-sync'
		);
		this.act.parser.updateCombatantPosition(c, x, y, z);
	}
}