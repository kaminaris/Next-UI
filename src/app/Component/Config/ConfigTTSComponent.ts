import { Component, OnInit } from '@angular/core';
import { Subscription }      from 'rxjs';
import { MainConfig }        from 'src/app/Model/Config/MainConfig';
import { TTSConfig }         from 'src/app/Model/Config/TTSConfig';
import { ConfigService }     from 'src/app/Service/ConfigService';
import { TTSService }        from 'src/app/Service/TTSService';

@Component({
	selector: 'config-tts',
	template: `
		<h4 class="ta-c">Text To Speech Config</h4>
		
		<config-group title="Main Config">
			<config-checkbox [configObj]="config" prop="enabled" label="Enabled"></config-checkbox>
		</config-group>
		
		<config-group title="Male Voice">
			<config-select [configObj]="config" prop="maleVoice" [items]="voices"
				bindValue="name" bindLabel="name" label="Male Voice"
			></config-select>

			<config-range [configObj]="config" prop="maleVolume" label="Volume" [min]="0" [max]="1" [step]="0.01"></config-range>
			<config-range [configObj]="config" prop="maleRate" label="Speed" [min]="0.1" [max]="10" [step]="0.1"></config-range>
			<config-range [configObj]="config" prop="malePitch" label="Pitch" [min]="0" [max]="2" [step]="0.05"></config-range>

			<div class="custom-config-row">
				<div class="config-label">Test voice</div>
				<div class="config-input">
					<input type="text" class="w100p" [(ngModel)]="maleMessage">
				</div>
				<div class="config-reset">
					<button type="button" (click)="testVoice('male')">Test</button>
				</div>
			</div>
		</config-group>

		<config-group title="Female voice">
			<config-select [configObj]="config" prop="femaleVoice" [items]="voices"
				bindValue="name" bindLabel="name" label="Female Voice"
			></config-select>

			<config-range [configObj]="config" prop="femaleVolume" label="Volume" [min]="0" [max]="1" [step]="0.01"></config-range>
			<config-range [configObj]="config" prop="femaleRate" label="Speed" [min]="0.1" [max]="10" [step]="0.1"></config-range>
			<config-range [configObj]="config" prop="femalePitch" label="Pitch" [min]="0" [max]="2" [step]="0.05"></config-range>

			<div class="custom-config-row">
				<div class="config-label">Female voice</div>
				<div class="config-input">
					<input type="text" class="w100p" [(ngModel)]="femaleMessage">
				</div>
				<div class="config-reset">
					<button type="button" (click)="testVoice('female')">Test</button>
				</div>
			</div>


		</config-group>
	`
})
export class ConfigTTSComponent implements OnInit {
	voices: SpeechSynthesisVoice[] = [];
	config = this.conf.config.ttsConfig;

	femaleMessage = 'Test message';
	maleMessage = 'Test message';

	subs: Subscription[] = [];

	constructor(
		public conf: ConfigService,
		protected tts: TTSService
	) {}

	testVoice(t: 'female' | 'male') {
		const voice = this.voices.find(
			v => v.name === (t === 'female' ? this.config.femaleVoice : this.config.maleVoice)
		);
		this.tts.sayRaw(
			voice,
			t === 'female' ? this.femaleMessage : this.maleMessage,
			t === 'female' ? this.config.femaleRate : this.config.maleRate,
			t === 'female' ? this.config.femalePitch : this.config.malePitch,
			t === 'female' ? this.config.femaleVolume : this.config.maleVolume,
		);
	}

	ngOnInit() {
		this.voices = this.tts.voices;
	}
}