import {
	ChangeDetectorRef,
	Component,
	NgZone,
	OnInit,
	Renderer2
}                               from '@angular/core';
import { IPosition }            from 'angular2-draggable';
import { IResizeEvent }         from 'angular2-draggable/lib/models/resize-event';
import { MainConfig }           from 'src/app/Model/Config/MainConfig';
import { CustomElement }        from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementGroup }   from 'src/app/Model/CustomElement/CustomElementGroup';
import { ConfigService }        from 'src/app/Service/ConfigService';
import { ContextMenuService }   from 'src/app/Service/ContextMenuService';
import { CustomElementService } from 'src/app/Service/CustomElementService';
import { MainService }          from 'src/app/Service/MainService';
import { TestService }          from 'src/app/Service/TestService';

@Component({
	selector: 'app-root',
	templateUrl: './AppComponent.html'
})
export class AppComponent implements OnInit {
	moveMode = false;

	config = this.conf.config;

	constructor(
		protected zone: NgZone,
		public main: MainService,
		public conf: ConfigService,
		public elementService: CustomElementService,
		public contextMenuService: ContextMenuService,
		protected t: TestService,
		protected renderer: Renderer2,
		protected cd: ChangeDetectorRef
	) {
		// DEBUG
		this.conf.moveMode.subscribe(mm => this.moveMode = mm);
		this.config.customCssSub.subscribe(() => {
			this.setCustomCss();
		});
	}

	async ngOnInit() {
		await this.main.initialize();
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
