import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Inject,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges
}                       from '@angular/core';
import { Subscription } from 'rxjs';
import {
	Combatant
}                       from 'src/app/Model/Combatant';
import { LogParser }    from 'src/app/Service/LogParser/LogParser';

@Component({
	selector: 'leader-icon',
	template: `
		<img alt="" *ngIf="leaderUrl"
			[src]="leaderUrl"
			[style.width.px]="size"
			[style.height.px]="size"
		>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderComponent implements OnInit, OnDestroy, OnChanges {
	@Input() combatant: Combatant;
	@Input() size = 24;
	leaderUrl = '';

	leaderSub: Subscription;

	constructor(
		protected cd: ChangeDetectorRef,
		protected parser: LogParser,
		@Inject('BASE_URL') protected baseUrl: string
	) {
	}

	ngOnInit() {
		this.cd.detach();
		this.setLeaderUrl();
		this.leaderSub = this.parser.partyLeader.subscribe(this.setLeaderUrl.bind(this));
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.combatant) {
			if (this.combatant) {
				this.setLeaderUrl();
			}
		}

		this.cd.detectChanges();
	}

	setLeaderUrl() {
		const currentLeader = this.parser.partyLeader.value;
		this.leaderUrl =
			currentLeader && currentLeader === this.combatant ?
			this.baseUrl + 'assets/leader/icon.png' : '';
		this.cd.detectChanges();
	}

	ngOnDestroy() {
		this.leaderSub?.unsubscribe();
	}
}