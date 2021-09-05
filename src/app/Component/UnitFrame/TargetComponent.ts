import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                                             from 'rxjs';
import { Aura }                                                                     from 'src/app/Model/Aura';
import { Combatant }                                                                from 'src/app/Model/Combatant';
import { AuraService }                                                              from 'src/app/Service/AuraService';
import { ConfigService }                                                            from 'src/app/Service/ConfigService';
import { LogParser }                                                                from 'src/app/Service/LogParser/LogParser';
import { XivPluginService }                                                         from 'src/app/Service/XivPluginService';
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
			<div class="d-flex position-absolute z10"
				*ngIf="ownConfig.aurasEnabled"
				anchor-element
				[anchorSub]="ownConfig.auraAnchorSub"
				[positionSub]="ownConfig.auraPositionSub"
			>
				<aura-icon class="d-block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>

			<progress-bar
				class="flex-fill"
				[percent]="hpPct"
				[fillColor]="barColor"
				[bgColor]="ownConfig.backgroundColor"
				[barStyle]="ownConfig.barStyle"
				[barDirection]="ownConfig.barDirection"
			>
				<div class="position-absolute z10" text-widget [config]="ownConfig.widgets.name">
					{{ name }}
				</div>

				<div class="position-absolute z10" text-widget [config]="ownConfig.widgets.job">
					{{ job }}
				</div>

				<div class="position-absolute z10" text-widget [config]="ownConfig.widgets.level">
					{{ level }}
				</div>

				<div class="position-absolute z10" text-widget [config]="ownConfig.widgets.hp">
					{{ hpText }}
				</div>
			</progress-bar>
			<progress-bar
				class="flex-shrink-0"
				*ngIf="ownConfig.showMana"
				[style.height]="ownConfig.manaHeight"
				[fillColor]="ownConfig.manaColor"
				[bgColor]="ownConfig.backgroundColor"
				[percent]="manaPct"
				[barStyle]="ownConfig.manaBarStyle"
				[barDirection]="ownConfig.manaBarDirection"
			>
				<div class="position-absolute z10" text-widget [config]="ownConfig.widgets.mana">
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
		cd: ChangeDetectorRef,
		xiv: XivPluginService,
		auraService: AuraService
	) {
		super(conf, parser, cd, xiv, auraService);
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

			this.targetSubs.push(this.target.auras.subscribe(this.filterAuras.bind(this)));

			this.targetSubs.push(this.ownConfig.useClassColorSub.subscribe(() => {
				this.copyFrom(this.target);
			}));
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
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