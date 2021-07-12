import { Combatant }        from 'src/app/Service/LogParser/Combatant';
import { Util }             from '../Util';
import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class AddedCombatantHandler implements HandlerInterface {
	indexes = {
		id: 2,
		name: 3,
		jobIdHex: 4,
		levelString: 5,
		ownerId: 6,
		worldId: 7,
		worldName: 8,
		npcNameId: 9,
		npcBaseId: 10,
		currentHp: 11,
		maxHpString: 14,
		currentMp: 13,
		maxMpString: 14,
		currentTp: 15,
		maxTp: 16,
		xString: 17,
		yString: 18,
		zString: 19,
		heading: 20
	};

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 3) {
			return;
		}
		const id = event[this.indexes.id]?.toUpperCase() ?? '';
		const name = event[this.indexes.name] ?? '';
		const jobIdHex = event[this.indexes.jobIdHex]?.toUpperCase() ?? '';
		const jobId = parseInt(jobIdHex, 16);
		const job = Util.jobEnumToJob(jobId);
		const levelString = event[this.indexes.levelString] ?? '';
		const level = parseFloat(levelString);
		const ownerId = event[this.indexes.ownerId]?.toUpperCase() ?? '';
		const worldId = event[this.indexes.worldId] ?? '';
		const worldName = event[this.indexes.worldName] ?? '';
		const npcNameId = event[this.indexes.npcNameId] ?? '';
		const npcBaseId = event[this.indexes.npcBaseId] ?? '';
		const hp = parseFloat(event[this.indexes.currentHp] ?? '');
		const hpMax = parseFloat(event[this.indexes.maxHpString] ?? '');
		const mana = parseFloat(event[this.indexes.currentMp] ?? '');
		const manaMax = parseFloat(event[this.indexes.maxMpString] ?? '');
		const tp = parseFloat(event[this.indexes.currentTp] ?? '');
		const maxTp = parseFloat(event[this.indexes.maxTp] ?? '');
		const xString = event[this.indexes.xString] ?? '';
		const x = parseFloat(xString);
		const yString = event[this.indexes.yString] ?? '';
		const y = parseFloat(yString);
		const zString = event[this.indexes.zString] ?? '';
		const z = parseFloat(zString);
		const heading = parseFloat(event[this.indexes.heading] ?? '');
		const timestamp = new Date(event[1] ?? '0');

		const combatants = this.parser.combatants.value;
		let combatant = combatants.find((c) => c.id === id);

		if (!combatant) {
			combatant = new Combatant();
			combatant.id = id;
			combatant.name = name;
			combatant.job = job;
			combatant.hp.next(hp);
			combatant.hpMax.next(hpMax);
			combatant.mana.next(mana);
			combatant.manaMax.next(manaMax);
			combatants.push(combatant);
			this.parser.combatants.next(combatants);
		} else {
			combatant.hp.next(hp);
			combatant.hpMax.next(hpMax);
			combatant.mana.next(mana);
			combatant.manaMax.next(manaMax);
		}

		if (this.parser.debugMode) {
			console.log(
				':Added new combatant ' + name +
				'.  Job: ' + job +
				' Level: ' + levelString +
				' HP: ' + hp +
				' MP: ' + mana +
				' Pos: (' + xString + ',' + yString + ',' + zString + ')',
				this.parser.combatants.value
			);
		}


	}
}