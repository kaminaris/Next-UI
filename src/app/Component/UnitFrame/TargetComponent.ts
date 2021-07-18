import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { Aura }                                            from 'src/app/Model/Aura';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';
import { PlayerComponent }                                 from './PlayerComponent';

@Component({
	selector: 'target',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column; height: 100%" *ngIf="target">
			<div class="pos-a z10" style="display:flex; bottom: 0">
				<aura-icon style="display: block" *ngFor="let aura of auras" [aura]="aura"></aura-icon>
			</div>
			<progress-bar
				[percent]="hpPct"
				[fillColor]="ownConfig.barColor"
			>
				<div class="pos-a z10 fz-10" 
					style="right: 5px; top: 2px;"
					*ngIf="!target.isNPC"
					[style.color]="ownConfig.fontColor"
				>
					{{ job }}
				</div>
				<div class="pos-a z10 fz-10" 
					style="right: 5px; bottom: 2px;"
					[style.color]="ownConfig.fontColor"
				>
					{{ level }}
				</div>
				<div class="pos-a w100p h100p z10 ta-c"
					[style.color]="ownConfig.fontColor"
					[style.font-size]="ownConfig.fontSize">
					{{ hpText }}
				</div>
			</progress-bar>
			<progress-bar
				[style.height]="ownConfig.manaHeight"
				[percent]="manaPct"
				[fillColor]="ownConfig.manaColor"
			>
				<div class="pos-a w100p h100p z10 ta-c"
					[style.color]="ownConfig.fontColor"
					[style.font-size]="ownConfig.fontSize">
					{{ manaText }}
				</div>
			</progress-bar>
		</div>
	`
})
export class TargetComponent extends PlayerComponent implements OnInit, OnDestroy {

	hpSub: Subscription;
	manaSub: Subscription;
	auraSub: Subscription;
	jobSub: Subscription;
	levelSub: Subscription;

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

			this.jobSub = this.target.job.subscribe((job) => {
				this.job = job;
				this.cd.detectChanges();
			});

			this.levelSub = this.target.level.subscribe((level) => {
				this.level = level;
				this.cd.detectChanges();
			});

			this.hpSub = this.target.hp.subscribe((hp) => {
				this.hp = hp;
				this.hpMax = this.target.hpMax;
				this.calcHp();
			});

			this.manaSub = this.target.mana.subscribe((mana) => {
				this.mana = mana;
				this.manaMax = this.target.manaMax;
				this.calcMana();
			});

			this.auraSub = this.target.auras.subscribe((auras) => {
				this.auras = this.auraFilter(auras);
				this.cd.detectChanges();
			});
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));
	}

	auraFilter(auras: Aura[]) {
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
		this.hpSub?.unsubscribe();
		this.manaSub?.unsubscribe();
		this.auraSub?.unsubscribe();
		this.jobSub?.unsubscribe();
		this.levelSub?.unsubscribe();
	}
}