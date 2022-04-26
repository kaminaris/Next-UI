import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject }                                                                             from 'rxjs';

import { CustomElement } from 'src/app/Model/CustomElement/CustomElement';

@Component({
	selector: 'custom-element-general-config',
	template: `
		<config-group title="General Config">
			<config-input
				[configObj]="customElement"
				prop="name"
				[reset]="false"
				(afterSet)="update()"
				[updateSubject]="updated"
			></config-input>
		</config-group>

		<div class="col-6 mb-3">
			<button class="btn btn-danger" (click)="delete.emit()">Delete</button>
		</div>
	`
})
export class CustomElementGeneralConfigComponent implements OnChanges {
	@Input() customElement: CustomElement;
	@Output() delete = new EventEmitter();
	updated = new Subject();

	constructor(protected cd: ChangeDetectorRef) {}

	ngOnChanges(changes: SimpleChanges) {
		this.updated.next(true);
	}

	update() {
		this.customElement?.update.next(true);
	}
}