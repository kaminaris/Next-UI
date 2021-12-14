import { Position }         from './Position';
import { NetworkEventData } from './NetworkEventData';

export interface ActorSetPos extends NetworkEventData {
	r16: number;
	waitForLoad: number;
	unknown1: number;
	unknown2: number;
	unknown3: number;

	position: Position;
}