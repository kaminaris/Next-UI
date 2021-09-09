import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { getSubjects }                from 'src/app/Function/getSubjects';
import { serialize }                  from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';
import { Anchor }                     from 'src/app/Interface/Anchor';
import { FramePositionInterface }     from 'src/app/Interface/FramePositionInterface';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfigInterface }  from 'src/app/Interface/TextWidgetConfigInterface';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class TextWidgetConfig implements SerializableConfig, TextWidgetConfigInterface {
	// @formatter:off
	get show(): boolean { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }
	showSub = new DistinctBehaviorSubject<boolean>(true);

	get anchor(): Anchor { return this.anchorSub.value; }
	set anchor(v: Anchor) { this.anchorSub.next(v); }
	anchorSub = new DistinctBehaviorSubject<Anchor>('topLeft');

	get fontColor(): string { return this.fontColorSub.value; }
	set fontColor(v: string) { this.fontColorSub.next(v); }
	fontColorSub = new DistinctBehaviorSubject<string>('');

	get fontSize(): string { return this.fontSizeSub.value; }
	set fontSize(v: string) { this.fontSizeSub.next(v); }
	fontSizeSub = new DistinctBehaviorSubject<string>('');

	get outline(): boolean { return this.outlineSub.value; }
	set outline(v: boolean) { this.outlineSub.next(v); }
	outlineSub = new DistinctBehaviorSubject<boolean>(true);

	get position(): FramePositionInterface { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	positionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });
	// @formatter:on

	anyChangedCache: Observable<any>;

	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return getSubjects(this);
	}

	serialize(): any {
		return serialize(this);
	}

	unserialize(value: any): void {
		unserialize(this, value);
	}
}