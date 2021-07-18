import { Component, Input } from '@angular/core';
import { BaseRowComponent } from 'src/app/Component/Config/Row/BaseRowComponent';

@Component({
	selector: 'tr[row-color]',
	template: `
		<td>{{ label }}</td>
		<td>
			<button class="color-btn" [(colorPicker)]="configObj[prop]" [style.background]="configObj[prop]"></button>
			<input type="text" [(ngModel)]="configObj[prop]">
		</td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowColorComponent extends BaseRowComponent {
	@Input() inputType = 'text';
}