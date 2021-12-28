import { Component, Inject } from '@angular/core';
import { ConfigService }     from 'src/app/Service/ConfigService';
import { default as config } from '../../../package.json';

@Component({
	selector: 'config-window',
	template: `
		<ng-content></ng-content>

		<window-panel (close)="closeConfig()" style="font-family: 'Segoe UI', sans-serif">
			<ng-container header>
				<img [src]="logoUrl" style="width: 39px; background: #fff;" alt="NextUI">
				<h4 class="mt-1 ms-2">
					NextUI - Config <small class="text-muted">(v{{ version }})</small>
				</h4>
			</ng-container>

			<ng-container pane>
				<div class="btn-group-vertical w100p">
					<button class="btn btn-sm"
						*ngFor="let cat of categories"
						[ngClass]="currentCategory === cat.value ? 'btn-dark bg-light text-dark' : 'btn-outline-dark text-light'"
						(click)="switchWindow(cat.value)">
						{{ cat.label }}
					</button>
				</div>
			</ng-container>

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
		</window-panel>
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