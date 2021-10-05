import { Component }             from '@angular/core';
import { ConfigWindowUnitFrame } from 'src/app/Component/Config/Window/ConfigWindowUnitFrame';
import { ConfigService }         from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-focus',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowFocusComponent extends ConfigWindowUnitFrame {
	title = 'Focus Frame Configuration';

	configObj = this.conf.config.frames.focus;
	configPath = 'focus';

	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		super()
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}