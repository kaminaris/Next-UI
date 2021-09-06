import {
	ChangeDetectorRef, Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges
}                        from '@angular/core';
import { Subscription }  from 'rxjs';
import { Aura }          from 'src/app/Model/Aura';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'aura-icon',
	template: `
		<div class="position-relative" 
			[ngStyle]="{'width': ownConfig.iconSize, 'height': ownConfig.iconSize}"
			style="border: 1px solid black;
				background-repeat: no-repeat; 
			 	background-position: 40% 48%;
			 	background-size: 124%;"
			[style.background-image]="'url(' + src + ')'"
			tooltip-trigger
			[template]="auraTooltip"
		>
			<div class="position-absolute z10" text-widget
				*ngIf="timer > 0"
				[config]="ownConfig.widgets.duration">
				{{ timer | duration: this.ownConfig.cooldownPrecision }}
			</div>

			<div class="position-absolute z10" text-widget
				*ngIf="stacks > 1"
				[config]="ownConfig.widgets.stacks">
				{{ stacks }}
			</div>
		</div>
		<div #auraTooltip class="d-none">
			<div class="position-absolute top-right-5">
				{{ aura.id }}
			</div>
			<strong>{{ aura.name }}</strong>
			<p class="mb-1 mt-1">{{ aura.description }}</p>
		</div>
	`
})
export class AuraIconComponent implements OnInit, OnDestroy {
	@Input() aura: Aura;
	@Input() size = 30;
	auraId = 0;
	src = '';

	top = 5;
	left = 5;
	fontSize = '10px';

	stacks = 1;
	timer = 0;
	interval: number;
	ownConfig = this.conf.config.frames.auraBar;
	updateInterval = 1000 / 2;
	numberPrec = '1';

	subs: Subscription[] = [];

	constructor(
		protected cd: ChangeDetectorRef,
		protected conf: ConfigService,
		@Inject('BASE_URL') protected baseUrl: string
	) {}

	ngOnInit() {
		this.stacks = this.aura.stacks.value;
		this.src = this.baseUrl + 'assets/status/' + this.aura.id + '.png';
		this.updateInterval = (1000 / 2) / Math.pow(10, this.ownConfig.cooldownPrecision);
		this.startTimeout();

		this.subs.push(this.aura.stacks.subscribe((v: number) => {
			this.stacks = v;
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	startTimeout() {
		if (this.interval) {
			return;
		}

		if (!this.aura.expiresAt.value) {
			return;
		}

		this.tick();

		this.interval = setInterval(this.tick.bind(this), this.updateInterval);
	}

	tick() {
		const nd = new Date();
		let exp = (this.aura.expiresAt.value.valueOf() - nd.valueOf()) / 1000;
		if (exp <= 0) {
			exp = 0;
		}

		this.timer = exp;
		this.cd.detectChanges();
		if (exp === 0) {
			clearInterval(this.interval);
		}
	}
}