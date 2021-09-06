import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class TooltipConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }

	get width(): string { return this.widthSub.value; }
	set width(v: string) { this.widthSub.next(v); }

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }

	get padding(): string { return this.paddingSub.value; }
	set padding(v: string) { this.paddingSub.next(v); }

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }

	get fontColor(): string { return this.fontColorSub.value; }
	set fontColor(v: string) { this.fontColorSub.next(v); }

	get fontSize(): string { return this.fontSizeSub.value; }
	set fontSize(v: string) { this.fontSizeSub.next(v); }

	get outline(): boolean { return this.outlineSub.value; }
	set outline(v: boolean) { this.outlineSub.next(v); }
	// @formatter:on

	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	widthSub = new DistinctBehaviorSubject<string>('');
	backgroundColorSub = new DistinctBehaviorSubject<string>('');
	paddingSub = new DistinctBehaviorSubject<string>('');

	borderWidthSub = new DistinctBehaviorSubject<number>(1);
	borderColorSub = new DistinctBehaviorSubject<string>('');

	fontColorSub = new DistinctBehaviorSubject<string>('');
	fontSizeSub = new DistinctBehaviorSubject<string>('');
	outlineSub = new DistinctBehaviorSubject<boolean>(true);

	anyChangedCache: Observable<any>;

	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return [
			this.enabledSub,
			this.widthSub,
			this.backgroundColorSub,
			this.paddingSub,
			this.borderWidthSub,
			this.borderColorSub,
			this.fontColorSub,
			this.fontSizeSub,
			this.outlineSub
		];
	}

	unserialize(value: Partial<TooltipConfig>) {
		this.enabled = value.enabled;
		this.width = value.width;
		this.backgroundColor = value.backgroundColor;
		this.padding = value.padding;
		this.borderWidth = value.borderWidth;
		this.borderColor = value.borderColor;
		this.fontColor = value.fontColor;
		this.fontSize = value.fontSize;
		this.outline = value.outline;
	}

	serialize() {
		return {
			enabled: this.enabled,
			width: this.width,
			backgroundColor: this.backgroundColor,
			padding: this.padding,
			borderWidth: this.borderWidth,
			borderColor: this.borderColor,
			fontColor: this.fontColor,
			fontSize: this.fontSize,
			outline: this.outline
		};
	}
}