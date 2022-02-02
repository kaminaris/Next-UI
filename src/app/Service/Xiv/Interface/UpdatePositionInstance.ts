import { Position } from './Position';

export interface UpdatePositionInstance {
	rotation: number;
	interpolateRotation: number;
	flags: number;
	position: Position;
	interpolatePosition: Position;
	unknown: number;

}