import { Component, Input } from '@angular/core';
import { CustomElement }    from 'src/app/Model/CustomElement/CustomElement';
import { ChatTrigger }      from 'src/app/Model/CustomElement/Trigger/ChatTrigger';

@Component({
	selector: 'trigger-chat-config',
	template: `
		<div class="custom-config-row">
			<div class="config-label">Speaker Name</div>
			<div class="config-input">
				<input type="text" class="form-control form-control-sm"
					id="custom-element-image"
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
					id="custom-element-image"
					placeholder="Trigger will activate if it contains a part of this"
					[(ngModel)]="trigger.options.message"
					[ngModelOptions]="{standalone: true}"
					(ngModelChange)="update()"
				>
			</div>
		</div>
	`
})
export class TriggerChatConfigComponent {
	@Input() customElement: CustomElement;
	@Input() trigger: ChatTrigger;

	update() {
		this.customElement?.update.next(true);
	}
}