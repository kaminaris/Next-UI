import { Combatant } from 'src/app/Model/Combatant';
import { Status }    from 'src/app/Model/Status';

export type StatusEventType = 'gained' | 'lost';

export interface StatusEvent {
	type: StatusEventType;
	status: Status,
	target: Combatant;
}