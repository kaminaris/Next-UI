import { ChangeDetectorRef, Component, ElementRef, HostBinding } from '@angular/core';
import { ConfigService }                                         from 'src/app/Service/ConfigService';
import { TooltipService }                                        from 'src/app/Service/TooltipService';

@Component({
	selector: 'tooltip',
	template: `
		<div *ngIf="shown" class="position-relative"
			[ngStyle]="currentStyle" 
			[innerHTML]="innerHtml"
		></div>
	`
})
export class TooltipComponent {
	shown = false;
	currentStyle: any = {};
	innerHtml = '';
	ownConfig = this.conf.config.tooltipConfig;

	@HostBinding('style.width.px') width = this.ownConfig.width;

	constructor(
		ts: TooltipService,
		public cd: ChangeDetectorRef,
		public conf: ConfigService,
		public el: ElementRef
	) {
		ts.tooltip = this;
		this.ownConfig.anyChanged.subscribe(this.calcStyle.bind(this));
	}

	calcStyle() {
		this.currentStyle = {
			padding: this.ownConfig.padding,
			'background-color': this.ownConfig.backgroundColor,
			'max-width': this.ownConfig.width,
			'border-style': 'solid',
			'border-width': this.ownConfig.borderWidth,
			'border-color': this.ownConfig.borderColor,
			'font-size': this.ownConfig.fontSize,
			'color': this.ownConfig.fontColor,
		}
	}
}