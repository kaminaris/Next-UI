import { ActService } from 'src/app/Service/Act/ActService';

export interface HandlerInterface {
	act: ActService;
	eventId: number;

	handle(event: string[]): void;
}