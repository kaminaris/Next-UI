import { Component, Input } from '@angular/core';

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
			<div class="progress-bar-fill" style="position: absolute; height: 100%;"
				[ngStyle]="{
			'background-color': fillColor,
			'width.%': percent
			}"
			></div>
		</div>
	`,
	styles: [':host { display: block; position: relative; }']
})
export class ProgressBarComponent {

	@Input() percent = 100;
	@Input() width = '100%';
	@Input() height = '100%';
	@Input() bgColor = 'rgba(0,0,0,0.0)';
	@Input() fillColor = 'rgb(69,226,0)';
}