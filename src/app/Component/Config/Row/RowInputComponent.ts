import { Component, Input } from '@angular/core';
import { BaseRowComponent } from 'src/app/Component/Config/Row/BaseRowComponent';

@Component({
	selector: 'tr[row-input]',
	template: `
		<td>{{ label }}</td>
		<td><input [type]="inputType" [(ngModel)]="configObj[prop]"></td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowInputComponent extends BaseRowComponent {
	@Input() inputType = 'text';
}