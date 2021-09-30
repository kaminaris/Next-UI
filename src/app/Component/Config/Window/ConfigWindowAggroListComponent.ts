import { Component }     from '@angular/core';
import { barDirections } from 'src/app/Data/barDirections';
import { barStyles }     from 'src/app/Data/barStyles';
import { anchors }       from 'src/app/Data/anchors';
import { sorters }       from 'src/app/Data/sorters';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-aggro-list',
	template: `
		<h4 class="ta-c">Aggro List Frame Configuration</h4>
		<config-group title="Frame">
			<config-input [frameName]="frameName" prop="unitFrameHeight" label="Frame Height"></config-input>
			<config-input [frameName]="frameName" inputType="number" prop="unitFrameMargin" label="Frame Margin"></config-input>
			<config-select [frameName]="frameName" [items]="sorters" prop="sorter" bindLabel="name" bindValue="type" label="Sort By"></config-select>
		</config-group>
		
		<config-group title="Basic">
			<config-checkbox [frameName]="frameName" prop="enabled" label="Enabled"></config-checkbox>

			<config-position [frameName]="frameName" prop="position" label="Position"></config-position>
			<config-size [frameName]="frameName" prop="size" label="Size"></config-size>

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

		<config-group title="Role Icon">
			<config-checkbox [frameName]="frameName" prop="showRoleIcon" label="Show Role Icon"></config-checkbox>
			<config-select [frameName]="frameName" [items]="anchors" prop="roleIconAnchor" label="Icon Anchor"></config-select>
			<config-position [frameName]="frameName" prop="roleIconPosition" label="Icon Position"></config-position>
			<config-color [frameName]="frameName" prop="roleIconColor" label="Icon Color"></config-color>
			<config-input [frameName]="frameName" inputType="number" prop="roleIconSize" label="Icon Size"></config-input>
		</config-group>

		<config-group title="Sign">
			<config-checkbox [frameName]="frameName" prop="showSign" label="Show Sign"></config-checkbox>
			<config-select [frameName]="frameName" [items]="anchors" prop="signAnchor" label="Sign Anchor"></config-select>
			<config-position [frameName]="frameName" prop="signPosition" label="Sign Position"></config-position>
			<config-input [frameName]="frameName" inputType="number" prop="signSize" label="Sign Size"></config-input>
		</config-group>

		<config-group title="Auras">
			<config-checkbox [frameName]="frameName" prop="aurasEnabled" label="Enabled"></config-checkbox>
			<config-position [frameName]="frameName" prop="auraPosition" label="Aura Position"></config-position>
			<config-select [frameName]="frameName" [items]="anchors" prop="auraAnchor" label="Aura Anchor"></config-select>
			<config-checkbox [frameName]="frameName" prop="auraOnlyOwn" label="Only own"></config-checkbox>
			<config-multiselect [frameName]="frameName" [items]="filters" bindValue="name" bindLabel="name"
				prop="auraFilters" label="Aura Filters"></config-multiselect>
		</config-group>

		<config-text-widget title="Name label" [frameName]="frameName" widgetName="name"></config-text-widget>
		<config-text-widget title="Job label" [frameName]="frameName" widgetName="job"></config-text-widget>
		<config-text-widget title="HP label" [frameName]="frameName" widgetName="hp"></config-text-widget>
		<config-text-widget title="Mana label" [frameName]="frameName" widgetName="mana"></config-text-widget>
		<config-text-widget title="Level label" [frameName]="frameName" widgetName="level"></config-text-widget>
	`
})
export class ConfigWindowAggroListComponent {
	frameName: keyof MainConfig['frames'] = 'aggroList';
	configObj = this.conf.config.frames.aggroList;
	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
	filters = this.conf.config.filters;
	sorters = sorters.filter(s => s.canApplyToAggro);

	constructor(public conf: ConfigService) {
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}

	resetAll() {
		this.conf.config.frames.aggroList.unserialize(this.conf.defaultConfig.frames.aggroList as any);
	}
}