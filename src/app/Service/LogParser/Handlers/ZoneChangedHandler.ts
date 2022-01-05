import { ActService }       from 'src/app/Service/Act/ActService';
import { HandlerInterface } from './HandlerInterface';

const indexes = {
	id: 2,
	name: 3
};

export class ZoneChangedHandler implements HandlerInterface {
	eventId = 0x01;

	constructor(public act: ActService) {}

	handle(event: string[]) {
		const zoneId = +(event[indexes.id] ?? 0);
		const zoneName = event[indexes.name] ?? '';

		this.act.parser.changeZone(zoneId, zoneName);

		if (this.act.parser.debugMode) {
			console.log(`Changed Zone to ${ this.act.parser.zoneName.value } (${ this.act.parser.zoneId.value }).`);
		}
	}
}