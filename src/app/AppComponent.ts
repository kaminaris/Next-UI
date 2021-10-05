import { ChangeDetectorRef, Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IPosition }                                               from 'angular2-draggable';
import { IResizeEvent }                                            from 'angular2-draggable/lib/models/resize-event';
import { EnmityAggroList }                                         from 'src/app/Interface/EnmityAggroList';
import { EnmityTargetData }                                        from 'src/app/Interface/EnmityTargetData';
import { PartyMember }                                             from 'src/app/Interface/PartyMember';
import { PlayerDetails } from 'src/app/Interface/PlayerDetails';
import { Status }        from 'src/app/Model/Status';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { CustomElement }                                           from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementGroup }                                      from 'src/app/Model/CustomElement/CustomElementGroup';
import { ConfigService }                                           from 'src/app/Service/ConfigService';
import { CustomElementService }                                    from 'src/app/Service/CustomElementService';
import { LogParser }                                               from 'src/app/Service/LogParser/LogParser';
import { TestService }                                             from 'src/app/Service/TestService';

@Component({
	selector: 'app-root',
	templateUrl: './AppComponent.html'
})
export class AppComponent implements OnInit {
	charName = 'YOU';

	moveMode = false;
	settingIconVisible = false;

	config = this.conf.config;

	// customCss = this.config.customCss;

	constructor(
		protected zone: NgZone,
		public conf: ConfigService,
		public parser: LogParser,
		public elementService: CustomElementService,
		protected t: TestService,
		protected renderer: Renderer2,
		protected cd: ChangeDetectorRef
	) {
		// DEBUG
		this.parser.debugMode = false;
		this.conf.moveMode.subscribe(mm => this.moveMode = mm);
		this.config.customCssSub.subscribe(() => {
			this.setCustomCss();
		});
		// this.conf.configChanged.subscribe(() => {
		// 	// console.log('changes detected', this.config.frames.player.position);
		//
		// 	// cd.detectChanges();
		// })

		// this.elementService.TESTaddCustomElement();
		// this.elementService.TESTADDPELETON();

	}

	ngOnInit() {
		document.addEventListener('onOverlayStateUpdate', this.overlayStateUpdate.bind(this));

		(window as any).addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
		(window as any).addOverlayListener('LogLine', this.logLine.bind(this));
		(window as any).addOverlayListener('PartyChanged', this.partyChanged.bind(this));
		(window as any).addOverlayListener('EnmityTargetData', this.enmityTargetData.bind(this));
		(window as any).addOverlayListener('EnmityAggroList', this.enmityAggroList.bind(this));
		(window as any).addOverlayListener('onPlayerChangedEvent', this.playerChangedEvent.bind(this));

		(window as any).startOverlayEvents();
	}

	playerChangedEvent(e: { type: string, detail: PlayerDetails }) {
		const details = e.detail;
		if (!this.parser.player.value) {
			this.parser.registerPlayer(details.name, details.id);
			return;
		}
		const player = this.parser.player.value;

		this.parser.updateCombatant(
			details.id,
			details.name,
			details.currentHP,
			details.maxHP,
			player.isGatherer || player.isCrafter ? null : details.currentMP,
			player.isGatherer || player.isCrafter ? null : details.maxMP,
			details.pos.x,
			details.pos.y,
			details.pos.z,
			details.job,
			details.level
		);
	}

	enmityAggroList(e: EnmityAggroList) {
		this.parser.aggroListUpdate(e);
	}

	enmityTargetData(e: EnmityTargetData) {
		this.parser.targetUpdate(e);
	}

	overlayStateUpdate(e: any) {
		if (!(e as any).detail.isLocked) {
			this.displayResizeHandle();
		}
		else {
			this.hideResizeHandle();
		}
	}

	partyChanged(e: { party: PartyMember[] }) {
		this.parser.partyChanged(e.party);
	}

	changePrimaryPlayer(e: { charName: string, charID: number }) {
		this.charName = e.charName;
		this.parser.registerPlayer(e.charName, e.charID);
	}

	logLine(e: { line: string[] }) {
		this.parser.parse(e.line);
	}

	displayResizeHandle() {
		document.documentElement.classList.add('resizeHandle');
	}

	hideResizeHandle() {
		document.documentElement.classList.remove('resizeHandle');
	}

	saveFramePosition(unitFrame: keyof MainConfig['frames'], $event: IPosition) {
		switch (unitFrame) {
			case 'aggroList':
			case 'party':
			case 'player':
			case 'focus':
			case 'target':
			case 'targetOfTarget':
				this.config.frames[unitFrame].basic.position = $event;
				break;
			default:
				(this.config.frames[unitFrame] as any).position = $event;
				break;
		}
	}

	saveFrameSize(unitFrame: keyof MainConfig['frames'], $event: IResizeEvent) {
		switch (unitFrame) {
			case 'aggroList':
			case 'party':
			case 'player':
			case 'focus':
			case 'target':
			case 'targetOfTarget':
				this.config.frames[unitFrame].basic.size = $event.size;
				break;
			default:
				(this.config.frames[unitFrame] as any).size = $event;
				break;
		}
	}

	saveCustomElementSize(customElement: CustomElement, $event: IResizeEvent) {
		customElement.size = $event.size;
	}

	saveCustomElementPosition(customElement: CustomElement, $event: IPosition) {
		customElement.position = $event;
	}

	saveCustomElementGroupSize(group: CustomElementGroup, $event: IResizeEvent) {
		group.size = $event.size;
	}

	saveCustomElementGroupPosition(group: CustomElementGroup, $event: IPosition) {
		group.position = $event;
	}

	setCustomCss() {
		document.getElementById('custom-css-container').innerText = this.config.customCss;
	}

	selectTarget(self: string) {

	}
}
