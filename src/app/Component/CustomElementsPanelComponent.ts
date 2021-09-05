import { Component }            from '@angular/core';
import { TextWidgetConfig }     from 'src/app/Model/Config/TextWidgetConfig';
import { CustomElement }        from 'src/app/Model/CustomElement/CustomElement';
import { ConfigService }        from 'src/app/Service/ConfigService';
import { CustomElementService } from 'src/app/Service/CustomElementService';
import { anchors }              from 'src/app/Data/anchors';

@Component({
	selector: 'custom-elements-panel',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column config-window">
			<div class="config-bar">
				<h4 class="mt-1">NextUI - Custom Elements</h4>
				<button class="btn btn-sm btn-danger config-close-btn position-absolute" (click)="closeConfig()">
					<icon-close></icon-close>
				</button>
			</div>

			<div class="config-content d-flex flex-row">
				<div class="config-pane">
					<div class="btn-group-vertical w100p">
						<button class="btn btn-sm btn-success" (click)="createNew()">
							<icon-plus></icon-plus>
							Create new
						</button>
						<button class="btn btn-sm"
							*ngFor="let ce of elementService.elements"
							[ngClass]="currentElement === ce ? 'btn-info' : 'btn-outline-info'"
							(click)="selectElement(ce)">
							&nbsp;{{ ce.name }}
						</button>
					</div>
				</div>
				<div class="flex-grow" style="overflow-y: auto;">
					<ng-container *ngIf="currentElement">
						<ul class="nav nav-tabs nav-fill">
							<li class="nav-item">
								<button type="button" class="nav-link"
									[class.active]="currentTab === 'general'"
									(click)="switchTab('general')"
								>
									General
								</button>
							</li>
							<li class="nav-item">
								<button type="button" class="nav-link"
									[class.active]="currentTab === 'visual'"
									(click)="switchTab('visual')"
								>
									Visual
								</button>
							</li>
							<li class="nav-item">
								<button type="button" class="nav-link"
									[class.active]="currentTab === 'trigger'"
									(click)="switchTab('trigger')"
								>
									Trigger
								</button>
							</li>
						</ul>
						<div *ngIf="currentTab === 'general'" style="padding: 10px;">
							<div class="row">
								<div class="col-12">
									<h5>General Config</h5>
								</div>
								<div class="col-6 mb-3">
									<label for="custom-element-name" class="form-label">Name</label>
									<input type="text" class="form-control form-control-sm" id="custom-element-name"
										placeholder="Enter your custom element name here..."
										[(ngModel)]="currentElement.name"
										[ngModelOptions]="{standalone: true}"
									>
								</div>
								<div class="col-6 mb-3">
									<label for="custom-element-type" class="form-label">Type</label>
									<ng-select
										class="form-control form-control-sm"
										[(ngModel)]="currentElement.type"
										[items]="types"
										[clearable]="false"
										[searchable]="false"
										bindLabel="label"
										bindValue="id"
									></ng-select>
								</div>
							</div>
						</div>
						<div *ngIf="currentTab === 'visual'" style="padding: 10px;">
							<div class="row">
								<div class="col-12">
									<h5>Visual Config</h5>
								</div>
								<div class="col-12 mb-3">
									<label for="custom-element-image" class="form-label">Background Image</label>
									<input type="text" class="form-control form-control-sm"
										id="custom-element-image"
										placeholder="Enter background image URL here..."
										[(ngModel)]="currentElement.image"
										[ngModelOptions]="{standalone: true}"
										(ngModelChange)="update()"
									>
								</div>
								<div class="col-12 mb-3">
									<label for="custom-element-opacity" class="form-label">Opacity</label>
									<input class="w100p" type="range"
										id="custom-element-opacity"
										[min]="0"
										[max]="1"
										[step]="0.01"
										[(ngModel)]="currentElement.opacity"
										(ngModelChange)="update()"
									>
								</div>
								<div class="col-12">
									<button type="button" class="btn btn-success" (click)="addNewText()">
										<icon-plus></icon-plus>
									</button>
									<div *ngFor="let t of currentElement.texts">
										<config-checkbox [configObj]="t" prop="show" label="Show"></config-checkbox>
										<config-select [configObj]="t" [items]="anchors" prop="anchor" label="Anchor"></config-select>
										<config-position [configObj]="t" prop="position" label="Position"></config-position>
										<config-color [configObj]="t" prop="fontColor" label="Font Color"></config-color>
										<config-input [configObj]="t" prop="fontSize" label="Font Size"></config-input>
										<config-checkbox [configObj]="t" prop="outline" label="Text Outline"></config-checkbox>
									</div>
									<config-text-widget *ngFor="let t of currentElement.texts" [></config-text-widget>
								</div>
							</div>

							<!--							https://emoji.gg/assets/emoji/6757_Sadge.png-->
						</div>
						<div *ngIf="currentTab === 'trigger'" style="padding: 10px;">
							<h5>Trigger Config</h5>
						</div>
					</ng-container>
				</div>
			</div>
		</div>
	`
})
export class CustomElementsPanelComponent {
	currentElement: CustomElement;

	currentTab = 'general';

	types = [
		{ id: 'text', label: 'Text' },
		{ id: 'image', label: 'Image' },
		{ id: 'progressbar', label: 'Progress Bar' }
	];
	anchors = anchors;

	constructor(
		public conf: ConfigService,
		public elementService: CustomElementService
	) {}

	closeConfig() {
		this.conf.toggleCustomElementsPanel();
	}

	selectElement(value: CustomElement) {
		this.currentElement = value;

		for (const el of this.elementService.elements) {
			el.uiActive = false;
		}
		this.currentElement.uiActive = true;
	}

	update() {
		this.currentElement?.update.next(true);
	}

	switchTab(tab: string) {
		this.currentTab = tab;
	}

	addNewText() {
		this.currentElement?.texts.push(new TextWidgetConfig());
	}

	createNew() {

	}
}