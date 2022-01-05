import { ActService }       from 'src/app/Service/Act/ActService';
import { Util }             from '../Util';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
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
	hpMaxString: 12,
	currentMp: 13,
	maxMpString: 14,
	currentTp: 15,
	maxTp: 16,
	xString: 17,
	yString: 18,
	zString: 19,
	heading: 20
};

export class AddedCombatantHandler implements HandlerInterface {
	eventId = 0x03;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';
		const jobIdHex = event[indexes.jobIdHex]?.toUpperCase() ?? '';
		const jobId = parseInt(jobIdHex, 16);
		const job = Util.jobEnumToJob(jobId);
		const level = parseInt(event[indexes.levelString] ?? '', 16);
		const ownerId = event[indexes.ownerId]?.toUpperCase() ?? '';
		const worldId = event[indexes.worldId] ?? '';
		const worldName = event[indexes.worldName] ?? '';
		const npcNameId = event[indexes.npcNameId] ?? '';
		const npcBaseId = event[indexes.npcBaseId] ?? '';
		const hp = parseFloat(event[indexes.currentHp] ?? '');
		const hpMax = parseFloat(event[indexes.hpMaxString] ?? '');
		const mana = parseFloat(event[indexes.currentMp] ?? '');
		const manaMax = parseFloat(event[indexes.maxMpString] ?? '');
		const tp = parseFloat(event[indexes.currentTp] ?? '');
		const maxTp = parseFloat(event[indexes.maxTp] ?? '');
		const x = parseFloat(event[indexes.xString] ?? '');
		const y = parseFloat(event[indexes.yString] ?? '');
		const z = parseFloat(event[indexes.zString] ?? '');
		const heading = parseFloat(event[indexes.heading] ?? '');
		const timestamp = new Date(event[1] ?? '0');

		this.act.parser.updateCombatant(
			id, name, hp, hpMax, mana, manaMax, x, y, z, job, level, null, 'added-combatant'
		);

		if (this.act.parser.debugMode) {
			console.log(
				':Added new combatant ' + name +
				'.  Job: ' + job +
				' Level: ' + level +
				' HP: ' + hp +
				' MP: ' + mana +
				' Pos: (' + x + ',' + y + ',' + z + ')',
				this.act.parser.combatants.value
			);
		}
	}
}