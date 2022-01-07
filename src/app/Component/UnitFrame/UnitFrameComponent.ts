import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, ElementRef, HostListener, Input,
	OnDestroy,
	OnInit
}                                        from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ContextMenuItem }               from 'src/app/Interface/ContextMenuItem';
import { PlayerFrameConfig }             from 'src/app/Model/Config/PlayerFrameConfig';
import { Status }                        from 'src/app/Model/Status';
import { Combatant }                     from 'src/app/Model/Combatant';
import { ConfigService }                 from 'src/app/Service/ConfigService';
import { ContextMenuService }            from 'src/app/Service/ContextMenuService';
import { LogParser }                     from 'src/app/Service/LogParser/LogParser';
import { Util }                          from 'src/app/Service/LogParser/Util';
import { MainService }                   from 'src/app/Service/MainService';
import { StatusService }                 from 'src/app/Service/StatusService';
import { TemplateService }               from 'src/app/Service/TemplateService';
import { XivService }                    from 'src/app/Service/Xiv/XivService';

@Component({
	selector: 'unit-frame',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class UnitFrameComponent implements OnInit, OnDestroy {
	hpPct = 100;
	manaPct = 100;

	blurName = false;
	name = '';
	job = 'NONE';
	jobText = 'NONE';
	levelText = '1';

	hpText = '';
	manaText = '';

	subs: Subscription[] = [];
	combatantSubs: Subscription[] = [];

	config = this.conf.config;
	ownConfig: PlayerFrameConfig = this.config.frames.player;

	@Input() combatantSubject: BehaviorSubject<Combatant>;
	@Input() combatant: Combatant;

	auras: Status[] = [];

	jobColor = this.ownConfig.healthBar.barColor;
	hpBarColor = this.ownConfig.healthBar.barColor;

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
				return !this.parser.isPlayerPartyLeader() || !this.parser.isInParty(this.combatant);
			}
		},
		{
			label: 'Kick from Party', action: this.kickAction.bind(this), hidden: () => {
				return !this.parser.isPlayerPartyLeader() || !this.parser.isInParty(this.combatant);
			}
		},
		{
			label: 'Invite to Party', action: this.inviteAction.bind(this), hidden: () => {
				return this.combatant?.isNPC || !this.parser.target.value || this.parser.isInParty(this.combatant);
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
		protected contextMenuService: ContextMenuService,
		protected templateService: TemplateService
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
			this.update();
			this.cd.detectChanges();
		}));

		// TODO: think about this
		this.subs.push(this.ownConfig.widgets.name.anyChanged.subscribe(() => {
			if (!this.combatant) {
				return;
			}
			this.name = this.formatName(this.combatant);
			this.cd.detectChanges();
		}));
		this.subs.push(this.ownConfig.widgets.hp.anyChanged.subscribe(() => {
			if (!this.combatant) {
				return;
			}
			this.calcHp(this.combatant);
			this.cd.detectChanges();
		}));
		this.subs.push(this.ownConfig.widgets.mana.anyChanged.subscribe(() => {
			if (!this.combatant) {
				return;
			}
			this.calcMana(this.combatant);
			this.cd.detectChanges();
		}));
		this.subs.push(this.ownConfig.widgets.level.anyChanged.subscribe(() => {
			if (!this.combatant) {
				return;
			}
			this.levelText = this.formatLevel(this.combatant);
			this.cd.detectChanges();
		}));
		this.subs.push(this.ownConfig.widgets.job.anyChanged.subscribe(() => {
			if (!this.combatant) {
				return;
			}
			this.jobText = this.formatJob(this.combatant);
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

			if (this.combatant.isPlayer || this.combatant.id === Combatant.ENV_ID) {
				this.inRange = true;
			}
			else {
				this.inRange = this.ownConfig.distance.threshold >= this.parser.getDistanceFromPlayer(this.combatant);
			}

			this.calcHp(this.combatant);
			this.calcMana(this.combatant);
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

		this.combatantSubs.push(this.combatant.statuses.subscribe(this.filterAuras.bind(this)));

		this.combatantSubs.push(this.ownConfig.healthBar.useJobColorSub.subscribe(() => {
			this.copyFrom(this.combatant);
		}));
	}

	filterAuras(auras: Status[]) {
		const filters = this.config.filters.filter(f => this.ownConfig.status.filters.indexOf(f.name) >= 0);
		this.auras = this.auraService.filterAuras(auras, filters, this.ownConfig.status.onlyOwn);
		this.cd.detectChanges();
	}

	calcHp(c?: Combatant) {
		this.hpPct = Math.round(c.hpPercent);

		const temp = this.ownConfig.widgets.hp.template ?? this.config.hpTemplate;
		this.hpText = this.templateService.format(temp, this.combatant);
	}

	calcMana(c?: Combatant) {
		this.manaPct = Math.round(c.manaPercent);

		const temp = this.ownConfig.widgets.mana.template ?? this.config.manaTemplate;
		this.manaText = this.templateService.format(temp, this.combatant);
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
		this.job = c.job.value;
		this.jobText = this.formatJob(c);
		this.levelText = this.formatLevel(c);
		this.calcHp(c);
		this.calcMana(c);
		this.setBarColor(c);

		this.cd.detectChanges();
	}

	formatLevel(c: Combatant) {
		const levelTemp = this.ownConfig.widgets.level.template;
		if (levelTemp) {
			return this.templateService.format(levelTemp, c);
		}
		return c.level.value.toString();
	}

	formatJob(c: Combatant) {
		if (!c || c.job.value === 'NONE') {
			return '';
		}

		const jobTemplate = this.ownConfig.widgets.job.template;
		if (jobTemplate) {
			return this.templateService.format(jobTemplate, c);
		}

		return c.job.value;
	}

	formatName(c: Combatant) {
		if (!c) {
			return '';
		}
		if (c.isPlayer && this.config.replaceYourName) {
			return this.config.replaceYourName;
		}

		const nameTemplate = this.ownConfig.widgets.name.template;
		if (nameTemplate) {
			return this.templateService.format(nameTemplate, c);
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