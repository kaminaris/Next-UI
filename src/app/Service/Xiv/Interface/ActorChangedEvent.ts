import { Actor } from './Actor';

export interface ActorChangedEvent {
	actorId: number;
	removed: boolean;
	actor: Actor;
}