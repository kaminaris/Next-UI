import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                                             from 'rxjs';
import { Aura }                                                                     from 'src/app/Model/Aura';
import { Combatant }                                                                from 'src/app/Model/Combatant';
import { ConfigService }                                                            from 'src/app/Service/ConfigService';
import { LogParser }                                                                from 'src/app/Service/LogParser/LogParser';
import { PlayerComponent }                                                          from './PlayerComponent';

@Component({
	selector: 'target',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column" *ngIf="target"
			style="height: 100%; border-style: solid"
			[style.border-width.px]="ownConfig.borderWidth"
			[style.border-color]="ownConfig.borderColor"
		>
			<div  class="d-flex pos-a z10"
				*ngIf="ownConfig.aurasEnabled"
				anchor-element
				[anchorSub]="ownConfig.auraAnchorSub"
				[positionSub]="ownConfig.auraPositionSub"
			>
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar style="flex: 1 1 auto;"
				[percent]="hpPct"
				[fillColor]="barColor"
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
export class TargetComponent extends PlayerComponent implements OnInit, OnDestroy {

	targetSubs: Subscription[] = [];

	config = this.conf.config;
	ownConfig = this.config.frames.target;
	target: Combatant;

	constructor(
		conf: ConfigService,
		parser: LogParser,
		cd: ChangeDetectorRef
	) {
		super(conf, parser, cd);
	}

	ngOnInit(): void {
		this.cd.detach();

		this.subs.push(this.parser.target.subscribe(t => {
			this.targetUnsub();

			if (!t) {
				// this.targetUnsub();
				this.target = t;
				this.cd.detectChanges();

				return;
			}

			this.target = t;
			this.copyFrom(this.target);

			this.targetSubs.push(this.target.anyChanged.subscribe(() => {
				this.copyFrom(this.target);
			}));

			this.targetSubs.push(this.target.auras.subscribe((auras) => {
				this.auras = this.auraFilter(auras);
				this.cd.detectChanges();
			}));

			this.targetSubs.push(this.ownConfig.useClassColorSub.subscribe(() => {
				this.copyFrom(this.target);
			}));
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
	}

	auraFilter(auras: Aura[]) {
		if (!this.target.isNPC) {
			return auras;
		}

		return auras.filter((a) => {
			return a.appliedBy === this.player.id;
		});
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}

		this.targetUnsub();
	}

	targetUnsub() {
		for (const sub of this.targetSubs) {
			sub.unsubscribe();
		}
	}
}