import { LogParser } from '../LogParser';

export interface HandlerInterface {
	parser: LogParser;
	eventId: number;

	handle(event: string[]): void;
}