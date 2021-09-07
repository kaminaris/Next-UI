import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitFrameComponent }                        from 'src/app/Component/UnitFrame/UnitFrameComponent';
import { Combatant }                                 from 'src/app/Model/Combatant';

@Component({
	selector: 'aggro-member',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class AggroMemberComponent extends UnitFrameComponent {
	@Input() combatant: Combatant;
	ownConfig = this.config.frames.aggroList;
}