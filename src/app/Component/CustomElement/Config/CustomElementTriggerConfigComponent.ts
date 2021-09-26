import { Component, Input, OnInit } from '@angular/core';
import { triggerMap }               from 'src/app/Data/triggerMap';
import { CustomElement }            from 'src/app/Model/CustomElement/CustomElement';
import { TriggerType }              from 'src/app/Model/CustomElement/Trigger';
import { LogParser }                from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'custom-element-trigger-config',
	template: `
		<config-group title="Trigger Config">
			<div class="custom-config-row">
				<div class="config-label">Trigger Type</div>
				<div class="config-input">
					<ng-select id="custom-element-trigger-type"
						class="form-control form-control-sm"
						[(ngModel)]="triggerTypeSelected"
						(ngModelChange)="swapTrigger()"
						[items]="triggerMap"
						[clearable]="false"
						[searchable]="false"
						bindLabel="label"
						bindValue="name"
					></ng-select>
				</div>
			</div>
		</config-group>
		
		<config-group title="Always Active" *ngIf="triggerType === 'always-active'">
			<p>Trigger is always active thus element will be visible at all times</p>
		</config-group>
		
		<config-group title="Never Active" *ngIf="triggerType === 'never-active'">
			<p>Trigger is never active thus element will be hidden</p>
		</config-group>
		
		<config-group title="Chat Trigger" *ngIf="triggerType === 'chat'">
			<trigger-chat-config 
				[customElement]="customElement" 
				[trigger]="customElement.trigger"
			></trigger-chat-config>
		</config-group>
		
		<config-group title="Status Trigger" *ngIf="triggerType === 'status'">
			<trigger-status-config 
				[customElement]="customElement" 
				[trigger]="customElement.trigger"
			></trigger-status-config>
		</config-group>
		
		<config-group title="Status Trigger" *ngIf="triggerType === 'ability-use'">
			<trigger-ability-use-config 
				[customElement]="customElement" 
				[trigger]="customElement.trigger"
			></trigger-ability-use-config>
		</config-group>
		
		<config-group title="Head Marker Trigger" *ngIf="triggerType === 'head-marker'">
			<trigger-head-marker-config 
				[customElement]="customElement" 
				[trigger]="customElement.trigger"
			></trigger-head-marker-config>
		</config-group>
		
		<config-group title="Player Marker Trigger" *ngIf="triggerType === 'player-marker'">
			<trigger-player-marker-config 
				[customElement]="customElement" 
				[trigger]="customElement.trigger"
			></trigger-player-marker-config>
		</config-group>
		
	`
})
export class CustomElementTriggerConfigComponent implements OnInit {
	@Input() customElement: CustomElement;

	triggerTypeSelected: TriggerType = 'never-active';
	triggerType: TriggerType = 'never-active';
	triggerName = 'none';
	triggerMap = triggerMap;

	constructor(protected parser: LogParser) {}

	ngOnInit() {
		this.triggerType = this.customElement.trigger?.type ?? 'never-active';
		this.triggerTypeSelected = this.triggerType;
	}

	swapTrigger() {
		this.customElement.trigger?.detach();

		const TriggerClass = this.triggerMap.find(tm => tm.name === this.triggerTypeSelected)?.trigger;
		if (TriggerClass) {
			this.customElement.trigger = new TriggerClass(this.parser);
			this.customElement.trigger.attach();
		}
		this.triggerType = this.triggerTypeSelected;
		this.customElement.triggerChange.next(true);
	}
}