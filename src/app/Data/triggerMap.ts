import { Type }                 from '@angular/core';
import { Trigger, TriggerType } from 'src/app/Model/CustomElement/Trigger';
import { AbilityUseTrigger }    from 'src/app/Model/CustomElement/Trigger/AbilityUseTrigger';
import { AlwaysActiveTrigger }  from 'src/app/Model/CustomElement/Trigger/AlwaysActiveTrigger';
import { ChatTrigger }          from 'src/app/Model/CustomElement/Trigger/ChatTrigger';
import { HeadMarkerTrigger }    from 'src/app/Model/CustomElement/Trigger/HeadMarkerTrigger';
import { NeverActiveTrigger }   from 'src/app/Model/CustomElement/Trigger/NeverActiveTrigger';
import { PlayerMarkerTrigger }  from 'src/app/Model/CustomElement/Trigger/PlayerMarkerTrigger';
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
	},
	{
		name: 'ability-use',
		label: 'Ability Use',
		description: '',
		trigger: AbilityUseTrigger
	},
	{
		name: 'head-marker',
		label: 'Head Marker',
		description: '',
		trigger: HeadMarkerTrigger
	},
	{
		name: 'player-marker',
		label: 'Player Marker',
		description: '',
		trigger: PlayerMarkerTrigger
	}
];