import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WebFontService {

	/**
	 * Load webfont from url, ex https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,700
	 */
	loadWebfont(url: string) {
		if (!url || !url.startsWith('http')) {
			this.removeWebfont();
			return;
		}

		if (!this.checkWebfontChanged(url)) {
			return;
		}

		this.removeWebfont();
		const link = document.createElement('link');
		link.setAttribute('id', 'custom-web-font');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('type', 'text/css');
		link.setAttribute('href', url);
		document.head.appendChild(link);
	}

	checkWebfontChanged(url: string) {
		const el = document.getElementById('custom-web-font');
		if (el) {
			return el.getAttribute('href') !== url;
		}

		return true;
	}

	removeWebfont() {
		const el = document.getElementById('custom-web-font');
		if (el) {
			el.remove();
		}
	}
}