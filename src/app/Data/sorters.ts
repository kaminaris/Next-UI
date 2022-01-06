import { CombatantSorterInterface } from 'src/app/Interface/CombatantSorterInterface';
import { Combatant }                from 'src/app/Model/Combatant';

const defaultJobSort = [
	// Tanks
	'PLD', 'GLA', 'WAR', 'MRD', 'DRK', 'GNB',
	// Healers
	'WHM', 'CNJ', 'SCH', 'AST', 'SGE',
	// Melee DPS
	'MNK', 'PGL', 'DRG', 'LNC', 'RPR', 'NIN', 'ROG', 'SAM',
	// Physical Ranged DPS
	'BRD', 'ARC', 'MCH', 'DNC',
	// Caster DPS
	'BLM', 'THM', 'SMN', 'ACN', 'RDM', 'BLU'
];

const reversedJobSort = defaultJobSort.reverse();

export const idSort = (a: Combatant, b: Combatant) => {
	return b.id - a.id;
};

export const defaultSort = (a: Combatant, b: Combatant) => {
	return defaultJobSort.indexOf(a.job.value) - defaultJobSort.indexOf(b.job.value);
};

export const sorters: CombatantSorterInterface[] = [
	{
		type: 'default',
		canApplyToAggro: false,
		canApplyToParty: true,
		name: 'Default (Same as game)',
		sorter: (a: Combatant, b: Combatant) => {
			if (a === b) {
				return 0;
			}
			let weightA = a.isPlayer ? 10000 : 0;
			let weightB = b.isPlayer ? 10000 : 0;

			const aJIdx = reversedJobSort.indexOf(a.job.value);
			const bJIdx = reversedJobSort.indexOf(b.job.value);

			weightA += (aJIdx >= 0 ? aJIdx + 1 : 0) * 10;
			weightB += (bJIdx >= 0 ? bJIdx + 1 : 0) * 10;

			if (weightA === weightB) {
				return b.id - a.id;
			}
			else {
				return weightB - weightA;
			}
		}
	},
	{
		type: 'tank-healer-dps',
		canApplyToAggro: false,
		canApplyToParty: true,
		name: 'Tanks, Healers, Dps, Others',
		sorter: (a: Combatant, b: Combatant) => {
			if (a === b) {
				return 0;
			}
			let weightA = 0;
			let weightB = 0;

			const aJIdx = reversedJobSort.indexOf(a.job.value);
			const bJIdx = reversedJobSort.indexOf(b.job.value);

			weightA += (aJIdx >= 0 ? aJIdx + 1 : 0) * 10;
			weightB += (bJIdx >= 0 ? bJIdx + 1 : 0) * 10;

			if (weightA === weightB) {
				return b.id - a.id;
			}
			else {
				return weightB - weightA;
			}
		}
	},
	{
		type: 'you-first',
		canApplyToAggro: false,
		canApplyToParty: true,
		name: 'You, Tanks, Healers, Dps, Others (alphabetical)',
		sorter: (a: Combatant, b: Combatant) => {
			if (a === b) {
				return 0;
			}
			let weightA = a.isPlayer ? 10000 : 0;
			let weightB = b.isPlayer ? 10000 : 0;

			const aJIdx = reversedJobSort.indexOf(a.job.value);
			const bJIdx = reversedJobSort.indexOf(b.job.value);

			weightA += (aJIdx >= 0 ? aJIdx + 1 : 0) * 10;
			weightB += (bJIdx >= 0 ? bJIdx + 1 : 0) * 10;

			if (weightA === weightB) {
				return a.name.localeCompare(b.name);
			}
			else {
				return weightB - weightA;
			}
		}
	},
	{
		type: 'alphabetical',
		canApplyToAggro: true,
		canApplyToParty: true,
		name: 'Alphabetical',
		sorter: (a: Combatant, b: Combatant) => {
			return a.name.localeCompare(b.name);
		}
	},
	{
		type: 'none',
		canApplyToAggro: true,
		canApplyToParty: true,
		name: 'None (Do not sort)',
		sorter: null
	},
	{
		type: 'lowest-hp',
		canApplyToAggro: true,
		canApplyToParty: false,
		name: 'Lowest Max HP',
		sorter: (a: Combatant, b: Combatant) => {
			return a.hpMax - b.hpMax;
		}
	},
	{
		type: 'highest-hp',
		canApplyToAggro: true,
		canApplyToParty: false,
		name: 'Highest Max HP',
		sorter: (a: Combatant, b: Combatant) => {
			return b.hpMax - a.hpMax;
		}
	},
];

