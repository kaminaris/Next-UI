import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'window-panel',
	template: `
		<div class="d-flex flex-column config-window">
			<div class="config-bar d-flex">
				<ng-content select="[header]"></ng-content>

				<button class="btn btn-sm btn-danger config-close-btn position-absolute" (click)="close.emit()">
					<icon-close></icon-close>
				</button>
			</div>

			<div class="config-content d-flex flex-row">
				<div class="config-pane">
					<ng-content select="[pane]"></ng-content>
				</div>
				<div class="config-pane-content">
					<ng-content></ng-content>
				</div>
			</div>
		</div>
	`
})
export class WindowPanelComponent {
	@Output() close = new EventEmitter<any>();
}