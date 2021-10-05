import { Component, Input, OnInit } from '@angular/core';
import { anchors }                  from 'src/app/Data/anchors';
import { barDirections }            from 'src/app/Data/barDirections';
import { barStyles }                from 'src/app/Data/barStyles';
import { TextWidgetConfig }         from 'src/app/Model/Config/TextWidgetConfig';
import { UnitFrameStatusConfig }    from 'src/app/Model/Config/UnitFrame/UnitFrameStatusConfig';

@Component({
	selector: 'unit-frame-data-text',
	template: `
		<config-text-widget title="Name label" [configObj]="configObj.name" [configPath]="paths.name"></config-text-widget>
		<config-text-widget title="Job label" [configObj]="configObj.job" [configPath]="paths.job"></config-text-widget>
		<config-text-widget title="HP label" [configObj]="configObj.hp" [configPath]="paths.hp"></config-text-widget>
		<config-text-widget title="Mana label" [configObj]="configObj.mana" [configPath]="paths.mana"></config-text-widget>
		<config-text-widget title="Level label" [configObj]="configObj.level" [configPath]="paths.level"></config-text-widget>
	`
})
export class UnitFrameDataTextConfigComponent implements OnInit {
	@Input() configObj: {
		name: TextWidgetConfig,
		job: TextWidgetConfig,
		hp: TextWidgetConfig,
		mana: TextWidgetConfig,
		level: TextWidgetConfig,
	};
	@Input() configPath: string;

	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;

	paths: {
		name: string,
		job: string,
		hp: string,
		mana: string,
		level: string,
	};

	ngOnInit() {
		for (const key in this.configObj) {
			(this.paths as any)[key] = this.configPath + '.' + key;
		}
	}
}