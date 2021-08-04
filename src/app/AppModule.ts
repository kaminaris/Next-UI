import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { BrowserModule }                 from '@angular/platform-browser';
import { NgSelectModule }                from '@ng-select/ng-select';
import { AngularDraggableModule }        from 'angular2-draggable';
import { ColorSketchModule }             from 'ngx-color/sketch';
import { AppComponent }                  from 'src/app/AppComponent';
import { ConfigAggroListComponent }      from 'src/app/Component/Config/ConfigAggroListComponent';
import { ConfigAuraComponent }           from 'src/app/Component/Config/ConfigAuraComponent';
import { ConfigTargetComponent }         from 'src/app/Component/Config/ConfigTargetComponent';
import { ConfigTargetOfTargetComponent } from 'src/app/Component/Config/ConfigTargetOfTargetComponent';
import { ConfigTTSComponent }            from 'src/app/Component/Config/ConfigTTSComponent';
import { RowCheckboxComponent }          from 'src/app/Component/Config/Row/RowCheckboxComponent';
import { RowColorComponent }             from 'src/app/Component/Config/Row/RowColorComponent';
import { RowInputComponent }             from 'src/app/Component/Config/Row/RowInputComponent';
import { RowPositionComponent }          from 'src/app/Component/Config/Row/RowPositionComponent';
import { RowSelectComponent }            from 'src/app/Component/Config/Row/RowSelectComponent';
import { RowSizeComponent }              from 'src/app/Component/Config/Row/RowSizeComponent';
import { ConfigButtonComponent }         from 'src/app/Component/Config/Ui/ConfigButtonComponent';
import { ConfigCheckboxComponent }       from 'src/app/Component/Config/Ui/ConfigCheckboxComponent';
import { ConfigColorComponent }          from 'src/app/Component/Config/Ui/ConfigColorComponent';
import { ConfigGroupComponent }          from 'src/app/Component/Config/Ui/ConfigGroupComponent';
import { ConfigInputComponent }          from 'src/app/Component/Config/Ui/ConfigInputComponent';
import { ConfigPositionComponent }       from 'src/app/Component/Config/Ui/ConfigPositionComponent';
import { ConfigRangeComponent }          from 'src/app/Component/Config/Ui/ConfigRangeComponent';
import { ConfigSelectComponent }         from 'src/app/Component/Config/Ui/ConfigSelectComponent';
import { ConfigSizeComponent }           from 'src/app/Component/Config/Ui/ConfigSizeComponent';
import { ConfigTextWidgetComponent }     from 'src/app/Component/Config/Ui/ConfigTextWidgetComponent';
import { ConfigComponent }               from 'src/app/Component/ConfigComponent';
import { ControlComponent }              from 'src/app/Component/ControlComponent';
import { IconClose }                     from 'src/app/Component/Icon/IconClose';
import { IconCog }                       from 'src/app/Component/Icon/IconCog';
import { IconEye }                       from 'src/app/Component/Icon/IconEye';
import { IconMover }                     from 'src/app/Component/Icon/IconMover';
import { IconSpeaker }                   from 'src/app/Component/Icon/IconSpeaker';
import { ProgressBarComponent }          from 'src/app/Component/ProgressBarComponent';
import { TextWidget }                    from 'src/app/Component/TextWidget';
import { AggroListComponent }            from 'src/app/Component/UnitFrame/AggroListComponent';
import { AggroMemberComponent }          from 'src/app/Component/UnitFrame/AggroMemberComponent';
import { AuraIconComponent }             from 'src/app/Component/UnitFrame/AuraIconComponent';
import { PartyComponent }                from 'src/app/Component/UnitFrame/PartyComponent';
import { PartyMemberComponent }          from 'src/app/Component/UnitFrame/PartyMemberComponent';
import { PlayerComponent }               from 'src/app/Component/UnitFrame/PlayerComponent';
import { TargetComponent }               from 'src/app/Component/UnitFrame/TargetComponent';
import { TargetOfTargetComponent }       from 'src/app/Component/UnitFrame/TargetOfTargetComponent';
import { DurationPipe }                  from 'src/app/Pipe/DurationPipe';
import { SettingsIcon }                  from 'src/app/SettingsIcon';
import { ConfigMainComponent }           from './Component/Config/ConfigMainComponent';
import { ConfigPartyComponent }          from './Component/Config/ConfigPartyComponent';
import { ConfigPlayerComponent }         from './Component/Config/ConfigPlayerComponent';

@NgModule({
	declarations: [
		ConfigComponent,
		AppComponent,

		TextWidget,
		AuraIconComponent,

		PartyMemberComponent,
		PartyComponent,
		AggroMemberComponent,
		AggroListComponent,
		TargetComponent,
		TargetOfTargetComponent,
		PlayerComponent,
		ControlComponent,
		ProgressBarComponent,

		ConfigMainComponent, ConfigPlayerComponent, ConfigTargetComponent, ConfigPartyComponent, ConfigAuraComponent,
		ConfigTargetOfTargetComponent, ConfigTTSComponent, ConfigAggroListComponent,

		RowInputComponent, RowCheckboxComponent, RowSelectComponent, RowColorComponent, RowPositionComponent,
		RowSizeComponent,

		DurationPipe,

		IconMover, IconCog, IconClose, SettingsIcon, IconSpeaker, IconEye,

		// Config UI
		ConfigGroupComponent, ConfigInputComponent, ConfigSizeComponent, ConfigPositionComponent,
		ConfigCheckboxComponent, ConfigColorComponent, ConfigSelectComponent, ConfigTextWidgetComponent,
		ConfigRangeComponent, ConfigButtonComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AngularDraggableModule,
		NgSelectModule,
		ColorSketchModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
