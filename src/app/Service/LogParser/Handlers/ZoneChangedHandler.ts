import { HandlerInterface } from './HandlerInterface';
import { LogParser }        from '../LogParser';

export class ZoneChangedHandler implements HandlerInterface {
	indexes = {
		id: 2,
		name: 3
	}

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 1) {
			return;
		}

		this.parser.zoneId.next(event[this.indexes.id] ?? '');
		this.parser.zoneName.next(event[this.indexes.name] ?? '');

		const combatants = this.parser.combatants.value;
		this.parser.combatants.next(combatants.filter(c => c.isPlayer || c.inParty.value));

		for (const c of this.parser.combatants.value) {
			console.log(c);
			c.clearPermaAuras();
		}

		if (this.parser.debugMode) {
			console.log(`Changed Zone to ${ this.parser.zoneName.value } (${ this.parser.zoneId.value }).`);
		}
	}
}