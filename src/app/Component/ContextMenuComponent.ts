import { Component } from '@angular/core';
import { ContextMenuItem }                    from 'src/app/Interface/ContextMenuItem';
import { ContextMenuService }                 from 'src/app/Service/ContextMenuService';

@Component({
	selector: 'context-menu',
	template: `
		<ul class="dropdown-menu dropdown-menu-dark pos-a no-sel" style="display: block"
			*ngIf="visible"
			[style.transform]="transformStr"
		>
			<ng-container *ngFor="let menuItem of contextMenuItems; index as i">
				<li
					(click)="onContextMenuClick($event, menuItem)">
					<button class="dropdown-item">
						{{ menuItem.label }}
					</button>
				</li>
			</ng-container>
		</ul>
	`
})

export class ContextMenuComponent {
	visible = false;
	contextMenuItems: ContextMenuItem[] = [];
	transformStr = '';

	timer: number;

	constructor(
		protected cms: ContextMenuService
	) {
		cms.setContextMenu(this);
	}

	setContextMenuItems(items: ContextMenuItem[]) {
		this.contextMenuItems = items.filter(item => {
			if (!item.hidden) {
				return true;
			}

			return !item.hidden(item);
		});
	}

	onContextMenuClick(event: MouseEvent, item: ContextMenuItem): any {
		item.action(item, event);
	}

	setPosition(x: number, y: number) {
		this.transformStr = `translate(${ x }px, ${ y }px)`;
	}

	show() {
		this.visible = true;
	}

	hide() {
		this.visible = false;
	}
}