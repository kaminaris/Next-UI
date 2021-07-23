import { Component, Input }      from '@angular/core';
import { ColorEvent, ColorMode } from 'ngx-color';
import { BaseConfigComponent }   from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-color',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input d-flex flex-row">
			<div class="pos-r" style="top: 30px;">
				<div class="pos-a z10" *ngIf="colorVisible">
					<color-sketch
						[mode]="colorMode"
						[color]="color"
						(onChangeComplete)="changeComplete($event)"
					></color-sketch>
				</div>
			</div>
			<button class="btn btn-sm color-btn" type="button"
				[style.background]="color"
				(click)="toggleWidget()"
			></button>
			<input type="text" class="form-control form-control-sm color-input-field" [(ngModel)]="color">
		</div>
		<div class="config-reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigColorComponent extends BaseConfigComponent {
	colorVisible = false;
	colorMode = ColorMode.RGB;

	color: any;

	ngOnInit() {
		super.ngOnInit();
		this.color = this.configObj[this.prop];
		if (!this.color) {
			this.color = 'rgba(0, 0, 0, 1)';
		}
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