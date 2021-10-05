import { Component }             from '@angular/core';
import { ConfigWindowUnitFrame } from 'src/app/Component/Config/Window/ConfigWindowUnitFrame';
import { barDirections }         from 'src/app/Data/barDirections';
import { barStyles }             from 'src/app/Data/barStyles';
import { anchors }               from 'src/app/Data/anchors';
import { MainConfig }            from 'src/app/Model/Config/MainConfig';
import { ConfigService }         from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-target-of-target',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowTargetOfTargetComponent extends ConfigWindowUnitFrame {
	title = 'Target Of Target Frame Configuration';

	configObj = this.conf.config.frames.targetOfTarget;
	configPath = 'frames.targetOfTarget';

	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		super()
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}