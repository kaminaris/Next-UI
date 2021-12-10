import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                from 'rxjs/operators';
import { SerializableConfig }                          from 'src/app/Interface/SerializableConfig';
import { DistinctBehaviorSubject }                     from 'src/app/Model/DistinctBehaviorSubject';
import { Util }                                        from 'src/app/Service/LogParser/Util';

export class ColorConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }
	enabledSub = new DistinctBehaviorSubject<boolean>(false);

	// @formatter:on

	// CastBarColor = new DistinctBehaviorSubject<string>('rgba(255,158,208,1)');
	// SlideCastColor = new DistinctBehaviorSubject<string>('rgba(255,0,0,1)');
	// ShieldColor = new DistinctBehaviorSubject<string>('rgba(255,255,0,1)');

	// NPCColorHostile = new DistinctBehaviorSubject<string>('rgba(205, 25, 25, 1)');
	// NPCColorNeutral = new DistinctBehaviorSubject<string>('rgba(214, 145, 64, 1)');
	// NPCColorFriendly = new DistinctBehaviorSubject<string>('rgba(0, 145, 6, 1)');
	protected jobColor = new Map<number, string>();
	protected jobColorDefault = new Map<number, string>();
	jobColorSub = new BehaviorSubject<Map<number, string>>(null);

	anyChangedCache: Observable<any>;

	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	constructor() {
		// this.jobColor.set(Util.jobs.PLD, 'rgba(21,28,100,1)');
		// this.jobColor.set(Util.jobs.WAR, 'rgba(153,23,23,1)');
		// this.jobColor.set(Util.jobs.DRK, 'rgba(136,14,79,1)');
		// this.jobColor.set(Util.jobs.GNB, 'rgba(78,52,46,1)');
		//
		// this.jobColor.set(Util.jobs.WHM, 'rgba(150,150,150,1)');
		// this.jobColor.set(Util.jobs.SCH, 'rgba(121,134,203,1)');
		// this.jobColor.set(Util.jobs.AST, 'rgba(121,85,72,1)');
		//
		// this.jobColor.set(Util.jobs.MNK, 'rgba(78,52,46,1)');
		// this.jobColor.set(Util.jobs.DRG, 'rgba(63,81,181,1)');
		// this.jobColor.set(Util.jobs.NIN, 'rgba(211,47,47,1)');
		// this.jobColor.set(Util.jobs.SAM, 'rgba(255,202,40,1)');
		//
		// this.jobColor.set(Util.jobs.BRD, 'rgba(158,157,36,1)');
		// this.jobColor.set(Util.jobs.MCH, 'rgba(0,151,167,1)');
		// this.jobColor.set(Util.jobs.DNC, 'rgba(244,143,177,1)');
		//
		// this.jobColor.set(Util.jobs.BLM, 'rgba(126,87,194,1)');
		// this.jobColor.set(Util.jobs.SMN, 'rgba(46,125,50,1)');
		// this.jobColor.set(Util.jobs.RDM, 'rgba(233,30,99,1)');
		// this.jobColor.set(Util.jobs.BLU, 'rgba(0,185,247,1)');
		// const colors = {
		this.jobColor.set(Util.jobs.PLD, 'rgba(123,154,162,1)');
		this.jobColor.set(Util.jobs.GLA, 'rgba(123,154,162,1)');
		this.jobColor.set(Util.jobs.WAR, 'rgba(169,26,22,1)');
		this.jobColor.set(Util.jobs.MRD, 'rgba(169,26,22,1)');
		this.jobColor.set(Util.jobs.DRK, 'rgba(104,37,49,1)');
		this.jobColor.set(Util.jobs.GNB, 'rgba(121,109,48,1)');
		this.jobColor.set(Util.jobs.WHM, 'rgba(189,189,189,1)');
		this.jobColor.set(Util.jobs.CNJ, 'rgba(189,189,189,1)');
		this.jobColor.set(Util.jobs.SCH, 'rgba(50,48,123,1)');
		this.jobColor.set(Util.jobs.AST, 'rgba(177,86,28,1)');
		// ds: 'rgb(77,208,225)',
		// oh: 'rgb(239,83,80)',
		this.jobColor.set(Util.jobs.MNK, 'rgba(179,137,21,1)');
		this.jobColor.set(Util.jobs.PGL, 'rgba(179,137,21,1)');
		this.jobColor.set(Util.jobs.DRG, 'rgba(55,82,216,1)');
		this.jobColor.set(Util.jobs.LNC, 'rgba(55,82,216,1)');
		this.jobColor.set(Util.jobs.NIN, 'rgba(238,46,72,1)');
		this.jobColor.set(Util.jobs.ROG, 'rgba(238,46,72,1)');
		this.jobColor.set(Util.jobs.SAM, 'rgba(228,90,15,1)');
		this.jobColor.set(Util.jobs.BRD, 'rgba(173,197,81,1)');
		this.jobColor.set(Util.jobs.ARC, 'rgba(173,197,81,1)');
		this.jobColor.set(Util.jobs.MCH, 'rgba(20,138,169,1)');
		this.jobColor.set(Util.jobs.DNC, 'rgba(226,176,175,1)');
		this.jobColor.set(Util.jobs.BLM, 'rgba(103,69,152,1)');
		this.jobColor.set(Util.jobs.THM, 'rgba(103,69,152,1)');
		this.jobColor.set(Util.jobs.SMN, 'rgba(50,103,11,1)');
		this.jobColor.set(Util.jobs.ACN, 'rgba(50,103,11,1)');
		this.jobColor.set(Util.jobs.RDM, 'rgba(172,41,151,1)');
		this.jobColor.set(Util.jobs.BLU, 'rgba(24,61,154,1)');
		this.jobColor.set(Util.jobs.SGE, 'rgba(133,196,212,1)');
		this.jobColor.set(Util.jobs.RPR, 'rgba(234,221,111,1)');
		// this.jobColor.set(Util.jobs.LMB, 'rgba(255,187,0,1)');
		// this.jobColor.set(Util.jobs.CBO, 'rgba(117,117,117,1)');
		this.jobColor.set(Util.jobs.CRP, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.BSM, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.ARM, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.GSM, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.LTW, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.WVR, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.ALC, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.CUL, 'rgba(69,69,69,1)');
		this.jobColor.set(Util.jobs.BTN, 'rgba(48,48,48,1)');
		this.jobColor.set(Util.jobs.MIN, 'rgba(48,48,48,1)');
		this.jobColor.set(Util.jobs.FSH, 'rgba(48,48,48,1)');

		this.jobColorDefault = new Map<number, string>(Array.from(this.jobColor.entries()));
	}

	setJobColor(jobId: number, color: string) {
		if (!this.jobColor.has(jobId)) {
			console.log(`Warning jobId does not exist: ${ jobId }`);
		}

		this.jobColor.set(jobId, color);
		this.jobColorSub.next(this.jobColor);
	}

	getJobColor(jobId: number) {
		return this.jobColor.get(jobId);
	}

	getJobColorByName(jobName: string) {
		return this.getJobColor((Util.jobs as any)[jobName]);
	}

	resetJobColor(jobId: number) {
		return this.setJobColor(jobId, this.jobColorDefault.get(jobId));
	}

	getSubjects(): Subject<any>[] {
		return [
			this.enabledSub,
			this.jobColorSub
		];
	}

	unserialize(value: Partial<ColorConfig> | any) {
		this.enabled = value.enabled;
		if (value.jobColor && value.jobColor.length > 0) {
			this.jobColor = new Map<number, string>(value.jobColor);
		}
	}

	serialize() {
		return {
			enabled: this.enabled,
			jobColor: Array.from(this.jobColor.entries())
		};
	}
}