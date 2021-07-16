import { Combatant }        from 'src/app/Service/LogParser/Combatant';
import { Util }             from '../Util';
import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3,
	jobLevelData: 4,
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

export class NetworkStatusHandler implements HandlerInterface {

	constructor(public parser: LogParser) {
	}

	handle(event: string[]) {
		if (+event[0] !== 0x26) {
			return;
		}

		const id = event[indexes.id]?.toUpperCase() ?? '';
		const name = event[indexes.name] ?? '';

		const jobLevelData = event[indexes.jobLevelData] ?? '';

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

		const padded = jobLevelData.toString().padStart(8, '0');

console.log('jobLevelData', jobLevelData)
		const jobIdHex = padded.substr(6, 2).toUpperCase();
		const jobId = parseInt(jobIdHex, 16);
		const job = Util.jobEnumToJob(jobId);

		const level = parseInt(padded.substr(4, 2), 16);

		this.parser.updateCombatant(
			id, name, hp, hpMax, mana, manaMax, job, level
		);
	}
}