import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, merge, Subject }         from 'rxjs';
import { debounceTime }                            from 'rxjs/operators';
import { ConfigProfile }                           from 'src/app/Interface/ConfigProfile';
import { MainConfig }                              from 'src/app/Model/Config/MainConfig';
import { DistinctBehaviorSubject }                 from 'src/app/Model/DistinctBehaviorSubject';
import { CompressionService }                      from 'src/app/Service/CompressionService';
import { defaultConfig }                           from 'src/app/Service/defaultConfig';
import extend                                      from 'just-extend';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	defaultConfig = defaultConfig;

	numberFormats = [
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
	renderer: Renderer2;

	configChanged = new Subject();

	constructor(
		protected rendererFactory: RendererFactory2,
		protected compressionService: CompressionService
	) {
		this.renderer = rendererFactory.createRenderer(null, null);

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
		console.log(subs);
		merge(...subs)
			.pipe(debounceTime(10))
			.subscribe(() => {
				this.applyConfig();
			});

		this.applyConfig();

		this.loadProfiles();
	}

	cloneDefaultConfig() {
		return extend(true, {}, this.defaultConfig);
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
		try {
			(window as any).OverlayPluginApi.setAcceptFocus(this.configMode.value);
		}
		catch (e) {
			console.log('Overlay Plugin Api not found');
		}

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
		try {
			(window as any).OverlayPluginApi.setAcceptFocus(this.customElementsMode.value);
		}
		catch (e) {
			console.log('Overlay Plugin Api not found');
		}
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