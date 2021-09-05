import { Injectable }      from '@angular/core';
import { AuraFilter }      from 'src/app/Interface/AuraFilter';
import { AuraFilterSpell } from 'src/app/Interface/AuraFilterSpell';
import { Aura }            from 'src/app/Model/Aura';
import { Combatant }       from 'src/app/Model/Combatant';
import { LogParser }       from 'src/app/Service/LogParser/LogParser';

@Injectable({ providedIn: 'root' })
export class AuraService {
	player: Combatant;

	constructor(protected parser: LogParser) {
		this.player = parser.player;
	}

	filterAuras(auras: Aura[], filters: AuraFilter[], onlyOwn: boolean) {
		let result: Aura[] = [...auras];
		if (onlyOwn) {
			result = result.filter(a => a.appliedBy === this.player.id);
		}
console.log('FILTERING', filters)
		for (const filter of filters) {
			console.log('filtering using', filter);
			result = result.filter(a => {
				let hasMatch = false;
				for (const filterSpell of filter.filter) {
					hasMatch = this.filterHasMatch(a, filterSpell);
					console.log('check match',hasMatch, a, filterSpell, )
					if (hasMatch) {
						break;
					}
				}

				return filter.type === 'blacklist' ? !hasMatch : hasMatch;
			});
		}

		return result;
	}

	filterHasMatch(aura: Aura, filter: AuraFilterSpell) {
		if (aura.id === filter.id || aura.name === filter.name) {
			return true;
		}

		return aura.name.toLowerCase().indexOf(filter.raw.toLowerCase()) >= 0;
	}
}