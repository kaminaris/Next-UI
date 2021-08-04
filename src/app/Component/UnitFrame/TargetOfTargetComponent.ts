import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { Aura }                                            from 'src/app/Model/Aura';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';
import { PlayerComponent }                                 from './PlayerComponent';

@Component({
	selector: 'target-of-target',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column; height: 100%" *ngIf="targetOfTarget">
			<div class="pos-a z10" style="display:flex; bottom: 0">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar style="flex: 1 1 auto;"
				[percent]="hpPct"
				[fillColor]="ownConfig.barColor"
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
				[percent]="manaPct"
				[fillColor]="ownConfig.manaColor"
			>
				<div class="pos-a z10" text-widget [config]="ownConfig.widgets.mana">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class TargetOfTargetComponent extends PlayerComponent implements OnInit, OnDestroy {

	auraSub: Subscription;
	anyChangedSub: Subscription;

	config = this.conf.config;
	ownConfig = this.config.frames.targetOfTarget;
	targetOfTarget: Combatant;

	constructor(
		conf: ConfigService,
		parser: LogParser,
		cd: ChangeDetectorRef
	) {
		super(conf, parser, cd);
	}

	ngOnInit(): void {
		this.subs.push(this.parser.targetOfTarget.subscribe(t => {
			this.targetUnsub();

			if (!t) {
				// this.targetUnsub();
				this.targetOfTarget = t;
				this.cd.detectChanges();

				return;
			}

			this.targetOfTarget = t;
			this.copyFrom(this.targetOfTarget);

			this.anyChangedSub = this.targetOfTarget.anyChanged.subscribe(() => {
				this.copyFrom(this.targetOfTarget);
			})

			this.auraSub = this.targetOfTarget.auras.subscribe((auras) => {
				this.auras = this.auraFilter(auras);
				this.cd.detectChanges();
			});
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
	}

	auraFilter(auras: Aura[]) {
		if (!this.targetOfTarget.isNPC) {
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
		this.auraSub?.unsubscribe();
		this.anyChangedSub?.unsubscribe();
	}
}