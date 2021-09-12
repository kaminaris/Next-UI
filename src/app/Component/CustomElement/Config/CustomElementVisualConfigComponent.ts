import { Component, Input }  from '@angular/core';
import { CustomElement }     from 'src/app/Model/CustomElement/CustomElement';
import { anchors }           from 'src/app/Data/anchors';
import { CustomElementText } from 'src/app/Model/CustomElement/CustomElementText';

@Component({
	selector: 'custom-element-visual-config',
	template: `
		<div class="col-12 mb-3">
			<config-group title="Visuals">
				<div class="custom-config-row">
					<div class="config-label">Image</div>
					<div class="config-input">
						<input type="text" class="form-control form-control-sm"
							id="custom-element-image"
							placeholder="Enter background image URL here..."
							[(ngModel)]="customElement.image"
							[ngModelOptions]="{standalone: true}"
							(ngModelChange)="update()"
						>
					</div>
				</div>
				<div class="custom-config-row">
					<div class="config-label">Opacity</div>
					<div class="config-input">
						<input class="w100p" type="range"
							[min]="0"
							[max]="1"
							[step]="0.01"
							[(ngModel)]="customElement.opacity"
							(ngModelChange)="update()"
						>
					</div>
				</div>
			</config-group>
			<config-group title="Progress Bar">
				<div class="custom-config-row">
					<div class="config-label">Show Progressbar</div>
					<div class="config-input">
						<input class="form-check-input" type="checkbox"
							[(ngModel)]="customElement.progressBar"
							(ngModelChange)="update()"
						>
					</div>
				</div>
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

	update() {
		this.customElement?.update.next(true);
	}

	addNewText() {
		this.customElement?.texts.push(new CustomElementText());
	}
}