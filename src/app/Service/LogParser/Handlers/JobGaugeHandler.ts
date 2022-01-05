import { ActService }       from 'src/app/Service/Act/ActService';
import { Util }             from 'src/app/Service/LogParser/Util';
import { HandlerInterface } from './HandlerInterface';

const reverseBytes = (s: string) => {
	return s.substr(6, 2) + s.substr(4, 2) + s.substr(2, 2) + s.substr(0, 2);
};

const zeroPad = (str: string, len = 2) => {
	return ('' + str).padStart(len, '0');
};

const littleEndian32bit = (str: string) => {
	const number = parseInt(str, 16);
	return [
		0xff & number,
		0xff & (number >> 8),
		0xff & (number >> 16),
		0xff & (number >> 24)
	];
};

const fields = {
	id: 2,
	dataBytes1: 3,
	dataBytes2: 4,
	dataBytes3: 5,
	dataBytes4: 6
};

export class JobGaugeHandler implements HandlerInterface {
	eventId = 0x1F;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const id = event[fields.id]?.toUpperCase() ?? '';

		// last byte is job
		const dataBytes1 = littleEndian32bit(event[fields.dataBytes1] ?? '');
		const dataBytes2 = littleEndian32bit(event[fields.dataBytes2] ?? '');
		const bytes = [...dataBytes1, ...dataBytes2];

		const jobId = bytes.shift();
		const job = Util.jobEnumToJob(jobId);

		const data = this.parseByteData(jobId, bytes);

		const dataBytes3 = zeroPad(event[fields.dataBytes3] ?? '');
		const dataBytes4 = zeroPad(event[fields.dataBytes4] ?? '');

		// if (this.act.parser.debugMode) {
		console.log(
			'Job gauge: ' +
			id + ':' +
			':' + dataBytes1 +
			':' + dataBytes2 +
			':' + dataBytes3 +
			':' + dataBytes4,
			data
		);
		// }
	}

	/**
	 * Total of 8 bytes
	 *
	 * jobId + 7 bytes
	 */
	parseByteData(jobId: number, bytes: number[]): any {
		switch (jobId) {
			case 0x17: // BRD
				return {
					songTimer: (bytes[0] << 8) | bytes[1],
					numSongStacks: bytes[2],
					soulVoiceValue: bytes[3],
					activeSong: bytes[4]
				};
			case 0x23: // RDM
				return {
					whiteGauge: bytes[0],
					blackGauge: bytes[1]
				};
			case 0x1C: // SCH
				return {
					numAetherflowStacks: bytes[2],
					fairyGaugeAmount: bytes[3],
					seraphTimer: (bytes[4] << 8) | bytes[5],
					dismissedFairy: bytes[6]
				};
			case 0x26: // DNC
				return {
					numFeathers: bytes[0],
					esprit: bytes[1],
					stepOrder1: bytes[2],
					stepOrder2: bytes[3],
					stepOrder3: bytes[4],
					stepOrder4: bytes[5],
					numCompleteSteps: bytes[6]
				};
		}

	}
}