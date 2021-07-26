import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	type: 2,
	speaker: 3,
}

export class ChatEventHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x00) {
			return;
		}

		const type = event[indexes.type] ?? '';
		const speaker = event[indexes.speaker] ?? '';
		const message = event.slice(4, -1).join('|');

		// so far we don't need that
		if (speaker) {
			console.log(speaker);
			this.parser.tts.say(type, speaker, message);
		}
	}
}