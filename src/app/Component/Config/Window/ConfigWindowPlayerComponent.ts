import { Component }     from '@angular/core';
import { barDirections } from 'src/app/Data/barDirections';
import { barStyles }     from 'src/app/Data/barStyles';
import { anchors }       from 'src/app/Data/anchors';
import { MainConfig }    from 'src/app/Model/Config/MainConfig';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-player',
	templateUrl: 'ConfigWindowUnitFrame.html'
})
export class ConfigWindowPlayerComponent {
	title = 'Player Frame Configuration';
	frameName: keyof MainConfig['frames'] = 'player';
	configObj = this.conf.config.frames.player;
	anchors = anchors;
	barStyles = barStyles;
	barDirections = barDirections;
	filters = this.conf.config.filters;

	constructor(public conf: ConfigService) {
		this.conf.config.filtersSub.subscribe(v => this.filters = v);
	}
}