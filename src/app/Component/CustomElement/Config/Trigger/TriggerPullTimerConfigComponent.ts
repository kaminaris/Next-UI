import { Component, Input, OnInit } from '@angular/core';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { PullTimerTrigger }         from 'src/app/Model/CustomElement/Trigger/PullTimerTrigger';

@Component({
	selector: 'trigger-pull-timer-config',
	template: `
		<div class="custom-config-row">
			<div class="config-label">Label</div>
			<div class="config-input">
				<input type="text" class="form-control form-control-sm"
					placeholder="Custom Label passed to custom element"
					[(ngModel)]="trigger.options.label"
					[ngModelOptions]="{standalone: true}"
					(ngModelChange)="update()"
				>
			</div>
		</div>
	`
})
export class TriggerPullTimerConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: PullTimerTrigger;

	ngOnInit() {
	}

	update() {
		this.customElement?.update.next(true);
	}
}