import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { AggroListFrameConfig }       from 'src/app/Model/Config/AggroListFrameConfig';
import { AuraBarFrameConfig }         from 'src/app/Model/Config/AuraBarFrameConfig';
import { ColorConfig }                from 'src/app/Model/Config/ColorConfig';
import { ConfigFrameConfig }          from 'src/app/Model/Config/ConfigFrameConfig';
import { ControlFrameConfig }         from 'src/app/Model/Config/ControlFrameConfig';
import { CustomElementsFrameConfig }  from 'src/app/Model/Config/CustomElementsFrameConfig';
import { PartyFrameConfig }           from 'src/app/Model/Config/PartyFrameConfig';
import { PlayerFrameConfig }          from 'src/app/Model/Config/PlayerFrameConfig';
import { TargetFrameConfig }          from 'src/app/Model/Config/TargetFrameConfig';
import { TargetOfTargetFrameConfig }  from 'src/app/Model/Config/TargetOfTargetFrameConfig';
import { TTSConfig }                  from 'src/app/Model/Config/TTSConfig';
import { DistinctBehaviorSubject }    from 'src/app/Model/DistinctBehaviorSubject';

export class MainConfig implements SerializableConfig {
	// @formatter:off
	get fontFamily(): string { return this.fontFamilySub.value; }
	set fontFamily(v: string) { this.fontFamilySub.next(v); }

	get customCss(): string { return this.customCssSub.value; }
	set customCss(v: string) { this.customCssSub.next(v); }

	get hpTemplate(): string { return this.hpTemplateSub.value; }
	set hpTemplate(v: string) { this.hpTemplateSub.next(v); }

	get manaTemplate(): string { return this.manaTemplateSub.value; }
	set manaTemplate(v: string) { this.manaTemplateSub.next(v); }

	get numberFormat(): string { return this.numberFormatSub.value; }
	set numberFormat(v: string) { this.numberFormatSub.next(v); }
	// @formatter:on

	ttsConfig = new TTSConfig();
	colorConfig = new ColorConfig();
	customCssSub = new DistinctBehaviorSubject<string>('');
	fontFamilySub = new DistinctBehaviorSubject<string>('');
	numberFormatSub = new DistinctBehaviorSubject<string>('');
	hpTemplateSub = new DistinctBehaviorSubject<string>('[hp] / [hpMax] ([hpPct]%)');
	manaTemplateSub = new DistinctBehaviorSubject<string>('[mana] / [manaMax] ([manaPct]%)');

	frames = {
		control: new ControlFrameConfig(),
		config: new ConfigFrameConfig(),
		customElements: new CustomElementsFrameConfig(),
		player: new PlayerFrameConfig(),
		target: new TargetFrameConfig(),
		targetOfTarget: new TargetOfTargetFrameConfig(),
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
		return [
			this.customCssSub,
			this.fontFamilySub,
			this.numberFormatSub
		];
	}

	unserialize(value: Partial<MainConfig>) {
		this.customCss = value.customCss;
		this.fontFamily = value.fontFamily;
		this.numberFormat = value.numberFormat;
		this.hpTemplate = value.hpTemplate;
		this.manaTemplate = value.manaTemplate;
		this.ttsConfig.unserialize(value.ttsConfig);
		this.colorConfig.unserialize(value.colorConfig);
		this.frames.control.unserialize(value.frames.control);
		this.frames.config.unserialize(value.frames.config);
		this.frames.customElements.unserialize(value.frames.customElements);
		this.frames.player.unserialize(value.frames.player);
		this.frames.target.unserialize(value.frames.target);
		this.frames.targetOfTarget.unserialize(value.frames.targetOfTarget);
		this.frames.party.unserialize(value.frames.party);
		this.frames.aggroList.unserialize(value.frames.aggroList);
		this.frames.auraBar.unserialize(value.frames.auraBar);
	}

	serialize() {
		return {
			customCss: this.customCss,
			fontFamily: this.fontFamily,
			numberFormat: this.numberFormat,
			hpTemplate: this.hpTemplate,
			manaTemplate: this.manaTemplate,
			ttsConfig: this.ttsConfig.serialize(),
			colorConfig: this.colorConfig.serialize(),
			frames: {
				control: this.frames.control.serialize(),
				config: this.frames.config.serialize(),
				customElements: this.frames.customElements.serialize(),
				player: this.frames.player.serialize(),
				target: this.frames.target.serialize(),
				targetOfTarget: this.frames.targetOfTarget.serialize(),
				party: this.frames.party.serialize(),
				aggroList: this.frames.aggroList.serialize(),
				auraBar: this.frames.auraBar.serialize()
			}
		};
	}

}