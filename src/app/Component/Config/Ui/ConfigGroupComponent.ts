import { Component, Input } from '@angular/core';

@Component({
	selector: 'config-group',
	template:`
		<div class="card mb-3">
			<h5 class="card-header fz-16">{{ title }}</h5>
			<div class="card-body">
				<ng-content></ng-content>
			</div>
		</div>
	`
})
export class ConfigGroupComponent {
	@Input() title = ''
}