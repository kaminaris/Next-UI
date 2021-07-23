import { Subject }                 from 'rxjs';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { PlayerFrameConfig }       from 'src/app/Model/Config/PlayerFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class PartyFrameConfig extends PlayerFrameConfig implements SerializableConfig {
	// @formatter:off
	get unitFrameHeight(): string { return this.unitFrameHeightSub.value; }
	set unitFrameHeight(v: string) { this.unitFrameHeightSub.next(v); }

	get unitFrameMargin(): number { return this.unitFrameMarginSub.value; }
	set unitFrameMargin(v: number) { this.unitFrameMarginSub.next(v); }
	// @formatter:on

	unitFrameHeightSub = new DistinctBehaviorSubject<string>('');
	unitFrameMarginSub = new DistinctBehaviorSubject<number>(1);

	getSubjects(): Subject<any>[] {
		return [
			...super.getSubjects(),
			this.unitFrameHeightSub,
			this.unitFrameMarginSub,
		];
	}

	serialize(): any {
		const obj = super.serialize();
		obj.unitFrameHeight = this.unitFrameHeight;
		obj.unitFrameMargin = this.unitFrameMargin;
		return obj;
	}

	unserialize(value: Partial<PartyFrameConfig>) {
		super.unserialize(value);
		this.unitFrameHeight = value.unitFrameHeight;
		this.unitFrameMargin = value.unitFrameMargin;
	}
}