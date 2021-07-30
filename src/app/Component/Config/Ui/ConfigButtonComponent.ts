import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseConfigComponent }      from 'src/app/Component/Config/Ui/BaseConfigComponent';

@Component({
	selector: 'config-button',
	template: `
		<div class="config-label">{{ label }}</div>
		<div class="config-input">
			<button class="btn btn-sm btn-warning" type="button" (click)="click.emit(true)">
				{{ buttonLabel }}
			</button>
		</div>
	`
})
export class ConfigButtonComponent extends BaseConfigComponent {
	@Input() buttonLabel = '';
	@Output() click = new EventEmitter<boolean>();
}