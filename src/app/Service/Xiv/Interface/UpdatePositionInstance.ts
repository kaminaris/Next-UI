import { Position }         from './Position';
import { NetworkEventData } from './NetworkEventData';

export interface UpdatePositionInstance extends NetworkEventData {
	rotation: number;
	interpolateRotation: number;
	flags: number;
	position: Position;
	interpolatePosition: Position;
	unknown: number;


}