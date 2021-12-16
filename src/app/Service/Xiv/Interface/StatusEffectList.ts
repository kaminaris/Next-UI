import { StatusEffect } from './StatusEffect';

export interface StatusEffectList {
	jobId: number;
	level1: number;
	level2: number;
	level3: number;
	hp: number;
	hpMax: number;
	mana: number;
	manaMax: number;
	damageShield: number;
	unknown1: number; // used to be TP
	unknown2: number;

	effects: StatusEffect[];
}

export interface StatusEffectList2 {
	unknown3: number;
	jobId: number;
	level1: number;
	level2: number;
	level3: number;
	hp: number;
	hpMax: number;
	mana: number;
	manaMax: number;
	damageShield: number;
	unknown1: number; // used to be TP
	unknown2: number;

	effects: StatusEffect[];
}

export interface StatusEffectList3 {
	effects: StatusEffect[];
}