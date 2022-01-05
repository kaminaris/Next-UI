import { Anchor }                  from 'src/app/Interface/Anchor';
import { FramePositionInterface }  from 'src/app/Interface/FramePositionInterface';
import { BaseConfig }              from 'src/app/Model/Config/BaseConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameRoleConfig extends BaseConfig {
	// @formatter:off
	get show(): boolean { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }
	showSub = new DistinctBehaviorSubject<boolean>(true);

	get anchor(): Anchor { return this.anchorSub.value; }
	set anchor(v: Anchor) { this.anchorSub.next(v); }
	anchorSub: DistinctBehaviorSubject<Anchor> = new DistinctBehaviorSubject<Anchor>('topRight');

	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub: DistinctBehaviorSubject<FramePositionInterface> =
		new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get color(): string { return this.colorSub.value; }
	set color(v: string) { this.colorSub.next(v); }
	colorSub = new DistinctBehaviorSubject<string>('');

	get size(): number { return this.sizeSub.value; }
	set size(v: number) { this.sizeSub.next(v); }
	sizeSub = new DistinctBehaviorSubject<number>(24);
	// @formatter:on
}