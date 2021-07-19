import {
	Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges
}                           from '@angular/core';
import { TextWidgetConfig } from 'src/app/Interface/TextWidgetConfig';
import { ConfigService }    from 'src/app/Service/ConfigService';

@Directive({
	selector: '[text-widget]'
})
export class TextWidget implements OnChanges, OnInit {
	@Input() config: TextWidgetConfig;

	@HostBinding('style.display') display: string;
	@HostBinding('style.top') top: string;
	@HostBinding('style.bottom') bottom: string;
	@HostBinding('style.right') right: string;
	@HostBinding('style.left') left: string;
	@HostBinding('style.transform') transform: string;

	@HostBinding('style.font-size') fontSize: string;
	@HostBinding('style.color') fontColor: string;

	constructor(
		el: ElementRef,
		protected conf: ConfigService
	) {}

	ngOnInit() {
		console.log(this.config);
		this.conf.configChanged.subscribe(() => {
			this.applyStyle();
		})
	}

	ngOnChanges(changes: SimpleChanges) {
		this.applyStyle();
		console.log('changes!');
	}

	applyStyle() {
		let left = '';
		let right = '';
		let top = '';
		let bottom = '';
		let transform = '';

		switch (this.config.anchor) {
			case 'topLeft':
				top = this.config.position.y + 'px';
				left = this.config.position.x + 'px';
				break;
			case 'top':
				top = this.config.position.y + 'px';
				left = `calc(50% + ${this.config.position.x}px)`;
				transform = 'translate(-50%)';
				break;
			case 'topRight':
				top = this.config.position.y + 'px';
				right = this.config.position.x + 'px';
				break;
			case 'left':
				top = `calc(50% + ${this.config.position.y}px)`;
				left = this.config.position.x + 'px';
				transform = 'translate(0, -50%)';
				break;
			case 'center':
				top = `calc(50% + ${this.config.position.y}px)`;
				left = `calc(50% + ${this.config.position.x}px)`;
				transform = 'translate(-50%, -50%)';
				break;
			case 'right':
				top = `calc(50% + ${this.config.position.y}px)`;
				right = this.config.position.x + 'px';
				transform = 'translate(0, -50%)';
				break;
			case 'bottomLeft':
				bottom = this.config.position.y + 'px';
				left = this.config.position.x + 'px';
				break;
			case 'bottom':
				bottom = this.config.position.y + 'px';
				left = `calc(50% + ${this.config.position.x}px)`;
				transform = 'translate(-50%)';
				break;
			case 'bottomRight':
				bottom = this.config.position.y + 'px';
				right = this.config.position.x + 'px';
				break;
		}

		this.display = this.config.show ? 'block' : 'none';
		this.top = top;
		this.right = right;
		this.bottom = bottom;
		this.left = left;
		this.transform = transform;

		this.fontColor = this.config.fontColor;
		this.fontSize = this.config.fontSize;
	}
}