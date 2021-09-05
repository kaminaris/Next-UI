export type StatusEventType = 'gained' | 'lost';

export interface StatusEvent {
	type: StatusEventType;
	statusId: number;
	statusName: string;
	targetId: number;
	targetName: string;
}