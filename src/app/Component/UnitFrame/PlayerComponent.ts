import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'player',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column; height: 100%">
			<progress-bar [percent]="hpPct">
<!--				<div class="bar-text bar-text-left" id="hp-text-left">-->
<!--					{{ leftHpText }}-->
<!--				</div>-->
				<div class="pos-a w100p h100p z10 ta-c">
					{{ hpText }}
				</div>
<!--				<div class="bar-text bar-text-right" id="hp-text-right">-->
<!--					{{ rightHpText }}-->
<!--				</div>-->
			</progress-bar>
			<progress-bar 
				[style.height]="config.manaHeight" 
				[percent]="manaPct"
				[fillColor]="config.manaColor"
			>
<!--				<div class="bar-text" id="hp-text">-->
<!--					{{ manaText }}-->
<!--				</div>-->
				<div class="pos-a w100p h100p z10 ta-c">
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

	leftHpText = '';
	hpText = '100 / 100 (100%)';
	rightHpText = '';

	manaText = '10000 / 10000 (100%)';
	subs: Subscription[] = [];

	config = this.conf.config;
	player = this.parser.player;

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
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

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}))
	}

	calcHp() {
		this.hpPct = Math.round((this.hp / this.hpMax) * 100);
		if (this.hpPct > 100) {
			this.hpPct = 100;
		}

		this.hpText = this.hp + ' / ' + this.hpMax + ' (' + this.hpPct + '%)';
		this.cd.detectChanges();
	}

	calcMana() {
		this.manaPct = Math.round((this.mana / this.manaMax) * 100);
		if (this.manaPct > 100) {
			this.manaPct = 100;
		}

		this.manaText = this.mana + ' / ' + this.manaMax + ' (' + this.manaPct + '%)';
		this.cd.detectChanges();
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}