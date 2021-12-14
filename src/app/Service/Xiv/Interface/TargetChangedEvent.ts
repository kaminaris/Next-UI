import { Actor } from './Actor';

export interface TargetChangedEvent {
	actorId: number;
	actorName: string;
	actor: Actor;
	targetType: string;
}