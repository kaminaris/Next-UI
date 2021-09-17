import { Component, Input, OnInit } from '@angular/core';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { Trigger }                  from 'src/app/Model/CustomElement/Trigger';
import { ChatTrigger }              from 'src/app/Model/CustomElement/Trigger/ChatTrigger';
import { StatusTrigger }            from 'src/app/Model/CustomElement/Trigger/StatusTrigger';

@Component({
	selector: 'trigger-status-config',
	template: `
		<config-checkbox [configObj]="trigger.options" prop="multiTarget" label="Multi Target"
			(afterSet)="update()"
			[reset]="false"
		></config-checkbox>

		<config-input [configObj]="trigger.options" prop="statusName" label="Status Name"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="trigger.options" prop="statusId" label="Status ID"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<ng-container *ngIf="!trigger.options.multiTarget">
			<config-select [configObj]="trigger.options" prop="unit" label="Unit"
				[items]="unitTargets"
				(afterSet)="update()"
			></config-select>
		</ng-container>

		<ng-container *ngIf="trigger.options.multiTarget">
			<config-input [configObj]="trigger.options" label="Actor Name"
				prop="targetName"
				[reset]="false"
				(afterSet)="update()"
			></config-input>
		</ng-container>

		<config-checkbox [configObj]="trigger.options" prop="appliedByPlayer" label="Only applied by player"
			(afterSet)="update()"
			[reset]="false"
		></config-checkbox>

		<div class="custom-config-row">
			<div class="config-label">Visible time [ms]</div>
			<div class="config-input">
				<input type="number" class="form-control form-control-sm"
					placeholder="How long should it be visible"
					[(ngModel)]="newDuration"
					[ngModelOptions]="{standalone: true}"
					(ngModelChange)="update()"
				>
			</div>
		</div>
	`
})
export class TriggerStatusConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: StatusTrigger | Trigger;

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