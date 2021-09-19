import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPosition }                                              from 'angular2-draggable';
import { IResizeEvent }                                           from 'angular2-draggable/lib/models/resize-event';
import { Subscription }                                           from 'rxjs';
import { CustomElement }                                          from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementGroup }                                     from 'src/app/Model/CustomElement/CustomElementGroup';
import { TriggerData }                                            from 'src/app/Model/CustomElement/Trigger';
import { ConfigService }                                          from 'src/app/Service/ConfigService';

@Component({
	selector: 'custom-element-group',
	template: `
		<div class="frame-custom-element-name" *ngIf="conf.moveMode.value || group.uiActive">
			{{ group.name }}
		</div>
		<ng-content></ng-content>
		<div class="position-relative"
			[class.d-flex]="group.dynamic"
			[class.flex-column]="group.vertical"
		>
			<custom-element *ngFor="let customElement of group.children"
				class="d-block frame-custom-element no-sel"
				[class.draggable]="!group.dynamic"
				[element]="customElement"
				[class.frame-bg]="moveMode || customElement.uiActive"
				[style.width.px]="customElement.size.width"
				[style.height.px]="customElement.size.height"
				[ngDraggable]="!group.dynamic && (moveMode || customElement.uiActive)"
				[ngResizable]="moveMode || customElement.uiActive"
				(rzStop)="saveCustomElementSize(customElement, $event)"
				(endOffset)="saveCustomElementPosition(customElement, $event)"
				[handle]="customElementDragHandle"
				rzHandles="all"
				[position]="group.dynamic ? { x: 0, y: 0 } : customElement.position"
			>
				<div #customElementDragHandle class="grab-handle" 
					[style.display]="!group.dynamic && (moveMode || customElement.uiActive) ? 'block': 'none'">
					<icon-mover [size]="20"></icon-mover>
				</div>
			</custom-element>
		</div>
	`
})
export class CustomElementGroupComponent {
	@Input() group: CustomElementGroup;
	show = false;
	moveMode = false;

	subs: Subscription[] = [];
	triggerSubs: Subscription[] = [];
	data: any = {};

	constructor(
		public conf: ConfigService,
		protected cd: ChangeDetectorRef
	) {}

	saveCustomElementSize(customElement: CustomElement, $event: IResizeEvent) {
		customElement.size = $event.size;
	}

	saveCustomElementPosition(customElement: CustomElement, $event: IPosition) {
		customElement.position = $event;
	}
}