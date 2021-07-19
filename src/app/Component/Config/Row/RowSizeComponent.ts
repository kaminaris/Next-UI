import { Component, Input, OnInit }                   from '@angular/core';
import { BaseRowComponent }                           from 'src/app/Component/Config/Row/BaseRowComponent';
import { FramePositionInterface, FrameSizeInterface } from 'src/app/ConfigInterface';
import { ConfigService }                              from 'src/app/Service/ConfigService';

@Component({
	selector: 'tr[row-size]',
	template: `
		<td>{{ label }}</td>
		<td>
			<div class="d-flex">
				<label>Width: </label>
				<input type="number" [(ngModel)]="size.width" (ngModelChange)="apply()">
				<label for="">Height: </label>
				<input type="number" [(ngModel)]="size.height" (ngModelChange)="apply()">
			</div>
		</td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowSizeComponent extends BaseRowComponent implements OnInit {
	size: FrameSizeInterface;

	ngOnInit() {
		super.ngOnInit();
		this.size = Object.assign({}, this.configObj[this.prop]);
	}

	apply() {
		this.configObj[this.prop] = { width: this.size.width, height: this.size.height };
	}
}