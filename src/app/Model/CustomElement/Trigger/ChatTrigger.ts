import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

export class ChatTrigger extends Trigger {
	type: TriggerType = 'chat';
	hasTick = true;

	options = {
		speaker: '',
		message: ''
	};

	attach() {
		this.detach();

		this.subs.push(this.parser.eventDispatcher.chat.subscribe(ev => {

			if (this.options.speaker && ev.speaker.indexOf(this.options.speaker) < 0) {
				// speaker does not match
				this.active.next(false);
				return;
			}

			if (this.options.message && ev.message.indexOf(this.options.message) < 0) {
				// message does not match
				this.active.next(false);
				return;
			}
			console.log('EV', ev)
			this.active.next(true);
			this.data.next({
				sourceName: ev.speaker,
				message: ev.message,
			});
			// chat triggers must have timed trigger
			setTimeout(() => {
				this.active.next(false);
			}, this.triggerDuration);
		}));
	}
}