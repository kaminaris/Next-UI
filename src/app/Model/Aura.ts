import { BehaviorSubject } from 'rxjs';

export class Aura {
	id = 0;
	name = '';
	appliedBy = '';
	stacks = new BehaviorSubject<number>(0);
	isBuff = true;
	gainedAt = new BehaviorSubject<Date>(null);
	expiresAt = new BehaviorSubject<Date>(null);
	duration = new BehaviorSubject<number>(0);
	priority = 100;

}