import { Position }         from './Position';
import { NetworkEventData } from './NetworkEventData';

export interface ActorMove extends NetworkEventData {
	headRotation: number;
	rotation: number;
	animationType: number;
	animationState: number;
	animationSpeed: number;
	unknownRotation: number;
	position: Position;
}