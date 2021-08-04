import { Trigger } from 'src/app/Model/CustomElement/Trigger';

export class ChatTrigger extends Trigger {

	options = {
		speaker: '',
		message: ''
	};

	attach() {
		this.detach();

		this.subs.push(this.parser.eventDispatcher.chat.subscribe(ev => {
			if (this.options.speaker && ev.speaker.indexOf(this.options.speaker) < 0) {
				// speaker does not match
				return;
			}

			if (this.options.message && ev.message.indexOf(this.options.message) < 0) {
				// message does not match
				return;
			}

			this.activate.next(ev);
			// chat triggers must have timed trigger
			setTimeout(() => {
				this.deactivate.next(ev);
			}, this.triggerTimer || 1000);
		}));
	}
}