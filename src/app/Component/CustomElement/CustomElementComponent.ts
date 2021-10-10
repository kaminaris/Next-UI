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
			<div class="position-absolute z20" text-widget *ngFor="let tw of element.texts" [config]="tw">
				{{ tw.getFormattedText(data) }}
			</div>

			<progress-bar class="position-absolute fill-abs z10"
				*ngIf="element.progressBar.show && !element.progressBar.circular"
				[percent]="data?.progressRaw"
				[bgColor]="element.progressBar.bgColor"
				[fillColor]="element.progressBar.fillColor"
				[barStyle]="element.progressBar.barStyle"
				[barDirection]="element.progressBar.barDirection"
				[smooth]="element.progressBar.smooth"
			></progress-bar>

			<progress-bar-circular class="position-absolute fill-abs z10"
				*ngIf="element.progressBar.show && element.progressBar.circular"
				[radius]="element.progressBar.radius"
				[percent]="data?.progressRaw"
				[bgColor]="element.progressBar.bgColor"
				[fillColor]="element.progressBar.fillColor"
			></progress-bar-circular>

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

		const trigger = this.element.trigger;
		this.show = trigger.active.value;
		this.data = trigger.data.value;

		this.triggerSubs.push(trigger.active.subscribe((a: boolean) => {
			this.show = a;
			this.cd.detectChanges();
		}));

		this.triggerSubs.push(trigger.tick.subscribe(() => {
			const newData = {
				duration: trigger.duration.toFixed(1),
				durationRaw: trigger.duration,
				elapsed: trigger.elapsed.toFixed(1),
				elapsedRaw: trigger.elapsed,
				left: (trigger.duration - trigger.elapsed).toFixed(1),
				leftRaw: (trigger.duration - trigger.elapsed),
				progress: ((trigger.elapsed / trigger.duration) * 100).toFixed(1),
				progressRaw: (trigger.elapsed / trigger.duration) * 100
			};


			Object.assign(this.data, newData);
			this.cd.detectChanges();
		}));

		this.triggerSubs.push(trigger.data.subscribe((e?: TriggerData) => {
			Object.assign(this.data, e);
			this.cd.detectChanges();
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