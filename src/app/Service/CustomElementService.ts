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
	) {
		this.loadCustomElements();
	}

	addCustomElement(group?: CustomElementGroup) {
		const el = new CustomElement();
		el.name = 'New Custom Element';

		el.trigger = new NeverActiveTrigger(this.parser);

		if (group) {
			group.children.push(el);
		}
		else {
			this.elements.push(el);
		}

		el.trigger.attach();
	}

	deleteCustomElement(element: CustomElement, group?: CustomElementGroup) {
		element.trigger.detach();

		if (group) {
			group.children = group.children.filter(e => e !== element);
		}
		else {
			this.elements = this.elements.filter(e => e !== element);
		}
	}

	deleteCustomElementGroup(group: CustomElementGroup) {
		const index = this.elementGroups.indexOf(group);
		if (index > -1) {
			for (const child of group.children) {
				child.trigger.detach();
			}

			this.elementGroups.splice(index, 1);
		}
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

	saveCustomElements() {
		const r: any = {
			elements: [],
			groups: []
		};

		for (const element of this.elements) {
			r.elements.push(element.serialize());
		}

		for (const group of this.elementGroups) {
			r.groups.push(group.serialize());
		}

		localStorage.setItem('customElements', JSON.stringify(r));
	}

	loadCustomElements() {
		let c: any = localStorage.getItem('customElements') || '';
		try {
			c = JSON.parse(c);
		}
		catch (e) {
			c = {};
		}

		if (c.elements && Array.isArray(c.elements)) {
			for (const el of c.elements) {
				const element = new CustomElement();
				element.unserialize(el, this.parser);
				element.trigger.attach();
				this.elements.push(element);
			}
		}

		if (c.groups && Array.isArray(c.groups)) {
			for (const gr of c.groups) {
				const group = new CustomElementGroup();
				group.unserialize(gr, this.parser);
				for (const element of group.children) {
					element.trigger.attach();
				}
				this.elementGroups.push(group);
			}
		}
	}
}