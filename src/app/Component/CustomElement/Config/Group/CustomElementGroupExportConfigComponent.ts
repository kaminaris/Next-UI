import { Component, Input }   from '@angular/core';
import { CustomElementGroup } from 'src/app/Model/CustomElement/CustomElementGroup';
import { LogParser }          from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'custom-element-group-export-config',
	template: `
		<div class="col-12 mb-3">
			<config-group title="Export/Import">
				<div class="btn-group">
					<button class="btn btn-success" (click)="export()">Export</button>
					<button class="btn btn-danger" (click)="import()">Import</button>
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
export class CustomElementGroupExportConfigComponent {
	@Input() group: CustomElementGroup;
	exportedText = '';

	constructor(protected parser: LogParser) {}

	update() {
		this.group.update();
	}

	export() {
		this.exportedText = JSON.stringify(this.group.serialize());
	}

	import() {
		this.group.unserialize(JSON.parse(this.exportedText), this.parser);
	}
}