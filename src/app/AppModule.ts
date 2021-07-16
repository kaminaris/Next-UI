import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { BrowserModule }             from '@angular/platform-browser';
import { AngularDraggableModule }    from 'angular2-draggable';
import { AppComponent }              from 'src/app/AppComponent';
import { ConfigComponent }           from 'src/app/Component/ConfigComponent';
import { ControlComponent }          from 'src/app/Component/ControlComponent';
import { ProgressBarComponent }      from 'src/app/Component/ProgressBarComponent';
import { AuraIconComponent }         from 'src/app/Component/UnitFrame/AuraIconComponent';
import { PartyComponent }            from 'src/app/Component/UnitFrame/PartyComponent';
import { PartyMemberComponent }      from 'src/app/Component/UnitFrame/PartyMemberComponent';
import { PlayerComponent }           from 'src/app/Component/UnitFrame/PlayerComponent';
import { TargetComponent }           from 'src/app/Component/UnitFrame/TargetComponent';
import { SettingsIcon }              from 'src/app/SettingsIcon';

@NgModule({
	declarations: [
		ConfigComponent,
		AppComponent, SettingsIcon, PartyMemberComponent, AuraIconComponent,
		PartyComponent,
		TargetComponent,
		PlayerComponent,
		ControlComponent,
		ProgressBarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AngularDraggableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
