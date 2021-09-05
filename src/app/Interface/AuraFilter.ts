import { AuraFilterSpell } from './AuraFilterSpell';

export interface AuraFilter {
	name: string;
	type: 'whitelist' | 'blacklist';
	filter: AuraFilterSpell[];
}