import { Component }     from '@angular/core';
import { barDirections } from 'src/app/Data/barDirections';
import { barStyles }     from 'src/app/Data/barStyles';
import { anchors }       from 'src/app/Data/anchors';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-target-of-target',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowTargetOfTargetComponent {
	title = 'Target Of Target Frame Configuration';
	frameName: keyof MainConfig['frames'] = 'targetOfTarget';
	configObj = this.conf.config.frames.targetOfTarget;
	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}