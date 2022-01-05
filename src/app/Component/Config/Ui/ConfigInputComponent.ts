import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-input',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<button *ngIf="helpUrl" class="btn btn-outline-info" (click)="openHelp()">?</button>
			<input class="form-control form-control-sm w100p" 
				[type]="inputType" 
				[(ngModel)]="value"
				(ngModelChange)="setValue(value)"
			>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning w100p" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigInputComponent extends BaseConfigComponent {
	@Input() inputType = 'text';
}