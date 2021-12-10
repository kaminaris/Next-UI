import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';
import { LogParser }     from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'control',
	template: `
		<div class="position-relative">
			<ng-content></ng-content>
			<div class="btn-group">
				<button class="btn btn-sm btn-info" tabindex="-1" (click)="toggleTTS($event)" title="Toggle TTS">
					<icon-speaker [muted]="!conf.config.ttsConfig.enabled"></icon-speaker>
				</button>
				<button class="btn btn-sm btn-danger" tabindex="-1" (click)="toggleMoveMode($event)">
					<icon-mover></icon-mover>
				</button>
				<button class="btn btn-sm btn-warning" tabindex="-1" (click)="toggleConfigMode($event)">
					<icon-cog></icon-cog>
				</button>
				<button class="btn btn-sm btn-light" tabindex="-1" (click)="toggleCustomElementsPanel($event)">
					<icon-apps></icon-apps>
				</button>
				<button class="btn btn-sm btn-success" tabindex="-1" (click)="toggleUi($event)">
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

	preventSpaceClick($event: MouseEvent | PointerEvent) {
		if (($event instanceof PointerEvent) && $event.pointerType !== 'mouse') {
			return false;
		}
		($event.target as HTMLButtonElement).blur();
		return true;
	}

	toggleTTS($event: MouseEvent | PointerEvent) {
		if (this.preventSpaceClick($event)) {
			this.conf.config.ttsConfig.enabled = !this.conf.config.ttsConfig.enabled;
		}
	}

	toggleUi($event: MouseEvent | PointerEvent) {
		if (this.preventSpaceClick($event)) {
			this.conf.toggleUi();
		}
	}

	toggleCustomElementsPanel($event: MouseEvent | PointerEvent) {
		if (this.preventSpaceClick($event)) {
			this.conf.toggleCustomElementsPanel();
		}
	}

	toggleConfigMode($event: MouseEvent | PointerEvent) {
		if (this.preventSpaceClick($event)) {
			this.conf.toggleConfigMode();
		}
	}

	toggleMoveMode($event: MouseEvent | PointerEvent) {
		if (this.preventSpaceClick($event)) {
			this.conf.toggleMoveMode();
		}
	}
}