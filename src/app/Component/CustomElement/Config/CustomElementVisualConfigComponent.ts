import { Component, Input }  from '@angular/core';
import { CustomElement }     from 'src/app/Model/CustomElement/CustomElement';
import { anchors }           from 'src/app/Data/anchors';
import { barDirections }     from 'src/app/Data/barDirections';
import { barStyles }         from 'src/app/Data/barStyles';
import { CustomElementText } from 'src/app/Model/CustomElement/CustomElementText';

@Component({
	selector: 'custom-element-visual-config',
	template: `
		<div class="col-12 mb-3">
			<config-group title="Placement">
				<config-position label="Position"
					[configObj]="customElement"
					prop="position"
					[reset]="false"
					(afterSet)="update()"
				></config-position>

				<config-size label="Size"
					[configObj]="customElement"
					prop="size"
					[reset]="false"
					(afterSet)="update()"
				></config-size>
			</config-group>

			<config-group title="Visuals">
				<config-input label="Image"
					[configObj]="customElement"
					prop="image"
					[reset]="false"
					(afterSet)="update()"
				></config-input>


				<config-range label="Opacity"
					[configObj]="customElement"
					prop="opacity"
					[reset]="false"
					[min]="0"
					[max]="1"
					[step]="0.01"
					(afterSet)="update()"
				></config-range>
			</config-group>
			<config-group title="Progress Bar">
				<config-checkbox label="Enabled"
					[configObj]="customElement.progressBar"
					prop="show"
					[reset]="false"
					(afterSet)="update()"
				></config-checkbox>

				<config-checkbox label="Circular"
					[configObj]="customElement.progressBar"
					prop="circular"
					[reset]="false"
					(afterSet)="update()"
				></config-checkbox>

				<config-checkbox label="Smooth"
					[configObj]="customElement.progressBar"
					prop="smooth"
					[reset]="false"
					(afterSet)="update()"
				></config-checkbox>

				<config-input label="Circular Radius"
					*ngIf="customElement.progressBar.circular"
					inputType="number"
					[configObj]="customElement.progressBar"
					prop="radius"
					[reset]="false"
					(afterSet)="update()"
				></config-input>

				<config-color label="Background"
					[configObj]="customElement.progressBar"
					prop="bgColor"
					[reset]="false"
					(afterSet)="update()"
				></config-color>

				<config-color label="Bar Color"
					[configObj]="customElement.progressBar"
					prop="fillColor"
					[reset]="false"
					(afterSet)="update()"
				></config-color>

				<config-select label="Bar Style"
					[configObj]="customElement.progressBar"
					[items]="barStyles"
					prop="barStyle"
					[reset]="false"
					(afterSet)="update()"
				></config-select>

				<config-select label="Bar Direction"
					[configObj]="customElement.progressBar"
					[items]="barDirections"
					prop="barDirection"
					[reset]="false"
					(afterSet)="update()"
				></config-select>

			</config-group>

			<config-group title="Texts">
				<div class="custom-config-row">
					<div class="config-label">Add New</div>
					<div class="config-input">
						<button type="button" class="btn btn-success" (click)="addNewText()">
							<icon-plus></icon-plus>
						</button>
					</div>
				</div>
				<config-group [title]="'Text ' + (i + 1)" *ngFor="let t of customElement.texts; let i = index">
					<div class="custom-config-row">
						<div class="config-label">Text</div>
						<div class="config-input">
							<input class="form-control form-control-sm w100p" type="text" [(ngModel)]="t.text">
						</div>
					</div>
					<config-checkbox [configObj]="t" prop="show" label="Show"></config-checkbox>
					<config-select [configObj]="t" [items]="anchors" prop="anchor" label="Anchor"></config-select>
					<config-position [configObj]="t" prop="position" label="Position"></config-position>
					<config-color [configObj]="t" prop="fontColor" label="Font Color"></config-color>
					<config-input [configObj]="t" prop="fontSize" label="Font Size"></config-input>
					<config-checkbox [configObj]="t" prop="outline" label="Text Outline"></config-checkbox>
				</config-group>
			</config-group>

		</div>
		<!--							https://emoji.gg/assets/emoji/6757_Sadge.png-->
	`
})
export class CustomElementVisualConfigComponent {
	@Input() customElement: CustomElement;
	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;

	update() {
		this.customElement?.update.next(true);
	}

	addNewText() {
		this.customElement?.texts.push(new CustomElementText());
	}

	setProp(propName: string, $event: any) {
		(this.customElement as any)[propName] = $event;
	}

	getProp(propName: string, $event: { value: any }) {
		$event.value = (this.customElement as any)[propName];
	}
}