import { Component }     from '@angular/core';
import { anchors }       from 'src/app/Component/Config/anchors';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-aggro-list',
	template: `
		<h4 class="ta-c">Aggro List Frame Configuration</h4>
		
		<config-button buttonLabel="Reset All Settings" (click)="resetAll()"></config-button>
		<config-group title="Basic">
			<config-checkbox [frameName]="frameName" prop="enabled" label="Enabled"></config-checkbox>

			<config-position [frameName]="frameName" prop="position" label="Position"></config-position>
			<config-size [frameName]="frameName" prop="size" label="Size"></config-size>

			<config-input [frameName]="frameName" prop="unitFrameHeight" label="Frame Height"></config-input>
			<config-input [frameName]="frameName" inputType="number" prop="unitFrameMargin" label="Frame Margin"></config-input>

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
export class ConfigAggroListComponent {
	frameName: keyof MainConfig['frames'] = 'aggroList';
	configObj = this.conf.config.frames.aggroList;
	anchors = anchors;

	constructor(public conf: ConfigService) {}

	resetAll() {
		this.conf.config.frames.aggroList.unserialize(this.conf.defaultConfig.frames.aggroList as any);
	}
}