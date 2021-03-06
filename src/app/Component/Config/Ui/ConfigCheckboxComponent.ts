import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-checkbox',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<input class="form-check-input" [id]="'checkbox' + id" type="checkbox" 
				[(ngModel)]="value"
				(ngModelChange)="setValue(value)"
			>
			<label [for]="'checkbox' + id"></label>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning w100p" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigCheckboxComponent extends BaseConfigComponent {
	id = '_' + Math.random().toString(36).substr(2, 9);
}