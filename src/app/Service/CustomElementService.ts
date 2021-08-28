import { Injectable }          from '@angular/core';
import { CustomElement }       from 'src/app/Model/CustomElement/CustomElement';
import { Trigger }             from 'src/app/Model/CustomElement/Trigger';
import { AlwaysActiveTrigger } from 'src/app/Model/CustomElement/Trigger/AlwaysActiveTrigger';
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
		el.text = '';
		el.type = 'text';

		const trig = new AlwaysActiveTrigger(this.parser);
		trig.type = 'status';
		trig.unit = 'player';
		el.trigger = trig;

		this.elements.push(el);

		el.trigger.attach();
	}

	TESTaddCustomElement() {
		const el = new CustomElement();
		el.name = 'New Custom Element';
		el.text = '';
		el.type = 'text';
		el.opacity = 0.7;
		el.image = 'https://emoji.gg/assets/emoji/6757_Sadge.png';

		const trig = new AlwaysActiveTrigger(this.parser);
		trig.type = 'status';
		trig.unit = 'player';
		el.trigger = trig;

		this.elements.push(el);

		el.trigger.attach();
	}

	TESTADDPELETON() {
		const el = new CustomElement();
		el.name = 'Peloton';
		el.text = 'PELOTON';
		el.type = 'text';

		const trig = new StatusTrigger(this.parser);
		trig.type = 'status';
		trig.unit = 'player';
		trig.options.statusName = 'Peloton';
		trig.options.targetName = '';
		el.trigger = trig;

		this.elements.push(el);

		el.trigger.attach();
	}
}