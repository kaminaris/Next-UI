import { ChangeDetectorRef, Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Aura }                                                                          from 'src/app/Model/Aura';
import { ConfigService }                                                         from 'src/app/Service/ConfigService';

@Component({
	selector: 'aura-icon',
	template: `
		<div class="pos-r" [ngStyle]="{'width': ownConfig.iconSize, 'height': ownConfig.iconSize}" 
			style="border: 1px solid black;
				background-repeat: no-repeat; 
			 	background-position: 40% 48%;
			 	background-size: 124%;"
			[style.background-image]="'url(' + src + ')'"
		>
			<div class="pos-a" *ngIf="timer > 0"
				[class.text-outline-1]="ownConfig.cooldownOutline"
				[style.top.px]="top"
				[style.left.px]="left"
				[style.font-size]="ownConfig.fontSize"
				[style.color]="ownConfig.fontColor"
			>
				{{ timer | duration: this.ownConfig.cooldownPrecision }}
			</div>
		</div>
	
	`
})
export class AuraIconComponent implements OnInit {
	@Input() aura: Aura;
	@Input() size = 30;
	auraId = 0;
	src = '';

	top = 5;
	left = 5;
	fontSize = '10px';

	timer = 0;
	interval: number;
	ownConfig = this.conf.config.frames.auraBar;
	updateInterval = 1000 / 2;
	numberPrec = '1';

	constructor(
		protected cd: ChangeDetectorRef,
		protected conf: ConfigService,
		@Inject('BASE_URL') protected baseUrl: string
	) {}

	ngOnInit() {
		this.src = this.baseUrl + 'assets/status/' + this.aura.id + '.png';
		this.updateInterval = (1000 / 2) / Math.pow(10, this.ownConfig.cooldownPrecision);
		this.startTimeout();
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