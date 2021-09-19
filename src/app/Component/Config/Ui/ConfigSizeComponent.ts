import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';
import { FrameSizeInterface }  from 'src/app/Interface/FrameSizeInterface';

@Component({
	selector: 'config-size',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input d-flex flex-row">
			<label class="ta-r lh-30 pe-1" style="width: 20%">
				Width: 
			</label>
			<input class="form-control form-control-sm" style="width: 30%" type="number" 
				[(ngModel)]="size.width" 
				(ngModelChange)="apply()">
			<label class="ta-r lh-30 pe-1" style="width: 20%">
				Height: 
			</label>
			<input class="form-control form-control-sm" style="width: 30%" type="number" 
				[(ngModel)]="size.height" 
				(ngModelChange)="apply()"
			>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigSizeComponent extends BaseConfigComponent {
	size: FrameSizeInterface;

	ngOnInit() {
		super.ngOnInit();
		this.size = Object.assign({}, this.getValue());
	}

	apply() {
		this.setValue({ width: this.size.width, height: this.size.height });
	}
}