import { Combatant } from 'src/app/Model/Combatant';

export type SorterType =
	'default'
	| 'none'
	| 'alphabetical'
	| 'you-first'
	| 'tank-healer-dps'
	| 'healer-tank-dps'
	| 'highest-hp'
	| 'lowest-hp';

export interface CombatantSorterInterface {
	type: SorterType;
	canApplyToParty: boolean;
	canApplyToAggro: boolean;
	name: string;
	sorter: (a: Combatant, b: Combatant) => number;
}