import { HandlerInterface } from './HandlerInterface';
import { LogParser }        from '../LogParser';

const indexes = {
	id: 2,
	name: 3
};

export class ZoneChangedHandler implements HandlerInterface {
	eventId = 0x01;

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		const zoneId = +(event[indexes.id] ?? 0);
		const zoneName = event[indexes.name] ?? '';

		this.parser.changeZone(zoneId, zoneName);

		if (this.parser.debugMode) {
			console.log(`Changed Zone to ${ this.parser.zoneName.value } (${ this.parser.zoneId.value }).`);
		}
	}
}