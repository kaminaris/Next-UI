import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, merge, Subject }         from 'rxjs';
import { debounceTime }                            from 'rxjs/operators';
import { classicConfig }                           from 'src/app/Data/Config/Profiles/Classic/classicConfig';
import { miniConfig }                              from 'src/app/Data/Config/Profiles/Mini/miniConfig';
import { sorters }                                 from 'src/app/Data/sorters';
import { ConfigProfile }                           from 'src/app/Interface/ConfigProfile';
import { Combatant }                               from 'src/app/Model/Combatant';
import { MainConfig }                              from 'src/app/Model/Config/MainConfig';
import { DistinctBehaviorSubject }                 from 'src/app/Model/DistinctBehaviorSubject';
import { CompressionService }                      from 'src/app/Service/CompressionService';
import extend                                      from 'just-extend';
import { WebFontService }                          from 'src/app/Service/WebFontService';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	defaultConfig = miniConfig;

	numberFormats = [
		{ name: 'Full', value: 'full' },
		{ name: '2k', value: 'prec0' },
		{ name: '2.1k', value: 'prec1' },
		{ name: '2.13k', value: 'prec2' }
	];

	numberTemplates = [
		{ name: 'Full', value: 'full' },
		{ name: '2k', value: 'prec0' },
		{ name: '2.1k', value: 'prec1' },
		{ name: '2.13k', value: 'prec2' }
	];

	profiles: ConfigProfile[] = [];
	config: MainConfig;

	uiVisible = true;
	visible = false;
	moveMode = new BehaviorSubject<boolean>(false);
	configMode = new BehaviorSubject<boolean>(false);
	customElementsMode = new BehaviorSubject<boolean>(false);
	acceptFocus = new BehaviorSubject<boolean>(false);
	renderer: Renderer2;

	configChanged = new Subject();

	formatHP: (data: any) => string;
	formatMana: (data: any) => string;

	/**
	 * Sorters
	 */
	partySorter: (a: Combatant, b: Combatant) => number;
	aggroSorter: (a: Combatant, b: Combatant) => number;

	constructor(
		protected rendererFactory: RendererFactory2,
		protected compressionService: CompressionService,
		protected webFontService: WebFontService
	) {
		this.renderer = rendererFactory.createRenderer(null, null);

		this.loadProfiles();

		let c: any = localStorage.getItem('cfg') || '';
		try {
			c = JSON.parse(c);
		}
		catch (e) {
			c = {};
		}

		const config = extend(true, this.cloneDefaultConfig(), c) as any;

		this.config = new MainConfig();
		this.config.unserialize(config);

		const subs: BehaviorSubject<any>[] = [];
		this.findObservers(this.config, subs);

		merge(...subs)
			.pipe(debounceTime(10))
			.subscribe(() => {
				this.applyConfig();
			});

		this.applyConfig();
		this.makeFormatHPFunction();
		this.makeFormatManaFunction();
		this.setSorters();

		this.config.hpTemplateSub.subscribe(this.makeFormatHPFunction.bind(this));
		this.config.manaTemplateSub.subscribe(this.makeFormatManaFunction.bind(this));
		this.config.frames.party.sorterSub.subscribe(this.setSorters.bind(this));
		this.config.frames.aggroList.sorterSub.subscribe(this.setSorters.bind(this));
	}

	cloneDefaultConfig() {
		return extend(true, {}, this.defaultConfig);
	}

	replaceTemplate(t: string) {
		return t.replace(/\[(\w+)\]/g, (match: string, capture: string) => {
			return '${data.' + capture + '}';
		});
	}

	makeFormatHPFunction() {
		try {
			const hpTemplate = this.replaceTemplate(this.config.hpTemplate);
			this.formatHP = new Function('data', 'return `' + hpTemplate + '`') as any;
		}
		catch (e) {
			console.log(e);
			this.formatHP = new Function('data', 'return `INV - ${data.hp}`') as any;
		}
	}

	makeFormatManaFunction() {
		try {
			const manaTemplate = this.replaceTemplate(this.config.manaTemplate);
			this.formatMana = new Function('data', 'return `' + manaTemplate + '`') as any;
		}
		catch (e) {
			console.log(e);
			this.formatMana = new Function('data', 'return `INV - ${data.mana}`') as any;
		}
	}

	setSorters() {
		if (this.config.frames.party.sorter) {
			this.partySorter = sorters.find(s => s.type === this.config.frames.party.sorter)?.sorter;
		}
		if (this.config.frames.aggroList.sorter) {
			this.aggroSorter = sorters.find(s => s.type === this.config.frames.aggroList.sorter)?.sorter;
		}
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

	resetAllConfig() {
		const config = this.cloneDefaultConfig() as any;
		this.config.unserialize(config);
	}

	resetConfig(prop: string, configPath: string) {
		let obj = this.config as any;
		let defObj = this.defaultConfig as any;

		const exp = configPath.split('.').filter(n => n);
		while (exp.length > 0) {
			const k = exp.shift();
			defObj = defObj[k];
			obj = obj[k];
		}

		obj[prop] = defObj[prop];
	}

	applyConfig() {
		localStorage.setItem('cfg', JSON.stringify(this.config.serialize()));

		console.log('config saved', this.config);
		document.body.style.fontFamily = this.config.fontFamily;
		this.webFontService.loadWebfont(this.config.webFont);
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
		this.acceptFocus.next(this.configMode.value);
	}

	toggleCustomElementsPanel() {
		this.moveMode.next(false);
		this.configMode.next(false);
		this.renderer.removeClass(document.body, 'config-bg');

		this.customElementsMode.next(!this.customElementsMode.value);

		if (this.customElementsMode.value) {
			this.renderer.addClass(document.body, 'grid');
		}
		else {
			this.renderer.removeClass(document.body, 'grid');
		}
		this.acceptFocus.next(this.customElementsMode.value);
	}

	toggleUi() {
		this.uiVisible = !this.uiVisible;
	}

	createNewProfile(newProfileName: string) {
		const serialized = JSON.stringify(this.config.serialize());
		const profiles = this.profiles;
		profiles.push({ name: newProfileName, config: serialized });

		this.profiles = [...profiles];

		this.saveProfiles();
	}

	deleteProfile(profileName: string) {
		const profileIdx = this.profiles.findIndex(p => p.name === profileName);
		if (profileIdx < 0) {
			console.log(`Profile ${ profileName } not found!`);
			return;
		}

		const profiles = this.profiles.splice(profileIdx, 1);
		this.profiles = [...profiles];

		this.saveProfiles();
	}

	loadProfile(profileName: string) {
		const profile = this.profiles.find(p => p.name === profileName);
		if (!profile) {
			console.log(`Profile ${ profileName } not found!`);
			return;
		}

		try {
			const c = JSON.parse(profile.config);
			const config = extend(true, this.cloneDefaultConfig(), c) as any;
			this.config.unserialize(config);
		}
		catch (e) {
			console.log(e);
		}
	}

	saveProfiles() {
		localStorage.setItem('profiles', JSON.stringify(this.profiles));
	}

	loadProfiles() {
		const profiles = localStorage.getItem('profiles');
		if (profiles) {
			const parsed = JSON.parse(profiles);
			if (Array.isArray(parsed)) {
				this.profiles = parsed;
			}
		}
		else {
			this.resetProfiles();
		}
	}

	resetProfiles() {
		this.profiles = [
			{ name: 'Mini', config: JSON.stringify(miniConfig) },
			{ name: 'Classic', config: JSON.stringify(classicConfig) }
		];
		this.saveProfiles();
	}

	saveAsProfile(profileName: string) {
		const profile = this.profiles.find(p => p.name === profileName);
		if (!profile) {
			console.log(`Profile ${ profileName } not found!`);
			return;
		}

		profile.config = JSON.stringify(this.config.serialize());

		this.saveProfiles();
	}

	async exportProfile(profileName: string) {
		const profile = this.profiles.find(p => p.name === profileName);
		if (!profile) {
			console.log(`Profile ${ profileName } not found!`);
			return '';
		}

		return await this.compressionService.compress(profile.config);
	}

	async importProfile(profileName: string, input: string) {
		const profile = this.profiles.find(p => p.name === profileName);
		if (!profile) {
			console.log(`Profile ${ profileName } not found!`);
			return;
		}

		profile.config = await this.compressionService.decompress(input);
	}
}