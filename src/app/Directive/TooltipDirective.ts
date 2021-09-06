import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TooltipService }                             from 'src/app/Service/TooltipService';

@Directive({
	selector: '[tooltip-trigger]'
})
export class TooltipDirective {
	@Input('template') template: HTMLElement;

	constructor(
		protected ts: TooltipService,
		protected el: ElementRef,
	) {}

	@HostListener('mouseenter')
	onEnter() {
		this.ts.show(this.template, this.el);
	}

	@HostListener('mouseleave')
	onLeave() {
		this.ts.hide();
	}
}