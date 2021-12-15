import { NetworkEventData } from 'src/app/Service/Xiv/Interface/NetworkEventData';

export interface StatusEntry {
	index: number; // which position do i display this
	id: number;
	duration: number;
	sourceActorId: number;
}

export interface EffectResult extends NetworkEventData {
	globalSequence: number;
	relatedActionSequence: number;
	actorId: number;
	currentHp: number;
	maxHp: number;
	currentMp: number;

	damageShield: number;
	effectCount: number;

	statusEntries: StatusEntry[];
}