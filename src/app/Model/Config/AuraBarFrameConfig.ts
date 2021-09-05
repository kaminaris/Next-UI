import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }           from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class AuraBarFrameConfig implements SerializableConfig {
	// @formatter:off
	get iconSize() { return this.iconSizeSub.value; }
	set iconSize(v: string) { this.iconSizeSub.next(v); }

	get cooldownPrecision() { return this.cooldownPrecisionSub.value; }
	set cooldownPrecision(v: number) { this.cooldownPrecisionSub.next(v); }

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	// @formatter:on

	iconSizeSub = new DistinctBehaviorSubject<string>('');
	cooldownPrecisionSub = new DistinctBehaviorSubject<number>(0);

	borderWidthSub = new DistinctBehaviorSubject<number>(1);
	borderColorSub = new DistinctBehaviorSubject<string>('');

	widgets = {
		duration: new TextWidgetConfig(),
		stacks: new TextWidgetConfig(),
	};

	anyChangedCache: Observable<any>;

	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return [
			this.iconSizeSub,
			this.cooldownPrecisionSub,
			this.borderWidthSub,
			this.borderColorSub,
		];
	}

	serialize(): any {
		return {
			iconSize: this.iconSize,
			borderWidth: this.borderWidth,
			borderColor: this.borderColor,
			cooldownPrecision: this.cooldownPrecision,
			widgets: {
				duration: this.widgets.duration.serialize(),
				stacks: this.widgets.stacks.serialize(),
			}
		};
	}

	unserialize(value: any): void {
		this.iconSize = value.iconSize;
		this.borderWidth = value.borderWidth;
		this.borderColor = value.borderColor;
		this.cooldownPrecision = value.cooldownPrecision;

		if (value.widgets) {
			this.widgets.duration.unserialize(value.widgets.duration);
			this.widgets.stacks.unserialize(value.widgets.stacks);
		}
	}
}