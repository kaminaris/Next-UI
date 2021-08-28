import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainConfig }                             from 'src/app/Model/Config/MainConfig';
import { ConfigService }                          from 'src/app/Service/ConfigService';

@Component({ template: '' })
export abstract class BaseConfigComponent {
	@Input() label: string;
	@Input() prop: string;
	@Input() customSet = false;

	@Input() widgetName: string;
	@Input() frameName: keyof MainConfig['frames'];
	@Input() configObj: any = {};

	@Output() getProp = new EventEmitter<{ value: any }>();
	@Output() setProp = new EventEmitter<any>();
	@Output() resetProp = new EventEmitter<any>();

	constructor(public conf: ConfigService) {}

	ngOnInit() {
		if (this.frameName) {
			if (this.widgetName) {
				this.configObj = (this.conf.config.frames as any)[this.frameName].widgets[this.widgetName];
			}
			else {
				this.configObj = (this.conf.config.frames as any)[this.frameName];
			}
		}
	}

	resetConfig(prop: string) {
		if (this.customSet) {
			this.resetProp.emit(true);
			return;
		}

		this.conf.resetConfig(prop, this.frameName, this.widgetName);
	}

	getValue() {
		if (!this.customSet) {
			return this.configObj[this.prop];
		}
		else {
			const r: any = { value: null };
			this.getProp.emit(r);
			return r.value;
		}
	}

	setValue(v: any) {
		if (!this.customSet) {
			this.configObj[this.prop] = v;
		}
		else {
			this.setProp.emit(v);
		}
	}
}