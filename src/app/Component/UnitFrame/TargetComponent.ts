import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UnitFrameComponent }                                    from 'src/app/Component/UnitFrame/UnitFrameComponent';

@Component({
	selector: 'target',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class TargetComponent extends UnitFrameComponent implements OnInit, OnDestroy {

	ownConfig = this.config.frames.target;
	combatant = this.parser.target.value;
	combatantSubject = this.parser.target;
}