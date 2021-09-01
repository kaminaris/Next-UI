import { Component }     from '@angular/core';
import { anchors }       from 'src/app/Component/Config/anchors';
import { barDirections } from 'src/app/Component/Config/barDirections';
import { barStyles }     from 'src/app/Component/Config/barStyles';
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

			<config-color [frameName]="frameName" prop="backgroundColor" label="Background"></config-color>

			<config-range [frameName]="frameName" prop="borderWidth" [min]="0" [max]="20" [step]="1" label="Border Width"></config-range>
			<config-color [frameName]="frameName" prop="borderColor" label="Border Color"></config-color>
		</config-group>

		<config-group title="Health Bar">
			<config-color [frameName]="frameName" prop="barColor" label="HP Color"></config-color>
			<config-checkbox [frameName]="frameName" prop="useClassColor" label="Use Class Color"></config-checkbox>
			<config-select [frameName]="frameName" [items]="barStyles" prop="barStyle" label="Bar Style"></config-select>
			<config-select [frameName]="frameName" [items]="barDirections" prop="barDirection" label="Bar Direction"></config-select>
		</config-group>

		<config-group title="Mana Bar">
			<config-checkbox [frameName]="frameName" prop="showMana" label="Show Mana"></config-checkbox>
			<config-input [frameName]="frameName" prop="manaHeight" label="Mana Height"></config-input>
			<config-color [frameName]="frameName" prop="manaColor" label="Mana Color"></config-color>
			<config-select [frameName]="frameName" [items]="barStyles" prop="manaBarStyle" label="Bar Style"></config-select>
			<config-select [frameName]="frameName" [items]="barDirections" prop="manaBarDirection" label="Bar Direction"></config-select>
		</config-group>

		<config-group title="Auras">
			<config-checkbox [frameName]="frameName" prop="aurasEnabled" label="Enabled"></config-checkbox>
			<config-position [frameName]="frameName" prop="auraPosition" label="Aura Position"></config-position>
			<config-select [frameName]="frameName" [items]="anchors" prop="auraAnchor" label="Aura Anchor"></config-select>
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
	barStyles = barStyles;
	barDirections = barDirections;

	constructor(public conf: ConfigService) {}

	resetAll() {
		this.conf.config.frames.aggroList.unserialize(this.conf.defaultConfig.frames.aggroList as any);
	}
}