import { Position } from './Position';

export interface UpdatePosition {
	rotation: number;
	animationType: number;
	animationState: number;
	clientAnimationType: number;
	headPosition: number;
	position: Position;

	unk: string;
}