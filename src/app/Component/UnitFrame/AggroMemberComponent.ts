import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Combatant }                                                                       from 'src/app/Model/Combatant';
import { PlayerComponent }                                                                 from './PlayerComponent';

@Component({
	selector: 'aggro-member',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="d-flex flex-column aggro-member-frame cursor-pointer"
			style="height: 100%; border-style: solid"
			[style.border-width.px]="ownConfig.borderWidth"
			[style.border-color]="ownConfig.borderColor"
			(click)="setTarget()"
		>
			<div class="d-flex pos-a z10"
				*ngIf="ownConfig.aurasEnabled"
				anchor-element
				[anchorSub]="ownConfig.auraAnchorSub"
				[positionSub]="ownConfig.auraPositionSub"
			>
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar style="flex: 1 1 auto;"
				[percent]="hpPct"
				[fillColor]="ownConfig.barColor"
				[bgColor]="ownConfig.backgroundColor"
				[barStyle]="ownConfig.barStyle"
				[barDirection]="ownConfig.barDirection"
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
				[barStyle]="ownConfig.manaBarStyle"
				[barDirection]="ownConfig.manaBarDirection"
			>
				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.mana">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class AggroMemberComponent extends PlayerComponent implements OnInit, OnDestroy {
	@Input() combatant: Combatant;

	ownConfig = this.config.frames.aggroList;

	setTarget() {
		this.xiv.setTarget(this.combatant.id);
	}

	ngOnInit() {
		// this.cd.detach();

		this.copyFrom(this.combatant);

		this.subs.push(this.combatant.anyChanged.subscribe(() => {
			this.copyFrom(this.combatant);
		}));

		this.subs.push(this.ownConfig.anyChanged.subscribe(() => {
			this.cd.detectChanges();
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
}