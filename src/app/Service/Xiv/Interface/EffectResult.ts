export interface StatusEntry {
	index: number; // which position do i display this
	id: number;
	duration: number;
	sourceActorId: number;
}

export interface EffectResult {
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