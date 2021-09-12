import { Component, Input } from '@angular/core';
import { CustomElement }    from 'src/app/Model/CustomElement/CustomElement';

@Component({
	selector: 'custom-element-general-config',
	template: `
		<div class="col-12">
			<h5>General Config</h5>
		</div>
		<div class="col-6 mb-3">
			<label for="custom-element-name" class="form-label">Name</label>
			<input type="text" class="form-control form-control-sm" id="custom-element-name"
				placeholder="Enter your custom element name here..."
				[(ngModel)]="customElement.name"
				[ngModelOptions]="{standalone: true}"
			>
		</div>
		<div class="col-6 mb-3">
		</div>
	`
})
export class CustomElementGeneralConfigComponent {
	@Input() customElement: CustomElement;
}