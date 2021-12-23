export interface NetworkEvent<T> {
	opcode: number;
	dir: 'Up' | 'Down';
	data: T
}