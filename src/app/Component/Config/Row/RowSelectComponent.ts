import { Component, Input } from '@angular/core';
import { BaseRowComponent } from 'src/app/Component/Config/Row/BaseRowComponent';
import { ConfigService }    from 'src/app/Service/ConfigService';

@Component({
	selector: 'tr[row-select]',
	template: `
		<td>{{ label }}</td>
		<td>
			<ng-select
				[(ngModel)]="configObj[prop]"
				[items]="items"
				[clearable]="false"
				[searchable]="false"
				[bindLabel]="bindLabel"
				[bindValue]="bindValue"
			></ng-select>
		</td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowSelectComponent extends BaseRowComponent {
	@Input() items: any[];
	@Input() bindLabel = 'label';
	@Input() bindValue = 'value';
}