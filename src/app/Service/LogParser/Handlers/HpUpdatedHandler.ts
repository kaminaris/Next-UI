import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	currentHp: 4,
	hpMax: 5,
	currentMp: 6,
	maxMp: 7,
	currentTp: 8,
	maxTp: 9,
	x: 10,
	y: 11,
	z: 12,
	heading: 13
};

export class HpUpdatedHandler implements HandlerInterface {
	eventId = 0x27;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const hp = parseInt(event[indexes.currentHp] ?? '');
		const hpMax = parseInt(event[indexes.hpMax] ?? '');
		const mana = parseInt(event[indexes.currentMp] ?? '');
		const manaMax = parseInt(event[indexes.maxMp] ?? '');
		const tp = parseInt(event[indexes.currentTp] ?? '');
		const maxTp = parseInt(event[indexes.maxTp] ?? '');
		const x = parseFloat(event[indexes.x] ?? '');
		const y = parseFloat(event[indexes.y] ?? '');
		const z = parseFloat(event[indexes.z] ?? '');
		const heading = parseFloat(event[indexes.heading] ?? '');

		this.parser.updateCombatant(id, name, hp, hpMax, mana, manaMax, x, y, z, null, null, null, 'hp-updated');

		if (this.parser.debugMode) {
			// console.log(`HP updated: ${name} (${id}): ${hp} / ${hpMax}`);
		}
	}
}