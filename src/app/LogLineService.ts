import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogLineService {
	constructor() {
		// (window as any).addOverlayListener('LogLine', this.logLine.bind(this));
	}
	//
	// changePrimaryPlayer(e: { charName: string }) {
	// 	console.log('ccp', e);
	// 	this.charName = e.charName;
	// }
	// }
}