import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3
};

export class PlayerChangedHandler implements HandlerInterface {
	eventId = 0x02;

	constructor(public act: ActService) {}

	handle(event: string[]) {

		const id = parseInt(event[indexes.id] || '0', 16);
		const name = event[indexes.name] ?? '';

		this.act.parser.registerPlayer(name, id);

		if (this.act.parser.debugMode) {
			console.log('Changed primary player to ' + name + '.');
		}

		return true;
	}
}