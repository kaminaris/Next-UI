export interface NetworkEvent<T> {
	opcode: number;
	targetActorId: number;
	dir: 'Up' | 'Down';
	data: T
}