import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, merge, Subject }         from 'rxjs';
import extend                                      from 'just-extend';
import { debounceTime }                            from 'rxjs/operators';
import { RecursivePartial }                        from 'src/app/Interface/RecursivePartial';
import { MainConfig }                              from 'src/app/Model/Config/MainConfig';
import { DistinctBehaviorSubject }                 from 'src/app/Model/DistinctBehaviorSubject';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	defaultConfig: RecursivePartial<MainConfig> = {
		fontFamily: 'Noto Sans Condensed',
		numberFormat: 'full',
		ttsConfig: {
			enabled: false
		},
		frames: {
			control: {
				position: { x: 600, y: 600 },
				size: { width: 200, height: 60 },
			},
			config: {
				position: { x: 0, y: 0 },
				size: { width: 800, height: 600 },
			},
			player: {
				position: { x: 600, y: 500 },
				size: { width: 260, height: 60 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',

				widgets: {
					job: {
						show: true,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					hp: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					mana: {
						show: true,
						anchor: 'center',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 0, y: 0 },
						outline: true
					},
					level: {
						show: true,
						anchor: 'bottomRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					name: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '14px',
						position: { x: 0, y: -20 },
						outline: true
					}
				}
			},
			target: {
				position: { x: 900, y: 500 },
				size: { width: 260, height: 60 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',

				widgets: {
					job: {
						show: true,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					hp: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					mana: {
						show: true,
						anchor: 'center',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 0, y: 0 },
						outline: true
					},
					level: {
						show: true,
						anchor: 'bottomRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					name: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '14px',
						position: { x: 0, y: -20 },
						outline: true
					}
				}
			},
			targetOfTarget: {
				position: { x: 1180, y: 500 },
				size: { width: 200, height: 20 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',

				widgets: {
					job: {
						show: false,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					hp: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					mana: {
						show: false,
						anchor: 'center',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 0, y: 0 },
						outline: true
					},
					level: {
						show: false,
						anchor: 'bottomRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					name: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '14px',
						position: { x: 0, y: -20 },
						outline: true
					}
				}
			},
			party: {
				position: { x: 100, y: 200 },
				size: { width: 100, height: 300 },
				barColor: '#02A502',
				manaColor: '#02a597',
				showMana: true,
				manaHeight: '20px',
				unitFrameHeight: '40px',
				unitFrameMargin: 1,

				widgets: {
					job: {
						show: false,
						anchor: 'topRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					hp: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					mana: {
						show: false,
						anchor: 'center',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 0, y: 0 },
						outline: true
					},
					level: {
						show: false,
						anchor: 'bottomRight',
						fontColor: '#ffffff',
						fontSize: '12px',
						position: { x: 5, y: 2 },
						outline: true
					},
					name: {
						show: true,
						anchor: 'topLeft',
						fontColor: '#ffffff',
						fontSize: '14px',
						position: { x: 0, y: -20 },
						outline: true
					}
				}
			},
			auraBar: {
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

	config: MainConfig;

	uiVisible = true;
	visible = false;
	moveMode = new BehaviorSubject<boolean>(false);
	configMode = new BehaviorSubject<boolean>(false);
	renderer: Renderer2;

	configChanged = new Subject();

	constructor(
		protected rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(null, null);

		let c: any = localStorage.getItem('cfg') || '';
		try {
			c = JSON.parse(c);
		}
		catch (e) {
			c = {};
		}

		const config = extend(true, extend(true, {}, this.defaultConfig), c) as any;

		this.config = new MainConfig();
		this.config.unserialize(config);

		const subs: BehaviorSubject<any>[] = [];
		this.findObservers(this.config, subs);
console.log(subs)
		merge(...subs)
			.pipe(debounceTime(10))
			.subscribe(() => {
				this.applyConfig();
			});

		// for (const frameName in this.config.frames) {
		// 	this.config.frames[frameName] = new Proxy(this.config.frames[frameName], { set: proxySet });
		//
		// 	if (this.config.frames[frameName].widgets) {
		// 		for (const widgetName in this.config.frames[frameName].widgets) {
		// 			this.config.frames[frameName].widgets[widgetName] =
		// 				new Proxy(this.config.frames[frameName].widgets[widgetName], { set: proxySet });
		// 		}
		// 	}
		// }

		this.applyConfig();
	}

	findObservers(obj: any, subs: BehaviorSubject<any>[]) {
		if (typeof obj !== 'object') {
			return;
		}

		if (obj.anyChanged) {
			subs.push(obj.anyChanged);
		}

		for (const k in obj) {
			if (!obj.hasOwnProperty(k)) {
				continue;
			}

			const val = obj[k];
			if (val instanceof DistinctBehaviorSubject || val instanceof BehaviorSubject) {
				continue;
			}

			if (typeof val === 'object') {
				this.findObservers(val, subs);
			}
		}
	}

	resetConfig(prop: string, frameName?: keyof MainConfig['frames'], widgetName?: string) {
		let obj = this.config as any;
		let defObj = this.defaultConfig as any;

		if (frameName) {
			if (widgetName) {
				obj = (this.config.frames[frameName] as any).widgets[widgetName];
				defObj = (this.defaultConfig.frames[frameName] as any).widgets[widgetName];
			}
			else {
				obj = (this.config.frames as any)[frameName] as any;
				defObj = this.defaultConfig.frames[frameName] as any;
			}
		}

		obj[prop] = defObj[prop];
	}

	applyConfig() {
		localStorage.setItem('cfg', JSON.stringify(this.config.serialize()));

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

	toggleUi() {
		this.uiVisible = !this.uiVisible;
	}
}