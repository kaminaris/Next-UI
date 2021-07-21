import { HandlerInterface } from './HandlerInterface';
import { LogParser }        from '../LogParser';

// 0x01
export class ZoneChangedHandler implements HandlerInterface {
	indexes = {
		id: 2,
		name: 3
	}

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event[0] !== 0x01) {
			return;
		}

		this.parser.zoneId.next(event[this.indexes.id] ?? '');
		this.parser.zoneName.next(event[this.indexes.name] ?? '');

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