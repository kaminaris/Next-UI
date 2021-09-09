import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { getSubjects }                from 'src/app/Function/getSubjects';
import { serialize }                  from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }           from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class AuraBarFrameConfig implements SerializableConfig {
	// @formatter:off
	get iconSize() { return this.iconSizeSub.value; }
	set iconSize(v: string) { this.iconSizeSub.next(v); }
	iconSizeSub = new DistinctBehaviorSubject<string>('');

	get cooldownPrecision() { return this.cooldownPrecisionSub.value; }
	set cooldownPrecision(v: number) { this.cooldownPrecisionSub.next(v); }
	cooldownPrecisionSub = new DistinctBehaviorSubject<number>(0);

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }
	borderWidthSub = new DistinctBehaviorSubject<number>(1);

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	borderColorSub = new DistinctBehaviorSubject<string>('');
	// @formatter:on

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
		return getSubjects(this);
	}

	serialize(): any {
		return serialize(this);
	}

	unserialize(value: any): void {
		unserialize(this, value);
	}
}