import {
	ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit
} from '@angular/core';
import { Subscription }           from 'rxjs';
import { Cast }                   from 'src/app/Model/Cast';
import { actions }                   from 'src/app/Data/actions';
import { UnitFrameCastBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameCastBarConfig';

@Component({
	selector: 'cast-bar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="d-flex w100p h100p" style="border-style: solid"
			*ngIf="visible"
			[style.border-width.px]="config.borderWidth"
			[style.border-color]="config.borderColor"
		>
			<img *ngIf="config.showIcon && abilityIcon" [src]="abilityIcon" [alt]="text" style="height: 100%;">
			<progress-bar
				class="flex-fill"
				[percent]="percent"
				[fillColor]="config.barColor"
				[bgColor]="config.backgroundColor"
				[barStyle]="config.barStyle"
				[barDirection]="config.barDirection"
				[smooth]="true"
			>
				<div class="position-absolute h100p" 
					*ngIf="config.showSlideCast"
					[style.width.%]="slideCastFill"
					style="background: rgba(200, 32, 32, 0.7); right: 0"
				>
				</div>

				<div class="position-absolute z10" text-widget [config]="config.widgets.name">
					{{ text }}
				</div>

				<div class="position-absolute z10" text-widget [config]="config.widgets.elapsed">
					{{ elapsed }}
				</div>
			</progress-bar>
		</div>
	`
})
export class CastBarComponent implements OnInit, OnDestroy {
	@Input() cast: Cast;
	@Input() config: UnitFrameCastBarConfig;

	visible = false;
	percent = 0;
	text = '';
	elapsed = '';
	abilityIcon = '';
	slideCastFill = 0;

	subs: Subscription[] = [];
	cancelTimer: number = null;

	constructor(
		protected cd: ChangeDetectorRef,
		@Inject('BASE_URL') protected baseUrl: string
	) {}

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
			this.setAbilityIcon();
			this.slideCastFill = (this.cast.delay / this.cast.duration) * 100;
			this.visible = true;
			this.cd.detectChanges();
		}));

		this.subs.push(this.cast.stopped.subscribe((e: { date: Date, canceled: boolean, reason?: string }) => {
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
			let left = this.cast.duration - elapsed;
			if (left < 0) {
				left = 0;
			}
			this.elapsed = left.toFixed(1);
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

	setAbilityIcon() {
		const act = actions.find(a => a.id === this.cast.id);
		if (act) {
			this.abilityIcon = this.baseUrl + 'assets/icons/' + act.iconId + '.png';
		}
	}
}