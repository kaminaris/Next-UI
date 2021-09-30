import { ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                                   from 'rxjs';
import { Combatant }                                                      from 'src/app/Model/Combatant';

@Component({
	selector: 'sign-icon',
	template: `
		<img alt="" *ngIf="signUrl"
			[src]="signUrl"
			[style.width.px]="size"
			[style.height.px]="size"
		>
	`
})
export class SignComponent implements OnInit, OnDestroy {
	@Input() combatant: Combatant;
	@Input() size = 24;
	signUrl = '';

	signSub: Subscription;

	constructor(
		protected cd: ChangeDetectorRef,
		@Inject('BASE_URL') protected baseUrl: string
	) {
	}

	ngOnInit() {
		this.cd.detach();
		this.setSignUrl();
		this.signSub = this.combatant.sign.subscribe(this.setSignUrl.bind(this));
	}

	setSignUrl() {
		this.signUrl = this.combatant.sign.value !== null ?
					   this.baseUrl + 'assets/signs/' + this.combatant.sign.value + '.png' : '';
		this.cd.detectChanges();
	}

	ngOnDestroy() {
		this.signSub?.unsubscribe();
	}
}