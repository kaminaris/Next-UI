import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitFrameComponent }                 from 'src/app/Component/UnitFrame/UnitFrameComponent';

@Component({
	selector: 'focus',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class FocusComponent extends UnitFrameComponent {
	ownConfig = this.config.frames.focus;
	combatant = this.parser.focus.value;
	combatantSubject = this.parser.focus;
}