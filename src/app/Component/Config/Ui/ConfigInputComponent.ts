import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-input',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<input class="w100p" [type]="inputType" [(ngModel)]="configObj[prop]">
		</div>
		<div class="config-reset">
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigInputComponent extends BaseConfigComponent {
	@Input() inputType = 'text';
}