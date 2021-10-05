import { Component, Input }     from '@angular/core';
import { UnitFrameBasicConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameBasicConfig';

@Component({
	selector: 'unit-frame-basic',
	template: `
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="enabled" label="Enabled"></config-checkbox>

		<config-position [configObj]="configObj" [configPath]="configPath" prop="position" label="Position"></config-position>
		<config-size [configObj]="configObj" [configPath]="configPath" prop="size" label="Size"></config-size>

		<config-color [configObj]="configObj" [configPath]="configPath" prop="backgroundColor" label="Background"></config-color>

		<config-range [configObj]="configObj" [configPath]="configPath" prop="borderWidth" [min]="0" [max]="20" [step]="1" label="Border Width"></config-range>
		<config-color [configObj]="configObj" [configPath]="configPath" prop="borderColor" label="Border Color"></config-color>
	`
})
export class UnitFrameBasicConfigComponent {
	@Input() configObj: UnitFrameBasicConfig;
	@Input() configPath: string;
}