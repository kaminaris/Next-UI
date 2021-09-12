import { Injectable }    from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Injectable({ providedIn: 'root' })
export class TTSService {
	femaleSpeakers = [
		'Tataru',
		'Yda',
		'Lyse',
		'Lucia',
		'Alisaie',
		'Kan-E-Senna',
		'Y\'mhitra',
		'Geva',
		'Y\'shtola',
		'Midnight Dew',
		'Matoya',
		'Hilda',
		'Cirina',
		'Merlwyb',
		'Luciae',
		'Nadinie',
		'M\'naago',
		'Nadinie',
		'Ingaret',
		'Celaine',
		'Krile',
		'Yugiri',
	];
	voices: SpeechSynthesisVoice[] = [];

	config = this.conf.config.ttsConfig;

	constructor(protected conf: ConfigService) {
		speechSynthesis.onvoiceschanged = e => {
			this.voices = speechSynthesis.getVoices();
		};

		speechSynthesis.getVoices();
	}

	isFemale(speaker: string) {
		return this.femaleSpeakers.indexOf(speaker) >= 0;
	}

	getVoice(speaker: string): SpeechSynthesisVoice {
		if (this.isFemale(speaker)) {
			return this.voices.find(v => v.name === this.config.femaleVoice);
		}
		else {
			return this.voices.find(v => v.name === this.config.maleVoice);
		}
	}

	say(type: string, speaker: string, message: string) {
		if (!this.config.enabled) {
			return;
		}

		const isFemale = this.isFemale(speaker);
		const voice = this.getVoice(speaker);

		this.sayRaw(
			voice,
			message,
			isFemale ? this.config.femaleRate : this.config.maleRate,
			isFemale ? this.config.femalePitch : this.config.malePitch,
			isFemale ? this.config.femaleVolume : this.config.maleVolume
		);

		// (window as any).callOverlayHandler({
		// 	call: 'cactbotSay',
		// 	text: t,
		// });
	}

	sayRaw(
		voice: SpeechSynthesisVoice,
		message: string,
		rate = 1,
		pitch = 0,
		volume = 1
	) {
		const msg = new SpeechSynthesisUtterance(message);
		msg.voice = voice;
		msg.rate = rate;
		msg.pitch = pitch;
		msg.volume = volume;

		speechSynthesis.speak(msg);
	}
}