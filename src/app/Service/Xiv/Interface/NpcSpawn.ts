import { Position }     from './Position';
import { StatusEffect } from './StatusEffect';

export interface NpcSpawn {
	gimmickId: number; // needs to be existing in the map, mob will snap to it
	u2b: number;
	u2ab: number;
	gmRank: number;
	u3b: number;

	aggressionMode: number; // 1 passive, 2 aggressive
	onlineStatus: number;
	u3c: number;
	pose: number;

	u4: number;

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
	levelId: number;
	u19: number;
	directorId: number;
	spawnerId: number;
	parentActorId: number;
	hpMax: number;
	hp: number;
	displayFlags: number;
	fateId: number;
	mPCurr: number;

	modelChara: number;
	currentMount: number;
	rotation: number;
	activeMinion: number;
	spawnIndex: number;
	state: number;
	persistantEmote: number;
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
	look: number[];

	fcTag: string;

	bNPCPartSlot: number;
}