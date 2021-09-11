import { Component, Inject } from '@angular/core';
import { ConfigService }     from 'src/app/Service/ConfigService';
import { default as config } from '../../../package.json';

@Component({
	selector: 'config-window',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column config-window">
			<div class="config-bar d-flex">
				<img [src]="logoUrl" style="width: 39px; background: #fff;" alt="NextUI">
				<h4 class="mt-1">
					NextUI - Config <small class="text-muted">(v{{ version }})</small>
				</h4>
				<button class="btn btn-sm btn-danger config-close-btn position-absolute" (click)="closeConfig()">
					<icon-close></icon-close>
				</button>
			</div>

			<div class="config-content d-flex flex-row">
				<div class="config-pane">
					<div class="btn-group-vertical w100p">
						<button class="btn btn-sm"
							*ngFor="let cat of categories"
							[ngClass]="currentCategory === cat.value ? 'btn-info' : 'btn-outline-info'"
							(click)="switchWindow(cat.value)">
							{{ cat.label }}
						</button>
					</div>
				</div>
				<div class="flex-grow" style="overflow-y: auto;">
					<config-main *ngIf="currentCategory === 'main'"></config-main>
					<config-window-color *ngIf="currentCategory === 'color'"></config-window-color>
					<config-window-tts *ngIf="currentCategory === 'tts'"></config-window-tts>
					<config-window-player *ngIf="currentCategory === 'player'"></config-window-player>
					<config-window-target *ngIf="currentCategory === 'target'"></config-window-target>
					<config-window-target-of-target *ngIf="currentCategory === 'targetOfTarget'"></config-window-target-of-target>
					<config-window-focus *ngIf="currentCategory === 'focus'"></config-window-focus>
					<config-window-party *ngIf="currentCategory === 'party'"></config-window-party>
					<config-window-aggro-list *ngIf="currentCategory === 'aggroList'"></config-window-aggro-list>
					<config-window-aura *ngIf="currentCategory === 'aura'"></config-window-aura>
					<config-window-aura-filter *ngIf="currentCategory === 'auraFilter'"></config-window-aura-filter>
					<config-window-tooltip *ngIf="currentCategory === 'tooltip'"></config-window-tooltip>
					<config-window-profile *ngIf="currentCategory === 'profile'"></config-window-profile>
				</div>
			</div>
		</div>
	`
})
export class ConfigComponent {
	version = config.version;
	logoUrl = this.baseUrl + '/assets/nu.png';

	categories = [
		{ value: 'main', label: 'General settings' },
		{ value: 'color', label: 'Colors' },
		{ value: 'tts', label: 'Text to speech' },
		{ value: 'player', label: 'Player' },
		{ value: 'target', label: 'Target' },
		{ value: 'targetOfTarget', label: 'Target Of Target' },
		{ value: 'focus', label: 'Focus' },
		{ value: 'party', label: 'Party' },
		{ value: 'aggroList', label: 'Aggro List' },
		{ value: 'aura', label: 'Aura' },
		{ value: 'auraFilter', label: 'Aura Filters' },
		{ value: 'tooltip', label: 'Tooltip' },
		{ value: 'profile', label: 'Profiles' }
	];

	currentCategory = 'main';

	constructor(
		public conf: ConfigService,
		@Inject('BASE_URL') protected baseUrl: string
	) {}

	switchWindow(pane: string) {
		this.currentCategory = pane;
	}

	closeConfig() {
		this.conf.toggleConfigMode();
	}
}