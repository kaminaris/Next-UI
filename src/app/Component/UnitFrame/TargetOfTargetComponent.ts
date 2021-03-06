import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitFrameComponent }                 from 'src/app/Component/UnitFrame/UnitFrameComponent';

@Component({
	selector: 'target-of-target',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class TargetOfTargetComponent extends UnitFrameComponent {
	ownConfig = this.config.frames.targetOfTarget;
	combatant = this.parser.targetOfTarget.value;
	combatantSubject = this.parser.targetOfTarget;
}