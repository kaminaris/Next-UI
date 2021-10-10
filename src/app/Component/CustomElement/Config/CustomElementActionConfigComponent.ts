import { Component, Input } from '@angular/core';
import { CustomElement }    from 'src/app/Model/CustomElement/CustomElement';
import { LogParser }        from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'custom-element-action-config',
	template: `
		<div class="col-12 mb-3">
			<config-group title="Export/Import">
				<div class="btn-group">
				</div>
				<div class="custom-config-row">
					<div class="config-label">Export</div>
					<div class="config-input">
						<textarea class="form-control" [(ngModel)]="exportedText" rows="3"></textarea>
					</div>
				</div>
			</config-group>

		</div>
	`
})
export class CustomElementActionConfigComponent {
	@Input() customElement: CustomElement;
	exportedText = '';

	constructor(protected parser: LogParser) {}

	update() {
		this.customElement?.update.next(true);
	}
}