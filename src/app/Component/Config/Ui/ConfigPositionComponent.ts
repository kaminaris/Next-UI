import { Component, Input }    from '@angular/core';
import { BaseConfigComponent }                        from 'src/app/Component/Config/Ui/BaseConfigComponent';
import { FramePositionInterface, FrameSizeInterface } from 'src/app/Interface/ConfigInterface';

@Component({
	selector: 'config-position',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<label class="ta-r" style="width: 20%">X: </label>
			<input style="width: 30%" type="number" [(ngModel)]="position.x" (ngModelChange)="apply()">
			<label class="ta-r" style="width: 20%">Y: </label>
			<input style="width: 30%" type="number" [(ngModel)]="position.y" (ngModelChange)="apply()">
		</div>
		<div class="config-reset">
			<button type="button" (click)="resetConfig(prop)">Reset</button>
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