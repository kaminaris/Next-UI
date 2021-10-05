import {
	ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit
}                                 from '@angular/core';
import { Subscription }           from 'rxjs';
import { Cast }                   from 'src/app/Model/Cast';
import { UnitFrameCastBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameCastBarConfig';

@Component({
	selector: 'cast-bar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<progress-bar
			*ngIf="visible"
			class="flex-fill"
			[percent]="percent"
			[fillColor]="config.barColor"
			[bgColor]="config.backgroundColor"
			[barStyle]="config.barStyle"
			[barDirection]="config.barDirection"
			[smooth]="true"
		>
			<div class="position-absolute z10" text-widget [config]="config.widgets.name">
				{{ text }}
			</div>

			<div class="position-absolute z10" text-widget [config]="config.widgets.elapsed">
				{{ elapsed }}
			</div>
		</progress-bar>
	`
})
export class CastBarComponent implements OnInit, OnDestroy {
	@Input() cast: Cast;
	@Input() config: UnitFrameCastBarConfig;

	visible = false;
	percent = 0;
	text = '';
	elapsed = '';

	subs: Subscription[] = [];
	cancelTimer: number = null;

	constructor(protected cd: ChangeDetectorRef) {}

	ngOnInit() {
		if (!this.cast) {
			console.log('NO CAST!');
			return;
		}

		this.subs.push(this.cast.started.subscribe((startDate: Date) => {
			if (!startDate) {
				return;
			}

			this.stopCancelTimer();
			this.text = this.cast.name;
			this.percent = 0;
			this.visible = true;
			this.cd.detectChanges();
		}));

		this.subs.push(this.cast.stopped.subscribe((e: { date: Date, canceled: boolean, reason?: string }) => {
			console.log(e);
			if (!e) {
				return;
			}

			if (e.canceled) {
				this.text = e.reason ? e.reason : 'Canceled';
				this.stopCancelTimer();
				this.cancelTimer = setTimeout(() => {
					this.text = '';
					this.percent = 0;
					this.visible = false;
					this.cd.detectChanges();
				}, 500);
			}
			else {
				this.text = '';
				this.percent = 0;
				this.visible = false;
			}
			this.cd.detectChanges();
		}));

		this.subs.push(this.cast.elapsed.subscribe((elapsed: number) => {
			this.percent = (elapsed / this.cast.duration) * 100;
			this.elapsed = (this.cast.duration - elapsed).toFixed(1);
			this.cd.detectChanges();
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	stopCancelTimer() {
		if (this.cancelTimer) {
			clearTimeout(this.cancelTimer);
			this.cancelTimer = null;
		}
	}
}