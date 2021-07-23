import { Component }     from '@angular/core';
import { anchors }       from 'src/app/Component/Config/anchors';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-player',
	template: `
		<h4 class="ta-c">Player Frame Configuration</h4>

		<config-group title="Basic">
			<config-checkbox [frameName]="frameName" prop="enabled" label="Enabled"></config-checkbox>
			
			<config-position [frameName]="frameName" prop="position" label="Position"></config-position>
			<config-size [frameName]="frameName" prop="size" label="Size"></config-size>
			
			<config-checkbox [frameName]="frameName" prop="showMana" label="Show Mana"></config-checkbox>
			<config-input [frameName]="frameName" prop="manaHeight" label="Mana Height"></config-input>
			
			<config-color [frameName]="frameName" prop="backgroundColor" label="Background"></config-color>
			<config-color [frameName]="frameName" prop="barColor" label="HP Color"></config-color>
			<config-color [frameName]="frameName" prop="manaColor" label="Mana Color"></config-color>
		</config-group>
		
		<config-text-widget title="Name label" [frameName]="frameName" widgetName="name"></config-text-widget>
		<config-text-widget title="Job label" [frameName]="frameName" widgetName="job"></config-text-widget>
		<config-text-widget title="HP label" [frameName]="frameName" widgetName="hp"></config-text-widget>
		<config-text-widget title="Mana label" [frameName]="frameName" widgetName="mana"></config-text-widget>
		<config-text-widget title="Level label" [frameName]="frameName" widgetName="level"></config-text-widget>
	`
})
export class ConfigPlayerComponent {
	frameName: keyof MainConfig['frames'] = 'player';
	configObj = this.conf.config.frames.player;
	anchors = anchors;

	constructor(public conf: ConfigService) {}
}