import { Component }             from '@angular/core';
import { ConfigWindowUnitFrame } from 'src/app/Component/Config/Window/ConfigWindowUnitFrame';
import { TabDef }                from 'src/app/Component/TabsComponent';
import { MainConfig }            from 'src/app/Model/Config/MainConfig';
import { barDirections }         from 'src/app/Data/barDirections';
import { barStyles }             from 'src/app/Data/barStyles';
import { anchors }               from 'src/app/Data/anchors';
import { ConfigService }         from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-target',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowTargetComponent extends ConfigWindowUnitFrame {
	title = 'Target Frame Configuration';

	configObj = this.conf.config.frames.target;
	configPath = 'frames.target';

	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		super();
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}