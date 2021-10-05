import { Component, Input }      from '@angular/core';
import { anchors }               from 'src/app/Data/anchors';
import { barDirections }         from 'src/app/Data/barDirections';
import { barStyles }             from 'src/app/Data/barStyles';
import { StatusFilter }          from 'src/app/Interface/StatusFilter';
import { UnitFrameStatusConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameStatusConfig';

@Component({
	selector: 'unit-frame-status',
	template: `
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="show" label="Show"></config-checkbox>
		<config-position [configObj]="configObj" [configPath]="configPath" prop="position" label="Aura Position"></config-position>
		<config-select [configObj]="configObj" [configPath]="configPath" [items]="anchors" prop="anchor" label="Aura Anchor"></config-select>
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="onlyOwn" label="Only own"></config-checkbox>
		<config-multiselect [configObj]="configObj" [configPath]="configPath" [items]="filters" bindValue="name" bindLabel="name"
			prop="filters" label="Aura Filters"></config-multiselect>
	`
})
export class UnitFrameStatusConfigComponent {
	@Input() configObj: UnitFrameStatusConfig;
	@Input() configPath: string;
	@Input() filters: StatusFilter[];

	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
}