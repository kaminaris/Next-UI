import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitFrameComponent }                        from 'src/app/Component/UnitFrame/UnitFrameComponent';
import { Combatant }                                 from 'src/app/Model/Combatant';

@Component({
	selector: 'party-member',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class PartyMemberComponent extends UnitFrameComponent {
	@Input() combatant: Combatant;
	ownConfig = this.config.frames.party;
}