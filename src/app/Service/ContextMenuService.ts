import { ElementRef, Injectable } from '@angular/core';
import { ContextMenuItem }        from 'src/app/Interface/ContextMenuItem';

@Injectable({ providedIn: 'root' })
export class ContextMenuService {
	contextMenuComponent: any;
	requester: ElementRef;

	setContextMenu(cm: any) {
		this.contextMenuComponent = cm;
		document.addEventListener('click', this.onDocumentClick.bind(this));
	}

	displayContextMenu(event: MouseEvent, ref: ElementRef, menuItems: ContextMenuItem[]) {
		this.contextMenuComponent.setContextMenuItems(menuItems);

		this.requester = ref;
		this.contextMenuComponent.setPosition(event.clientX, event.clientY);
		this.contextMenuComponent.show();
	}

	hideContextMenu() {
		this.contextMenuComponent.hide();
	}

	onDocumentClick(event: MouseEvent) {
		if (!this.contextMenuComponent.visible || !this.requester) {
			return;
		}

		if (!this.requester.nativeElement.contains(event.target)) {
			this.hideContextMenu();
		}
	}
}