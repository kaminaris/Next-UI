import { BehaviorSubject } from 'rxjs';

export class DistinctBehaviorSubject<T> extends BehaviorSubject<T> {
	next(value: T) {
		if (value !== this.getValue()) {
			super.next(value);
		}
	}
}