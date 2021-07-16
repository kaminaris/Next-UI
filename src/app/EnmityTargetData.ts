export interface ActorInterface {
	ID: number;
	OwnerID: number;
	Type: number;
	TargetID: number;
	Job: number;
	Name: string;
	CurrentHP: number;
	MaxHP: number;
	PosX: number;
	PosY: number;
	PosZ: number;
	Rotation: number;
	Distance: number;
	EffectiveDistance: number;
	Effects: any[]
}

export interface EnmityTargetData {
	type: string;
	Target: ActorInterface;
	Focus: ActorInterface,
	Hover: ActorInterface,
	TargetOfTarget: ActorInterface,
	Entries: ActorInterface
}