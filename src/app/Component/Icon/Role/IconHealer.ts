

import { Component } from '@angular/core';
import { BaseIcon }  from 'src/app/Component/Icon/BaseIcon';

@Component({
	selector: 'icon-healer',
	template: `
		<svg [ngStyle]="{'width.px': size, 'height.px': size}" viewBox="0 0 24 24">
				<path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"/>
		</svg>
	`
})
export class IconHealer extends BaseIcon {

}