import { Position } from './Position';

export interface Actor {
	hp: number;
	hpMax: number;
	id: number;
	contentId?: string;
	nameId: number;
	jobId: number;
	level: number;
	mana: number;
	manaMax: number;
	name: string;
	gp: number;
	gpMax: number;
	cp: number;
	cpMax: number;
	rotation: number;
	companyTag: string;
	position: Position;
}