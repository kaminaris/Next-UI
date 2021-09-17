import { Injectable }          from '@angular/core';
import { CustomElement }       from 'src/app/Model/CustomElement/CustomElement';
import { CustomElementGroup }  from 'src/app/Model/CustomElement/CustomElementGroup';
import { AlwaysActiveTrigger } from 'src/app/Model/CustomElement/Trigger/AlwaysActiveTrigger';
import { NeverActiveTrigger }  from 'src/app/Model/CustomElement/Trigger/NeverActiveTrigger';
import { StatusTrigger }       from 'src/app/Model/CustomElement/Trigger/StatusTrigger';
import { LogParser }           from 'src/app/Service/LogParser/LogParser';

@Injectable({ providedIn: 'root' })
export class CustomElementService {
	elements: CustomElement[] = [];
	elementGroups: CustomElementGroup[] = [];

	constructor(
		protected parser: LogParser
	) {}

	addCustomElement(group?: CustomElementGroup) {
		const el = new CustomElement();
		el.name = 'New Custom Element';

		el.trigger = new NeverActiveTrigger(this.parser);

		if (group) {
			group.children.push(el);
		} else {
			this.elements.push(el);
		}

		el.trigger.attach();
	}

	addCustomElementGroup() {
		const g = new CustomElementGroup();
		g.name = 'New Group';

		this.elementGroups.push(g);
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

		for (const group of this.elementGroups) {
			group.uiActive = false;
			for (const child of group.children) {
				if (child === e) {
					group.uiActive = true;
					continue;
				}
				child.uiActive = false;
			}
		}
	}

	configureGroup(value?: CustomElementGroup) {
		if (value) {
			value.uiActive = true;
			for (const child of value.children) {
				child.uiActive = true;
			}
		}

		for (const element of this.elements) {
			element.uiActive = false;
		}

		for (const group of this.elementGroups) {
			if (group === value) {
				continue;
			}

			group.uiActive = false;
			for (const child of group.children) {
				child.uiActive = false;
			}
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