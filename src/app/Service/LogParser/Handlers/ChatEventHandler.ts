import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	type: 2,
	speaker: 3
};

export class ChatEventHandler implements HandlerInterface {
	eventId = 0x00;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const type = event[indexes.type] ?? '';
		const speaker = event[indexes.speaker] ?? '';
		const message = event.slice(4, -1).join('|');

		this.parser.eventDispatcher.chat.next({ type, speaker, message });

		// so far we don't need that
		if (speaker) {
			console.log(speaker);
			this.parser.tts.say(type, speaker, message);
		}
	}
}