import { Subject }                 from 'rxjs';
import { Anchor }                  from 'src/app/Interface/Anchor';
import { BarDirection }            from 'src/app/Interface/BarDirection';
import { BarStyle }                from 'src/app/Interface/BarStyle';
import { FramePositionInterface }  from 'src/app/Interface/FramePositionInterface';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }        from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';
import { BaseFrameConfig }         from './BaseFrameConfig';

export class PlayerFrameConfig extends BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(true);

	get aurasEnabled(): boolean { return this.aurasEnabledSub.value; }
	set aurasEnabled(v: boolean) { this.aurasEnabledSub.next(v); }
	aurasEnabledSub = new DistinctBehaviorSubject<boolean>(true);

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }
	backgroundColorSub = new DistinctBehaviorSubject<string>('');

	get barStyle(): BarStyle { return this.barStyleSub.value; }
	set barStyle(v: BarStyle) { this.barStyleSub.next(v); }
	barStyleSub = new DistinctBehaviorSubject<BarStyle>('horizontal');

	get barDirection(): BarDirection { return this.barDirectionSub.value; }
	set barDirection(v: BarDirection) { this.barDirectionSub.next(v); }
	barDirectionSub = new DistinctBehaviorSubject<BarDirection>('start');

	get manaBarStyle(): BarStyle { return this.manaBarStyleSub.value; }
	set manaBarStyle(v: BarStyle) { this.manaBarStyleSub.next(v); }
	manaBarStyleSub = new DistinctBehaviorSubject<BarStyle>('horizontal');

	get manaBarDirection(): BarDirection { return this.manaBarDirectionSub.value; }
	set manaBarDirection(v: BarDirection) { this.manaBarDirectionSub.next(v); }
	manaBarDirectionSub = new DistinctBehaviorSubject<BarDirection>('start');

	get barColor(): string { return this.barColorSub.value; }
	set barColor(v: string) { this.barColorSub.next(v); }
	barColorSub = new DistinctBehaviorSubject<string>('');

	get manaColor(): string { return this.manaColorSub.value; }
	set manaColor(v: string) { this.manaColorSub.next(v); }
	manaColorSub = new DistinctBehaviorSubject<string>('');

	get manaHeight(): string { return this.manaHeightSub.value; }
	set manaHeight(v: string) { this.manaHeightSub.next(v); }
	manaHeightSub = new DistinctBehaviorSubject<string>('');

	get useClassColor(): boolean { return this.useClassColorSub.value; }
	set useClassColor(v: boolean) { this.useClassColorSub.next(v); }
	useClassColorSub = new DistinctBehaviorSubject<boolean>(true);

	get showSign(): boolean { return this.showSignSub.value; }
	set showSign(v: boolean) { this.showSignSub.next(v); }
	showSignSub = new DistinctBehaviorSubject<boolean>(true);

	get signAnchor(): Anchor { return this.signAnchorSub.value; }
	set signAnchor(v: Anchor) { this.signAnchorSub.next(v); }
	signAnchorSub = new DistinctBehaviorSubject<Anchor>('topRight');

	get signPosition(): FramePositionInterface { return this.signPositionSub.value; }
	set signPosition(v: FramePositionInterface) { this.signPositionSub.next(v); }
	signPositionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get signSize(): number { return this.signSizeSub.value; }
	set signSize(v: number) { this.signSizeSub.next(v); }
	signSizeSub = new DistinctBehaviorSubject<number>(24);

	get showRoleIcon(): boolean { return this.showRoleIconSub.value; }
	set showRoleIcon(v: boolean) { this.showRoleIconSub.next(v); }
	showRoleIconSub = new DistinctBehaviorSubject<boolean>(true);

	get roleIconAnchor(): Anchor { return this.roleIconAnchorSub.value; }
	set roleIconAnchor(v: Anchor) { this.roleIconAnchorSub.next(v); }
	roleIconAnchorSub = new DistinctBehaviorSubject<Anchor>('topRight');

	get roleIconPosition(): FramePositionInterface { return this.roleIconPositionSub.value; }
	set roleIconPosition(v: FramePositionInterface) { this.roleIconPositionSub.next(v); }
	roleIconPositionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get roleIconColor(): string { return this.roleIconColorSub.value; }
	set roleIconColor(v: string) { this.roleIconColorSub.next(v); }
	roleIconColorSub = new DistinctBehaviorSubject<string>('');

	get roleIconSize(): number { return this.roleIconSizeSub.value; }
	set roleIconSize(v: number) { this.roleIconSizeSub.next(v); }
	roleIconSizeSub = new DistinctBehaviorSubject<number>(24);

	get showMana(): boolean { return this.showManaSub.value; }
	set showMana(v: boolean) { this.showManaSub.next(v); }
	showManaSub = new DistinctBehaviorSubject<boolean>(true);

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }
	borderWidthSub = new DistinctBehaviorSubject<number>(1);

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	borderColorSub = new DistinctBehaviorSubject<string>('');

	get auraAnchor(): Anchor { return this.auraAnchorSub.value; }
	set auraAnchor(v: Anchor) { this.auraAnchorSub.next(v); }
	auraAnchorSub = new DistinctBehaviorSubject<Anchor>('bottomLeft');

	get auraPosition(): FramePositionInterface { return this.auraPositionSub.value; }
	set auraPosition(v: FramePositionInterface) { this.auraPositionSub.next(v); }
	auraPositionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get auraFilters(): string[] { return this.auraFiltersSub.value; }
	set auraFilters(v: string[]) { this.auraFiltersSub.next(v); }
	auraFiltersSub = new DistinctBehaviorSubject<string[]>([]);

	get auraOnlyOwn(): boolean { return this.auraOnlyOwnSub.value; }
	set auraOnlyOwn(v: boolean) { this.auraOnlyOwnSub.next(v); }
	auraOnlyOwnSub = new DistinctBehaviorSubject<boolean>(true);

	get distanceEnabled(): boolean { return this.distanceEnabledSub.value; }
	set distanceEnabled(v: boolean) { this.distanceEnabledSub.next(v); }
	distanceEnabledSub = new DistinctBehaviorSubject<boolean>(false);

	get distanceThreshold(): number { return this.distanceThresholdSub.value; }
	set distanceThreshold(v: number) { this.distanceThresholdSub.next(v); }
	distanceThresholdSub = new DistinctBehaviorSubject<number>(30);

	get distanceOpacity(): number { return this.distanceOpacitySub.value; }
	set distanceOpacity(v: number) { this.distanceOpacitySub.next(v); }
	distanceOpacitySub = new DistinctBehaviorSubject<number>(50);
	// @formatter:on

	widgets = {
		name: new TextWidgetConfig(),
		job: new TextWidgetConfig(),
		hp: new TextWidgetConfig(),
		mana: new TextWidgetConfig(),
		level: new TextWidgetConfig()
	};
}