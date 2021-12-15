import { NetworkEventData } from './NetworkEventData';

export interface UpdateHpMpTp extends NetworkEventData {
	currentHp: number;
	currentMp: number;
	unknown1: number;
}