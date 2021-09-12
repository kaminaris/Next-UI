import { BehaviorSubject, Subscription } from 'rxjs';
import { DistinctBehaviorSubject }       from 'src/app/Model/DistinctBehaviorSubject';
import { LogParser }                     from 'src/app/Service/LogParser/LogParser';

export type TriggerType =
	'never-active'
	| 'always-active'
	| 'status'
	| 'chat'
	| 'hp'
	| 'mana'
	| 'floor-marker'
	| 'head-marker'
	| 'player-marker'
	| 'zone-changed'
	| 'combatant-defeated'
	| 'ability-hit'
	| 'ability-use'
	| 'ability-cancel'
	;

export interface TriggerData {
	duration?: number; // any trigger duration (if known)
	elapsed?: number; // any trigger elapsed seconds (if known)
	progress?: number; // any trigger percent value (for progress bars)

	sourceId?: string; // chat trigger speaker name
	sourceName?: string; // chat trigger speaker name

	targetId?: number;
	targetName?: string;

	statusId?: number;
	statusName?: string;

	message?: string; // chat message or event message
}

export class Trigger {
	type: TriggerType = null;
	triggerDuration = 5000;
	triggerTimer = 0;

	tickPeriod = 100;
	hasTick = false;
	tickInterval: number = null;

	options: any;

	active = new DistinctBehaviorSubject<boolean>(false);
	data = new DistinctBehaviorSubject<TriggerData>({});
	tick = new BehaviorSubject<number>(0);

	activatedAt = 0;

	constructor(protected parser: LogParser) {
		this.active.subscribe((a: boolean) => {
			this.activatedAt = a ? new Date().valueOf() : null;

			if (this.hasTick) {
				if (this.tickInterval) {
					window.clearInterval(this.tickInterval);
				}

				this.tickInterval = window.setInterval(() => {
					this.triggerTimer = (new Date().valueOf() - this.activatedAt) / 1000;
					console.log(this.triggerTimer, new Date().valueOf(), this.activatedAt, 'tck')
					if (this.triggerTimer >= this.triggerDuration) {
						window.clearInterval(this.tickInterval);
					}
					this.tick.next(this.triggerTimer);
				}, this.tickPeriod);
			}
		});
	}

	protected subs: Subscription[] = [];

	attach() {
		this.detach();
	}

	detach() {
		this.active.next(false);

		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	/**
	 * Generic trigger serialize data, override if needed
	 */
	serialize() {
		return {
			type: this.type,
			hasTick: this.hasTick,
			tickPeriod: this.tickPeriod,
			options: Object.assign({}, this.options)
		};
	}

	/**
	 * Generic trigger unserialize data, override if needed
	 */
	unserialize(data: any) {
		this.hasTick = data.hasTick;
		this.tickPeriod = data.tickPeriod;
		this.options = Object.assign({}, data.options);
	}
}