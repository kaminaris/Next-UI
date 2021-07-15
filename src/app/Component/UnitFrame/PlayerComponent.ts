import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'player',
	template: `
		<ng-content></ng-content>
		
		<div class="hp" id="main">
			<div class="bar-text bar-text-left" id="hp-text-left">
				{{ leftHpText }}
			</div>
			<div class="bar-text" id="hp-text">
				{{ hpText }}
			</div>
			<div class="bar-text bar-text-right" id="hp-text-right">
				{{ rightHpText }}
			</div>
			<div class="bar-fill hp-fill" id="hp-progress"
				[style.background-color]="config.hpColor"
				[style.width.%]="hpPct"
			></div>
		</div>
		<div class="mana" 
			[style.height]="config.manaHeight"
		>
			<div class="bar-text" id="mana-text"
				[style.line-height]="config.manaHeight"
			>
				{{ manaText }}
			</div>
			<div class="bar-fill mana-fill" id="mana-progress"
				[style.background-color]="config.manaColor"
				[style.width.%]="manaPct"
			></div>
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

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.subs.push(this.parser.player.hp.subscribe((hp) => {
			this.hp = hp;
			this.calcHp();
		}));

		this.subs.push(this.parser.player.hpMax.subscribe((hpMax) => {

			this.hpMax = hpMax;
			this.calcHp();
		}));

		this.subs.push(this.parser.player.mana.subscribe((mana) => {
			this.mana = mana;
			this.calcMana();
		}));

		this.subs.push(this.parser.player.manaMax.subscribe((manaMax) => {
			this.manaMax = manaMax;
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