import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

const cooldownTimerRegex: RegExp[] = [
	/Battle commencing in (?<seconds>[0-9]{1,2}) seconds! \([a-zA-Z-' ]{2,31}\)/, // ENGLISH
	/Début du combat dans (?<seconds>[0-9]{1,2}) secondes! \([a-zA-Z-w' ]{2,31}\)/, // FRENCH
	/Noch (?<seconds>[0-9]{1,2}) Sekunden bis Kampfbeginn! \([a-zA-Z-' ]{2,31}\)/, // GERMAN
	/戦闘開始まで(?<seconds>[0-9]{1,2})秒！ （[a-zA-Z-' ]{2,31}）/, // JAPANESE
	/\/전투 시작 (?<seconds>[0-9]{1,2})초 전! （[a-zA-Z-' ]{2,31}）/, // KOREAN
	/距离战斗开始还有(?<seconds>[0-9]{1,2})秒！\s*（.{1,12}）/ // CHINESE
];

export class PullTimerTrigger extends Trigger {
	type: TriggerType = 'pull-timer';
	hasTick = true;
	deactivateOnTickEnd = true;

	options = {
		label: ''
	};

	attach() {
		super.attach();

		this.subs.push(this.parser.eventDispatcher.chat.subscribe(ev => {
			let found = false;
			let duration = 0;

			for (const reg of cooldownTimerRegex) {
				const result = reg.exec(ev.message);

				if (result) {
					duration = +result.groups.seconds;
					found = true;
					break;
				}
			}

			if (!found) {
				return;
			}

			this.duration = duration;

			this.active.next(true);
			this.data.next({
				label: this.options.label,
				message: ev.message
			});
		}));
	}
}