import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlayerService {
	charName = 'YOU';

	constructor() {
		(window as any).addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
	}

	changePrimaryPlayer(e: { charName: string }) {
		this.charName = e.charName;
	}
}