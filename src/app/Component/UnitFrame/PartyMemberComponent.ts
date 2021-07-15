import { ChangeDetection }                                        from '@angular/cli/lib/config/workspace-schema';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                           from 'rxjs';
import { Aura }                                from 'src/app/Service/LogParser/Aura';
import { Combatant }                           from 'src/app/Service/LogParser/Combatant';

@Component({
	selector: 'party-member',
	template: `
		<div>
			{{ job }} - {{ combatant.name }} - {{ hp }} /{{ combatant.hpMax.value }}
			<div style="display:flex;">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
		</div>
	`
})
export class PartyMemberComponent implements OnInit, OnDestroy {
	@Input() combatant: Combatant;

	job = 'NONE';
	hp = 100;
	auras: Aura[] = [];
	subs: Subscription[] = [];

	constructor(protected cd: ChangeDetectorRef) {}

	ngOnInit() {
		this.hp = this.combatant.hp.value;
		this.subs.push(this.combatant.job.subscribe((job) => {
			this.job = job;
			this.cd.detectChanges();
		}));

		this.subs.push(this.combatant.hp.subscribe((v) => {
			this.hp = v;
			this.cd.detectChanges();
		}));

		this.subs.push(
			this.combatant.auras.subscribe((auras) => {
				this.auras = auras;
				console.log('AURAS CHANGED', auras);
				this.cd.detectChanges();
			})
		)
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}