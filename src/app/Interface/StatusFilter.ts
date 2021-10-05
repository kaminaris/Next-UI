import { AuraFilterSpell } from './AuraFilterSpell';

export interface StatusFilter {
	name: string;
	type: 'whitelist' | 'blacklist';
	filter: AuraFilterSpell[];
}