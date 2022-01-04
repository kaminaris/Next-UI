import {
	ChangeDetectorRef,
	Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges
}                           from '@angular/core';
import { calculateAnchor }  from 'src/app/Function/calculateAnchor';
import { TextWidgetConfig } from 'src/app/Model/Config/TextWidgetConfig';
import { ConfigService }    from 'src/app/Service/ConfigService';

@Directive({
	selector: '[text-widget]'
})
export class TextWidget implements OnChanges, OnInit {
	@Input() config: TextWidgetConfig;
	@Input() customColor: string;

	@HostBinding('style.display') display: string;
	@HostBinding('style.top') top: string;
	@HostBinding('style.bottom') bottom: string;
	@HostBinding('style.right') right: string;
	@HostBinding('style.left') left: string;
	@HostBinding('style.transform') transform: string;

	@HostBinding('style.font-size') fontSize: string;
	@HostBinding('style.color') fontColor: string;
	@HostBinding('class.text-outline-1') outline: boolean;

	constructor(
		protected cd: ChangeDetectorRef,
		protected conf: ConfigService
	) {}

	ngOnInit() {
		this.config.anyChanged.subscribe(() => {
			this.applyStyle();
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		this.applyStyle();
	}

	applyStyle() {
		const { top, right, bottom, left, transform } = calculateAnchor(this.config.anchor, this.config.position);

		this.display = this.config.show ? 'block' : 'none';
		this.top = top;
		this.right = right;
		this.bottom = bottom;
		this.left = left;
		this.transform = transform;

		if (this.config.useCustomColor && this.customColor) {
			this.fontColor = this.customColor;
		} else {
			this.fontColor = this.config.fontColor;
		}

		this.fontSize = this.config.fontSize;
		this.outline = this.config.outline;

		this.cd.detectChanges();
	}
}