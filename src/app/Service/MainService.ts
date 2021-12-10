import { Injectable }                   from '@angular/core';
import { ActService }                   from 'src/app/Service/Act/ActService';
import { XivService, XivSocketCommand } from 'src/app/Service/Xiv/XivService';

@Injectable({ providedIn: 'root' })
export class MainService {

	constructor(
		protected xiv: XivService,
		protected act: ActService,
	) {}

	async initialize() {
		await this.connectXiv();
		// TODO: We can't do that yet
		//if (!this.xiv.connected) {
		await this.connectAct();
		//}

		await this.loadCombatants();
	}

	async connectXiv() {
		await this.xiv.initialize();
	}

	async connectAct() {
		await this.act.initialize();
	}

	async loadCombatants() {
		if (this.xiv.connected) {
			await this.xiv.loadCombatants();
		}
		else {
			await this.act.loadCombatants();
		}
	}

	setTarget(targetId: number, type: XivSocketCommand = 'setTarget') {
		if (this.xiv.connected) {
			this.xiv.setTarget(targetId, type);
		}
	}
}