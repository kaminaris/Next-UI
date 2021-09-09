import { Subject }                 from 'rxjs';
import { SorterType }              from 'src/app/Interface/CombatantSorterInterface';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { PlayerFrameConfig }       from 'src/app/Model/Config/PlayerFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class PartyFrameConfig extends PlayerFrameConfig implements SerializableConfig {
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
}