import { Position }     from 'src/app/Service/Xiv/Interface/Position';
import { StatusEffect } from 'src/app/Service/Xiv/Interface/StatusEffect';

export interface PlayerSpawn {
	title: number;
	u1b: number;
	currentWorldId: number;
	homeWorldId: number;

	gmRank: number;
	u3c: number;
	u4: number;
	onlineStatus: number;

	pose: number;
	u5a: number;
	u5b: number;
	u5c: number;

	targetId: number;
	u6: number;
	u7: number;
	mainWeaponModel: number;
	secWeaponModel: number;
	craftToolModel: number;

	u14: number;
	u15: number;
	bNPCBase: number;
	bNPCName: number;
	u18: number;
	u19: number;
	directorId: number;
	ownerId: number;
	u22: number;
	hpMax: number;
	hp: number;
	displayFlags: number;
	fateId: number;
	mana: number;
	manaMax: number;
	unk: number; // == 0
	modelChara: number;
	rotation: number;
	currentMount: number;
	activeMinion: number;
	spawnIndex: number;
	state: number;
	persistentEmote: number;
	modelType: number;
	subtype: number;
	voice: number;
	u25c: number;
	enemyType: number;
	level: number;
	classJob: number;
	u26d: number;
	u27a: number;
	mountHead: number;
	mountBody: number;
	mountFeet: number;
	mountColor: number;
	scale: number;

	elementData: number[];
	effects: StatusEffect[];

	position: Position;

	models: number[];

	name: string;
	look: string;
	fcTag: string;
}