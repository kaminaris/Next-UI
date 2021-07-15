import { LogParser }        from '../LogParser';
import { HandlerInterface } from './HandlerInterface';

export class ChatEventHandler implements HandlerInterface {

	constructor(public parser: LogParser) {
		// console.log('do we have voices?')
		// window.speechSynthesis.onvoiceschanged = () => {
		// 	console.log('VOICES', window.speechSynthesis.getVoices())
		// }
		// window.speechSynthesis.getVoices()
		// console.log('do we?', window.speechSynthesis.getVoices())
	}

	handle(event: string[]) {
		if (+event[0] !== 0) {
			return;
		}

		// so far we don't need that
		if (event[3].length > 0) {
			this.parser.tts.say(event[4]);
		}
	}
}