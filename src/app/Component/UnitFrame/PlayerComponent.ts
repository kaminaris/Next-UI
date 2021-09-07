import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitFrameComponent }                 from 'src/app/Component/UnitFrame/UnitFrameComponent';

@Component({
	selector: 'player',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'UnitFrameComponent.html'
})
export class PlayerComponent extends UnitFrameComponent {
	ownConfig = this.config.frames.player;
	combatant = this.parser.player.value;
	combatantSubject = this.parser.player;
}