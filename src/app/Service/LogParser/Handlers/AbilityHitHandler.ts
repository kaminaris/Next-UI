import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	flags: 8,
	damage: 9,
	abilityId: 4,
	abilityName: 5,
	targetId: 6,
	targetName: 7,
	targetHp: 24,
	targetMaxHp: 25,
	targetMp: 26,
	targetMaxMp: 27,
	targetX: 30,
	targetY: 31,
	targetZ: 32,
	targetHeading: 33,
	sourceHp: 34,
	sourceMaxHp: 35,
	sourceMp: 36,
	sourceMaxMp: 37,
	x: 40,
	y: 41,
	z: 42,
	heading: 43,
}

export class AbilityHitHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x15 && +event[0] !== 0x16) {
			return;
		}

		const id = event[indexes.id]?.toUpperCase() ?? '';
		const name = event[indexes.name] ?? '';

		const flags = event[indexes.flags] ?? '';

		const fieldOffset = flags === '3F' ? 2 : 0;

		// const damage = LineEvent.calculateDamage(event[indexes.damage + fieldOffset] ?? '');
		// TODO: wont deal with this for now
		const damage = event[indexes.damage + fieldOffset] ?? '';
		const abilityId = parseInt(event[indexes.abilityId]?.toUpperCase() ?? '');
		const abilityName = event[indexes.abilityName] ?? '';
		const targetId = event[indexes.targetId]?.toUpperCase() ?? '';
		const targetName = event[indexes.targetName] ?? '';

		const targetHp = parseInt(event[indexes.targetHp + fieldOffset] ?? '');
		const targetMaxHp = parseInt(event[indexes.targetMaxHp + fieldOffset] ?? '');
		const targetMp = parseInt(event[indexes.targetMp + fieldOffset] ?? '');
		const targetMaxMp = parseInt(event[indexes.targetMaxMp + fieldOffset] ?? '');
		const targetX = parseFloat(event[indexes.targetX + fieldOffset] ?? '');
		const targetY = parseFloat(event[indexes.targetY + fieldOffset] ?? '');
		const targetZ = parseFloat(event[indexes.targetZ + fieldOffset] ?? '');
		const targetHeading = parseFloat(event[indexes.targetHeading + fieldOffset] ?? '');

		const hp = parseInt(event[indexes.sourceHp + fieldOffset] ?? '');
		const maxHp = parseInt(event[indexes.sourceMaxHp + fieldOffset] ?? '');
		const mp = parseInt(event[indexes.sourceMp + fieldOffset] ?? '');
		const maxMp = parseInt(event[indexes.sourceMaxMp + fieldOffset] ?? '');
		const x = parseFloat(event[indexes.x + fieldOffset] ?? '');
		const y = parseFloat(event[indexes.y + fieldOffset] ?? '');
		const z = parseFloat(event[indexes.z + fieldOffset] ?? '');
		const heading = parseFloat(event[indexes.heading + fieldOffset] ?? '');

		if (this.parser.debugMode) {
			// tested
			console.log(
				`Ability hit, ${id}, ${name}, ${abilityId}, ${abilityName} on ${targetName}`
			)
		}
	}
}