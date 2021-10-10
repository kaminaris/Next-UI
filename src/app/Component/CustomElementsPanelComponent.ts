import { Component, Inject }    from '@angular/core';
import { TabDef }               from 'src/app/Component/TabsComponent';
import { CustomElement }        from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementGroup }   from 'src/app/Model/CustomElement/CustomElementGroup';
import { ConfigService }        from 'src/app/Service/ConfigService';
import { CustomElementService } from 'src/app/Service/CustomElementService';
import { anchors }              from 'src/app/Data/anchors';

@Component({
	selector: 'custom-elements-panel',
	template: `
		<ng-content></ng-content>

		<window-panel (close)="closeConfig()">
			<ng-container header>
				<img [src]="logoUrl" style="width: 39px; background: #fff;" alt="NextUI">
				<h4 class="mt-1 ms-2">
					NextUI - Custom Elements
				</h4>
				<button type="button" class="btn btn-sm btn-success ms-3" (click)="save()">Save</button>
			</ng-container>

			<ng-container pane>
				<div class="btn-group-vertical w100p">
					<button class="btn btn-sm btn-success" (click)="createNew()">
						<icon-plus></icon-plus>
						Create new
					</button>
					<button class="btn btn-sm btn-primary" (click)="createNewGroup()">
						<icon-plus></icon-plus>
						Create Group
					</button>

					<h5>Groups</h5>
					<hr>
					<ng-container *ngFor="let group of elementService.elementGroups">
						<button class="btn btn-sm"
							[ngClass]="currentGroup === group ? 'btn-info' : 'btn-outline-info'"
							(click)="selectGroup(group)">
							{{ currentGroup === group ? '➤' : '▼' }}
							&nbsp;
							{{ group.name }}
						</button>

						<ng-container *ngIf="currentGroup === group">
							<button class="btn btn-sm"
								*ngFor="let ce of group.children"
								[ngClass]="currentElement === ce ? 'btn-info' : 'btn-outline-info'"
								(click)="selectElement(ce, group)">
								🡺 {{ ce.name }}
							</button>
						</ng-container>
					</ng-container>

					<h5>Elements</h5>
					<hr>
					<button class="btn btn-sm"
						*ngFor="let ce of elementService.elements"
						[ngClass]="currentElement === ce ? 'btn-info' : 'btn-outline-info'"
						(click)="selectElement(ce)">
						&nbsp;{{ ce.name }}
					</button>
				</div>
			</ng-container>

			<!-- Group Configuration -->
			<ng-container *ngIf="currentGroup && !currentElement">

				<tabs-header [tabs]="groupCategories" (tabChanged)="switchTab($event)"></tabs-header>

				<custom-element-group-general-config class="d-block p-2"
					*ngIf="currentTab?.name === 'General'"
					[group]="currentGroup"
				>
				</custom-element-group-general-config>

				<custom-element-group-visual-config class="d-block p-2"
					*ngIf="currentTab?.name === 'Visual'"
					[group]="currentGroup"
				>
				</custom-element-group-visual-config>

				<custom-element-group-export-config class="d-block p-2"
					*ngIf="currentTab?.name === 'Export'"
					[group]="currentGroup"
				>
				</custom-element-group-export-config>
			</ng-container>

			<!-- Element Configuration -->
			<ng-container *ngIf="currentElement">

				<tabs-header [tabs]="categories" (tabChanged)="switchTab($event)"></tabs-header>

				<custom-element-general-config class="d-block p-2"
					*ngIf="currentTabIndex === 0"
					[customElement]="currentElement"
				>
				</custom-element-general-config>

				<custom-element-visual-config class="d-block p-2"
					*ngIf="currentTabIndex === 1"
					[customElement]="currentElement"
				>
				</custom-element-visual-config>

				<custom-element-trigger-config class="d-block p-2"
					*ngIf="currentTabIndex === 2"
					[customElement]="currentElement"
				>
				</custom-element-trigger-config>

				<custom-element-action-config class="d-block p-2"
					*ngIf="currentTabIndex === 3"
					[customElement]="currentElement"
				>
				</custom-element-action-config>

				<custom-element-export-config class="d-block p-2"
					*ngIf="currentTabIndex === 4"
					[customElement]="currentElement"
				>
				</custom-element-export-config>
			</ng-container>
		</window-panel>
	`
})
export class CustomElementsPanelComponent {
	currentElement: CustomElement;
	currentGroup: CustomElementGroup;
	logoUrl = this.baseUrl + '/assets/nu.png';

	categories: TabDef[] = [
		{ name: 'General', active: true },
		{ name: 'Visual' },
		{ name: 'Trigger' },
		{ name: 'Actions' },
		{ name: 'Export/Import' }
	];

	groupCategories = this.categories.filter(c => c.name !== 'Trigger' && c.name != 'Actions');

	currentTabIndex = 0;
	currentTab = this.categories[this.currentTabIndex];

	anchors = anchors;

	constructor(
		public conf: ConfigService,
		public elementService: CustomElementService,
		@Inject('BASE_URL') protected baseUrl: string
	) {}

	closeConfig() {
		this.conf.toggleCustomElementsPanel();
		this.elementService.configureElement(null);
	}

	selectElement(value: CustomElement, group?: CustomElementGroup) {
		this.currentElement = value;
		this.currentGroup = group;

		this.elementService.configureElement(value);
	}

	selectGroup(value: CustomElementGroup) {
		this.currentGroup = value;
		this.currentElement = null;

		this.elementService.configureGroup(value);
	}

	update() {
		this.currentElement?.update.next(true);
	}

	switchTab(tab: TabDef) {
		this.currentTab = tab;
		this.currentTabIndex = this.categories.indexOf(tab);
	}

	createNew() {
		this.elementService.addCustomElement(this.currentGroup);
	}

	createNewGroup() {
		this.elementService.addCustomElementGroup();
	}

	save() {
		this.elementService.saveCustomElements();
	}
}