import { Component, Input }         from '@angular/core';
import { UnitFrameHealthBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameHealthBarConfig';
import { barDirections }            from 'src/app/Data/barDirections';
import { barStyles }                from 'src/app/Data/barStyles';

@Component({
	selector: 'unit-frame-health-bar',
	template: `
		<config-group title="Health Bar">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="useClassColor" label="Use Class Color"></config-checkbox>
			<config-color [configObj]="configObj" [configPath]="configPath" prop="barColor" label="HP Color"></config-color>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="barStyles" prop="barStyle" label="Bar Style"></config-select>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="barDirections" prop="barDirection" label="Bar Direction"></config-select>
		</config-group>
	`
})
export class UnitFrameHealthBarConfigComponent {
	@Input() configObj: UnitFrameHealthBarConfig;
	@Input() configPath: string;

	barStyles = barStyles;
	barDirections = barDirections;
}