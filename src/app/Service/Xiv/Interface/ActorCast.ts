import { Position }         from './Position';
import { NetworkEventData } from './NetworkEventData';

export interface ActorCast extends NetworkEventData {
	actionId: number;
	actionType: number;
	castTime: number;
	targetId: number;
	rotation: number;
	// TODO: No idea about this
	flag: number; // 1 = interruptible blinking cast bar

	position: Position;
}