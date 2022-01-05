import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	class: 2,
	strength: 3,
	dexterity: 4,
	vitality: 5,
	intelligence: 6,
	mind: 7,
	piety: 8,
	attackPower: 9,
	directHit: 10,
	criticalHit: 11,
	attackMagicPotency: 12,
	healMagicPotency: 13,
	determination: 14,
	skillSpeed: 15,
	spellSpeed: 16,
	tenacity: 18
};

export class PlayerStatsHandler implements HandlerInterface {
	eventId = 0x0C;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const playerClass = event[indexes.class] ?? '';
		const strength = event[indexes.strength] ?? '';
		const dexterity = event[indexes.dexterity] ?? '';
		const vitality = event[indexes.vitality] ?? '';
		const intelligence = event[indexes.intelligence] ?? '';
		const mind = event[indexes.mind] ?? '';
		const piety = event[indexes.piety] ?? '';
		const attackPower = event[indexes.attackPower] ?? '';
		const directHit = event[indexes.directHit] ?? '';
		const criticalHit = event[indexes.criticalHit] ?? '';
		const attackMagicPotency = event[indexes.attackMagicPotency] ?? '';
		const healMagicPotency = event[indexes.healMagicPotency] ?? '';
		const determination = event[indexes.determination] ?? '';
		const skillSpeed = event[indexes.skillSpeed] ?? '';
		const spellSpeed = event[indexes.spellSpeed] ?? '';
		const tenacity = event[indexes.tenacity] ?? '';

		if (this.act.parser.debugMode) {
			console.log(
				'Player Stats: ' + event.slice(2, event.length - 1).join(':').replace(/\|/g, ':')
			);
		}
	}
}