import { Component }     from '@angular/core';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { barDirections } from 'src/app/Data/barDirections';
import { barStyles }     from 'src/app/Data/barStyles';
import { anchors }       from 'src/app/Data/anchors';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-focus',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowFocusComponent {
	title = 'Focus Frame Configuration';

	frameName: keyof MainConfig['frames'] = 'focus';
	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}