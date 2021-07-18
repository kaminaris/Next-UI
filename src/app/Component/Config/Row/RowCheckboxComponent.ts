import { Component, Input, OnInit } from '@angular/core';
import { BaseRowComponent }         from 'src/app/Component/Config/Row/BaseRowComponent';
import { ConfigService }            from 'src/app/Service/ConfigService';

@Component({
	selector: 'tr[row-checkbox]',
	template: `
		<td>{{ label }}</td>
		<td><input type="checkbox" [(ngModel)]="configObj[prop]"></td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowCheckboxComponent extends BaseRowComponent {
}