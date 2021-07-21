import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class ChatEventHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x00) {
			return;
		}

		// so far we don't need that
		if (event[3].length > 0) {
			this.parser.tts.say(event[4]);
		}
	}
}