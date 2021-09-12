import { Combatant }            from 'src/app/Model/Combatant';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
import { StatusEvent }          from 'src/app/Service/LogParser/Event/StatusEvent';

export class StatusTrigger extends Trigger {
	type: TriggerType = 'status';

	options = {
		statusId: 0,
		statusName: '',
		targetName: '',
		appliedByPlayer: true,
	};

	attach() {
		this.detach();

		if (this.options.targetName === 'target') {
			const c = this.parser.target.value;
			this.targetSearch(c);
			this.subs.push(this.parser.target.subscribe(() => {
				// target has changed
				this.detach();

				this.targetSearch(c);
				this.subs.push(c.auras.subscribe(() => this.targetSearch(c)));
			}));
		} else {
			this.subs.push(this.parser.eventDispatcher.status.subscribe(this.multiSearch.bind(this)));
		}
	}

	targetSearch(c: Combatant) {
		if (!c) {
			this.active.next(false);
			return;
		}

		let aura = c.getAura(this.options.statusId, this.options.statusName);
		if (!aura) {
			this.active.next(false);
			return;
		}

		this.active.next(true);
		this.data.next({

		});
	}

	// TODO: fix this
	multiSearch(ev: StatusEvent) {
		if (this.options.statusId && ev.statusId !== this.options.statusId) {
			this.active.next(false);
			return;
		}

		if (this.options.statusName && ev.statusName.indexOf(this.options.statusName) < 0) {
			this.active.next(false);
			return;
		}

		if (this.options.targetName && ev.targetName.indexOf(this.options.targetName) < 0) {
			this.active.next(false);
			return;
		}

		this.active.next(true);
		this.data.next({
			statusId: ev.statusId,
			targetName: ev.targetName,
			targetId: ev.targetId,
		})
	}
}