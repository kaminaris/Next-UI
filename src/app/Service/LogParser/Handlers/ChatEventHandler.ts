import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	type: 2,
	speaker: 3
};

export class ChatEventHandler implements HandlerInterface {
	eventId = 0x00;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const type = event[indexes.type] ?? '';
		const speaker = event[indexes.speaker] ?? '';
		const message = event.slice(4, -1).join('|');

		this.act.parser.chatMessage(type, speaker, message);
	}
}