import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-multiselect',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<ng-select
				class="form-control form-control-sm"
				[(ngModel)]="configObj[prop]"
				[items]="items"
				[clearable]="false"
				[bindLabel]="bindLabel"
				[multiple]="true"
				[bindValue]="bindValue"
			></ng-select>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning w100p" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigMultiselectComponent extends BaseConfigComponent {
	@Input() items: any[];
	@Input() bindLabel = 'label';
	@Input() bindValue = 'value';
}