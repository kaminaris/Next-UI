import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	type: 4,
	effectId: 5,
	damage: 6,
	currentHp: 7,
	maxHp: 8,
	currentMp: 9,
	maxMp: 10,
	currentTp: 11,
	maxTp: 12,
	x: 13,
	y: 14,
	z: 15,
	heading: 16
};

export class OverTimeTickHandler implements HandlerInterface {
	eventId = 0x18;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		const type = event[indexes.type] ?? '';
		const effectId = event[indexes.effectId]?.toUpperCase() ?? '';
		const damage = parseInt(event[indexes.damage] ?? '', 16);

		const hp = parseInt(event[indexes.currentHp] ?? '');
		const maxHp = parseInt(event[indexes.maxHp] ?? '');
		const mp = parseInt(event[indexes.currentMp] ?? '');
		const maxMp = parseInt(event[indexes.maxMp] ?? '');
		const tp = parseInt(event[indexes.currentTp] ?? '');
		const maxTp = parseInt(event[indexes.maxTp] ?? '');
		const x = parseFloat(event[indexes.x] ?? '');
		const y = parseFloat(event[indexes.y] ?? '');
		const z = parseFloat(event[indexes.z] ?? '');
		const heading = parseFloat(event[indexes.heading] ?? '');

		// let effectName = '';
		// const resolvedName = repo.resolveName(const id, const name);
		//
		// if (const effectId in LineEvent0x18.showEffectNamesFor)
		// 	effectName = LineEvent0x18.showEffectNamesFor[const effectId] ?? '';

		let effectPart = '';
		// if (effectName)
		// 	effectPart = effectName + ' ';

		if (this.parser.debugMode) {
			// tested
			console.log(
				`DOT/HOT: ${ type } tick for ${ damage } damage to ${ id } ${ name }. ${ heading }`
			);
		}
	}
}