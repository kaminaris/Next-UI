import { Subject }                 from 'rxjs';
import { SorterType }              from 'src/app/Interface/CombatantSorterInterface';
import { LayoutDirection }         from 'src/app/Interface/LayoutDirection';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { PlayerFrameConfig }       from 'src/app/Model/Config/PlayerFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class PartyFrameConfig extends PlayerFrameConfig implements SerializableConfig {
	// @formatter:off
	get unitFrameHeight(): string { return this.unitFrameHeightSub.value; }
	set unitFrameHeight(v: string) { this.unitFrameHeightSub.next(v); }
	unitFrameHeightSub = new DistinctBehaviorSubject<string>('');

	get unitFrameWidth(): string { return this.unitFrameWidthSub.value; }
	set unitFrameWidth(v: string) { this.unitFrameWidthSub.next(v); }
	unitFrameWidthSub = new DistinctBehaviorSubject<string>('');

	get direction(): LayoutDirection { return this.directionSub.value; }
	set direction(v: LayoutDirection) { this.directionSub.next(v); }
	directionSub = new DistinctBehaviorSubject<LayoutDirection>('vertical');

	get wrap(): boolean { return this.wrapSub.value; }
	set wrap(v: boolean) { this.wrapSub.next(v); }
	wrapSub = new DistinctBehaviorSubject<boolean>(false);

	get unitFrameMargin(): number { return this.unitFrameMarginSub.value; }
	set unitFrameMargin(v: number) { this.unitFrameMarginSub.next(v); }
	unitFrameMarginSub = new DistinctBehaviorSubject<number>(1);

	get sorter(): SorterType { return this.sorterSub.value; }
	set sorter(v: SorterType) { this.sorterSub.next(v); }
	sorterSub = new DistinctBehaviorSubject<SorterType>('default');
	// @formatter:on

}