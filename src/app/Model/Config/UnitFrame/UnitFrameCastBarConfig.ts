import { Anchor }                  from 'src/app/Interface/Anchor';
import { BarDirection }            from 'src/app/Interface/BarDirection';
import { BarStyle }                from 'src/app/Interface/BarStyle';
import { FramePositionInterface }  from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }      from 'src/app/Interface/FrameSizeInterface';
import { BaseConfig }              from 'src/app/Model/Config/BaseConfig';
import { TextWidgetConfig }        from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameCastBarConfig extends BaseConfig {
	// @formatter:off
	get show(): boolean { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }
	showSub = new DistinctBehaviorSubject<boolean>(true);

	get showIcon(): boolean { return this.showIconSub.value; }
	set showIcon(v: boolean) { this.showIconSub.next(v); }
	showIconSub = new DistinctBehaviorSubject<boolean>(true);

	get showSlideCast(): boolean { return this.showSlideCastSub.value; }
	set showSlideCast(v: boolean) { this.showSlideCastSub.next(v); }
	showSlideCastSub = new DistinctBehaviorSubject<boolean>(true);

	get anchor(): Anchor { return this.anchorSub.value; }
	set anchor(v: Anchor) { this.anchorSub.next(v); }
	anchorSub: DistinctBehaviorSubject<Anchor> = new DistinctBehaviorSubject<Anchor>('topLeft');

	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub: DistinctBehaviorSubject<FramePositionInterface> =
		new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get size(): FrameSizeInterface { return this.sizeSub.value; }
	set size(v: FrameSizeInterface) { this.sizeSub.next(v); }
	sizeSub = new DistinctBehaviorSubject<FrameSizeInterface>({ width: 0, height: 0 });

	get barColor(): string { return this.barColorSub.value; }
	set barColor(v: string) { this.barColorSub.next(v); }
	barColorSub = new DistinctBehaviorSubject<string>('');

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }
	backgroundColorSub = new DistinctBehaviorSubject<string>('');

	get barStyle(): BarStyle { return this.barStyleSub.value; }
	set barStyle(v: BarStyle) { this.barStyleSub.next(v); }
	barStyleSub = new DistinctBehaviorSubject<BarStyle>('horizontal');

	get barDirection(): BarDirection { return this.barDirectionSub.value; }
	set barDirection(v: BarDirection) { this.barDirectionSub.next(v); }
	barDirectionSub = new DistinctBehaviorSubject<BarDirection>('start');

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }
	borderWidthSub = new DistinctBehaviorSubject<number>(1);

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	borderColorSub = new DistinctBehaviorSubject<string>('');
	// @formatter:on

	widgets = {
		name: new TextWidgetConfig(),
		elapsed: new TextWidgetConfig()
	};
}