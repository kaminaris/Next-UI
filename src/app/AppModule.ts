import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { NgSelectModule }         from '@ng-select/ng-select';
import { AngularDraggableModule } from 'angular2-draggable';
import { ColorPickerModule }      from 'ngx-color-picker';
import { AppComponent }           from 'src/app/AppComponent';
import { ConfigAuraComponent }   from 'src/app/Component/Config/ConfigAuraComponent';
import { ConfigTargetComponent } from 'src/app/Component/Config/ConfigTargetComponent';
import { RowCheckboxComponent }  from 'src/app/Component/Config/Row/RowCheckboxComponent';
import { RowColorComponent }     from 'src/app/Component/Config/Row/RowColorComponent';
import { RowInputComponent }     from 'src/app/Component/Config/Row/RowInputComponent';
import { RowPositionComponent }  from 'src/app/Component/Config/Row/RowPositionComponent';
import { RowSelectComponent }    from 'src/app/Component/Config/Row/RowSelectComponent';
import { RowSizeComponent }      from 'src/app/Component/Config/Row/RowSizeComponent';
import { ConfigComponent }       from 'src/app/Component/ConfigComponent';
import { ControlComponent }      from 'src/app/Component/ControlComponent';
import { ProgressBarComponent }  from 'src/app/Component/ProgressBarComponent';
import { TextWidget }            from 'src/app/Component/TextWidget';
import { AuraIconComponent }     from 'src/app/Component/UnitFrame/AuraIconComponent';
import { PartyComponent }        from 'src/app/Component/UnitFrame/PartyComponent';
import { PartyMemberComponent }  from 'src/app/Component/UnitFrame/PartyMemberComponent';
import { PlayerComponent }       from 'src/app/Component/UnitFrame/PlayerComponent';
import { TargetComponent }       from 'src/app/Component/UnitFrame/TargetComponent';
import { DurationPipe }          from 'src/app/Pipe/DurationPipe';
import { SettingsIcon }          from 'src/app/SettingsIcon';
import { ConfigMainComponent }   from './Component/Config/ConfigMainComponent';
import { ConfigPartyComponent }  from './Component/Config/ConfigPartyComponent';
import { ConfigPlayerComponent } from './Component/Config/ConfigPlayerComponent';

@NgModule({
	declarations: [
		ConfigComponent,
		AppComponent, SettingsIcon, PartyMemberComponent, AuraIconComponent,
		TextWidget,

		PartyComponent,
		TargetComponent,
		PlayerComponent,
		ControlComponent,
		ProgressBarComponent,

		ConfigMainComponent, ConfigPlayerComponent, ConfigTargetComponent, ConfigPartyComponent, ConfigAuraComponent,

		RowInputComponent, RowCheckboxComponent, RowSelectComponent, RowColorComponent, RowPositionComponent,
		RowSizeComponent,

		DurationPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		AngularDraggableModule,
		NgSelectModule,
		ColorPickerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
