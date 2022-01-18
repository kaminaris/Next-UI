import { Component, Input }    from '@angular/core';
import { anchors }             from 'src/app/Data/anchors';
import { barDirections }       from 'src/app/Data/barDirections';
import { barStyles }           from 'src/app/Data/barStyles';
import { UnitFrameSignConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameSignConfig';

@Component({
	selector: 'unit-frame-leader',
	template: `
		<config-group title="Leader Icon">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="show" label="Show"></config-checkbox>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="anchors" prop="anchor" label="Anchor"></config-select>
			<config-position [configObj]="configObj" [configPath]="configPath" prop="position" label="Position"></config-position>
			<config-input [configObj]="configObj" [configPath]="configPath" inputType="number" prop="size" label="Size"></config-input>
		</config-group>
	`
})
export class UnitFrameLeaderConfigComponent {
	@Input() configObj: UnitFrameSignConfig;
	@Input() configPath: string;

	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
}