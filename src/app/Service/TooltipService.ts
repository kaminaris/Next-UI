import { ElementRef, Injectable } from '@angular/core';
import { TooltipComponent }       from 'src/app/Component/TooltipComponent';
import { ConfigService }          from 'src/app/Service/ConfigService';

@Injectable({ providedIn: 'root' })
export class TooltipService {
	tooltip: TooltipComponent;

	constructor(protected config: ConfigService) {}

	show(native: HTMLElement, relativeTo: ElementRef) {
		if (!this.config.config.tooltipConfig.enabled) {
			return;
		}
		const rect = relativeTo.nativeElement.getBoundingClientRect();

		this.tooltip.innerHtml = native.innerHTML;

		this.tooltip.shown = true;
		this.tooltip.cd.detectChanges();

		console.log(rect, this.tooltip)

		const tooltipEl = this.tooltip.el.nativeElement;
		const tooltipRect = tooltipEl.getBoundingClientRect();
		tooltipEl.style.top = (rect.top - tooltipRect.height) + 'px';
		tooltipEl.style.left = rect.left + 'px';
	}

	hide() {
		if (!this.config.config.tooltipConfig.enabled) {
			return;
		}

		this.tooltip.shown = false;
		this.tooltip.cd.detectChanges();
	}
}