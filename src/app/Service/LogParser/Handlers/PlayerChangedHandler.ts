import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class PlayerChangedHandler implements HandlerInterface {
	indexes = {
		id: 2,
		name: 3
	}

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x02) {
			return;
		}

		const id = event[this.indexes.id]?.toUpperCase() ?? '';
		const name = event[this.indexes.name] ?? '';

		this.parser.playerId.next(id);
		this.parser.playerName.next(name);

		if (this.parser.debugMode) {
			console.log('Changed primary player to ' + name + '.')
		}
	}
}