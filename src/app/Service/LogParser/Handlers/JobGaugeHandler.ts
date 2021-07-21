import { Brd }              from 'src/app/Service/LogParser/Handlers/JobGauge/Brd';
import { Util }             from 'src/app/Service/LogParser/Util';
import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const reverseBytes = (s: string) => {
	return s.substr(6, 2) + s.substr(4, 2) + s.substr(2, 2) + s.substr(0, 2);
};

const zeroPad = (str: string, len = 2) => {
	return ('' + str).padStart(len, '0');
};

const fields = {
	id: 2,
	dataBytes1: 3,
	dataBytes2: 4,
	dataBytes3: 5,
	dataBytes4: 6
};

export class JobGaugeHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x1F) {
			return;
		}

		const id = event[fields.id]?.toUpperCase() ?? '';

		// last byte is job
		const dataBytes1 = reverseBytes(zeroPad(event[fields.dataBytes1] ?? '', 8));
		const dataBytes2 = reverseBytes(zeroPad(event[fields.dataBytes2] ?? '', 8));

		const jobId = parseInt(dataBytes1.substr(0, 2), 16);
		const job = Util.jobEnumToJob(jobId);

		let data: any = {};
		switch (jobId) {
			// @formatter: off
			case 0x17:
				data = Brd.parse(dataBytes1, dataBytes2);
				break;
			// @formatter: on
		}

		const dataBytes3 = zeroPad(event[fields.dataBytes3] ?? '');
		const dataBytes4 = zeroPad(event[fields.dataBytes4] ?? '');


		// if (this.parser.debugMode) {
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
}