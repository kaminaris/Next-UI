import { playerMarkers }        from 'src/app/Data/playerMarkers';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';

export class PlayerMarkerTrigger extends Trigger {
	type: TriggerType = 'player-marker';

	options = {
		markerId: 0,
		targetName: ''
	};

	attach() {
		super.attach();

		this.subs.push(this.parser.eventDispatcher.playerMarker.subscribe(ev => {
			console.log('EVENT', ev);
			if (this.options.markerId !== 999 && ev.markerId !== this.options.markerId) {
				return;
			}

			if (this.options.targetName) {
				const evaluatedName =
					this.isSpecialUnitName(this.options.targetName) ?
					this.evaluateUnitName(this.options.targetName as any) : this.options.targetName
				;
				console.log('EVENT EV NAME', evaluatedName);
				if (ev.targetName.indexOf(evaluatedName) < 0) {
					// message does not match
					return;
				}
			}

			this.active.next(ev.operation === 'add');

			const markerName = playerMarkers.find(m => m.id === ev.markerId)?.name ?? '???';
			this.data.next({
				playerMarkerId: ev.markerId,
				playerMarkerName: markerName,
				targetId: ev.targetId,
				targetName: ev.targetName
			});
		}));
	}
}