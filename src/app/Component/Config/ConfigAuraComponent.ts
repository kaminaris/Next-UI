import { Component }  from '@angular/core';
import { MainConfig } from 'src/app/Model/Config/MainConfig';

@Component({
	selector: 'config-aura',
	template: `
		<h3 class="ta-c">Aura Icons</h3>
		<hr>

		<table style="width: 100%;">
			<tr row-input [frameName]="frameName" prop="iconSize" label="Icon Size"></tr>
			<tr row-input [frameName]="frameName" prop="fontSize" label="Font Size"></tr>
			<tr row-color [frameName]="frameName" prop="fontColor" label="Font Color"></tr>
			<tr row-color [frameName]="frameName" prop="barColor" label="Border Color"></tr>
			<tr row-select [frameName]="frameName" prop="cooldownPrecision" [items]="precisions" label="Cooldown precision"></tr>
			<tr row-checkbox [frameName]="frameName" prop="cooldownOutline" label="Cooldown outline"></tr>
		</table>
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