import { Component }  from '@angular/core';
import { MainConfig } from 'src/app/Model/Config/MainConfig';

@Component({
	selector: 'config-target',
	template: `
		<h3 class="ta-c">Target Frame Configuration</h3>
		<hr>

		<table style="width: 100%;">
			<tr row-position [frameName]="frameName" prop="position" label="Position"></tr>
			<tr row-size [frameName]="frameName" prop="size" label="Size"></tr>
			<tr row-checkbox [frameName]="frameName" prop="showMana" label="Show Mana"></tr>
			<tr row-color [frameName]="frameName" prop="barColor" label="HP Color"></tr>
			<tr row-color [frameName]="frameName" prop="manaColor" label="Mana Color"></tr>
			<tr row-input [frameName]="frameName" prop="manaHeight" label="Mana Height"></tr>
			<tr row-input [frameName]="frameName" prop="fontSize" label="Font Size"></tr>
			<tr row-color [frameName]="frameName" prop="fontColor" label="Font Color"></tr>
			<tr>
				<td colspan="4">
					<hr>
				</td>
			</tr>
			<tr row-checkbox [frameName]="frameName" prop="showName" label="Show Name"></tr>
		</table>
	`
})
export class ConfigTargetComponent {
	frameName: keyof MainConfig['frames'] = 'target';
}