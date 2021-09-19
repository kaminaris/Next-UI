import { Component, Input, OnInit } from '@angular/core';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { Trigger }                  from 'src/app/Model/CustomElement/Trigger';
import { AbilityUseTrigger }        from 'src/app/Model/CustomElement/Trigger/AbilityUseTrigger';

@Component({
	selector: 'trigger-ability-use-config',
	template: `
		<config-input [configObj]="trigger.options" prop="abilityName" label="Ability Name"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="trigger.options" prop="abilityId" label="Ability ID"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="trigger.options" label="Source Name"
			prop="sourceName"
			[reset]="false"
			(afterSet)="update()"
		></config-input>

		<config-input [configObj]="trigger.options" label="Target Name"
			prop="targetName"
			[reset]="false"
			(afterSet)="update()"
		></config-input>
		
		<config-input [configObj]="this" label="Visible time [ms]"
			prop="newDuration"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>
		
<!--		<div class="custom-config-row">-->
<!--			<div class="config-label">Visible time [ms]</div>-->
<!--			<div class="config-input">-->
<!--				<input type="number" class="form-control form-control-sm"-->
<!--					placeholder="How long should it be visible"-->
<!--					[(ngModel)]="newDuration"-->
<!--					[ngModelOptions]="{standalone: true}"-->
<!--					(ngModelChange)="update()"-->
<!--				>-->
<!--			</div>-->
<!--		</div>-->
	`
})
export class TriggerAbilityUseConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: AbilityUseTrigger | Trigger;

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
		console.log(this.newDuration, !isNaN(this.newDuration))
		if (!isNaN(this.newDuration)) {
			this.trigger.duration = +this.newDuration;
		}
		this.customElement?.update.next(true);
	}
}