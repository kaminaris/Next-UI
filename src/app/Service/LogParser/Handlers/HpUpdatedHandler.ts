import { Combatant }        from 'src/app/Service/LogParser/Combatant';
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

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x27) {
			return;
		}
		
		const id = event[indexes.id]?.toUpperCase() ?? '';
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

		const combatants = this.parser.combatants.value;

		const combatant = combatants.find(c => c.id === id);
		if (!combatant) {
			// console.log('hpwot?', id, name);
			const combatant = new Combatant();
			combatant.id = id;
			combatant.name = name;
			combatant.hp.next(hp);
			combatant.hpMax.next(hpMax);
			if (hpMax === 10000 ) console.log('WTFFFFFFFFFFFFFFF3')
			combatant.mana.next(mana);
			combatant.manaMax.next(manaMax);

			combatants.push(combatant);
			this.parser.combatants.next(combatants);
			return;
		}

		if (hp !== combatant.hp.value) {
			combatant.hp.next(hp);
		}

		combatant.hpMax.next(hpMax);
		if (hpMax === 10000 ) console.log('WTFFFFFFFFFFFFFFF4')

		combatant.mana.next(mana);
		combatant.manaMax.next(manaMax);

		if (this.parser.debugMode) {
			// console.log(`HP updated: ${name} (${id}): ${hp} / ${hpMax}`);
		}
	}
}