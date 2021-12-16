import { Position }         from './Position';
import { NetworkEventData } from './NetworkEventData';

export interface UpdatePosition extends NetworkEventData {
	rotation: number;
	animationType: number;
	animationState: number;
	clientAnimationType: number;
	headPosition: number;
	position: Position;

	unk: string;
}