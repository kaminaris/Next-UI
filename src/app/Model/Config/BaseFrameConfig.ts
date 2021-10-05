import { FramePositionInterface }     from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }         from 'src/app/Interface/FrameSizeInterface';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { BaseConfig }                 from 'src/app/Model/Config/BaseConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class BaseFrameConfig extends BaseConfig implements SerializableConfig {
	// @formatter:off
	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get size(): FrameSizeInterface { return this.sizeSub.value; }
	set size(v: FrameSizeInterface) { this.sizeSub.next(v); }
	sizeSub = new DistinctBehaviorSubject<FrameSizeInterface>({ width: 0, height: 0 });
	// @formatter:on
}