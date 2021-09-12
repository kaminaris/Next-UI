export type AbilityEventType = 'use' | 'cancel' | 'hit';

export interface AbilityEvent {
	type: AbilityEventType;
	sourceId: number;
	sourceName: string;
	abilityName: string;
	abilityId: number;
	targetId: number;
	targetName: string;
	duration: number;
}