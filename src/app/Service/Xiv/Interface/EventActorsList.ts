import { EventResponse } from './EventResponse';
import { Actor }         from './Actor';

export interface EventActorsList extends EventResponse {
	data: Actor[]
}