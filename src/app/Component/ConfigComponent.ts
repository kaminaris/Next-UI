import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-col config-window">
			<div class="config-bar">NextUI - Config</div>

			<div class="config-content d-flex flex-row">
				<div class="config-pane">
					<div>
						<button *ngFor="let cat of categories"
							[class.active]="currentCategory === cat.value"
							(click)="switchWindow(cat.value)">
							{{ cat.label }}
						</button>
					</div>
				</div>
				<div class="flex-grow" style="overflow-y: auto;">
					<config-main *ngIf="currentCategory === 'main'"></config-main>
					<config-player *ngIf="currentCategory === 'player'"></config-player>
					<config-target *ngIf="currentCategory === 'target'"></config-target>
					<config-target-of-target *ngIf="currentCategory === 'targetOfTarget'"></config-target-of-target>
					<config-party *ngIf="currentCategory === 'party'"></config-party>
					<config-aura *ngIf="currentCategory === 'aura'"></config-aura>
				</div>
			</div>
		</div>
	`
})
export class ConfigComponent {
	categories = [
		{ value: 'main', label: 'General settings' },
		{ value: 'player', label: 'Player' },
		{ value: 'target', label: 'Target' },
		{ value: 'targetOfTarget', label: 'Target Of Target' },
		{ value: 'party', label: 'Party' },
		{ value: 'aura', label: 'Aura' }
	];

	currentCategory = 'main';

	constructor(public conf: ConfigService) {}

	switchWindow(pane: string) {
		this.currentCategory = pane;
	}
}