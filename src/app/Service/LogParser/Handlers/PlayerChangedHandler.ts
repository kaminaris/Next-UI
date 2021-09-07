import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3
};

export class PlayerChangedHandler implements HandlerInterface {
	eventId = 0x02;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {

		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		this.parser.registerPlayer(name, id);

		if (this.parser.debugMode) {
			console.log('Changed primary player to ' + name + '.');
		}

		return true;
	}
}