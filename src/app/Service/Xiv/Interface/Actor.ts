export interface Actor {
	hp: number;
	hpMax: number;
	id: number;
	jobId: number;
	level: number;
	mana: number;
	manaMax: number;
	name: string;
	position: {
		X: number,
		Y: number,
		Z: number
	};
}