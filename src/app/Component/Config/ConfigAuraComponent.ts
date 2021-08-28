import { Component }  from '@angular/core';
import { MainConfig } from 'src/app/Model/Config/MainConfig';

@Component({
	selector: 'config-aura',
	template: `
		<h4 class="ta-c">Aura Icons</h4>

		<config-group title="Basic">
			<config-checkbox [frameName]="frameName" prop="enabled" label="Enabled"></config-checkbox>
			<config-input [frameName]="frameName" prop="iconSize" label="Icon Size"></config-input>
			<config-input [frameName]="frameName" prop="fontSize" label="Font Size"></config-input>
			<config-color [frameName]="frameName" prop="fontColor" label="Font Color"></config-color>
			<config-color [frameName]="frameName" prop="barColor" label="Border Color"></config-color>
			<config-select [frameName]="frameName" prop="cooldownPrecision" [items]="precisions" label="Cooldown precision"></config-select>
			<config-checkbox [frameName]="frameName" prop="cooldownOutline" label="Cooldown outline"></config-checkbox>
		</config-group>
	`
})
export class ConfigAuraComponent {
	frameName: keyof MainConfig['frames'] = 'auraBar';

	precisions = [
		{ label: '0 digits', value: 0 },
		{ label: '1 digits', value: 1 },
		{ label: '2 digits', value: 2 }
	];
}