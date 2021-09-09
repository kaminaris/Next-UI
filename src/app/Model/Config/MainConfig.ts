import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime }                                from 'rxjs/operators';
import { getSubjects }                                 from 'src/app/Function/getSubjects';
import { serialize }                                   from 'src/app/Function/serialize';
import { unserialize }                                 from 'src/app/Function/unserialize';
import { AuraFilter }                                  from 'src/app/Interface/AuraFilter';
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
import { DistinctBehaviorSubject }                     from 'src/app/Model/DistinctBehaviorSubject';

export class MainConfig implements SerializableConfig {
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

	get filters(): AuraFilter[] { return this.filtersSub.value; }
	set filters(v: AuraFilter[]) { this.filtersSub.next(v); }
	filtersSub = new BehaviorSubject<AuraFilter[]>([]);
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
		unserialize(this, value);
	}

}