import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TargetComponent }                                 from 'src/app/Component/UnitFrame/TargetComponent';
import { Aura }                                            from 'src/app/Model/Aura';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { AuraService }                                     from 'src/app/Service/AuraService';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';
import { XivPluginService }                                from 'src/app/Service/XivPluginService';

@Component({
	selector: 'target-of-target',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column target-of-target-frame cursor-pointer" *ngIf="targetOfTarget"
			style="height: 100%; border-style: solid"
			[style.border-width.px]="ownConfig.borderWidth"
			[style.border-color]="ownConfig.borderColor"
			(click)="setTarget()"
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
export class TargetOfTargetComponent extends TargetComponent implements OnInit, OnDestroy {
	config = this.conf.config;
	ownConfig = this.config.frames.targetOfTarget;
	targetOfTarget: Combatant;

	constructor(
		conf: ConfigService,
		parser: LogParser,
		cd: ChangeDetectorRef,
		xiv: XivPluginService,
		auraService: AuraService
	) {
		super(conf, parser, cd, xiv, auraService);
	}

	setTarget() {
		this.xiv.setTarget(this.targetOfTarget.id);
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

			this.targetSubs.push(this.targetOfTarget.anyChanged.subscribe(() => {
				this.copyFrom(this.targetOfTarget);
			}));

			this.targetSubs.push(this.targetOfTarget.auras.subscribe(this.filterAuras.bind(this)));

			this.targetSubs.push(this.ownConfig.useClassColorSub.subscribe(() => {
				this.copyFrom(this.targetOfTarget);
			}));
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
	}
}