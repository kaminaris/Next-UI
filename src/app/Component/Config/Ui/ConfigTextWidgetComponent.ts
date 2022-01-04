import { Component, Input } from '@angular/core';
import { anchors }          from 'src/app/Data/anchors';
import { TextWidgetConfig } from 'src/app/Model/Config/TextWidgetConfig';

@Component({
	selector: 'config-text-widget',
	template: `
		<config-group [title]="title">
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="show" label="Show"></config-checkbox>
			<config-select [configObj]="configObj" [configPath]="configPath" [items]="anchors" prop="anchor" label="Anchor"></config-select>
			<config-position [configObj]="configObj" [configPath]="configPath" prop="position" label="Position"></config-position>
			<config-color [configObj]="configObj" [configPath]="configPath" prop="fontColor" label="Font Color"></config-color>
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="useCustomColor" label="Use Job Color"></config-checkbox>
			<config-input [configObj]="configObj" [configPath]="configPath" prop="fontSize" label="Font Size"></config-input>
			<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="outline" label="Text Outline"></config-checkbox>
		</config-group>
	`
})
export class ConfigTextWidgetComponent {
	@Input() configObj: TextWidgetConfig;
	@Input() configPath: string;
	@Input() title: string;
	anchors = anchors;
}