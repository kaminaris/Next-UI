import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const fields = {
	valueHex: 2,
	bars: 3
};

export class LimitGaugeHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x24) {
			return;
		}

		const valueHex = event[fields.valueHex] ?? '';
		const valueDec = parseInt(valueHex, 16);
		const bars = event[fields.bars] ?? '';

		if (this.parser.debugMode) {
			console.log('Limit Break: ' + valueDec, bars);
		}
	}
}