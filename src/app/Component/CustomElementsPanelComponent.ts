import { Component }            from '@angular/core';
import { CustomElement }        from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementText }    from 'src/app/Model/CustomElement/CustomElementText';
import { ConfigService }        from 'src/app/Service/ConfigService';
import { CustomElementService } from 'src/app/Service/CustomElementService';
import { anchors }              from 'src/app/Data/anchors';

@Component({
	selector: 'custom-elements-panel',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column config-window">
			<div class="config-bar">
				<h4 class="mt-1">
					NextUI - Custom Elements
				</h4>

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
							<li class="nav-item" *ngFor="let cat of categories">
								<button type="button" class="nav-link"
									[class.active]="currentTab === cat.value"
									(click)="switchTab(cat.value)"
								>
									{{ cat.label }}
								</button>
							</li>
						</ul>
						
						<custom-element-general-config class="d-block p-2"
							*ngIf="currentTab === 'general'"
							[customElement]="currentElement" 
						>
						</custom-element-general-config>
						
						<custom-element-visual-config class="d-block p-2"
							*ngIf="currentTab === 'visual'"
							[customElement]="currentElement"
						>
						</custom-element-visual-config>
						
						<custom-element-trigger-config class="d-block p-2"
							*ngIf="currentTab === 'trigger'" 
							[customElement]="currentElement"
						>
						</custom-element-trigger-config>
						
						<custom-element-export-config class="d-block p-2"
							*ngIf="currentTab === 'export'" 
							[customElement]="currentElement"
						>
						</custom-element-export-config>
					</ng-container>
				</div>
			</div>
		</div>
	`
})
export class CustomElementsPanelComponent {
	currentElement: CustomElement;

	categories = [
		{ value: 'general', label: 'General' },
		{ value: 'visual', label: 'Visual' },
		{ value: 'trigger', label: 'Trigger' },
		{ value: 'export', label: 'Export/Import' },
	];
	currentTab = 'general';

	anchors = anchors;

	constructor(
		public conf: ConfigService,
		public elementService: CustomElementService
	) {}

	closeConfig() {
		this.conf.toggleCustomElementsPanel();
		this.elementService.configureElement(null);
	}

	selectElement(value: CustomElement) {
		this.currentElement = value;

		this.elementService.configureElement(value);
	}

	update() {
		this.currentElement?.update.next(true);
	}

	switchTab(tab: string) {
		this.currentTab = tab;
	}

	createNew() {
		this.elementService.addCustomElement();
	}
}