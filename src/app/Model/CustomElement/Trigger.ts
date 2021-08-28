import { Subscription }            from 'rxjs';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';
import { LogParser }               from 'src/app/Service/LogParser/LogParser';

export type TriggerType =
	'none'
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

export interface TriggerStatus {
	active: boolean;
	data?: any;
}

export class Trigger {
	type: TriggerType = 'none';
	triggerTimer = 0;
	unit = '';

	active = new DistinctBehaviorSubject<TriggerStatus>({ active: false });

	constructor(protected parser: LogParser) {}

	protected subs: Subscription[] = [];

	attach() {
		this.detach();
	}

	detach() {
		this.active.next({ active: false });

		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}