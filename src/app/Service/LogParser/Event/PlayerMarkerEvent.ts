export type PlayerMarkerOperationType = 'add' | 'delete';

export interface PlayerMarkerEvent {
	operation: PlayerMarkerOperationType;
	markerId: number;
	targetId: number;
	targetName: string;
}