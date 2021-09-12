import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                           from 'rxjs';
import { CustomElement }                                          from 'src/app/Model/CustomElement/CustomElement';
import { TriggerData }                                            from 'src/app/Model/CustomElement/Trigger';
import { ConfigService }                                          from 'src/app/Service/ConfigService';

@Component({
	selector: 'custom-element',
	template: `
		<div class="frame-custom-element-name" *ngIf="conf.moveMode.value || element.uiActive">
			{{ element.name }}
		</div>
		<ng-content></ng-content>
		<div class="custom-element" *ngIf="show || element.uiActive"
			[style.opacity]="element.opacity"
		>
			<div class="position-absolute z10" text-widget *ngFor="let tw of element.texts" [config]="tw">
				{{ tw.getFormattedText(data) }}
			</div>

			<progress-bar *ngIf="element.progressBar"
				height="100%"
				width="100%"
				[percent]="data?.progress"
			></progress-bar>

			<img class="custom-element-image"
				*ngIf="element.image"
				[src]="element.image"
			>
		</div>
	`
})
export class CustomElementComponent implements OnInit, OnDestroy {
	@Input() element: CustomElement;
	show = false;

	subs: Subscription[] = [];
	triggerSubs: Subscription[] = [];
	data: any = {};

	constructor(
		public conf: ConfigService,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.reloadTrigger();

		this.subs.push(this.element.update.subscribe(() => {
			setTimeout(() => {
				this.cd.detectChanges();
			}, 5);
		}));

		this.subs.push(this.element.triggerChange.subscribe(() => {
			this.reloadTrigger();
		}));

		this.cd.detectChanges();
	}

	reloadTrigger() {
		for (const sub of this.triggerSubs) {
			sub.unsubscribe();
		}

		this.show = this.element.trigger.active.value;
		this.data = this.element.trigger.data.value;

		this.triggerSubs.push(this.element.trigger.active.subscribe((a: boolean) => {
			this.show = a;
			this.cd.detectChanges();
			console.log('TRIGGER CHANGE', a);
		}));

		this.triggerSubs.push(this.element.trigger.tick.subscribe(() => {
			Object.assign(this.data, {
				duration: this.element.trigger.triggerDuration,
				elapsed: this.element.trigger.triggerTimer,
			});
			console.log('TICK', this.data)
			this.cd.detectChanges();
		}));

		this.triggerSubs.push(this.element.trigger.data.subscribe((e?: TriggerData) => {
			Object.assign(this.data, e);
			this.cd.detectChanges();
			console.log('TRIGGER DATA CHANGE', e);
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}

		for (const sub of this.triggerSubs) {
			sub.unsubscribe();
		}
	}
}