import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { getSubjects }                from 'src/app/Function/getSubjects';
import { serialize }                  from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class TTSConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	get maleVoice(): string { return this.maleVoiceSub.value; }
	set maleVoice(v: string) { this.maleVoiceSub.next(v); }
	maleVoiceSub = new DistinctBehaviorSubject<string>('');

	// 0 to 1
	get maleVolume(): number { return this.maleVolumeSub.value; }
	set maleVolume(v: number) { this.maleVolumeSub.next(v); }
	maleVolumeSub = new DistinctBehaviorSubject<number>(1);

	// 0.1 to 10
	get maleRate(): number { return this.maleRateSub.value; }
	set maleRate(v: number) { this.maleRateSub.next(v); }
	maleRateSub = new DistinctBehaviorSubject<number>(1);

	// 0 to 2
	get malePitch(): number { return this.malePitchSub.value; }
	set malePitch(v: number) { this.malePitchSub.next(v); }
	malePitchSub = new DistinctBehaviorSubject<number>(1);


	get femaleVoice(): string { return this.femaleVoiceSub.value; }
	set femaleVoice(v: string) { this.femaleVoiceSub.next(v); }
	femaleVoiceSub = new DistinctBehaviorSubject<string>('');

	// 0 to 1
	get femaleVolume(): number { return this.femaleVolumeSub.value; }
	set femaleVolume(v: number) { this.femaleVolumeSub.next(v); }
	femaleVolumeSub = new DistinctBehaviorSubject<number>(1);

	// 0.1 to 10
	get femaleRate(): number { return this.femaleRateSub.value; }
	set femaleRate(v: number) { this.femaleRateSub.next(v); }
	femaleRateSub = new DistinctBehaviorSubject<number>(1);

	// 0 to 2
	get femalePitch(): number { return this.femalePitchSub.value; }
	set femalePitch(v: number) { this.femalePitchSub.next(v); }
	femalePitchSub = new DistinctBehaviorSubject<number>(1);
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