import { Component, OnInit }      from '@angular/core';
import { BaseRowComponent }       from 'src/app/Component/Config/Row/BaseRowComponent';
import { FramePositionInterface } from 'src/app/ConfigInterface';

@Component({
	selector: 'tr[row-position]',
	template: `
		<td>{{ label }}</td>
		<td>
			<div class="d-flex">
				<label>X: </label>
				<input type="number" [(ngModel)]="position.x" (ngModelChange)="apply()">
				<label>Y: </label>
				<input type="number" [(ngModel)]="position.y" (ngModelChange)="apply()">
			</div>
		</td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowPositionComponent extends BaseRowComponent implements OnInit {
	position: FramePositionInterface;

	ngOnInit() {
		super.ngOnInit();
		this.position = { x: this.configObj[this.prop].x, y: this.configObj[this.prop].y };
	}

	apply() {
		this.configObj[this.prop] = { x: this.position.x, y: this.position.y };
	}
}