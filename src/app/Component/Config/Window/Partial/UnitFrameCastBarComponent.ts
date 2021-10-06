import { Component, Input }       from '@angular/core';
import { anchors }                from 'src/app/Data/anchors';
import { barDirections }          from 'src/app/Data/barDirections';
import { barStyles }              from 'src/app/Data/barStyles';
import { UnitFrameCastBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameCastBarConfig';

@Component({
	selector: 'unit-frame-cast-bar',
	template: `
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="show" label="Show"></config-checkbox>
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="showIcon" label="Show Icon"></config-checkbox>
		<config-checkbox [configObj]="configObj" [configPath]="configPath" prop="showSlideCast" label="Show Slide Cast"></config-checkbox>
		<config-select [configObj]="configObj" [configPath]="configPath" [items]="anchors" prop="anchor" label="Anchor"></config-select>
		<config-position [configObj]="configObj" [configPath]="configPath" prop="position" label="Position"></config-position>
		<config-size [configObj]="configObj" [configPath]="configPath" prop="size" label="Size"></config-size>
		<config-color [configObj]="configObj" [configPath]="configPath" prop="barColor" label="Bar Color"></config-color>
		<config-color [configObj]="configObj" [configPath]="configPath" prop="backgroundColor" label="Background Color"></config-color>
		<config-select [configObj]="configObj" [configPath]="configPath" [items]="barStyles" prop="barStyle" label="Bar Style"></config-select>
		<config-select [configObj]="configObj" [configPath]="configPath" [items]="barDirections" prop="barDirection" label="Bar Direction"></config-select>

		<config-range [configObj]="configObj" [configPath]="configPath" prop="borderWidth" [min]="0" [max]="20" [step]="1" label="Border Width"></config-range>
		<config-color [configObj]="configObj" [configPath]="configPath" prop="borderColor" label="Border Color"></config-color>

		<config-group title="Text Label">
			<config-checkbox [configObj]="configObj.widgets.name" prop="show" label="Show"></config-checkbox>
			<config-select [configObj]="configObj.widgets.name" [items]="anchors" prop="anchor" label="Anchor"></config-select>
			<config-position [configObj]="configObj.widgets.name" prop="position" label="Position"></config-position>
			<config-color [configObj]="configObj.widgets.name" prop="fontColor" label="Font Color"></config-color>
			<config-input [configObj]="configObj.widgets.name" prop="fontSize" label="Font Size"></config-input>
			<config-checkbox [configObj]="configObj.widgets.name" prop="outline" label="Text Outline"></config-checkbox>
		</config-group>

		<config-group title="Elapsed Label">
			<config-checkbox [configObj]="configObj.widgets.elapsed" prop="show" label="Show"></config-checkbox>
			<config-select [configObj]="configObj.widgets.elapsed" [items]="anchors" prop="anchor" label="Anchor"></config-select>
			<config-position [configObj]="configObj.widgets.elapsed" prop="position" label="Position"></config-position>
			<config-color [configObj]="configObj.widgets.elapsed" prop="fontColor" label="Font Color"></config-color>
			<config-input [configObj]="configObj.widgets.elapsed" prop="fontSize" label="Font Size"></config-input>
			<config-checkbox [configObj]="configObj.widgets.elapsed" prop="outline" label="Text Outline"></config-checkbox>
		</config-group>
	`
})
export class UnitFrameCastBarComponent {
	@Input() configObj: UnitFrameCastBarConfig;
	@Input() configPath: string;

	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
}