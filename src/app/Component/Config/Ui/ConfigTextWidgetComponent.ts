import { Component, Input } from '@angular/core';
import { anchors }       from 'src/app/Component/Config/anchors';

@Component({
	selector: 'config-text-widget',
	template:`
		<config-group [title]="title">
			<config-checkbox [frameName]="frameName" [widgetName]="widgetName" prop="show" label="Show"></config-checkbox>
			<config-select [frameName]="frameName" [items]="anchors" [widgetName]="widgetName" prop="anchor" label="Anchor"></config-select>
			<config-position [frameName]="frameName" [widgetName]="widgetName" prop="position" label="Position"></config-position>
			<config-color [frameName]="frameName" [widgetName]="widgetName" prop="fontColor" label="Font Color"></config-color>
			<config-input [frameName]="frameName" [widgetName]="widgetName" prop="fontSize" label="Font Size"></config-input>
			<config-checkbox [frameName]="frameName" [widgetName]="widgetName" prop="outline" label="Text Outline"></config-checkbox>
		</config-group>
	`
})
export class ConfigTextWidgetComponent {
	@Input() title = ''
	@Input() frameName: any;
	@Input() widgetName: any;
	anchors = anchors;
}