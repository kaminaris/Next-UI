import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	valueHex: 2,
	bars: 3
};

export class LimitGaugeHandler implements HandlerInterface {
	eventId = 0x24;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const valueHex = event[indexes.valueHex] ?? '';
		const valueDec = parseInt(valueHex, 16);
		const bars = event[indexes.bars] ?? '';

		if (this.parser.debugMode) {
			console.log('Limit Break: ' + valueDec, bars);
		}
	}
}