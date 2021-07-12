import { LogParser } from '../LogParser';

export interface HandlerInterface {
	parser: LogParser;

	handle(event: string[]): void;
}