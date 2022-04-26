import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CustomElementGroup } from '../../../../Model/CustomElement/CustomElementGroup';

@Component({
	selector: 'custom-element-group-general-config',
	template: `
		<div class="col-12">
			<h5>General Config</h5>
		</div>
		<div class="col-6 mb-3">
			<label for="custom-element-name" class="form-label">Name</label>
			<input type="text" class="form-control form-control-sm" id="custom-element-name"
				placeholder="Enter your custom element name here..."
				[(ngModel)]="group.name"
				[ngModelOptions]="{standalone: true}"
			>
		</div>
		<div class="col-6 mb-3">
			<button class="btn btn-danger" (click)="delete.emit()">Delete</button>
		</div>
	`
})
export class CustomElementGroupGeneralConfigComponent {
	@Input() group: CustomElementGroup;
	@Output() delete = new EventEmitter();
}