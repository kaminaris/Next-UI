import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                from 'rxjs/operators';
import { getSubjects }                                 from 'src/app/Function/getSubjects';
import { serialize }                                   from 'src/app/Function/serialize';
import { unserialize }                                 from 'src/app/Function/unserialize';
import { ClassLike }                                   from 'src/app/Interface/ClassLike';
import { StatusFilter }                                from 'src/app/Interface/StatusFilter';
import { SerializableConfig }                          from 'src/app/Interface/SerializableConfig';
import { AggroListFrameConfig }                        from 'src/app/Model/Config/AggroListFrameConfig';
import { AuraBarFrameConfig }                          from 'src/app/Model/Config/AuraBarFrameConfig';
import { ColorConfig }                                 from 'src/app/Model/Config/ColorConfig';
import { ConfigFrameConfig }                           from 'src/app/Model/Config/ConfigFrameConfig';
import { ControlFrameConfig }                          from 'src/app/Model/Config/ControlFrameConfig';
import { CustomElementsFrameConfig }                   from 'src/app/Model/Config/CustomElementsFrameConfig';
import { FocusFrameConfig }                            from 'src/app/Model/Config/FocusFrameConfig';
import { PartyFrameConfig }                            from 'src/app/Model/Config/PartyFrameConfig';
import { PlayerFrameConfig }                           from 'src/app/Model/Config/PlayerFrameConfig';
import { TargetFrameConfig }                           from 'src/app/Model/Config/TargetFrameConfig';
import { TargetOfTargetFrameConfig }                   from 'src/app/Model/Config/TargetOfTargetFrameConfig';
import { TooltipConfig }                               from 'src/app/Model/Config/TooltipConfig';
import { TTSConfig }                                   from 'src/app/Model/Config/TTSConfig';
import { UnitFrameHealthBarConfig }                    from 'src/app/Model/Config/UnitFrame/UnitFrameHealthBarConfig';
import { DistinctBehaviorSubject }                     from 'src/app/Model/DistinctBehaviorSubject';

export class MainConfig implements SerializableConfig {
	version = 1;

	// @formatter:off
	get fontFamily(): string { return this.fontFamilySub.value; }
	set fontFamily(v: string) { this.fontFamilySub.next(v); }
	fontFamilySub = new DistinctBehaviorSubject<string>('');

	get customCss(): string { return this.customCssSub.value; }
	set customCss(v: string) { this.customCssSub.next(v); }
	customCssSub = new DistinctBehaviorSubject<string>('');

	get hpTemplate(): string { return this.hpTemplateSub.value; }
	set hpTemplate(v: string) { this.hpTemplateSub.next(v); }
	hpTemplateSub = new DistinctBehaviorSubject<string>('[hp] / [hpMax] ([hpPct]%)');

	get manaTemplate(): string { return this.manaTemplateSub.value; }
	set manaTemplate(v: string) { this.manaTemplateSub.next(v); }
	manaTemplateSub = new DistinctBehaviorSubject<string>('[mana] / [manaMax] ([manaPct]%)');

	get numberFormat(): string { return this.numberFormatSub.value; }
	set numberFormat(v: string) { this.numberFormatSub.next(v); }
	numberFormatSub = new DistinctBehaviorSubject<string>('');

	get filters(): StatusFilter[] { return this.filtersSub.value; }
	set filters(v: StatusFilter[]) { this.filtersSub.next(v); }
	filtersSub = new BehaviorSubject<StatusFilter[]>([]);

	get castDelay(): number { return this.castDelaySub.value; }
	set castDelay(v: number) { this.castDelaySub.next(v); }
	castDelaySub = new DistinctBehaviorSubject<number>(300);

	get blurNames(): boolean { return this.blurNamesSub.value; }
	set blurNames(v: boolean) { this.blurNamesSub.next(v); }
	blurNamesSub = new DistinctBehaviorSubject<boolean>(false);

	get replaceYourName(): string { return this.replaceYourNameSub.value; }
	set replaceYourName(v: string) { this.replaceYourNameSub.next(v); }
	replaceYourNameSub = new DistinctBehaviorSubject<string>('');
	// @formatter:on

	ttsConfig = new TTSConfig();
	colorConfig = new ColorConfig();
	tooltipConfig = new TooltipConfig();

	frames = {
		control: new ControlFrameConfig(),
		config: new ConfigFrameConfig(),
		customElements: new CustomElementsFrameConfig(),
		player: new PlayerFrameConfig(),
		target: new TargetFrameConfig(),
		targetOfTarget: new TargetOfTargetFrameConfig(),
		focus: new FocusFrameConfig(),
		party: new PartyFrameConfig(),
		aggroList: new AggroListFrameConfig(),
		auraBar: new AuraBarFrameConfig()
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
		value = this.upgradeConfig(value);
		unserialize(this, value);
	}

	protected upgradeConfig(cfg: ClassLike<MainConfig>) {
		let configVersion = cfg.version ?? 0;

		if (configVersion < 1) {
			cfg = this.upgradeConfigTo1(cfg);
			configVersion = 1;
		}
		return cfg;
	}

	protected upgradeConfigTo1(cfg: ClassLike<MainConfig>) {
		cfg.version = 1;
		const healthBarConfigs: UnitFrameHealthBarConfig[] = [
			cfg.frames.party.healthBar,
			cfg.frames.player.healthBar,
			cfg.frames.target.healthBar,
			cfg.frames.focus.healthBar,
			cfg.frames.targetOfTarget.healthBar,
			cfg.frames.aggroList.healthBar,
		];
		for (const hbCfg of healthBarConfigs) {
			hbCfg.useJobColor = (hbCfg as any).useClassColor;
		}

		return cfg;
	}

}