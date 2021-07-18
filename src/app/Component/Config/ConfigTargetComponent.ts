import { Component } from '@angular/core';

@Component({
	selector: 'config-target',
	template: `
		<h3 class="ta-c">Target Frame Configuration</h3>
		<hr>

		<table style="width: 100%;">
			<tr row-checkbox [frameName]="frameName" prop="showMana" label="Show Mana"></tr>
			<tr row-color [frameName]="frameName" prop="barColor" label="HP Color"></tr>
			<tr row-color [frameName]="frameName" prop="manaColor" label="Mana Color"></tr>
			<tr row-input [frameName]="frameName" prop="manaHeight" label="Mana Height"></tr>
			<tr row-input [frameName]="frameName" prop="fontSize" label="Font Size"></tr>
			<tr row-color [frameName]="frameName" prop="fontColor" label="Font Color"></tr>
		</table>
	`
})
export class ConfigTargetComponent {
	frameName = 'target';
}