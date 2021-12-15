import { NetworkEventData } from './NetworkEventData';

export interface EffectResultBasic extends NetworkEventData {
	unknown1: number;
	relatedActionSequence: number;
	actorId: number;
	currentHp: number;
	unknown2: number;
	unknown3: number;
	unknown4: number;
}