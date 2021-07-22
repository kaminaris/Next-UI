import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';
import { FrameSizeInterface }  from 'src/app/Interface/ConfigInterface';

@Component({
	selector: 'config-size',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<label class="ta-r" style="width: 20%">Width: </label>
			<input style="width: 30%" type="number" [(ngModel)]="size.width" (ngModelChange)="apply()">
			<label class="ta-r" style="width: 20%">Height: </label>
			<input style="width: 30%" type="number" [(ngModel)]="size.height" (ngModelChange)="apply()">
		</div>
		<div class="config-reset">
			<button type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigSizeComponent extends BaseConfigComponent {
	size: FrameSizeInterface;

	ngOnInit() {
		super.ngOnInit();
		this.size = Object.assign({}, this.configObj[this.prop]);
	}

	apply() {
		this.configObj[this.prop] = { width: this.size.width, height: this.size.height };
	}
}