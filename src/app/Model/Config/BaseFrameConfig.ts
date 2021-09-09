import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { getSubjects }                from 'src/app/Function/getSubjects';
import { serialize }                  from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';
import { FramePositionInterface }     from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }         from 'src/app/Interface/FrameSizeInterface';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get size(): FrameSizeInterface { return this.sizeSub.value; }
	set size(v: FrameSizeInterface) { this.sizeSub.next(v); }
	sizeSub = new DistinctBehaviorSubject<FrameSizeInterface>({ width: 0, height: 0 });
	// @formatter:on

	anyChangedCache: Observable<any>;

	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return getSubjects(this);
	}

	serialize(): any {
		return serialize(this);
	}

	unserialize(value: any): void {
		unserialize(this, value);
	}
}