import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { getSubjects }                from 'src/app/Function/getSubjects';
import { serialize }                  from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class TooltipConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	get width(): string { return this.widthSub.value; }
	set width(v: string) { this.widthSub.next(v); }
	widthSub = new DistinctBehaviorSubject<string>('');

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }
	backgroundColorSub = new DistinctBehaviorSubject<string>('');

	get padding(): string { return this.paddingSub.value; }
	set padding(v: string) { this.paddingSub.next(v); }
	paddingSub = new DistinctBehaviorSubject<string>('');

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }
	borderWidthSub = new DistinctBehaviorSubject<number>(1);

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }
	borderColorSub = new DistinctBehaviorSubject<string>('');

	get fontColor(): string { return this.fontColorSub.value; }
	set fontColor(v: string) { this.fontColorSub.next(v); }
	fontColorSub = new DistinctBehaviorSubject<string>('');

	get fontSize(): string { return this.fontSizeSub.value; }
	set fontSize(v: string) { this.fontSizeSub.next(v); }
	fontSizeSub = new DistinctBehaviorSubject<string>('');

	get outline(): boolean { return this.outlineSub.value; }
	set outline(v: boolean) { this.outlineSub.next(v); }
	outlineSub = new DistinctBehaviorSubject<boolean>(true);
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