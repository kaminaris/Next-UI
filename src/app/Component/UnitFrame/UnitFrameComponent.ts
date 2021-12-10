import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, HostListener, Input,
	OnDestroy,
	OnInit
}                                        from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Status }                        from 'src/app/Model/Status';
import { Combatant }                     from 'src/app/Model/Combatant';
import { ConfigService }                 from 'src/app/Service/ConfigService';
import { LogParser }                     from 'src/app/Service/LogParser/LogParser';
import { Util }                          from 'src/app/Service/LogParser/Util';
import { MainService }                   from 'src/app/Service/MainService';
import { StatusService }                 from 'src/app/Service/StatusService';

@Component({
	selector: 'unit-frame',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class UnitFrameComponent implements OnInit, OnDestroy {
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
	combatantSubs: Subscription[] = [];

	config = this.conf.config;
	ownConfig = this.config.frames.player;

	@Input() combatantSubject: BehaviorSubject<Combatant>;
	@Input() combatant: Combatant;

	auras: Status[] = [];

	barColor = this.ownConfig.healthBar.barColor;

	distanceToPlayer = 0;
	distanceInterval = 200;
	distanceTimer: number = null;
	inRange = true;

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected main: MainService,
		protected cd: ChangeDetectorRef,
		protected auraService: StatusService
	) {}

	@HostListener('contextmenu', ['$event'])
	onRightClick(event: MouseEvent) {
		event.preventDefault();
	}

	ngOnInit(): void {
		this.cd.detach();

		if (this.combatant) {
			this.initializeCombatant();
		}

		if (this.ownConfig.distance.enabled) {
			this.startDistanceTimer();
		}

		// Unit frame can work in standalone mode without subject
		if (this.combatantSubject) {
			this.subs.push(this.combatantSubject.subscribe(t => {
				this.unsubAllCombatantSubs();

				this.combatant = t;

				if (!t) {
					this.cd.detectChanges();
					return;
				}

				this.initializeCombatant();
			}));
		}

		this.subs.push(this.conf.moveMode.subscribe(() => {
			this.cd.detectChanges();
		}));

		this.subs.push(this.conf.config.colorConfig.anyChanged.subscribe(() => {
			this.setBarColor();
			this.cd.detectChanges();
		}));

		this.subs.push(this.ownConfig.anyChangedRecursive.subscribe(() => {
			console.log('DOES THIS?');
			this.cd.detectChanges();
		}));
	}

	startDistanceTimer() {
		this.stopDistanceTimer();
		this.distanceTimer = setInterval(() => {
			const player = this.parser.player.value;
			if (!player || !this.combatant) {
				return;
			}

			if (this.combatant.id === Combatant.ENV_ID) {
				this.inRange = true;
			}
			else {
				this.distanceToPlayer = player.calcDistance(this.combatant);
				this.inRange = this.ownConfig.distance.threshold >= this.distanceToPlayer;
			}

			// console.log('DISTANCE', this.distanceToPlayer, this.combatant.name,)
			// console.log('PLAYER', {x: player.x, y: player.y, z: player.z})
			// console.log('TRG', {x: this.combatant.x, y: this.combatant.y, z: this.combatant.z})
			this.cd.detectChanges();
		}, this.distanceInterval);
	}

	stopDistanceTimer() {
		if (this.distanceTimer) {
			clearInterval(this.distanceTimer);
			this.distanceTimer = null;
		}
	}

	setTarget() {
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		this.main.setTarget(this.combatant.id);
	}

	setMouseOver() {
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		this.main.setTarget(this.combatant.id, 'setMouseOverEx');
	}

	clearMouseOver() {
		if (!this.combatant || !this.combatant.id) {
			return;
		}
		this.main.setTarget(this.combatant.id, 'clearMouseOverEx');
	}

	initializeCombatant() {
		this.copyFrom(this.combatant);

		this.combatantSubs.push(this.combatant.anyChanged.subscribe(() => {
			this.copyFrom(this.combatant);
		}));

		this.combatantSubs.push(this.combatant.auras.subscribe(this.filterAuras.bind(this)));

		this.combatantSubs.push(this.ownConfig.healthBar.useClassColorSub.subscribe(() => {
			this.copyFrom(this.combatant);
		}));
	}

	filterAuras(auras: Status[]) {
		const filters = this.config.filters.filter(f => this.ownConfig.status.filters.indexOf(f.name) >= 0);
		this.auras = this.auraService.filterAuras(auras, filters, this.ownConfig.status.onlyOwn);
		this.cd.detectChanges();
	}

	calcHp() {
		// noinspection DuplicatedCode
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
		// noinspection DuplicatedCode
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

		this.stopDistanceTimer();
		this.unsubAllCombatantSubs();
	}

	unsubAllCombatantSubs() {
		for (const sub of this.combatantSubs) {
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
		if (this.job === 'NONE') {
			this.job = '';
		}
		this.level = c.level.value;
		this.calcHp();
		this.calcMana();
		this.setBarColor(c);

		this.cd.detectChanges();
	}

	setBarColor(c?: Combatant) {
		c ??= this.combatant;
		if (this.ownConfig.healthBar.useClassColor && c && c.job.value !== 'NONE') {
			this.barColor = this.config.colorConfig.getJobColorByName(c.job.value);
		}
		else {
			this.barColor = this.ownConfig.healthBar.barColor;
		}
	}
}