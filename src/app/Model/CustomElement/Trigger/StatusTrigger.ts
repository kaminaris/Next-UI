import { Combatant }            from 'src/app/Model/Combatant';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
import { Status }               from 'src/app/Model/Status';
import { StatusEvent }          from 'src/app/Service/LogParser/Event/StatusEvent';
import { LogParser }            from 'src/app/Service/LogParser/LogParser';

export interface StatusTriggerOptions {
	statusId: number;
	statusName: string;
	unit: '' | keyof Pick<LogParser, 'target' | 'focus' | 'player' | 'targetOfTarget'>;
	targetName: string;
	multiTarget: boolean;
	appliedByPlayer: boolean;
}

export class StatusTrigger extends Trigger {
	type: TriggerType = 'status';

	options: StatusTriggerOptions = {
		statusId: 0,
		statusName: '',
		unit: '',
		targetName: '',
		multiTarget: false,
		appliedByPlayer: true
	};

	attach() {
		super.attach();

		if (this.options.multiTarget) {
			this.subs.push(this.parser.eventDispatcher.status.subscribe(this.multiSearch.bind(this)));
			return;
		}

		if (this.options.unit !== '') {
			const subject = this.parser[this.options.unit];
			this.targetSearch(subject.value);

			this.subs.push(subject.subscribe((c: Combatant) => {
				// target has changed
				this.detach();

				// check if aura is already present
				this.targetSearch(c);
				if (c) {
					this.subs.push(c.statusGained.subscribe((s) => this.targetSearch(c, s)));
					this.subs.push(c.statusUpdated.subscribe((s) => this.targetSearch(c, s)));
					this.subs.push(c.statusLost.subscribe((s) => this.targetSearch(c, s, true)));
					// this.subs.push(c.statuses.subscribe(() => this.targetSearch(c)));
				}
			}));
		}
	}

	targetSearch(c: Combatant, s?: Status, lost = false) {
		if (!c) {
			this.clearTick();
			this.active.next(false);
			return;
		}

		let status: Status;
		if (!s) {
			// We did not receive specific status, have to search for all of them
			status = c.getStatus(+this.options.statusId, this.options.statusName);
		} else {
			// check if status is the one we look for
			if (this.matchStatus(s)) {
				// Yep that's the one
				status = lost ? null : s;
			} else {
				// we don't care about auras that don't match
				return;
			}
		}

		if (!status) {
			this.clearTick();
			this.active.next(false);
			return;
		}

		this.active.next(true);

		// if status has duration, activate tick
		if (status.duration.value > 0) {
			this.duration = status.duration.value;
			this.startTick();
		}

		this.data.next({
			statusId: status.id,
			statusName: status.name,
			targetName: c.name,
			targetId: c.id,
			sourceId: status.appliedBy,
			duration: status.duration.value
		});

	}

	matchStatus(s: Status): boolean {
		if (this.options.statusId && s.id !== +this.options.statusId) {
			return false;
		}

		// noinspection RedundantIfStatementJS
		if (this.options.statusName && s.name.indexOf(this.options.statusName) < 0) {
			return false
		}

		return true;
	}

	// TODO: fix this
	multiSearch(ev: StatusEvent) {
		if (!this.matchStatus(ev.status)) {
			this.active.next(false);
			return;
		}

		if (this.options.targetName && ev.target.name.indexOf(this.options.targetName) < 0) {
			this.active.next(false);
			return;
		}

		if (ev.status.duration.value > 0) {
			this.duration = ev.status.duration.value;
			this.startTick();
		}

		this.active.next(true);
		this.data.next({
			statusId: ev.status.id,
			targetName: ev.target.name,
			targetId: ev.target.id
		});
	}
}