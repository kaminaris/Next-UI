import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-range',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input d-flex flex-row">
			<input class="w100p" type="range" [min]="min" [max]="max" [step]="step"
				[(ngModel)]="configObj[prop]">
			<span style="flex: 0 0 auto; width: 40px">
				{{ configObj[prop] }}
			</span>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigRangeComponent extends BaseConfigComponent {
	@Input() min = 0;
	@Input() max = 1;
	@Input() step = 0.1;

	ngOnInit() {
		super.ngOnInit();

	}
}