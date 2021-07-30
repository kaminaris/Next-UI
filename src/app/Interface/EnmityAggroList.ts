import { EffectData }     from 'src/app/Interface/EffectData';
import { ActorInterface } from './EnmityTargetData';

export interface AggroTargetTarget {
	Enmity: number;
	HateRate: number;
	ID: number;
	Job: number;
	Name: string;
	OwnerID: number;
	isMe: boolean;
}

export interface AggroTarget {
	CurrentHP: number;
	Effects: EffectData[];
	HateRate: number;
	ID: number;
	MaxHP: number;
	Name: string;
	Order: number;
	Target: AggroTargetTarget;
	isCurrentTarget: boolean;
}

export interface EnmityAggroList {
	type: string;
	AggroList: AggroTarget[];
}