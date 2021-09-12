import { Injectable }   from '@angular/core';
import { Subject }      from 'rxjs';
import { AbilityEvent } from 'src/app/Service/LogParser/Event/AbilityEvent';
import { ChatEvent }    from './Event/ChatEvent';
import { StatusEvent }  from './Event/StatusEvent';

@Injectable({ providedIn: 'root' })
export class EventDispatcher {
	chat = new Subject<ChatEvent>();
	status = new Subject<StatusEvent>();
	ability = new Subject<AbilityEvent>();
}