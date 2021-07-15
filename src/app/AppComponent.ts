import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IResizeEvent }                         from 'angular2-draggable/lib/models/resize-event';
import { ConfigInterface }           from 'src/app/ConfigInterface';
import { ConfigService }             from 'src/app/Service/ConfigService';
import { LogParser }                 from 'src/app/Service/LogParser/LogParser';
import { PartyMember }               from 'src/app/Service/LogParser/PartyMember';

@Component({
	selector: 'app-root',
	templateUrl: './AppComponent.html'
})
export class AppComponent implements OnInit {

	charName = 'YOU';

	configVisible = false;
	moveMode = false;
	settingIconVisible = false;

	config = this.conf.config;

	constructor(
		protected zone: NgZone,
		public conf: ConfigService,
		public parser: LogParser,
		protected renderer: Renderer2
	) {
		// DEBUG
		this.parser.debugMode = false;
		this.conf.moveMode.subscribe(mm => this.moveMode = mm);
	}

	ngOnInit() {
		document.addEventListener('onOverlayStateUpdate', this.overlayStateUpdate.bind(this));

		(window as any).addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
		(window as any).addOverlayListener('LogLine', this.logLine.bind(this));
		(window as any).addOverlayListener('PartyChanged', this.partyChanged.bind(this));
		(window as any).startOverlayEvents();
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

	toggleSettings() {
		this.configVisible = !this.configVisible;
		(window as any).OverlayPluginApi.setAcceptFocus(this.configVisible);
	}

	saveFramePosition(unitFrame: string, $event: { x: number, y: number }) {
		this.config.frames[unitFrame].position = $event;
		this.conf.applyConfig();
	}

	saveFrameSize(unitFrame: string, $event: IResizeEvent) {
		this.config.frames[unitFrame].size = $event.size;
		this.conf.applyConfig();
	}
}
