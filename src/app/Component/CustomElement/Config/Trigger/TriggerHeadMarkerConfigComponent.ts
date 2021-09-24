import { Component, Input, OnInit } from '@angular/core';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { Trigger }                  from 'src/app/Model/CustomElement/Trigger';
import { HeadMarkerTrigger }        from 'src/app/Model/CustomElement/Trigger/HeadMarkerTrigger';
import { StatusTrigger }            from 'src/app/Model/CustomElement/Trigger/StatusTrigger';

@Component({
	selector: 'trigger-head-marker-config',
	template: `
		<config-input [configObj]="trigger.options" prop="headMarkerId" label="Head Marker ID"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="trigger.options" label="Actor Name"
			prop="targetName"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="this" label="Visible time [s]"
			prop="newDuration"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>
	`
})
export class TriggerHeadMarkerConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: HeadMarkerTrigger | Trigger;

	newDuration = 0;

	unitTargets = [
		{ label: 'Player', value: 'player' },
		{ label: 'Target', value: 'target' },
		{ label: 'Focus', value: 'focus' },
		{ label: 'Target Of Target', value: 'targetOfTarget' }
	];

	ngOnInit() {
		this.newDuration = this.trigger.duration;
	}

	update() {
		if (!isNaN(this.newDuration)) {
			this.trigger.duration = +this.newDuration;
		}
		this.customElement?.update.next(true);
	}
}