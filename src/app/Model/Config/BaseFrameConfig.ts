import { BehaviorSubject, merge }                     from 'rxjs';
import { debounceTime }                               from 'rxjs/operators';
import { FramePositionInterface, FrameSizeInterface } from 'src/app/Interface/ConfigInterface';
import { SerializableConfig }                         from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }                    from 'src/app/Model/DistinctBehaviorSubject';

export class BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }

	get size(): FrameSizeInterface { return this.sizeSub.value; }
	set size(v: FrameSizeInterface) { this.sizeSub.next(v); }
	// @formatter:on

	positionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });
	sizeSub = new DistinctBehaviorSubject<FrameSizeInterface>({ width: 0, height: 0 });

	anyChanged = new BehaviorSubject<any>(this);
	//
	// constructor() {
	// 	this.init();
	// }
	//
	// protected init() {
	// 	merge(
	// 		this.positionSub,
	// 		this.sizeSub
	// 	)
	// 		.pipe(debounceTime(10))
	// 		.subscribe((v) => {
	// 			this.anyChanged.next(this);
	// 		});
	// }

	serialize(): any {
		return {
			position: this.position,
			size: this.size
		};
	}

	unserialize(value: any): void {
		this.position = Object.assign({}, value.position);
		this.size = Object.assign({}, value.size);
	}

}