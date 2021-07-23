import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-checkbox',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<input type="checkbox" [(ngModel)]="configObj[prop]">
		</div>
		<div class="config-reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigCheckboxComponent extends BaseConfigComponent {
}