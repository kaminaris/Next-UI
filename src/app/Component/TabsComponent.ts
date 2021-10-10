import { Component, Input, EventEmitter, Output } from '@angular/core';

export interface TabDef {
	name: string;
	active?: boolean;
}

@Component({
	selector: 'tabs-header',
	template: `
		<ul class="nav nav-pills fz-14 justify-content-center">
			<li class="nav-item" *ngFor="let t of tabs">
				<span class="nav-link cursor-pointer" 
					[class.active]="t.active"
					(click)="navigate(t, $event)"
				>{{ t.name }}</span>
			</li>
		</ul>
	`
})
export class TabsComponent {
	@Input() tabs: TabDef[];
	@Input() selectedIndex: number;
	currentTab: TabDef;

	@Output() tabChanged = new EventEmitter<TabDef>();

	navigate(t: TabDef, e: MouseEvent) {
		e.preventDefault();
		for (const tab of this.tabs) {
			tab.active = false;
		}

		t.active = true;
		this.currentTab = t;

		this.tabChanged.emit(t);
	}

}