import { Component }              from '@angular/core';
import { BaseConfigComponent }    from 'src/app/Component/Config/Ui/BaseConfigComponent';
import { FramePositionInterface } from 'src/app/Interface/FramePositionInterface';

@Component({
	selector: 'config-position',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input d-flex flex-row">
			<label class="ta-r" style="width: 20%">X: </label>
			<input class="form-control form-control-sm" style="width: 30%" type="number" [(ngModel)]="position.x" (ngModelChange)="apply()">
			<label class="ta-r" style="width: 20%">Y: </label>
			<input class="form-control form-control-sm" style="width: 30%" type="number" [(ngModel)]="position.y" (ngModelChange)="apply()">
		</div>
		<div class="config-reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigPositionComponent extends BaseConfigComponent {
	position: FramePositionInterface;

	ngOnInit() {
		super.ngOnInit();
		this.position = { x: this.configObj[this.prop].x, y: this.configObj[this.prop].y };
	}

	apply() {
		this.configObj[this.prop] = { x: this.position.x, y: this.position.y };
	}
}