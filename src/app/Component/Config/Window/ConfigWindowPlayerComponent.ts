import { Component }             from '@angular/core';
import { ConfigWindowUnitFrame } from 'src/app/Component/Config/Window/ConfigWindowUnitFrame';
import { ConfigService }         from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-player',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowPlayerComponent extends ConfigWindowUnitFrame {
	title = 'Player Frame Configuration';

	configObj = this.conf.config.frames.player;
	configPath = 'frames.player';

	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		super();
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}