import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TTSService {
	disabled = true;

	say(t: string) {
		if (this.disabled) {
			return;
		}

		(window as any).callOverlayHandler({
			call: 'cactbotSay',
			text: t,
		});
	}
}