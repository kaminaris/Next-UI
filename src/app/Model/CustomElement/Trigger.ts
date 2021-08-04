import { Subject, Subscription } from 'rxjs';
import { LogParser }             from 'src/app/Service/LogParser/LogParser';

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

export class Trigger {
	type: TriggerType = 'none';
	triggerTimer = 0;
	unit = '';

	activate = new Subject<any>();
	deactivate = new Subject<any>();

	constructor(protected parser: LogParser) {}

	protected subs: Subscription[] = [];

	attach() {
		this.detach();

		switch (this.type) {
			case 'none':
				break;
			case 'chat':

			break;
		}
	}

	detach() {
		this.deactivate.next(true);

		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}