import { Trigger } from 'src/app/Model/CustomElement/Trigger';

/**
 * Trigger that is always active
 */
export class AlwaysActiveTrigger extends Trigger {

	attach() {
		this.detach();
		this.activate.next(true);
	}
}