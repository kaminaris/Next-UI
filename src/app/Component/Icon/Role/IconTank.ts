import { Component } from '@angular/core';
import { BaseIcon }  from 'src/app/Component/Icon/BaseIcon';

@Component({
	selector: 'icon-tank',
	template: `
		<svg [ngStyle]="{'width.px': size, 'height.px': size}" viewBox="0 0 24 24">
			<path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
		</svg>
	`
})
export class IconTank extends BaseIcon {

}