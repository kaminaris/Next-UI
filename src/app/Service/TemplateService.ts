import { Injectable }   from '@angular/core';
import { formatNumber } from 'src/app/Function/formatNumber';
import { Combatant }    from 'src/app/Model/Combatant';

export interface TemplateTag {
	tag: string;
	fn: (c: Combatant) => string;
}

@Injectable({ providedIn: 'root' })
export class TemplateService {
	reg = /\[([\w\-:]+)]/g;

	templateTags: TemplateTag[] = [
		{
			tag: 'name',
			fn: (c: Combatant) => { return c.name; }
		},
		{
			tag: 'name:s',
			fn: (c: Combatant) => { return c.name.slice(0, 5); }
		},
		{
			tag: 'name:m',
			fn: (c: Combatant) => { return c.name.slice(0, 10); }
		},
		{
			tag: 'name:l',
			fn: (c: Combatant) => { return c.name.slice(0, 15); }
		},
		{
			tag: 'name:first',
			fn: (c: Combatant) => { return c.firstName; }
		},
		{
			tag: 'name:last',
			fn: (c: Combatant) => { return c.lastName; }
		},
		{
			tag: 'name:first:i',
			fn: (c: Combatant) => { return c.firstName.slice(0, 1).toUpperCase(); }
		},
		{
			tag: 'name:last:i',
			fn: (c: Combatant) => { return c.lastName.slice(0, 1).toUpperCase(); }
		},

		{
			tag: 'hp',
			fn: (c: Combatant) => { return c.hp.value.toString(); }
		},
		{
			tag: 'hp:f',
			fn: (c: Combatant) => { return formatNumber(c.hp.value, 0); }
		},
		{
			tag: 'hp:f:1',
			fn: (c: Combatant) => { return formatNumber(c.hp.value, 1); }
		},
		{
			tag: 'hp:f:2',
			fn: (c: Combatant) => { return formatNumber(c.hp.value, 2); }
		},

		{
			tag: 'hp:max',
			fn: (c: Combatant) => { return c.hpMax.toString(); }
		},
		{
			tag: 'hp:max:f',
			fn: (c: Combatant) => { return formatNumber(c.hpMax, 0); }
		},
		{
			tag: 'hp:max:f:1',
			fn: (c: Combatant) => { return formatNumber(c.hpMax, 1); }
		},
		{
			tag: 'hp:max:f:2',
			fn: (c: Combatant) => { return formatNumber(c.hpMax, 2); }
		},

		{
			tag: 'hp:def',
			fn: (c: Combatant) => { return c.hpDeficit.toString(); }
		},
		{
			tag: 'hp:def:f',
			fn: (c: Combatant) => { return formatNumber(c.hpDeficit, 0); }
		},
		{
			tag: 'hp:def:f:1',
			fn: (c: Combatant) => { return formatNumber(c.hpDeficit, 1); }
		},
		{
			tag: 'hp:def:f:2',
			fn: (c: Combatant) => { return formatNumber(c.hpDeficit, 2); }
		},

		{
			tag: 'hp:pct',
			fn: (c: Combatant) => { return c.hpPercent.toString(); }
		},
		{
			tag: 'hp:pct:f',
			fn: (c: Combatant) => { return formatNumber(c.hpPercent, 0); }
		},
		{
			tag: 'hp:pct:f:1',
			fn: (c: Combatant) => { return formatNumber(c.hpPercent, 1); }
		},
		{
			tag: 'hp:pct:f:2',
			fn: (c: Combatant) => { return formatNumber(c.hpPercent, 2); }
		},

		{
			tag: 'mana',
			fn: (c: Combatant) => { return c.mana.value.toString(); }
		},
		{
			tag: 'mana:f',
			fn: (c: Combatant) => { return formatNumber(c.mana.value, 0); }
		},
		{
			tag: 'mana:f:1',
			fn: (c: Combatant) => { return formatNumber(c.mana.value, 1); }
		},
		{
			tag: 'mana:f:2',
			fn: (c: Combatant) => { return formatNumber(c.mana.value, 2); }
		},

		{
			tag: 'mana:max',
			fn: (c: Combatant) => { return c.manaMax.toString(); }
		},
		{
			tag: 'mana:max:f',
			fn: (c: Combatant) => { return formatNumber(c.manaMax, 0); }
		},
		{
			tag: 'mana:max:f:1',
			fn: (c: Combatant) => { return formatNumber(c.manaMax, 1); }
		},
		{
			tag: 'mana:max:f:2',
			fn: (c: Combatant) => { return formatNumber(c.manaMax, 2); }
		},

		{
			tag: 'mana:def',
			fn: (c: Combatant) => { return c.manaDeficit.toString(); }
		},
		{
			tag: 'mana:def:f',
			fn: (c: Combatant) => { return formatNumber(c.manaDeficit, 0); }
		},
		{
			tag: 'mana:def:f:1',
			fn: (c: Combatant) => { return formatNumber(c.manaDeficit, 1); }
		},
		{
			tag: 'mana:def:f:2',
			fn: (c: Combatant) => { return formatNumber(c.manaDeficit, 2); }
		},

		{
			tag: 'mana:pct',
			fn: (c: Combatant) => { return c.manaPercent.toString(); }
		},
		{
			tag: 'mana:pct:f',
			fn: (c: Combatant) => { return formatNumber(c.manaPercent, 0); }
		},
		{
			tag: 'mana:pct:f:1',
			fn: (c: Combatant) => { return formatNumber(c.manaPercent, 1); }
		},
		{
			tag: 'mana:pct:f:2',
			fn: (c: Combatant) => { return formatNumber(c.manaPercent, 2); }
		},
	];

	format(template: string, data: any): string {
		return template.replace(this.reg, (match: string, capture: string) => {
			const tag = this.templateTags.find(t => t.tag === capture);

			if (tag) {
				return tag.fn(data);
			}
			else {
				return match;
			}
		});
	}
}