import { Component, Input }        from '@angular/core';
import { UnitFrameDistanceConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameDistanceConfig';

@Component({
	selector: 'unit-frame-distance',
	template: `
		<config-group title="Distance Opacity">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="enabled" label="Distance Enabled"></config-checkbox>
			<config-input [configObj]="configObj" [configPath]="configPath" inputType="number" prop="opacity" label="Opacity"></config-input>
			<config-input [configObj]="configObj" [configPath]="configPath" inputType="number" prop="threshold" label="Threshold"></config-input>
		</config-group>
	`
})
export class UnitFrameDistanceConfigComponent {
	@Input() configObj: UnitFrameDistanceConfig;
	@Input() configPath: string;
}