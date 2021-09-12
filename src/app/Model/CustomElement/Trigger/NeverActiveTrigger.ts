import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

/**
 * Trigger that is never active
 */
export class NeverActiveTrigger extends Trigger {
	type: TriggerType = 'never-active';

	attach() {
		this.detach();
		this.active.next(false);
	}
}