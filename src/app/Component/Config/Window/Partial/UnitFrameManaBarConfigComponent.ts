import { Component, Input }         from '@angular/core';
import { UnitFrameHealthBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameHealthBarConfig';
import { barDirections }            from 'src/app/Data/barDirections';
import { barStyles }                from 'src/app/Data/barStyles';
import { UnitFrameManaBarConfig }   from 'src/app/Model/Config/UnitFrame/UnitFrameManaBarConfig';

@Component({
	selector: 'unit-frame-mana-bar',
	template: `
		<config-group title="Mana Bar">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="show" label="Show Mana Bar"></config-checkbox>
			<config-input [configObj]="configObj" [configPath]="configPath" prop="height" label="Mana Height"></config-input>
			<config-color [configObj]="configObj" [configPath]="configPath" prop="barColor" label="Mana Color"></config-color>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="barStyles" prop="barStyle" label="Bar Style"></config-select>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="barDirections" prop="barDirection" label="Bar Direction"></config-select>
		</config-group>
	`
})
export class UnitFrameManaBarConfigComponent {
	@Input() configObj: UnitFrameManaBarConfig;
	@Input() configPath: string;

	barStyles = barStyles;
	barDirections = barDirections;
}