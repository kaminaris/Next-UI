import { Component, Input }   from '@angular/core';
import { anchors }            from 'src/app/Data/anchors';
import { CustomElementGroup } from 'src/app/Model/CustomElement/CustomElementGroup';

@Component({
	selector: 'custom-element-group-visual-config',
	template: `
		<div class="col-12 mb-3">
			<config-group title="Placement">
				<config-position label="Position"
					[configObj]="group"
					prop="position"
					[reset]="false"
					(afterSet)="update()"
				></config-position>

				<config-size label="Size"
					[configObj]="group"
					prop="size"
					[reset]="false"
					(afterSet)="update()"
				></config-size>

				<config-checkbox label="Dynamic Position"
					[configObj]="group"
					prop="dynamic"
					[reset]="false"
					(afterSet)="update()"
				></config-checkbox>

				<config-checkbox label="Vertical"
					[configObj]="group"
					prop="vertical"
					[reset]="false"
					(afterSet)="update()"
				></config-checkbox>
				
				
			</config-group>
		</div>
	`
})
export class CustomElementGroupVisualConfigComponent {
	@Input() group: CustomElementGroup;
	anchors = anchors;

	update() {
		this.group.update();
	}
}