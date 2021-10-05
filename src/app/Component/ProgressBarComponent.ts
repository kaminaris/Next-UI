import { Component, Input } from '@angular/core';
import { BarDirection }     from 'src/app/Interface/BarDirection';
import { BarStyle }         from 'src/app/Interface/BarStyle';

@Component({
	selector: 'progress-bar',
	template: `
		<div class="progress-bar-container"
			[ngStyle]="{
				'background-color': bgColor,
				width: width,
				height: height
			}"
		>
			<ng-content></ng-content>
			<div class="progress-bar-fill position-absolute" [ngStyle]="styleComputed"></div>
		</div>
	`,
	styles: [':host { display: block; position: relative; }']
})
export class ProgressBarComponent {

	@Input() barStyle: BarStyle = 'horizontal';
	@Input() barDirection: BarDirection = 'start';
	@Input() percent = 100;
	@Input() width = '100%';
	@Input() height = '100%';
	@Input() bgColor = 'rgba(0,0,0,0.0)';
	@Input() fillColor = 'rgb(69,226,0)';
	@Input() smooth = false;

	get styleComputed() {
		return {
			'background-color': this.fillColor,
			'width.%': this.barStyle === 'horizontal' ? this.percent : 100,
			'height.%': this.barStyle === 'vertical' ? this.percent : 100,
			top: this.barStyle === 'vertical' && this.barDirection === 'end' ? '0' : '',
			bottom: this.barStyle === 'vertical' && this.barDirection === 'start' ? '0' : '',
			right: this.barStyle === 'horizontal' && this.barDirection === 'end' ? '0' : '',
			left: this.barStyle === 'horizontal' && this.barDirection === 'start' ? '0' : '',
			transition: this.smooth ? 'width 0.1s linear' : undefined,
		}
	}
}