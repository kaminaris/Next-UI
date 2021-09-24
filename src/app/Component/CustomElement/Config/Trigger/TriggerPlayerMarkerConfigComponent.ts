import { Component, Input, OnInit } from '@angular/core';
import { playerMarkers }            from 'src/app/Data/playerMarkers';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { Trigger }                  from 'src/app/Model/CustomElement/Trigger';
import { HeadMarkerTrigger }        from 'src/app/Model/CustomElement/Trigger/HeadMarkerTrigger';
import { PlayerMarkerTrigger }      from 'src/app/Model/CustomElement/Trigger/PlayerMarkerTrigger';
import { StatusTrigger }            from 'src/app/Model/CustomElement/Trigger/StatusTrigger';

@Component({
	selector: 'trigger-player-marker-config',
	template: `
		<config-select [configObj]="trigger.options" prop="markerId" label="Marker ID"
			[items]="markers"
			bindValue="id"
			bindLabel="name"
			[reset]="false"
			(afterSet)="update()"
		></config-select>

		<config-input [configObj]="trigger.options" label="Actor Name"
			prop="targetName"
			[reset]="false"
			(afterSet)="update()"
		></config-input>
	`
})
export class TriggerPlayerMarkerConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: PlayerMarkerTrigger | Trigger;

	unitTargets = [
		{ label: 'Player', value: 'player' },
		{ label: 'Target', value: 'target' },
		{ label: 'Focus', value: 'focus' },
		{ label: 'Target Of Target', value: 'targetOfTarget' }
	];

	markers = playerMarkers;

	constructor() {
		this.markers.push(
			{ id: 999, name: 'Any Marker' }
		);
	}

	ngOnInit() {
	}

	update() {
		this.customElement?.update.next(true);
	}
}