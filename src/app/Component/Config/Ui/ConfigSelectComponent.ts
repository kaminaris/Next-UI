import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-select',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<ng-select
				[(ngModel)]="configObj[prop]"
				[items]="items"
				[clearable]="false"
				[searchable]="false"
				[bindLabel]="bindLabel"
				[bindValue]="bindValue"
			></ng-select>
		</div>
		<div class="config-reset">
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigSelectComponent extends BaseConfigComponent {
	@Input() items: any[];
	@Input() bindLabel = 'label';
	@Input() bindValue = 'value';
}