import { Component, Input }      from '@angular/core';
import { ColorEvent, ColorMode } from 'ngx-color';
import { BaseConfigComponent }   from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-color',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input d-flex flex-row">
			<div class="position-relative" style="top: 30px;">
				<div class="position-absolute z10" *ngIf="colorVisible">
					<color-sketch
						[mode]="colorMode"
						[color]="value"
						(onChangeComplete)="changeComplete($event)"
					></color-sketch>
				</div>
			</div>
			<button class="btn btn-sm color-btn" type="button"
				[style.background]="value"
				(click)="toggleWidget()"
			></button>
			<input type="text" class="form-control form-control-sm color-input-field" 
				[(ngModel)]="value"
				(ngModelChange)="setValue(value)"
			>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning w100p" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigColorComponent extends BaseConfigComponent {
	colorVisible = false;
	colorMode = ColorMode.RGB;

	ngOnInit() {
		super.ngOnInit();
		if (!this.value) {
			this.value = 'rgba(0, 0, 0, 1)';
		}
	}

	changeComplete($event: ColorEvent) {
		const c = $event.color.rgb;
		const colorText = `rgba(${ c.r }, ${ c.g }, ${ c.b }, ${ c.a })`;
		this.setValue(colorText);
		this.value = colorText;
	}

	toggleWidget() {
		this.colorVisible = !this.colorVisible;
	}

	resetConfig(prop: string) {
		super.resetConfig(prop);
		if (!this.value) {
			this.value = 'rgba(0, 0, 0, 1)';
		}
	}
}