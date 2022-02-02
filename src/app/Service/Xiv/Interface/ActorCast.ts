import { Position } from './Position';

export interface ActorCast {
	actionId: number;
	actionType: number;
	castTime: number;
	targetId: number;
	rotation: number;
	// TODO: No idea about this
	flag: number; // 1 = interruptible blinking cast bar

	position: Position;
}