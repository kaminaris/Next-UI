import { Component, Input } from '@angular/core';

@Component({
	selector: 'config-group',
	template:`
		<div class="config-group">
			<h4 class="ta-c">{{ title }}</h4>
			<div class="config-group-content">
				<ng-content></ng-content>
			</div>
		</div>
	`
})
export class ConfigGroupComponent {
	@Input() title = ''
}