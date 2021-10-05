import { BarDirection }            from 'src/app/Interface/BarDirection';
import { BarStyle }                from 'src/app/Interface/BarStyle';
import { BaseConfig }              from 'src/app/Model/Config/BaseConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameManaBarConfig extends BaseConfig {
	// @formatter:off
	get show(): boolean { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }
	showSub = new DistinctBehaviorSubject<boolean>(true);

	get height(): string { return this.heightSub.value; }
	set height(v: string) { this.heightSub.next(v); }
	heightSub = new DistinctBehaviorSubject<string>('');

	get barColor(): string { return this.barColorSub.value; }
	set barColor(v: string) { this.barColorSub.next(v); }
	barColorSub = new DistinctBehaviorSubject<string>('');

	get barStyle(): BarStyle { return this.barStyleSub.value; }
	set barStyle(v: BarStyle) { this.barStyleSub.next(v); }
	barStyleSub = new DistinctBehaviorSubject<BarStyle>('horizontal');

	get barDirection(): BarDirection { return this.barDirectionSub.value; }
	set barDirection(v: BarDirection) { this.barDirectionSub.next(v); }
	barDirectionSub = new DistinctBehaviorSubject<BarDirection>('start');
	// @formatter:on
}