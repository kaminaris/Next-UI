export interface PartyMember {
	id: number;
	name: string;
	hp: number;
	hpMax: number;
	mana: number;
	manaMax: number;
	jobId: number;
	level: number;
	worldName: string,
	worldId: number;
	territoryId: number;
	position: {
		x: number,
		y: number,
		z: number,
	};
}