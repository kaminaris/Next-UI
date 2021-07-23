import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Combatant }                                                                       from 'src/app/Model/Combatant';
import { PlayerComponent }                                                                 from './PlayerComponent';

@Component({
	selector: 'party-member',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="d-flex flex-column" style="height: 100%">
			<div class="pos-a z10" style="display:flex; bottom: 0">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar style="flex: 1 1 auto;"
				[percent]="hpPct"
				[fillColor]="ownConfig.barColor"
				[bgColor]="ownConfig.backgroundColor"
			>
				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.name">
					{{ name }}
				</div>

				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.job">
					{{ job }}
				</div>

				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.level">
					{{ level }}
				</div>

				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.hp">
					{{ hpText }}
				</div>
			</progress-bar>
			<progress-bar style="flex: 0 0 auto;"
				*ngIf="ownConfig.showMana"
				[style.height]="ownConfig.manaHeight"
				[fillColor]="ownConfig.manaColor"
				[bgColor]="ownConfig.backgroundColor"
				[percent]="manaPct"
			>
				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.mana">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class PartyMemberComponent extends PlayerComponent implements OnInit, OnDestroy {
	@Input() combatant: Combatant;

	// constructor(protected cd: ChangeDetectorRef) {}
	ownConfig = this.config.frames.party;

	ngOnInit() {
		// this.cd.detach();

		this.copyFrom(this.combatant);

		this.subs.push(this.combatant.anyChanged.subscribe(() => {
			this.copyFrom(this.combatant);
		}));

		this.subs.push(this.ownConfig.anyChanged.subscribe(() => {
			console.log('party conf changed')
			this.cd.detectChanges();
		}))

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
}