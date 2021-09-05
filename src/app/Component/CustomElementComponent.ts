import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                                                    from 'rxjs';
import { CustomElement }                                                                   from 'src/app/Model/CustomElement/CustomElement';
import { TriggerStatus }                                                                   from 'src/app/Model/CustomElement/Trigger';
import { ConfigService }                                                                   from 'src/app/Service/ConfigService';

@Component({
	selector: 'custom-element',
	template: `
		<div class="frame-custom-element-name" *ngIf="conf.moveMode.value">{{ element.name }}</div>
		<ng-content></ng-content>
		<div class="custom-element" *ngIf="show"
			[style.opacity]="element.opacity"
		>
			<img class="custom-element-image" *ngIf="element.image" [src]="element.image">
			<div class="custom-element-text"
				*ngIf="element.type === 'text'"
				[style.font-size.px]="element.fontSize"
				[style.color]="element.fontColor"
			>
				{{ element.text }}
			</div>

			<div class="position-absolute z10" text-widget *ngFor="let tw of element.texts" [config]="tw">
				aaaa
			</div>
		</div>

	`
})
export class CustomElementComponent implements OnInit, OnDestroy {
	@Input() element: CustomElement;
	show = false;

	subs: Subscription[] = [];
	data: any;

	constructor(
		public conf: ConfigService,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.copyTriggerData();
		this.subs.push(this.element.trigger.active.subscribe(this.copyTriggerData.bind(this)));
		this.subs.push(this.element.update.subscribe(() => {
			setTimeout(() => {
				this.cd.detectChanges()
				console.log('up', this);
			}, 5);
		}));
	}

	copyTriggerData(e?: TriggerStatus) {
		if (!e) {
			e = this.element.trigger.active.value;
		}

		this.show = e.active;
		this.data = e.data;

		this.cd.detectChanges();
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}