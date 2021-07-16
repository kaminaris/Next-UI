import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { Combatant }                                       from 'src/app/Service/LogParser/Combatant';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'target',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column; height: 100%" *ngIf="target">
			<progress-bar [percent]="hpPct">
				<div class="pos-a w100p h100p z10 ta-c">
					{{ hpText }}
				</div>
			</progress-bar>
			<progress-bar 
				[style.height]="config.manaHeight" 
				[percent]="manaPct"
				[fillColor]="config.manaColor"
			>
				<div class="pos-a w100p h100p z10 ta-c">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class TargetComponent implements OnInit, OnDestroy {
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

	hpSub: Subscription;
	manaSub: Subscription;

	config = this.conf.config;
	target: Combatant;

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.subs.push(this.parser.target.subscribe(t => {

			if (!t) {
				this.hpSub?.unsubscribe();
				this.manaSub?.unsubscribe();
				this.target = t;
				this.cd.detectChanges();

				return;
			}
			this.target = t;
			this.hpSub = this.target.hp.subscribe((hp) => {
				console.log('taret hp up', hp)
				this.hp = hp;
				this.hpMax = this.target.hpMax;
				this.calcHp();
			});

			this.manaSub = this.target.mana.subscribe((mana) => {
				this.mana = mana;
				this.manaMax = this.target.manaMax;
				this.calcMana();
			});
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

		this.hpSub.unsubscribe();
		this.manaSub.unsubscribe();
	}
}