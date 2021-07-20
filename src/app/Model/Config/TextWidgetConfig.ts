import { BehaviorSubject, merge }    from 'rxjs';
import { debounceTime }              from 'rxjs/operators';
import { Anchor }                    from 'src/app/Interface/Anchor';
import { FramePositionInterface }    from 'src/app/Interface/ConfigInterface';
import { SerializableConfig }        from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfigInterface } from 'src/app/Interface/TextWidgetConfigInterface';
import { DistinctBehaviorSubject }   from 'src/app/Model/DistinctBehaviorSubject';

export class TextWidgetConfig implements SerializableConfig, TextWidgetConfigInterface {
	// @formatter:off
	get show() { return this.showSub.value; }
	set show(v: boolean) { this.showSub.next(v); }

	get anchor() { return this.anchorSub.value; }
	set anchor(v: Anchor) { this.anchorSub.next(v); }

	get fontColor() { return this.fontColorSub.value; }
	set fontColor(v: string) { this.fontColorSub.next(v); }

	get fontSize() { return this.fontSizeSub.value; }
	set fontSize(v: string) { this.fontSizeSub.next(v); }

	get position() { return this.positionSub.value; }
	set position(v: FramePositionInterface) { this.positionSub.next(v); }
	// @formatter:on

	showSub = new DistinctBehaviorSubject<boolean>(true);
	anchorSub = new DistinctBehaviorSubject<Anchor>('topLeft');
	fontColorSub = new DistinctBehaviorSubject<string>('');
	fontSizeSub = new DistinctBehaviorSubject<string>('');
	positionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	anyChanged = new BehaviorSubject<TextWidgetConfig>(this);

	constructor() {
		this.init();
	}

	init() {
		merge(
			this.showSub,
			this.anchorSub,
			this.fontColorSub,
			this.fontSizeSub,
			this.positionSub
		)
			.pipe(debounceTime(10))
			.subscribe((v) => {
				this.anyChanged.next(this);
			});
	}

	serialize(): any {
		return {
			show: this.show,
			anchor: this.anchor,
			fontColor: this.fontColor,
			fontSize: this.fontSize,
			position: this.position
		};
	}

	unserialize(value: any): void {
		this.show = value.show;
		this.anchor = value.anchor;
		this.fontColor = value.fontColor;
		this.fontSize = value.fontSize;
		this.position = Object.assign({}, value.position);
	}

}