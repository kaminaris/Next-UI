import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Aura }                                       from 'src/app/Service/LogParser/Aura';
import { Util }                                       from 'src/app/Service/LogParser/Util';

@Component({
	selector: 'aura-icon',
	template: `
		<div style="width: 20px; height: 20px; background-color: white">
			{{ aura.id }}
			{{ aura.name }} 
			{{ aura.stacks.value }}
			<img [src]="src" alt="">
		</div>
	`
})
export class AuraIconComponent implements OnChanges {
	@Input() aura: Aura;
	auraId = 0;
	src = '';

	ngOnChanges(changes: SimpleChanges) {
		console.log(changes)
		if (changes.aura) {
			if (this.auraId !== changes.aura.currentValue.aura.id) {
				this.auraId = changes.aura.currentValue.aura.id;
				this.src = Util.getAbilityIcon(this.auraId);
			}
		}
	}
}