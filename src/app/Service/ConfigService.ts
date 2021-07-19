import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Subject }                from 'rxjs';
import { ConfigInterface }                         from 'src/app/ConfigInterface';
import extend                                      from 'just-extend';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	defaultConfig: ConfigInterface = {
		fontFamily: 'Noto Sans Condensed',
		numberFormat: 'full',
		frames: {
			player: {
				position: { x: 200, y: 400 },
				size: { width: 200, height: 40 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',
				fontSize: '12px',
				fontColor: '#ffffff',

				showName: false,
				namePosition: { x: 0, y: -20 },

				showJob: true,
				jobPosition: { x: 5, y: 2 },

				showLevel: true,
				levelPosition: { x: 5, y: 2 },

				widgets: {
					job: {
						show: true,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 }
					}
				}
			},
			target: {
				position: { x: 400, y: 400 },
				size: { width: 200, height: 40 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',
				fontSize: '12px',
				fontColor: '#ffffff',

				showName: false,
				namePosition: { x: 0, y: -20 },

				showJob: true,
				jobPosition: { x: 5, y: 2 },

				showLevel: true,
				levelPosition: { x: 5, y: 2 },

				widgets: {
					job: {
						show: true,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 }
					}
				}
			},
			control: {
				position: { x: 0, y: 0 },
				size: { width: 100, height: 40 }
			},
			party: {
				position: { x: 100, y: 400 },
				size: { width: 100, height: 600 }
			},
			aura: {
				position: { x: 0, y: 0 },
				size: { width: 40, height: 40 },
				iconSize: '30px',
				fontSize: '14px',
				fontColor: '#FFFFFF',
				cooldownOutline: true,
				cooldownPrecision: 1
			}
		}
	};

	numberFormats = [
		{ name: 'Full', value: 'full' },
		{ name: '2k', value: 'prec0' },
		{ name: '2.1k', value: 'prec1' },
		{ name: '2.13k', value: 'prec2' }
	];

	config: ConfigInterface;

	visible = false;
	moveMode = new BehaviorSubject<boolean>(false);
	configMode = new BehaviorSubject<boolean>(false);
	renderer: Renderer2;

	configChanged = new Subject();

	constructor(
		protected rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(null, null);

		let c: any = localStorage.getItem('config') || '';
		try {
			c = JSON.parse(c);
		}
		catch (e) {
			c = {};
		}

		const config = extend(true, extend(true, {}, this.defaultConfig), c) as any;

		const proxySet = (target: any, key: string, value: any) => {
			target[key] = value;
			this.applyConfig();
			return true;
		};

		// Wrap settings in proxy
		this.config = new Proxy(config, { set: proxySet });

		for (const frameName in this.config.frames) {
			this.config.frames[frameName] = new Proxy(this.config.frames[frameName], { set: proxySet });

			if (this.config.frames[frameName].widgets) {
				for (const widgetName in this.config.frames[frameName].widgets) {
					this.config.frames[frameName].widgets[widgetName] =
						new Proxy(this.config.frames[frameName].widgets[widgetName], { set: proxySet });
				}
			}
		}

		this.applyConfig();
	}

	resetConfig(prop: string, frameName?: string, widgetName?: string) {
		let obj = this.config as any;
		let defObj = this.defaultConfig as any;

		if (frameName) {
			if (widgetName) {
				obj = this.config.frames[frameName].widgets[widgetName] as any;
				defObj = this.defaultConfig.frames[frameName].widgets[widgetName] as any;
			} else {
				obj = this.config.frames[frameName] as any;
				defObj = this.defaultConfig.frames[frameName] as any;
			}
		}

		obj[prop] = defObj[prop];
	}

	applyConfig() {
		localStorage.setItem('config', JSON.stringify(this.config));
		console.log('config saved', this.config);
		document.body.style.fontFamily = this.config.fontFamily;
		this.configChanged.next(true);
	}

	closeConfig() {
		this.visible = false;
	}

	toggleMoveMode() {
		if (this.configMode.value) {
			return;
		}

		this.moveMode.next(!this.moveMode.value);

		if (this.moveMode.value) {
			this.renderer.addClass(document.body, 'grid');
		}
		else {
			this.renderer.removeClass(document.body, 'grid');
		}
	}

	toggleConfigMode() {
		this.moveMode.next(false);
		this.renderer.removeClass(document.body, 'grid');

		this.configMode.next(!this.configMode.value);

		if (this.configMode.value) {
			this.renderer.addClass(document.body, 'config-bg');
		}
		else {
			this.renderer.removeClass(document.body, 'config-bg');
		}
		(window as any).OverlayPluginApi.setAcceptFocus(this.configMode.value);
	}
}