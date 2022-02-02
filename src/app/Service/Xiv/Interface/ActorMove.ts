import { Position } from './Position';

export interface ActorMove {
	headRotation: number;
	rotation: number;
	animationType: number;
	animationState: number;
	animationSpeed: number;
	unknownRotation: number;
	position: Position;
}