import { BehaviorSubject, merge }  from 'rxjs';
import { debounceTime }            from 'rxjs/operators';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class TTSConfig implements SerializableConfig {
	// @formatter:off
	get enabled() { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	// @formatter:on

	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	anyChanged = new BehaviorSubject<TTSConfig>(null);

	constructor() {
		this.init();
	}

	init() {
		merge(
			this.enabledSub
		)
			.pipe(debounceTime(10))
			.subscribe((v) => {
				this.anyChanged.next(this);
			});
	}

	unserialize(value: any) {
		this.enabled = value.enabled;
	}

	serialize() {
		return {
			enabled: this.enabled
		};
	}

}