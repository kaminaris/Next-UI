import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-tooltip',
	template: `
		<config-group title="Tooltip Configuration">
			<config-checkbox [configObj]="config" prop="enabled" label="Enabled"></config-checkbox>
			<config-input [configObj]="config" prop="width" label="Max Width"></config-input>
			<config-input [configObj]="config" prop="padding" label="Padding"></config-input>
			<config-color [configObj]="config" prop="backgroundColor" label="Background Color"></config-color>
			<config-range [configObj]="config" prop="borderWidth" [min]="0" [max]="20" [step]="1" label="Border Width"></config-range>
			<config-color [configObj]="config" prop="borderColor" label="Border Color"></config-color>
		</config-group>

		<config-group title="Text">
			<config-color [configObj]="config" prop="fontColor" label="Font Color"></config-color>
			<config-input [configObj]="config" prop="fontSize" label="Font Size"></config-input>
			<config-checkbox [configObj]="config" prop="outline" label="Text Outline"></config-checkbox>
		</config-group>
	`
})
export class ConfigWindowTooltipComponent {
	config = this.conf.config.tooltipConfig;

	constructor(public conf: ConfigService) {}
}