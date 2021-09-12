import { Injectable }          from '@angular/core';
import { CustomElement }       from 'src/app/Model/CustomElement/CustomElement';
import { AlwaysActiveTrigger } from 'src/app/Model/CustomElement/Trigger/AlwaysActiveTrigger';
import { NeverActiveTrigger }  from 'src/app/Model/CustomElement/Trigger/NeverActiveTrigger';
import { StatusTrigger }       from 'src/app/Model/CustomElement/Trigger/StatusTrigger';
import { LogParser }           from 'src/app/Service/LogParser/LogParser';

@Injectable({ providedIn: 'root' })
export class CustomElementService {
	elements: CustomElement[] = [];

	constructor(
		protected parser: LogParser
	) {}

	addCustomElement() {
		const el = new CustomElement();
		el.name = 'New Custom Element';

		el.trigger = new NeverActiveTrigger(this.parser);

		this.elements.push(el);

		el.trigger.attach();
	}

	configureElement(e?: CustomElement) {
		if (e) {
			e.uiActive = true;
		}

		for (const element of this.elements) {
			if (e && e === element) {
				continue;
			}
			element.uiActive = false;
		}
	}

	TESTaddCustomElement() {
		const el = new CustomElement();
		el.name = 'New Custom Element';
		el.opacity = 0.7;
		el.image = 'https://emoji.gg/assets/emoji/6757_Sadge.png';

		const trig = new AlwaysActiveTrigger(this.parser);
		trig.type = 'status';
		el.trigger = trig;

		this.elements.push(el);

		el.trigger.attach();
	}

	TESTADDPELETON() {
		const el = new CustomElement();
		el.name = 'Peloton';

		const trig = new StatusTrigger(this.parser);
		trig.type = 'status';
		trig.options.statusName = 'Peloton';
		trig.options.targetName = '';
		el.trigger = trig;

		this.elements.push(el);

		el.trigger.attach();
	}
}