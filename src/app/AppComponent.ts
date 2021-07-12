import { $e }                        from '@angular/compiler/src/chars';
import { Component, NgZone, OnInit } from '@angular/core';
import { ConfigInterface }           from 'src/app/ConfigInterface';
import { LogParser }                 from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'app-root',
	templateUrl: './AppComponent.html'
	// styleUrls: ['./AppComponent.css']
})
export class AppComponent implements OnInit {
	defaultConfig: ConfigInterface = {
		showMana: true,
		displayCharName: false,
		hpHeight: '40px',
		manaHeight: '20px',
		fontSize: '12pt',
		fontFamily: 'Noto Sans Condensed',
		hpColor: '#02A502',
		manaColor: '#1a8bfa',
		numberFormat: 'full'
	};

	numberFormats = [
		{ name: 'Full', value: 'full' },
		{ name: '2k', value: 'prec0' },
		{ name: '2.1k', value: 'prec1' },
		{ name: '2.13k', value: 'prec2' }
	];

	config: ConfigInterface;

	charName = 'YOU';

	hp: number = 1;
	hpMax: number = 1;
	mana: number = 10000;
	manaMax: number = 10000;

	hpPct = 100;
	manaPct = 100;

	leftHpText = '';
	hpText = '1 / 1 (100%)';
	rightHpText = '';

	manaText = '10000 / 10000 (100%)';

	configVisible = false;
	settingIconVisible = false;

	constructor(
		protected zone: NgZone,
		protected parser: LogParser
	) {
		let c: any = localStorage.getItem('config') || '';
		try {
			c = JSON.parse(c);
		}
		catch (e) {
			c = {};
		}

		const config = Object.assign(Object.assign({}, this.defaultConfig), c);
		this.config = new Proxy(config, {
			set: (target, key: string, value: any) => {
				target[key] = value;
				this.applyConfig();
				return true;
			}
		});

		// DEBUG
		this.parser.debugMode = true;
	}

	ngOnInit() {
		document.addEventListener('onOverlayStateUpdate', (e) => {
			console.log('a');
			if (!(e as any).detail.isLocked) {
				this.displayResizeHandle();
			}
			else {
				this.hideResizeHandle();
			}
		});

		(window as any).addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
		(window as any).addOverlayListener('LogLine', this.logLine.bind(this));

		(window as any).startOverlayEvents();
	}

	changePrimaryPlayer(e: { charName: string, charID: number }) {
		console.log('ccp', e);
		this.charName = e.charName;
		this.parser.registerPlayer(e.charName, e.charID);
	}

	logLine(e: { line: string[] }) {
		console.log(e);

		this.parser.parse(e.line);
		if (!e || e.line[3] !== this.charName || e.line.length > 25) {
			return;
		}

		let manaMaxIdx = e.line.findIndex(v => v === '10000');
		if (!manaMaxIdx) {
			return;
		}
		if (e.line[manaMaxIdx + 1] === '10000') {
			manaMaxIdx++;
		}

		const hp = +e.line[manaMaxIdx - 3];
		const hpMax = +e.line[manaMaxIdx - 2];
		const mana = +e.line[manaMaxIdx - 1];
		const manaMax = +e.line[manaMaxIdx];

		if (isNaN(hp) || isNaN(hpMax)) {
			return;
		}

		const hpPct = Math.round((hp / hpMax) * 100);
		if (isNaN(hpPct) || hpPct > 100) {
			return;
		}

		const manaPct = Math.round((mana / manaMax) * 100);
		this.zone.run(() => {
			this.hp = hp;
			this.hpMax = hpMax;
			this.mana = mana;
			this.manaPct = manaPct;
			this.hpPct = hpPct;

			this.leftHpText = this.config.displayCharName ? this.charName : '';
			this.hpText = hp + ' / ' + hpMax + ' (' + hpPct + '%)';
			this.manaText = mana + ' / ' + manaMax + ' (' + manaPct + '%)';
		});
	}

	displayResizeHandle() {
		document.documentElement.classList.add('resizeHandle');
	}

	hideResizeHandle() {
		document.documentElement.classList.remove('resizeHandle');
	}

	applyConfig() {
		localStorage.setItem('config', JSON.stringify(this.config));
	}

	resetConfig(prop: string) {
		(this.config as any)[prop] = (this.defaultConfig as any)[prop];
	}

	toggleSettings() {
		console.log('toggle config');
		this.configVisible = !this.configVisible;
		(window as any).OverlayPluginApi.setAcceptFocus(this.configVisible);
	}
}
