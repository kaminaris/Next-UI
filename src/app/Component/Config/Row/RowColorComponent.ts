import { $e }                       from '@angular/compiler/src/chars';
import { Component, Input, OnInit } from '@angular/core';
import { ColorEvent, ColorMode }    from 'ngx-color';
import { BaseRowComponent }         from 'src/app/Component/Config/Row/BaseRowComponent';

@Component({
	selector: 'tr[row-color]',
	template: `
		<td>{{ label }}</td>
		<td>
			<button class="color-btn" type="button"
				[style.background]="color"
				(click)="toggleWidget()"
			></button>
			<input type="text" [(ngModel)]="color">
			<div class="pos-r">
				<div class="pos-a z10" *ngIf="colorVisible">
					<color-sketch
						[mode]="colorMode"
						[color]="color"
						(onChangeComplete)="changeComplete($event)"
					></color-sketch>
				</div>
			</div>
		</td>
		<td>
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</td>
	`
})
export class RowColorComponent extends BaseRowComponent implements OnInit {
	colorVisible = false;
	colorMode = ColorMode.RGB;

	color: any;

	ngOnInit() {
		super.ngOnInit();
		this.color = this.configObj[this.prop];
	}

	changeComplete($event: ColorEvent) {
		const c = $event.color.rgb;
		const colorText = `rgba(${ c.r }, ${ c.g }, ${ c.b }, ${ c.a })`;
		this.configObj[this.prop] = colorText;
		this.color = colorText;
	}

	toggleWidget() {
		this.colorVisible = !this.colorVisible;
	}
}