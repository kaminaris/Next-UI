import { NetworkEventData } from './NetworkEventData';

export enum ActorControlCategory {
	KeyItem = 0x03,
	OverTime = 0x17,
	CancelAbility = 0x0f,
	Death = 0x06,
	TargetIcon = 0x22,
	Tether = 0x23,
	GainEffect = 0x14,
	LoseEffect = 0x15,
	UpdateEffect = 0x16,
	Targetable = 0x36,
	DirectorUpdate = 0x6d,
	SetTargetSign = 0x1f6,
	LimitBreak = 0x1f9
}

export interface ActorControl extends NetworkEventData {
	category: ActorControlCategory;
	padding: number;
	param1: number;
	param2: number;
	param3: number;
	param4: number;
	padding1: number;
}

export interface ActorControlSelf extends NetworkEventData {
	category: ActorControlCategory;
	padding: number;
	param1: number;
	param2: number;
	param3: number;
	param4: number;
	param5: number;
	param6: number;
	padding1: number;
}

export interface ActorControlTarget extends NetworkEventData {
	category: ActorControlCategory;
	padding: number;
	param1: number;
	param2: number;
	param3: number;
	param4: number;
	padding1: number;
	targetId: number;
	padding2: number;
}