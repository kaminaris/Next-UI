import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }               from 'rxjs/operators';
import { SerializableConfig }         from 'src/app/Interface/SerializableConfig';
import { AggroListFrameConfig }       from 'src/app/Model/Config/AggroListFrameConfig';
import { AuraBarFrameConfig }         from 'src/app/Model/Config/AuraBarFrameConfig';
import { ConfigFrameConfig }          from 'src/app/Model/Config/ConfigFrameConfig';
import { ControlFrameConfig }         from 'src/app/Model/Config/ControlFrameConfig';
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

	get numberFormat(): string { return this.numberFormatSub.value; }
	set numberFormat(v: string) { this.numberFormatSub.next(v); }
	// @formatter:on

	ttsConfig = new TTSConfig();

	fontFamilySub = new DistinctBehaviorSubject<string>('');
	numberFormatSub = new DistinctBehaviorSubject<string>('');

	frames = {
		control: new ControlFrameConfig(),
		config: new ConfigFrameConfig(),
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
		return [this.fontFamilySub, this.numberFormatSub];
	}

	unserialize(value: Partial<MainConfig>) {
		this.fontFamily = value.fontFamily;
		this.numberFormat = value.numberFormat;
		this.ttsConfig.unserialize(value.ttsConfig);
		this.frames.control.unserialize(value.frames.control);
		this.frames.config.unserialize(value.frames.config);
		this.frames.player.unserialize(value.frames.player);
		this.frames.target.unserialize(value.frames.target);
		this.frames.targetOfTarget.unserialize(value.frames.targetOfTarget);
		this.frames.party.unserialize(value.frames.party);
		this.frames.aggroList.unserialize(value.frames.aggroList);
		this.frames.auraBar.unserialize(value.frames.auraBar);
	}

	serialize() {
		return {
			fontFamily: this.fontFamily,
			numberFormat: this.numberFormat,
			ttsConfig: this.ttsConfig.serialize(),
			frames: {
				control: this.frames.control.serialize(),
				config: this.frames.config.serialize(),
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