import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

export class HeadMarkerTrigger extends Trigger {
	type: TriggerType = 'head-marker';
	hasTick = true;
	deactivateOnTickEnd = true;

	options = {
		headMarkerId: 0,
		targetName: ''
	};

	attach() {
		super.attach();

		this.subs.push(this.parser.eventDispatcher.headMarker.subscribe(ev => {
			if (this.options.headMarkerId && ev.headMarkerId === this.options.headMarkerId) {
				// speaker does not match
				this.active.next(false);
				return;
			}

			if (this.options.targetName) {
				const evaluatedName =
					this.isSpecialUnitName(this.options.targetName) ?
					this.evaluateUnitName(this.options.targetName as any) : this.options.targetName
				;
				if (ev.targetName.indexOf(evaluatedName) < 0) {
					// message does not match
					this.active.next(false);
					return;
				}
			}

			this.active.next(true);
			this.data.next({
				headMarkerId: ev.headMarkerId,
				targetId: ev.targetId,
				targetName: ev.targetName
			});

			// setTimeout(() => {
			// 	this.active.next(false);
			// }, this.duration * 1000);
		}));
	}
}