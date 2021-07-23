import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                from 'rxjs/operators';
import { SerializableConfig }                 from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }                   from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject }            from 'src/app/Model/DistinctBehaviorSubject';
import { BaseFrameConfig }                    from './BaseFrameConfig';

export class AuraBarFrameConfig implements SerializableConfig {
	// @formatter:off
	get iconSize() { return this.iconSizeSub.value; }
	set iconSize(v: string) { this.iconSizeSub.next(v); }

	get fontSize() { return this.fontSizeSub.value; }
	set fontSize(v: string) { this.fontSizeSub.next(v); }

	get fontColor() { return this.fontColorSub.value; }
	set fontColor(v: string) { this.fontColorSub.next(v); }

	get cooldownOutline() { return this.cooldownOutlineSub.value; }
	set cooldownOutline(v: boolean) { this.cooldownOutlineSub.next(v); }

	get cooldownPrecision() { return this.cooldownPrecisionSub.value; }
	set cooldownPrecision(v: number) { this.cooldownPrecisionSub.next(v); }
	// @formatter:on

	iconSizeSub = new DistinctBehaviorSubject<string>('');
	fontSizeSub = new DistinctBehaviorSubject<string>('');
	fontColorSub = new DistinctBehaviorSubject<string>('');
	cooldownOutlineSub = new DistinctBehaviorSubject<boolean>(false);
	cooldownPrecisionSub = new DistinctBehaviorSubject<number>(0);

	anyChangedCache: Observable<any>;
	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return [
			this.iconSizeSub,
			this.fontSizeSub,
			this.fontColorSub,
			this.cooldownOutlineSub,
			this.cooldownPrecisionSub
		]
	}

	serialize(): any {
		return {
			iconSize: this.iconSize,
			fontSize: this.fontSize,
			fontColor: this.fontColor,
			cooldownOutline: this.cooldownOutline,
			cooldownPrecision: this.cooldownPrecision
		};
	}

	unserialize(value: any): void {
		this.iconSize = value.iconSize;
		this.fontSize = value.fontSize;
		this.fontColor = value.fontColor;
		this.cooldownOutline = value.cooldownOutline;
		this.cooldownPrecision = value.cooldownPrecision;
	}
}