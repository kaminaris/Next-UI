import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';
import { LogParser }     from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'control',
	template: `
		<div class="position-relative">
			<ng-content></ng-content>
			<div class="btn-group">
				<button class="btn btn-sm btn-info" (click)="toggleTTS()" title="Toggle TTS">
					<icon-speaker [muted]="!conf.config.ttsConfig.enabled"></icon-speaker>
				</button>
				<button class="btn btn-sm btn-danger" (click)="conf.toggleMoveMode()" >
					<icon-mover></icon-mover>
				</button>
				<button class="btn btn-sm btn-warning" (click)="conf.toggleConfigMode()" >
					<icon-cog></icon-cog>
				</button>
				<button class="btn btn-sm btn-light" (click)="conf.toggleCustomElementsPanel()" >
					<icon-apps></icon-apps>
				</button>
				<button class="btn btn-sm btn-success" (click)="conf.toggleUi()">
					<icon-eye [off]="!conf.uiVisible"></icon-eye>
				</button>
			</div>
		</div>
	`
})
export class ControlComponent {

	constructor(
		public parser: LogParser,
		public conf: ConfigService
	) {}

	toggleTTS() {
		this.conf.config.ttsConfig.enabled = !this.conf.config.ttsConfig.enabled;
	}
}