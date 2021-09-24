import { Injectable }        from '@angular/core';
import { Subject }           from 'rxjs';
import { PlayerMarkerEvent } from './Event/PlayerMarkerEvent';
import { AbilityEvent }      from './Event/AbilityEvent';
import { HeadMarkerEvent }   from './Event/HeadMarkerEvent';
import { ChatEvent }         from './Event/ChatEvent';
import { StatusEvent }       from './Event/StatusEvent';

@Injectable({ providedIn: 'root' })
export class EventDispatcher {
	chat = new Subject<ChatEvent>();
	status = new Subject<StatusEvent>();
	ability = new Subject<AbilityEvent>();
	headMarker = new Subject<HeadMarkerEvent>();
	playerMarker = new Subject<PlayerMarkerEvent>();
}