import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, ElementRef, HostListener, Input,
	OnDestroy,
	OnInit
}                                                from '@angular/core';
import { BehaviorSubject, config, Subscription } from 'rxjs';
import { ContextMenuItem }                       from 'src/app/Interface/ContextMenuItem';
import { Status }                                from 'src/app/Model/Status';
import { Combatant }                             from 'src/app/Model/Combatant';
import { ConfigService }                         from 'src/app/Service/ConfigService';
import { ContextMenuService }                    from 'src/app/Service/ContextMenuService';
import { LogParser }                             from 'src/app/Service/LogParser/LogParser';
import { Util }                                  from 'src/app/Service/LogParser/Util';
import { MainService }                           from 'src/app/Service/MainService';
import { StatusService }                         from 'src/app/Service/StatusService';
import { XivService }                            from 'src/app/Service/Xiv/XivService';

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

	blurName = false;
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

	jobColor = this.ownConfig.healthBar.barColor;
	hpBarColor = this.ownConfig.healthBar.barColor;

	distanceToPlayer = 0;
	distanceInterval = 200;
	distanceTimer: number = null;
	inRange = true;

	baseContextMenuActions: ContextMenuItem[] = [
		{
			label: 'Examine', action: this.examineAction.bind(this), hidden: () => {
				return this.combatant?.isNPC;
			}
		},
		{
			label: 'Send Tell', action: this.sendTellAction.bind(this), hidden: () => {
				return this.combatant?.isNPC;
			}
		},
		{
			label: 'Reset Striking Dummy Enmity', action: this.resetEnmityAction.bind(this), hidden: () => {
				return !this.combatant?.isDummy;
			}
		},
		{
			label: 'Trade', action: this.tradeAction.bind(this), hidden: () => {
				return this.combatant?.isNPC;
			}
		},
		{
			label: 'Promote', action: this.promoteAction.bind(this), hidden: () => {
				return !this.parser.isPlayerPartyLeader() || !this.combatant?.inParty.value;
			}
		},
		{
			label: 'Kick from Party', action: this.kickAction.bind(this), hidden: () => {
				return !this.parser.isPlayerPartyLeader() || !this.combatant?.inParty.value;
			}
		},
		{
			label: 'Invite to Party', action: this.inviteAction.bind(this), hidden: () => {
				return this.combatant?.isNPC || !this.parser.target.value || this.parser.target.value.inParty.value;
			}
		},
		{
			label: 'Follow', action: this.followAction.bind(this), hidden: () => {
				return this.combatant?.isNPC;
			}
		},
		{
			label: 'Request Meld', action: this.requestMeldAction.bind(this), hidden: () => {
				return this.combatant?.isNPC;
			}
		},
		{
			label: 'Leave', action: this.leavePartyAction.bind(this), hidden: () => {
				return this.parser.party.value.length === 0;
			}
		},
		{
			label: 'Disband', action: this.disbandPartyAction.bind(this), hidden: () => {
				return !this.parser.isPlayerPartyLeader() || this.parser.party.value.length === 0;
			}
		},
		{ label: 'Emote', action: this.showEmoteWindow.bind(this) },
		{ label: 'Mark', action: this.showSignsWindow.bind(this) },
		{
			label: 'Focus Target', action: this.setFocusAction.bind(this), hidden: () => {
				return this.combatant?.id === Combatant.ENV_ID;
			}
		},
		{
			label: 'Clear Focus', action: this.clearFocusAction.bind(this), hidden: () => {
				return this.parser.focus.value == null;
			}
		},
		{ label: 'Close', action: () => { this.contextMenuService.hideContextMenu();} }
	];

	constructor(
		public conf: ConfigService,
		protected parser: LogParser,
		protected ref: ElementRef,
		protected main: MainService,
		protected cd: ChangeDetectorRef,
		protected auraService: StatusService,
		protected xiv: XivService,
		protected contextMenuService: ContextMenuService
	) {}

	/**
	 * Override in sub components to filter available functions
	 */
	getContextActions(): ContextMenuItem[] {
		return this.baseContextMenuActions;
	}

	@HostListener('contextmenu', ['$event'])
	onRightClick(event: MouseEvent) {
		event.preventDefault();
		if (!this.xiv.connected) {
			return;
		}
		this.contextMenuService.displayContextMenu(event, this.ref, this.getContextActions());
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

		this.subs.push(this.conf.config.anyChanged.subscribe(() => {
			this.update();
			this.cd.detectChanges();
		}));

		this.subs.push(this.ownConfig.anyChangedRecursive.subscribe(() => {
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

			this.cd.detectChanges();
		}, this.distanceInterval);
	}

	stopDistanceTimer() {
		if (this.distanceTimer) {
			clearInterval(this.distanceTimer);
			this.distanceTimer = null;
		}
	}

	async examineAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.examine(this.combatant.id);
	}

	async sendTellAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.sendTell(this.combatant.id);
	}

	async resetEnmityAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.resetEnmity(this.combatant.id);
	}

	async tradeAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.trade();
	}

	async promoteAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.promote(this.combatant.id);
	}

	async kickAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.kick(this.combatant.id);
	}

	async inviteAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.invite();
	}

	async followAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.follow();
	}

	async requestMeldAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.meldRequest();
	}

	async leavePartyAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.leaveParty();
	}

	async disbandPartyAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.disbandParty();
	}

	async showEmoteWindow() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.showEmoteWindow();
	}

	async showSignsWindow() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.showSignsWindow();
	}

	async setFocusAction() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.setFocus(this.combatant.id);
	}

	async clearFocusAction() {
		this.contextMenuService.hideContextMenu();

		await this.xiv.setFocus(0);
	}

	async setTarget() {
		this.contextMenuService.hideContextMenu();
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.setTarget(this.combatant.id);
	}

	async setMouseOver() {
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.setMouseOver(this.combatant.id);
	}

	async clearMouseOver() {
		if (!this.combatant || !this.combatant.id) {
			return;
		}

		await this.xiv.clearMouseOver();
	}

	initializeCombatant() {
		this.copyFrom(this.combatant);

		this.combatantSubs.push(this.combatant.anyChanged.subscribe(() => {
			this.copyFrom(this.combatant);
		}));

		this.combatantSubs.push(this.combatant.auras.subscribe(this.filterAuras.bind(this)));

		this.combatantSubs.push(this.ownConfig.healthBar.useJobColorSub.subscribe(() => {
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

	update() {
		this.copyFrom(this.combatant);
	}

	copyFrom(c: Combatant) {
		if (!c) {
			this.cd.detectChanges();
			return;
		}

		this.name = this.formatName(c);
		this.blurName = !c.isNPC && this.config.blurNames && (c.isPlayer ? !this.config.replaceYourName : true);
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

	formatName(c: Combatant) {
		if (!c) {
			return '';
		}
		if (c.isPlayer && this.config.replaceYourName) {
			return this.config.replaceYourName;
		}

		return c.name;
	}

	setBarColor(c?: Combatant) {
		c ??= this.combatant;
		if (c && c.job.value !== 'NONE') {
			this.jobColor = this.config.colorConfig.getJobColorByName(c.job.value);
		}
		else {
			this.jobColor = this.ownConfig.healthBar.barColor;
		}

		this.hpBarColor = this.ownConfig.healthBar.useJobColor ? this.jobColor : this.ownConfig.healthBar.barColor;
	}
}