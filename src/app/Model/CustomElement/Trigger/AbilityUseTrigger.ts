import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
import { AbilityEvent }         from 'src/app/Service/LogParser/Event/AbilityEvent';
import { LogParser }            from 'src/app/Service/LogParser/LogParser';

export interface AbilityTriggerOptions {
	abilityId: number;
	abilityName: string;
	sourceName: string;
	unit: '' | keyof Pick<LogParser, 'target' | 'focus' | 'player' | 'targetOfTarget'>;
	targetName: string;
}

export class AbilityUseTrigger extends Trigger {
	type: TriggerType = 'ability-use';
	hasTick = true;
	deactivateOnTickEnd = true;

	options: AbilityTriggerOptions = {
		abilityId: 0,
		abilityName: '',
		unit: '',
		sourceName: '',
		targetName: ''
	};

	attach() {
		super.attach();

		this.subs.push(this.parser.eventDispatcher.ability.subscribe(this.multiSearch.bind(this)));
	}

	multiSearch(ev: AbilityEvent) {
		if (this.options.abilityId && ev.abilityId !== this.options.abilityId) {
			this.active.next(false);
			return;
		}

		if (this.options.abilityName && ev.abilityName.indexOf(this.options.abilityName) < 0) {
			this.active.next(false);
			return;
		}

		if (this.options.sourceName && ev.sourceName.indexOf(this.options.sourceName) < 0) {
			this.active.next(false);
			return;
		}

		if (this.options.targetName && ev.targetName.indexOf(this.options.targetName) < 0) {
			this.active.next(false);
			return;
		}

		this.active.next(true);
		this.data.next({
			abilityId: ev.abilityId,
			abilityName: ev.abilityName,
			targetName: ev.targetName,
			targetId: ev.targetId,
			duration: ev.duration
		});
	}
}