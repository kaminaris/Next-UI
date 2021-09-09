import { Subject }                 from 'rxjs';
import { SorterType }              from 'src/app/Interface/CombatantSorterInterface';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { PlayerFrameConfig }       from 'src/app/Model/Config/PlayerFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class AggroListFrameConfig extends PlayerFrameConfig implements SerializableConfig {
	// @formatter:off
	get unitFrameHeight(): string { return this.unitFrameHeightSub.value; }
	set unitFrameHeight(v: string) { this.unitFrameHeightSub.next(v); }
	unitFrameHeightSub = new DistinctBehaviorSubject<string>('');

	get unitFrameMargin(): number { return this.unitFrameMarginSub.value; }
	set unitFrameMargin(v: number) { this.unitFrameMarginSub.next(v); }
	unitFrameMarginSub = new DistinctBehaviorSubject<number>(1);

	get sorter(): SorterType { return this.sorterSub.value; }
	set sorter(v: SorterType) { this.sorterSub.next(v); }
	sorterSub = new DistinctBehaviorSubject<SorterType>(null);
	// @formatter:on
}