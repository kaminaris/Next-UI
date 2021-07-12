import { HandlerInterface } from './HandlerInterface';
import { LogParser }        from '../LogParser';

export class ZoneChangedHandler implements HandlerInterface {
	indexes = {
		id: 2,
		name: 3
	}

	constructor(public parser: LogParser) {}

	handle(event: string[]) {
		if (+event !== 1) {
			return;
		}

		this.parser.zoneId.next(event[this.indexes.id] ?? '');
		this.parser.zoneName.next(event[this.indexes.name] ?? '');

		if (this.parser.debugMode) {
			console.log(`Changed Zone to ${ this.parser.zoneName.value } (${ this.parser.zoneId.value }).`);
		}
	}
}