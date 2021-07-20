import { Component }     from '@angular/core';
import { anchors }       from 'src/app/Component/Config/anchors';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-player',
	template: `
		<h3 class="ta-c">Player Frame Configuration</h3>
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
			<tr><td colspan="4">
				<h4 class="ta-c">Job</h4>
			</td></tr>
			<tr row-checkbox [frameName]="frameName" widgetName="job" prop="show" label="Show Job"></tr>
			<tr row-select [frameName]="frameName" [items]="anchors" widgetName="job" prop="anchor" label="Anchor"></tr>
			<tr row-position [frameName]="frameName" widgetName="job"  prop="position" label="Position"></tr>
			<tr row-color [frameName]="frameName" widgetName="job" prop="fontColor" label="Job Color"></tr>
			<tr row-input [frameName]="frameName" widgetName="job" prop="fontSize" label="Job Size"></tr>
		</table>
	`
})
export class ConfigPlayerComponent {
	frameName: keyof MainConfig['frames'] = 'player';
	configObj = this.conf.config.frames.player;
	anchors = anchors;

	constructor(public conf: ConfigService) {}
}