import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'party',
	template: `
		<ng-content></ng-content>
		<div class="d-flex" style="flex-direction: column">
			<party-member class="d-block" style="margin-bottom: 1px; height: 40px"
				*ngFor="let c of party"
				[combatant]="c"
			></party-member>
		</div>
	`
})
export class PartyComponent implements OnInit, OnDestroy {
	party: Combatant[] = [];

	subs: Subscription[] = [];

	constructor(
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.subs.push(this.parser.party.subscribe((party) => {
			this.party = party;
			this.cd.detectChanges();
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

}