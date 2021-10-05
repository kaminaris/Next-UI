import { Injectable }      from '@angular/core';
import { StatusFilter }    from 'src/app/Interface/StatusFilter';
import { AuraFilterSpell } from 'src/app/Interface/AuraFilterSpell';
import { Status }          from 'src/app/Model/Status';
import { Combatant }       from 'src/app/Model/Combatant';
import { LogParser }       from 'src/app/Service/LogParser/LogParser';

@Injectable({ providedIn: 'root' })
export class StatusService {
	player: Combatant;

	constructor(protected parser: LogParser) {
		this.player = parser.player.value;
		this.parser.player.subscribe(p => this.player = p);
	}

	filterAuras(auras: Status[], filters: StatusFilter[], onlyOwn: boolean) {
		let result: Status[] = [...auras];
		if (onlyOwn && this.player) {
			result = result.filter(a => a.appliedBy === this.player.id);
		}

		for (const filter of filters) {
			result = result.filter(a => {
				let hasMatch = false;
				for (const filterSpell of filter.filter) {
					hasMatch = this.filterHasMatch(a, filterSpell);
					if (hasMatch) {
						break;
					}
				}

				return filter.type === 'blacklist' ? !hasMatch : hasMatch;
			});
		}

		return result;
	}

	filterHasMatch(aura: Status, filter: AuraFilterSpell) {
		if (aura.id === filter.id || aura.name === filter.name) {
			return true;
		}

		return aura.name.toLowerCase().indexOf(filter.raw.toLowerCase()) >= 0;
	}
}