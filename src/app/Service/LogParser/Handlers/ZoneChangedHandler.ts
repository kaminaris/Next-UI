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
		this.parser.zoneId.next(event[indexes.id] ?? '');
		this.parser.zoneName.next(event[indexes.name] ?? '');

		const combatants = this.parser.combatants.value;
		this.parser.combatants.next(combatants.filter(c => c.isPlayer || c.inParty.value));

		for (const c of this.parser.combatants.value) {
			c.clearPermaAuras();
		}

		if (this.parser.debugMode) {
			console.log(`Changed Zone to ${ this.parser.zoneName.value } (${ this.parser.zoneId.value }).`);
		}
	}
}