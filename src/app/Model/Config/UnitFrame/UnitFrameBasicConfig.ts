import { BaseFrameConfig }         from 'src/app/Model/Config/BaseFrameConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameBasicConfig extends BaseFrameConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(true);

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }
	backgroundColorSub = new DistinctBehaviorSubject<string>('');

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }
	borderWidthSub = new DistinctBehaviorSubject<number>(1);

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	borderColorSub = new DistinctBehaviorSubject<string>('');
	// @formatter:on
}