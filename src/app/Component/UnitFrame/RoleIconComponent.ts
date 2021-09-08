import { Component, Input } from '@angular/core';
import { Combatant }        from 'src/app/Model/Combatant';

@Component({
	selector: 'role-icon',
	template: `
		<icon-tank *ngIf="combatant?.role === 'tank'" [size]="size"></icon-tank>
		<icon-healer *ngIf="combatant?.role === 'healer'" [size]="size"></icon-healer>
		<icon-dps *ngIf="combatant?.role === 'dps'" [size]="size"></icon-dps>
	`
})
export class RoleIconComponent {
	@Input() combatant: Combatant;
	@Input() size = 24;
}