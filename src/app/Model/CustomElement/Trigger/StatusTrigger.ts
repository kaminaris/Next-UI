import { Trigger } from 'src/app/Model/CustomElement/Trigger';

export class StatusTrigger extends Trigger {

	options = {
		statusId: 0,
		statusName: '',
		targetId: '',
		targetName: ''
	};

	attach() {
		this.detach();

		this.subs.push(this.parser.eventDispatcher.status.subscribe(ev => {
			if (this.options.statusId && ev.statusId !== this.options.statusId) {
				return;
			}

			if (this.options.statusName && ev.statusName.indexOf(this.options.statusName) < 0) {
				return;
			}

			if (this.options.targetId && ev.targetId.indexOf(this.options.targetId) < 0) {
				return;
			}

			if (this.options.targetName && ev.targetName.indexOf(this.options.targetName) < 0) {
				return;
			}

			this.active.next({ active: ev.type === 'gained', data: ev });
		}));
	}
}