import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { Aura }                                            from 'src/app/Model/Aura';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';
import { Util }                                            from 'src/app/Service/LogParser/Util';

@Component({
	selector: 'player',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column; height: 100%">
			<div class="pos-a z10" style="display:flex; bottom: 0">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar
				[percent]="hpPct"
				[fillColor]="ownConfig.barColor"
			>
				<div class="pos-a z10"
					style="right: 0; top: -20px;"
					*ngIf="ownConfig.showName"
					[style.color]="ownConfig.fontColor"
				>
					{{ name }}
				</div>

<!--				<div class="pos-a z10 fz-10" -->
<!--					*ngIf="ownConfig.showJob"-->
<!--					style="right: 5px; top: 2px;"-->
<!--					[style.color]="ownConfig.fontColor"-->
<!--				>-->
<!--					{{ job }}-->
<!--				</div>-->
				
				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.job">
					{{ job }}
				</div>

				<div class="pos-a z10 fz-10"
					style="right: 5px; bottom: 2px;"
					*ngIf="ownConfig.showLevel"
					[style.color]="ownConfig.fontColor"
				>
					{{ level }}
				</div>

				<div class="pos-a w100p h100p z10 ta-c"
					[style.color]="ownConfig.fontColor"
					[style.font-size]="ownConfig.fontSize"
				>
					{{ hpText }}
				</div>
			</progress-bar>
			<progress-bar
				*ngIf="ownConfig.showMana"
				[style.height]="ownConfig.manaHeight"
				[fillColor]="ownConfig.manaColor"
				[percent]="manaPct"
			>
				<div class="pos-a w100p h100p z10 ta-c"
					[style.color]="ownConfig.fontColor"
					[style.font-size]="ownConfig.fontSize">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class PlayerComponent implements OnInit, OnDestroy {
	hp = 100;
	hpMax = 100;
	hpPct = 100;

	mana = 10000;
	manaMax = 10000;
	manaPct = 100;

	name = '';
	job = 'NONE';
	level = 1;

	leftHpText = '';
	hpText = '100 / 100 (100%)';
	rightHpText = '';

	manaText = '10000 / 10000 (100%)';
	subs: Subscription[] = [];

	config = this.conf.config;
	ownConfig = this.config.frames.player;
	player = this.parser.player;
	auras: Aura[] = [];

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.copyFrom(this.player);

		this.subs.push(this.player.job.subscribe((job) => {
			this.job = job;
			this.cd.detectChanges();
		}));

		this.subs.push(this.player.level.subscribe((level) => {
			this.level = level;
			this.cd.detectChanges();
		}));

		this.subs.push(this.player.hp.subscribe((hp) => {
			this.hp = hp;
			this.hpMax = this.player.hpMax;
			this.calcHp();
		}));

		this.subs.push(this.player.mana.subscribe((mana) => {
			this.mana = mana;
			this.manaMax = this.player.manaMax;
			this.calcMana();
		}));

		this.subs.push(
			this.player.auras.subscribe((auras) => {
				this.auras = auras;
				this.cd.detectChanges();
			})
		);

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
	}

	calcHp() {
		this.hpPct = Math.round((this.hp / this.hpMax) * 100);
		if (this.hpPct > 100) {
			this.hpPct = 100;
		}

		this.hpText =
			Util.formatNumber(this.hp, this.config.numberFormat) +
			' / ' +
			Util.formatNumber(this.hpMax, this.config.numberFormat) +
			' (' + this.hpPct + '%)';
		this.cd.detectChanges();
	}

	calcMana() {
		this.manaPct = Math.round((this.mana / this.manaMax) * 100);
		if (this.manaPct > 100) {
			this.manaPct = 100;
		}

		this.manaText =
			Util.formatNumber(this.mana, this.config.numberFormat) +
			' / ' +
			Util.formatNumber(this.manaMax, this.config.numberFormat) +
			' (' + this.manaPct + '%)';
		this.cd.detectChanges();
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	copyFrom(c: Combatant) {
		this.name = c.name;
		this.hp = c.hp.value;
		this.hpMax = c.hpMax;
		this.mana = c.mana.value;
		this.manaMax = c.manaMax;
		this.job = c.job.value;
		this.level = c.level.value;
		this.cd.detectChanges();
	}
}