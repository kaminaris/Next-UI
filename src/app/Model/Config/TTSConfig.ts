import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                from 'rxjs/operators';
import { SerializableConfig }                 from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }            from 'src/app/Model/DistinctBehaviorSubject';

export class TTSConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }


	get maleVoice(): string { return this.maleVoiceSub.value; }
	set maleVoice(v: string) { this.maleVoiceSub.next(v); }

	// 0 to 1
	get maleVolume(): number { return this.maleVolumeSub.value; }
	set maleVolume(v: number) { this.maleVolumeSub.next(v); }

	// 0.1 to 10
	get maleRate(): number { return this.maleRateSub.value; }
	set maleRate(v: number) { this.maleRateSub.next(v); }

	// 0 to 2
	get malePitch(): number { return this.malePitchSub.value; }
	set malePitch(v: number) { this.malePitchSub.next(v); }


	get femaleVoice(): string { return this.femaleVoiceSub.value; }
	set femaleVoice(v: string) { this.femaleVoiceSub.next(v); }

	// 0 to 1
	get femaleVolume(): number { return this.femaleVolumeSub.value; }
	set femaleVolume(v: number) { this.femaleVolumeSub.next(v); }

	// 0.1 to 10
	get femaleRate(): number { return this.femaleRateSub.value; }
	set femaleRate(v: number) { this.femaleRateSub.next(v); }

	// 0 to 2
	get femalePitch(): number { return this.femalePitchSub.value; }
	set femalePitch(v: number) { this.femalePitchSub.next(v); }
	// @formatter:on

	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	maleVoiceSub = new DistinctBehaviorSubject<string>('');
	maleVolumeSub = new DistinctBehaviorSubject<number>(1);
	maleRateSub = new DistinctBehaviorSubject<number>(1);
	malePitchSub = new DistinctBehaviorSubject<number>(1);

	femaleVoiceSub = new DistinctBehaviorSubject<string>('');
	femaleVolumeSub = new DistinctBehaviorSubject<number>(1);
	femaleRateSub = new DistinctBehaviorSubject<number>(1);
	femalePitchSub = new DistinctBehaviorSubject<number>(1);

	anyChangedCache: Observable<any>;
	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	getSubjects(): Subject<any>[] {
		return [
			this.enabledSub,
			this.maleVoiceSub,
			this.maleVolumeSub,
			this.maleRateSub,
			this.malePitchSub,
			this.femaleVoiceSub,
			this.femaleVolumeSub,
			this.femaleRateSub,
			this.femalePitchSub
		]
	}

	unserialize(value: Partial<TTSConfig>) {
		this.enabled = value.enabled;

		this.maleVoice = value.maleVoice;
		this.maleVolume = value.maleVolume;
		this.maleRate = value.maleRate;
		this.malePitch = value.malePitch;

		this.femaleVoice = value.femaleVoice;
		this.femaleVolume = value.femaleVolume;
		this.femaleRate = value.femaleRate;
		this.femalePitch = value.femalePitch;
	}

	serialize() {
		return {
			enabled: this.enabled,

			maleVoice: this.maleVoice,
			maleVolume: this.maleVolume,
			maleRate: this.maleRate,
			malePitch: this.malePitch,

			femaleVoice: this.femaleVoice,
			femaleVolume: this.femaleVolume,
			femaleRate: this.femaleRate,
			femalePitch: this.femalePitch
		};
	}
}