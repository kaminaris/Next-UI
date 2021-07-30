import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                    from 'rxjs';
import { Combatant }                                       from 'src/app/Model/Combatant';
import { ConfigService }                                   from 'src/app/Service/ConfigService';
import { LogParser }                                       from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'aggro-list',
	template: `
		<ng-content></ng-content>
		<div class="d-flex flex-column">
			<aggro-member class="d-block"
				[style.margin-bottom.px]="ownConfig.unitFrameMargin"
				[style.height]="ownConfig.unitFrameHeight"
				*ngFor="let c of aggroList"
				[combatant]="c"
			></aggro-member>
		</div>
	`
})
export class AggroListComponent implements OnInit, OnDestroy {
	aggroList: Combatant[] = [];

	subs: Subscription[] = [];

	ownConfig = this.conf.config.frames.aggroList;

	constructor(
		protected conf: ConfigService,
		protected parser: LogParser,
		protected cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.subs.push(this.parser.aggroList.subscribe((party) => {
			this.aggroList = party;
			this.cd.detectChanges();
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}