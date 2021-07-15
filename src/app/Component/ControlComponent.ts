import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';
import { LogParser }     from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'control',
	template: `
		<div class="pos-r">
			<ng-content></ng-content>
			<button (click)="toggleTTS()" title="Toggle TTS">{{ parser.tts.disabled ? '0' : '1' }}</button>
			<button (click)="conf.toggleMoveMode()">⚙</button>
		</div>
	`
})
export class ControlComponent {

	constructor(
		public parser: LogParser,
		public conf: ConfigService
	) {}

	toggleTTS() {
		this.parser.tts.disabled = !this.parser.tts.disabled;
	}
}