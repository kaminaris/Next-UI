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

	sourceId?: number;
	sourceName?: string;

	targetId?: number;
	targetName?: string;

	statusId?: number;
	statusName?: string;

	abilityId?: number;
	abilityName?: string;

	message?: string; // chat message or event message
}

export class Trigger {
	type: TriggerType = null;
	duration = 5;
	elapsed = 0;

	tickPeriod = 100;
	hasTick = false;
	deactivateOnTickEnd = false;
	tickInterval: number = null;
	activeSub: Subscription = null;

	options: any;

	active = new DistinctBehaviorSubject<boolean>(false);
	data = new DistinctBehaviorSubject<TriggerData>({});
	tick = new BehaviorSubject<number>(0);

	activatedAt = 0;

	constructor(protected parser: LogParser) {}

	protected subs: Subscription[] = [];

	attach() {
		this.detach();

		this.activeSub = this.active.subscribe((a: boolean) => {
			this.activatedAt = a ? new Date().valueOf() : null;

			if (this.hasTick) {
				this.clearTick();

				if (a) {
					this.startTick();
				}
			}
		});
	}

	detach() {
		this.activeSub?.unsubscribe();
		this.active.next(false);

		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	clearTick() {
		if (this.tickInterval) {
			window.clearInterval(this.tickInterval);
		}
	}

	startTick() {
		this.tickInterval = window.setInterval(() => {
			this.elapsed = (new Date().valueOf() - this.activatedAt) / 1000;

			if (this.elapsed >= this.duration) {
				this.elapsed = 0;
				this.clearTick();

				if (this.deactivateOnTickEnd) {
					this.active.next(false);

				}
			}
			this.tick.next(this.elapsed);
		}, this.tickPeriod);
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