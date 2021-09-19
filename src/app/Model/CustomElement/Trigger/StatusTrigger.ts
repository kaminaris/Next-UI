import { Combatant }            from 'src/app/Model/Combatant';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
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

				this.targetSearch(c);
				if (c) {
					this.subs.push(c.auras.subscribe(() => this.targetSearch(c)));
				}
			}));
		}
	}

	targetSearch(c: Combatant) {
		if (!c) {
			this.clearTick();
			this.active.next(false);
			return;
		}

		let aura = c.getAura(this.options.statusId, this.options.statusName);
		if (!aura) {
			this.clearTick();
			this.active.next(false);
			return;
		}

		this.active.next(true);

		// if aura has duration, activate tick
		if (aura.duration.value > 0) {
			this.duration = aura.duration.value;
			this.startTick();
		}

		this.data.next({
			statusId: aura.id,
			statusName: aura.name,
			targetName: c.name,
			targetId: c.id,
			sourceId: aura.appliedBy,
			duration: aura.duration.value
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
			targetId: ev.targetId
		});
	}
}