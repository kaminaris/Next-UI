import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject }                                                       from 'rxjs';
import { CustomElement }                                                 from 'src/app/Model/CustomElement/CustomElement';

@Component({
	selector: 'custom-element-general-config',
	template: `
		<config-group title="General Config">
			<config-input [configObj]="customElement" prop="name" [reset]="false" (afterSet)="update()" [updateSubject]="updated"></config-input>
		</config-group>
	`
})
export class CustomElementGeneralConfigComponent implements OnChanges {
	@Input() customElement: CustomElement;
	updated = new Subject();

	constructor(protected cd: ChangeDetectorRef) {}

	ngOnChanges(changes: SimpleChanges) {
		this.updated.next(true);
	}

	update() {
		this.customElement?.update.next(true);
	}
}