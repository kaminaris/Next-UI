import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class ChatEventHandler implements HandlerInterface {

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0) {
			return;
		}

		// so far we don't need that
	}
}