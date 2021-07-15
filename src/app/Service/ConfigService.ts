import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject }                         from 'rxjs';
import { ConfigInterface }       from 'src/app/ConfigInterface';
import extend                    from 'just-extend';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	defaultConfig: ConfigInterface = {
		showMana: true,
		displayCharName: false,
		hpHeight: '40px',
		manaHeight: '20px',
		fontSize: '12pt',
		fontFamily: 'Noto Sans Condensed',
		hpColor: '#02A502',
		manaColor: '#1a8bfa',
		numberFormat: 'full',
		frames: {
			player: {
				position: { x: 200, y: 400 },
				size: { width: 200, height: 40 }
			},
			control: {
				position: { x: 0, y: 0 },
				size: { width: 100, height: 40 }
			},
			party: {
				position: { x: 100, y: 400 },
				size: { width: 100, height: 600 }
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
	renderer: Renderer2;

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

		this.config = new Proxy(config, {
			set: (target, key: string, value: any) => {
				target[key] = value;
				this.applyConfig();
				return true;
			}
		});
		this.applyConfig();
	}

	resetConfig(prop: string) {
		(this.config as any)[prop] = (this.defaultConfig as any)[prop];
	}

	applyConfig() {
		localStorage.setItem('config', JSON.stringify(this.config));
		console.log('config saved', this.config);
		document.body.style.fontFamily = this.config.fontFamily;
	}

	closeConfig() {
		this.visible = false;
	}

	toggleMoveMode() {
		this.moveMode.next(!this.moveMode.value);

		if (this.moveMode.value) {
			this.renderer.addClass(document.body, 'grid');
		} else {
			this.renderer.removeClass(document.body, 'grid');
		}
	}
}