import { BaseConfig }              from 'src/app/Model/Config/BaseConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameDistanceConfig extends BaseConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	get threshold(): number { return this.thresholdSub.value; }
	set threshold(v: number) { this.thresholdSub.next(v); }
	thresholdSub = new DistinctBehaviorSubject<number>(30);

	get opacity(): number { return this.opacitySub.value; }
	set opacity(v: number) { this.opacitySub.next(v); }
	opacitySub = new DistinctBehaviorSubject<number>(50);
	// @formatter:on
}