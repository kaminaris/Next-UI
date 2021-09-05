import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
}                           from '@angular/core';
import { Subscription }     from 'rxjs';
import { Aura }             from 'src/app/Model/Aura';
import { Combatant }        from 'src/app/Model/Combatant';
import { AuraService }      from 'src/app/Service/AuraService';
import { ConfigService }    from 'src/app/Service/ConfigService';
import { LogParser }        from 'src/app/Service/LogParser/LogParser';
import { Util }             from 'src/app/Service/LogParser/Util';
import { XivPluginService } from 'src/app/Service/XivPluginService';

@Component({
	selector: 'player',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column player-frame cursor-pointer"
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
				[fillColor]="barColor"
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
export class PlayerComponent implements OnInit, OnDestroy {
	hp = 100;
	hpMax = 100;
	hpPct = 100;

	mana = 10000;
	manaMax = 10000;
	manaPct = 100;

	name = '';
	job = 'NONE';
	level = 1;

	hpText = '100 / 100 (100%)';

	manaText = '10000 / 10000 (100%)';
	subs: Subscription[] = [];

	config = this.conf.config;
	ownConfig = this.config.frames.player;
	player = this.parser.player;
	auras: Aura[] = [];

	barColor = this.ownConfig.barColor;

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef,
		protected xiv: XivPluginService,
		protected auraService: AuraService,
	) {}

	setTarget() {
		this.xiv.setTarget(this.player.id);
	}

	ngOnInit(): void {
		this.cd.detach();

		this.copyFrom(this.player);

		this.subs.push(this.player.anyChanged.subscribe(() => {
			this.copyFrom(this.player);
		}));

		this.subs.push(
			this.player.auras.subscribe((auras: Aura[]) => {
				const filters = this.config.filters.filter(f => this.ownConfig.auraFilters.indexOf(f.name) >= 0);

				this.auras = this.auraService.filterAuras(auras, filters, this.ownConfig.auraOnlyOwn);
				this.cd.detectChanges();
			})
		);

		this.subs.push(this.ownConfig.anyChanged.subscribe(() => {
			this.cd.detectChanges();
		}));

		this.subs.push(this.conf.moveMode.subscribe((mm) => {
			this.cd.detectChanges();
		}));

		this.subs.push(this.ownConfig.useClassColorSub.subscribe(() => {
			this.copyFrom(this.player);
		}));
	}

	calcHp() {
		this.hpPct = Math.round((this.hp / this.hpMax) * 100);
		if (this.hpPct > 100) {
			this.hpPct = 100;
		}

		const data = {
			hpRaw: this.hp,
			hpMaxRaw: this.hpMax,
			hp: Util.formatNumber(this.hp, this.config.numberFormat),
			hpMax: Util.formatNumber(this.hpMax, this.config.numberFormat),
			hpPct: this.hpPct
		};

		this.hpText = this.conf.formatHP(data);
	}

	calcMana() {
		this.manaPct = Math.round((this.mana / this.manaMax) * 100);
		if (this.manaPct > 100) {
			this.manaPct = 100;
		}
		const data = {
			manaRaw: this.mana,
			manaMaxRaw: this.manaMax,
			mana: Util.formatNumber(this.mana, this.config.numberFormat),
			manaMax: Util.formatNumber(this.manaMax, this.config.numberFormat),
			manaPct: this.manaPct
		};

		this.manaText = this.conf.formatMana(data);
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	copyFrom(c: Combatant) {
		this.name = c.name;
		this.hp = c.hp.value;
		this.hpMax = c.hpMax;
		this.mana = c.mana.value;
		this.manaMax = c.manaMax;
		this.job = c.job.value;
		this.level = c.level.value;
		this.calcHp();
		this.calcMana();

		if (this.ownConfig.useClassColor && c.job.value !== 'NONE') {
			this.barColor = this.config.colorConfig.getJobColorByName(c.job.value);
		}
		else {
			this.barColor = this.ownConfig.barColor;
		}

		this.cd.detectChanges();
	}
}