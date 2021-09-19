import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

/**
 * Trigger that is always active
 */
export class AlwaysActiveTrigger extends Trigger {
	type: TriggerType = 'always-active';

	attach() {
		super.attach();
		this.active.next(true);
	}
}