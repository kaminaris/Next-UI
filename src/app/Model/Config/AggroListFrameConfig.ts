import { Subject }                 from 'rxjs';
import { SorterType }              from 'src/app/Interface/CombatantSorterInterface';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { PlayerFrameConfig }       from 'src/app/Model/Config/PlayerFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class AggroListFrameConfig extends PlayerFrameConfig implements SerializableConfig {
	// @formatter:off
	get unitFrameHeight(): string { return this.unitFrameHeightSub.value; }
	set unitFrameHeight(v: string) { this.unitFrameHeightSub.next(v); }

	get unitFrameMargin(): number { return this.unitFrameMarginSub.value; }
	set unitFrameMargin(v: number) { this.unitFrameMarginSub.next(v); }

	get sorter(): SorterType { return this.sorterSub.value; }
	set sorter(v: SorterType) { this.sorterSub.next(v); }
	// @formatter:on

	unitFrameHeightSub = new DistinctBehaviorSubject<string>('');
	unitFrameMarginSub = new DistinctBehaviorSubject<number>(1);
	sorterSub = new DistinctBehaviorSubject<SorterType>(null);

	getSubjects(): Subject<any>[] {
		return [
			...super.getSubjects(),
			this.unitFrameHeightSub,
			this.unitFrameMarginSub,
			this.sorterSub,
		];
	}

	serialize(): any {
		const obj = super.serialize();
		obj.unitFrameHeight = this.unitFrameHeight;
		obj.unitFrameMargin = this.unitFrameMargin;
		obj.sorter = this.sorter;
		return obj;
	}

	unserialize(value: Partial<AggroListFrameConfig>) {
		super.unserialize(value);
		this.unitFrameHeight = value.unitFrameHeight;
		this.unitFrameMargin = value.unitFrameMargin;
		this.sorter = value.sorter;
	}
}