import { ChangeDetectorRef, Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IResizeEvent }                                            from 'angular2-draggable/lib/models/resize-event';
import { EnmityTargetData }                     from 'src/app/EnmityTargetData';
import { PartyMember }                          from 'src/app/Interface/PartyMember';
import { Aura }                                 from 'src/app/Model/Aura';
import { ConfigService }                        from 'src/app/Service/ConfigService';
import { LogParser }                            from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'app-root',
	templateUrl: './AppComponent.html'
})
export class AppComponent implements OnInit {
	size = 40;
	aura = new Aura(1199);

	charName = 'YOU';

	moveMode = false;
	settingIconVisible = false;

	config = this.conf.config;

	constructor(
		protected zone: NgZone,
		public conf: ConfigService,
		public parser: LogParser,
		protected renderer: Renderer2,
		protected cd: ChangeDetectorRef
	) {
		// DEBUG
		this.parser.debugMode = false;
		this.conf.moveMode.subscribe(mm => this.moveMode = mm);

		this.aura.id = 1199;

		this.conf.configChanged.subscribe(() => {
			// console.log('changes detected', this.config.frames.player.position);

			// cd.detectChanges();
		})
	}

	ngOnInit() {
		document.addEventListener('onOverlayStateUpdate', this.overlayStateUpdate.bind(this));

		(window as any).addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
		(window as any).addOverlayListener('LogLine', this.logLine.bind(this));
		(window as any).addOverlayListener('PartyChanged', this.partyChanged.bind(this));
		(window as any).addOverlayListener('EnmityTargetData', this.enmityTargetData.bind(this));
		(window as any).startOverlayEvents();
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

	saveFramePosition(unitFrame: string, $event: { x: number, y: number }) {
		(this.config.frames as any)[unitFrame].position = $event;
	}

	saveFrameSize(unitFrame: string, $event: IResizeEvent) {
		(this.config.frames as any)[unitFrame].size = $event.size;
	}

	test() {
		this.config.frames.player.position = {x: 100, y: 100};
	}
}
