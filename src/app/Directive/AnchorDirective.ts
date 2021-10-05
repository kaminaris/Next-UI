import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription }                    from 'rxjs';
import { calculateAnchor }                                  from 'src/app/Function/calculateAnchor';
import { Anchor }                                           from 'src/app/Interface/Anchor';
import { DistinctBehaviorSubject }                          from 'src/app/Model/DistinctBehaviorSubject';

@Directive({
	selector: '[anchor-element]'
})
export class AnchorDirective implements OnInit, OnDestroy {
	@HostBinding('style.top') top: string;
	@HostBinding('style.bottom') bottom: string;
	@HostBinding('style.right') right: string;
	@HostBinding('style.left') left: string;
	@HostBinding('style.transform') transform: string;

	@Input() anchorSub: BehaviorSubject<Anchor> | DistinctBehaviorSubject<Anchor>;
	@Input() positionSub: BehaviorSubject<{ x: number, y: number }> | DistinctBehaviorSubject<{ x: number, y: number }>;

	subs: Subscription[] = [];

	ngOnInit() {
		this.calculate();

		this.subs.push(this.anchorSub.subscribe(() => {
			this.calculate();
		}));

		this.subs.push(this.positionSub.subscribe(() => {
			this.calculate();
		}));
	}

	ngOnDestroy() {
		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}

	calculate() {
		const { left, bottom, right, top, transform } = calculateAnchor(this.anchorSub.value, this.positionSub.value);
		this.top = top;
		this.right = right;
		this.bottom = bottom;
		this.left = left;
		this.transform = transform;
	}
}