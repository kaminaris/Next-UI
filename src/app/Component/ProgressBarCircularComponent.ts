import { Component, Input } from '@angular/core';

@Component({
	selector: 'progress-bar-circular',
	template: `
		<svg [attr.width]="width" 
			[attr.height]="height"
			[style.background-color]="bgColor"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="50%" cy="50%"
				style="transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 0.1s linear;"
				fill="transparent"
				stroke-dashoffset="0"
				[attr.r]="radius"
				[attr.stroke-dasharray]="dashArray"
				[attr.stroke]="fillColor"
				[attr.stroke-width]="radius * 2 + 'px'"
				[attr.stroke-dashoffset]="dashOffset"
			></circle>
		</svg>
	`,
	styles: [':host { display: block; position: relative; width:100%;height:100% }']
})
export class ProgressBarCircularComponent {
	@Input() barDirection = 'start';
	@Input() percent = 100;
	@Input() width = '100%';
	@Input() height = '100%';
	@Input() bgColor = 'rgba(0,0,0,0.0)';
	@Input() fillColor = 'rgba(69,226,0, 0.7)';
	@Input() radius = 120;

	get dashArray() {
		const r = this.radius;
		return Math.PI * (r * 2); //565.48
	}

	get dashOffset() {
		const c = this.dashArray;

		return ((100 - this.percent) / 100) * c;
	}
}