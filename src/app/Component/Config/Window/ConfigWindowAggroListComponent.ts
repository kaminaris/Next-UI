import { Component }             from '@angular/core';
import { ConfigWindowUnitFrame } from 'src/app/Component/Config/Window/ConfigWindowUnitFrame';
import { barDirections }         from 'src/app/Data/barDirections';
import { barStyles }             from 'src/app/Data/barStyles';
import { anchors }               from 'src/app/Data/anchors';
import { sorters }               from 'src/app/Data/sorters';
import { ConfigService }         from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-aggro-list',
	template: `
		<tabs-header [tabs]="tabs" (tabChanged)="tabChanged($event)"></tabs-header>

		<ng-container [ngSwitch]="currentTabIndex">
			<unit-frame-basic class="d-block pt-2" *ngSwitchCase="0"
				[configObj]="configObj.basic"
				[configPath]="configPath"
			></unit-frame-basic>

			<unit-frame-health-bar class="d-block pt-2" *ngSwitchCase="1"
				[configObj]="configObj.healthBar"
				[configPath]="configPath"
			></unit-frame-health-bar>

			<unit-frame-mana-bar class="d-block pt-2" *ngSwitchCase="2"
				[configObj]="configObj.manaBar"
				[configPath]="configPath"
			></unit-frame-mana-bar>

			<unit-frame-role class="d-block pt-2" *ngSwitchCase="3"
				[configObj]="configObj.role"
				[configPath]="configPath"
			></unit-frame-role>

			<unit-frame-sign class="d-block pt-2" *ngSwitchCase="4"
				[configObj]="configObj.sign"
				[configPath]="configPath"
			></unit-frame-sign>

			<unit-frame-distance class="d-block pt-2" *ngSwitchCase="5"
				[configObj]="configObj.distance"
				[configPath]="configPath"
			></unit-frame-distance>

			<unit-frame-status class="d-block pt-2" *ngSwitchCase="6"
				[configObj]="configObj.status"
				[configPath]="configPath"
				[filters]="filters"
			></unit-frame-status>

			<unit-frame-cast-bar class="d-block pt-2" *ngSwitchCase="7"
				[configObj]="configObj.castBar"
				[configPath]="configPath"
			></unit-frame-cast-bar>

			<unit-frame-data-text class="d-block pt-2" *ngSwitchCase="8"
				[configObj]="configObj.widgets"
				[configPath]="configPath"
			></unit-frame-data-text>

			<config-group title="Aggro List Settings" class="d-block pt-2" *ngSwitchCase="9">
				<config-input [configObj]="configObj" [configPath]="configPath" prop="unitFrameHeight" label="Frame Height"></config-input>
				<config-input [configObj]="configObj" [configPath]="configPath" inputType="number" prop="unitFrameMargin" label="Frame Margin"></config-input>
				<config-select [configObj]="configObj" [configPath]="configPath" [items]="sorters" prop="sorter" bindLabel="name" bindValue="type" label="Sort By"></config-select>
			</config-group>
		</ng-container>

	`
})
export class ConfigWindowAggroListComponent extends ConfigWindowUnitFrame {
	configObj = this.conf.config.frames.aggroList;
	configPath = 'frames.aggroList';

	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;

	filters = this.conf.config.filters;
	sorters = sorters.filter(s => s.canApplyToAggro);

	constructor(public conf: ConfigService) {
		super();
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
		this.tabs.push({ name: 'Aggro List' });
	}

}