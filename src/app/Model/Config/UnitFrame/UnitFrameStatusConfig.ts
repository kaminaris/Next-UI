import { Anchor }                  from 'src/app/Interface/Anchor';
import { FramePositionInterface }  from 'src/app/Interface/FramePositionInterface';
import { BaseConfig }              from 'src/app/Model/Config/BaseConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class UnitFrameStatusConfig extends BaseConfig {
	// @formatter:off
	get show(): boolean { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }
	showSub = new DistinctBehaviorSubject<boolean>(true);

	get anchor(): Anchor { return this.anchorSub.value; }
	set anchor(v: Anchor) { this.anchorSub.next(v); }
	anchorSub: DistinctBehaviorSubject<Anchor> = new DistinctBehaviorSubject<Anchor>('bottomLeft');

	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub: DistinctBehaviorSubject<FramePositionInterface> =
		new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	get filters(): string[] { return this.filtersSub.value; }
	set filters(v: string[]) { this.filtersSub.next(v); }
	filtersSub = new DistinctBehaviorSubject<string[]>([]);

	get onlyOwn(): boolean { return this.onlyOwnSub.value; }
	set onlyOwn(v: boolean) { this.onlyOwnSub.next(v); }
	onlyOwnSub = new DistinctBehaviorSubject<boolean>(true);
	// @formatter:on
}