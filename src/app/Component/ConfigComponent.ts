import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';
import {default as config}       from '../../../package.json';

@Component({
	selector: 'config-window',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column config-window">
			<div class="config-bar">
				<h4 class="mt-1">NextUI - Config (v{{ version }})</h4>
				<button class="btn btn-sm btn-danger config-close-btn pos-a" (click)="closeConfig()">
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
					<config-tts *ngIf="currentCategory === 'tts'"></config-tts>
					<config-player *ngIf="currentCategory === 'player'"></config-player>
					<config-target *ngIf="currentCategory === 'target'"></config-target>
					<config-target-of-target *ngIf="currentCategory === 'targetOfTarget'"></config-target-of-target>
					<config-party *ngIf="currentCategory === 'party'"></config-party>
					<config-aggro-list *ngIf="currentCategory === 'aggroList'"></config-aggro-list>
					<config-aura *ngIf="currentCategory === 'aura'"></config-aura>
					<config-window-profile *ngIf="currentCategory === 'profile'"></config-window-profile>
				</div>
			</div>
		</div>
	`
})
export class ConfigComponent {
	version = config.version;

	categories = [
		{ value: 'main', label: 'General settings' },
		{ value: 'color', label: 'Colors' },
		{ value: 'tts', label: 'Text to speech' },
		{ value: 'player', label: 'Player' },
		{ value: 'target', label: 'Target' },
		{ value: 'targetOfTarget', label: 'Target Of Target' },
		{ value: 'party', label: 'Party' },
		{ value: 'aggroList', label: 'Aggro List' },
		{ value: 'aura', label: 'Aura' },
		{ value: 'profile', label: 'Profiles' }
	];

	currentCategory = 'main';

	constructor(public conf: ConfigService) {}

	switchWindow(pane: string) {
		this.currentCategory = pane;
	}

	closeConfig() {
		this.conf.toggleConfigMode();
	}
}