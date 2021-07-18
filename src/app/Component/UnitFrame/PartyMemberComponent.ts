import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                           from 'rxjs';
import { Aura }                                                   from 'src/app/Model/Aura';
import { Combatant }                                              from 'src/app/Model/Combatant';

@Component({
	selector: 'party-member',
	template: `
		<progress-bar [percent]="hpPct">
			<div class="pos-a z10 fz-10" style="right: 5px; top: 2px;">
				{{ job }}
			</div>

			<div class="pos-a z10">
				{{ combatant.name }}
			</div>
			<div class="pos-a z10 ta-c w100p">
				{{ hp }} / {{ combatant.hpMax }}
			</div>
			<div class="pos-a z10" style="display:flex; bottom: 0">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
		</progress-bar>
	`
})
export class PartyMemberComponent implements OnInit, OnDestroy {
	@Input() combatant: Combatant;

	job = 'NONE';
	hp = 100;
	hpMax = 100;
	hpPct = 100;
	hpText = '100 / 100 (100%)';
	auras: Aura[] = [];
	subs: Subscription[] = [];

	constructor(protected cd: ChangeDetectorRef) {}

	ngOnInit() {
		this.hp = this.combatant.hp.value;
		this.subs.push(this.combatant.job.subscribe((job) => {
			this.job = job;
			this.cd.detectChanges();
		}));

		this.subs.push(this.combatant.hp.subscribe((hp) => {
			this.hp = hp;
			this.hpMax = this.combatant.hpMax;
			this.calcHp();
		}));

		this.subs.push(
			this.combatant.auras.subscribe((auras) => {
				this.auras = auras;
				console.log('AURAS CHANGED', auras);
				this.cd.detectChanges();
			})
		);
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	calcHp() {
		this.hpPct = Math.round((this.hp / this.hpMax) * 100);
		if (this.hpPct > 100) {
			this.hpPct = 100;
		}

		this.hpText = this.hp + ' / ' + this.hpMax + ' (' + this.hpPct + '%)';
		this.cd.detectChanges();
	}
}