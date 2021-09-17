import { Component, Input }    from '@angular/core';
import { BaseConfigComponent } from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-select',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<ng-select
				class="form-control form-control-sm"
				[(ngModel)]="value"
				[items]="items"
				[clearable]="false"
				[searchable]="false"
				[bindLabel]="bindLabel"
				[bindValue]="bindValue"
				(ngModelChange)="changeComplete($event)"
			></ng-select>
		</div>
		<div class="config-reset" *ngIf="reset">
			<button class="btn btn-sm btn-warning" type="button" (click)="resetConfig(prop)">Reset</button>
		</div>
	`
})
export class ConfigSelectComponent extends BaseConfigComponent {
	@Input() items: any[];
	@Input() bindLabel = 'label';
	@Input() bindValue = 'value';

	value: any;

	ngOnInit() {
		super.ngOnInit();
		this.value = this.getValue();
		if (!this.value) {
			this.value = null;
		}
	}

	changeComplete($event: any) {
		this.setValue($event);
		this.value = $event;
	}

	resetConfig(prop: string) {
		super.resetConfig(prop);
		this.value = this.getValue();
		if (!this.value) {
			this.value = null;
		}
	}
}