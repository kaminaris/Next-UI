import { BehaviorSubject, merge }  from 'rxjs';
import { debounceTime }            from 'rxjs/operators';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }        from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';
import { BaseFrameConfig }         from './BaseFrameConfig';

export class ControlFrameConfig extends BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	// @formatter:on

	constructor() {
		super();
		this.init();
	}

	protected init() {
		merge(
			this.positionSub,
			this.sizeSub
		)
			.pipe(debounceTime(10))
			.subscribe((v) => {
				this.anyChanged.next(this);
			});
	}
}