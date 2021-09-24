import { Component, Input, OnInit } from '@angular/core';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { ChatTrigger }      from 'src/app/Model/CustomElement/Trigger/ChatTrigger';

@Component({
	selector: 'trigger-chat-config',
	template: `
		<div class="custom-config-row">
			<div class="config-label">Speaker Name</div>
			<div class="config-input">
				<input type="text" class="form-control form-control-sm"
					[(ngModel)]="trigger.options.speaker"
					[ngModelOptions]="{standalone: true}"
					(ngModelChange)="update()"
				>
			</div>
		</div>
		<div class="custom-config-row">
			<div class="config-label">Message</div>
			<div class="config-input">
				<input type="text" class="form-control form-control-sm"
					placeholder="Trigger will activate if it contains a part of this"
					[(ngModel)]="trigger.options.message"
					[ngModelOptions]="{standalone: true}"
					(ngModelChange)="update()"
				>
			</div>
		</div>
		
		<config-input [configObj]="this" label="Visible time [s]"
			prop="newDuration"
			inputType="number"
			[reset]="false"
			(afterSet)="update()"
		></config-input>
	`
})
export class TriggerChatConfigComponent implements OnInit {
	@Input() customElement: CustomElement;
	@Input() trigger: ChatTrigger;

	newDuration = 0;

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