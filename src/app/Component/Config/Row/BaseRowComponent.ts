import { Component, Input } from '@angular/core';
import { ConfigService }    from 'src/app/Service/ConfigService';

@Component({ template: '' })
export abstract class BaseRowComponent {
	@Input() label: string;
	@Input() prop: string;

	@Input() frameName: string;
	configObj: any = {};

	constructor(public conf: ConfigService) {}

	ngOnInit() {
		this.configObj = this.conf.config.frames[this.frameName];
	}

	resetConfig(prop: string) {
		this.conf.resetConfig(prop, this.frameName);
	}
}