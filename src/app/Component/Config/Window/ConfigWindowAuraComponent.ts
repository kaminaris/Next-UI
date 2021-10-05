import { Component }     from '@angular/core';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-aura',
	template: `
		<h4 class="ta-c">Aura Icons</h4>

		<config-group title="Basic">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="enabled" label="Enabled"></config-checkbox>
			<config-input [configObj]="configObj" [configPath]="configPath" prop="iconSize" label="Icon Size"></config-input>
			<config-color [configObj]="configObj" [configPath]="configPath" prop="barColor" label="Border Color"></config-color>
			<config-select [configObj]="configObj" [configPath]="configPath" prop="cooldownPrecision" [items]="precisions" label="Cooldown precision"></config-select>
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="cooldownOutline" label="Cooldown outline"></config-checkbox>
		</config-group>

		<config-text-widget title="Duration label"
			[configObj]="configObj.widgets.duration"
			[configPath]="configPath + '.widgets.duration'"
		></config-text-widget>

		<config-text-widget title="Stacks label"
			[configObj]="configObj.widgets.stacks"
			[configPath]="configPath + '.widgets.stacks'"
		></config-text-widget>
	`
})
export class ConfigWindowAuraComponent {
	frameName: keyof MainConfig['frames'] = 'auraBar';
	configObj = this.conf.config.frames.auraBar;
	configPath = 'frames.auraBar';

	precisions = [
		{ label: '0 digits', value: 0 },
		{ label: '1 digits', value: 1 },
		{ label: '2 digits', value: 2 }
	];

	constructor(public conf: ConfigService) {}
}