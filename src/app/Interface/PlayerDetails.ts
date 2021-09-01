import { Position } from './Position';

export interface PlayerDetails {
	id: number;
	level: number;
	name: string;
	job: string;
	currentHP: number;
	maxHP: number;
	currentMP: number;
	maxMP: number;
	currentTP: number;
	maxTP: number;
	currentGP: number;
	maxGP: number;
	currentCP: number;
	maxCP: number;
	debugJob:  number;
	currentShield: number;
	pos: Position;
	rotation: number;
	bait: number;
	jobDetail: any;
}