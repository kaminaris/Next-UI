import { Component } from '@angular/core';
import { BaseIcon }  from 'src/app/Component/Icon/BaseIcon';

@Component({
	selector: 'icon-plus',
	template: `
		<svg [ngStyle]="{'width.px': size, 'height.px': size}" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
		</svg>
	`
})
export class IconPlus extends BaseIcon {

}