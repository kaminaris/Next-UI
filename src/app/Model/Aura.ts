import { BehaviorSubject } from 'rxjs';
import { statuses }        from 'src/app/Data/status';

export class Aura {
	name = '';
	appliedBy: number = null;
	isBuff = true;
	priority = 100;

	stacks = new BehaviorSubject<number>(0);
	gainedAt = new BehaviorSubject<Date>(null);
	expiresAt = new BehaviorSubject<Date>(null);
	duration = new BehaviorSubject<number>(0);

	constructor(
		public id: number
	) {}

	static createAura(
		id: number,
		name: string = '',
		stacks: number,
		appliedBy: number,
		duration: number, // duration 0 = permanent
		gainedAt?: Date,
		priority?: number
	) {
		const a = new Aura(id);
		a.name = name;
		a.stacks.next(stacks);
		if (appliedBy) {
			a.appliedBy = appliedBy;
		}
		a.gainedAt.next(gainedAt ? gainedAt : new Date());

		if (duration) {
			a.duration.next(duration);
			a.expiresAt.next(duration > 9990 ? null : new Date(a.gainedAt.value.valueOf() + duration * 1000));
		}
		if (priority) {
			a.priority = priority;
		}

		const statusDef = statuses.find(s => s.id === a.id);
		if (statusDef) {
			a.isBuff = statusDef.category === 1;
			a.priority = statusDef.partyListPriority;
			if (!a.name) {
				a.name = statusDef.name;
			}
		}

		return a;
	}

	updateAura(
		name?: string,
		stacks?: number,
		appliedBy?: number,
		duration?: number, // duration 0 = permanent
		gainedAt?: Date,
		priority?: number
	) {
		if (name) {
			this.name = name;
		}

		if (stacks) {
			this.stacks.next(stacks);
		}

		if (appliedBy) {
			this.appliedBy = appliedBy;
		}

		if (duration) {
			this.duration.next(duration);
		}

		if (gainedAt) {
			this.gainedAt.next(gainedAt);
		}

		const newExpire =
			this.duration.value >= 9990 ?
			null : new Date(this.gainedAt.value.valueOf() + duration * 1000);

		if (
			newExpire === null && this.expiresAt.value !== null ||
			newExpire !== null && this.expiresAt.value === null ||
			newExpire !== null && this.expiresAt.value !== null && newExpire.valueOf() !== this.expiresAt.value.valueOf()
		) {
			this.expiresAt.next(newExpire);
		}
	}
}