import { Type }                 from '@angular/core';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
import { AlwaysActiveTrigger }  from 'src/app/Model/CustomElement/Trigger/AlwaysActiveTrigger';
import { ChatTrigger }          from 'src/app/Model/CustomElement/Trigger/ChatTrigger';
import { NeverActiveTrigger }   from 'src/app/Model/CustomElement/Trigger/NeverActiveTrigger';
import { StatusTrigger }        from 'src/app/Model/CustomElement/Trigger/StatusTrigger';

interface TriggerMap {
	name: TriggerType,
	label: string,
	description: string,
	trigger: Type<Trigger>
}

export const triggerMap: TriggerMap[] = [
	{
		name: 'never-active',
		label: 'Never active',
		description: '',
		trigger: NeverActiveTrigger
	},
	{
		name: 'always-active',
		label: 'Always active',
		description: '',
		trigger: AlwaysActiveTrigger
	},
	{
		name: 'chat',
		label: 'Chat Message',
		description: '',
		trigger: ChatTrigger
	},
	{
		name: 'status',
		label: 'Status',
		description: '',
		trigger: StatusTrigger
	}
];