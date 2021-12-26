import { Actor } from './Actor';

export type TargetUnit = 'target' | 'targetOfTarget' | 'focus' | 'hover';

export interface TargetChangedEvent {
	actorId: number;
	actorName: string;
	actor: Actor;
	unit: TargetUnit;
}