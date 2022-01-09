import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Subject }                                                   from 'rxjs';
import { MainConfig }                                                from 'src/app/Model/Config/MainConfig';
import { ConfigService }                                             from 'src/app/Service/ConfigService';

@Component({ template: '' })
export abstract class BaseConfigComponent {
	@Input() label: string;
	@Input() prop: string;
	@Input() customSet = false;
	@Input() reset = true;
	value: any;

	@Input() helpUrl = '';
	@Input() configObj: any = {};
	@Input() configPath: string;
	@Input() updateSubject: Subject<any>;

	@Output() getProp = new EventEmitter<{ value: any }>();
	@Output() setProp = new EventEmitter<any>();
	@Output() resetProp = new EventEmitter<any>();
	@Output() afterSet = new EventEmitter<any>();

	// copied value from object

	constructor(
		public conf: ConfigService,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.value = this.getValue();
		this.updateSubject?.subscribe(() => {
			this.value = this.getValue();
		});
	}

	openHelp() {
		const w = 800;
		const h = 600;
		const y = window.top.outerHeight / 2 + window.top.screenY - (h / 2);
		const x = window.top.outerWidth / 2 + window.top.screenX - (w / 2);
		return window.open(
			this.helpUrl,
			'nu-help',
			`toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=${ w }, height=${ h }, top=${ y }, left=${ x }`
		);
	}

	resetConfig(prop: string) {
		if (this.customSet) {
			this.resetProp.emit(true);
			this.afterSet.emit(true);
			this.value = this.getValue();
			return;
		}

		this.conf.resetConfig(prop, this.configPath);
		this.value = this.getValue();
		this.cd.detectChanges();
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
		this.afterSet.emit(true);
	}
}