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
import { ConfigWindowColorComponent }    from 'src/app/Component/Config/Window/ConfigWindowColorComponent';
import { ConfigWindowMainComponent }     from 'src/app/Component/Config/Window/ConfigWindowMainComponent';
import { ConfigWindowProfileComponent }  from 'src/app/Component/Config/Window/ConfigWindowProfileComponent';
import { ConfigComponent }               from 'src/app/Component/ConfigComponent';
import { ControlComponent }              from 'src/app/Component/ControlComponent';
import { CustomElementComponent }        from 'src/app/Component/CustomElementComponent';
import { CustomElementsPanelComponent }  from 'src/app/Component/CustomElementsPanelComponent';
import { IconApps }                      from 'src/app/Component/Icon/IconApps';
import { IconClose }                     from 'src/app/Component/Icon/IconClose';
import { IconCog }                       from 'src/app/Component/Icon/IconCog';
import { IconEye }                       from 'src/app/Component/Icon/IconEye';
import { IconMover }                     from 'src/app/Component/Icon/IconMover';
import { IconPlus }                      from 'src/app/Component/Icon/IconPlus';
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
import { AnchorDirective }               from 'src/app/Directive/AnchorDirective';
import { DurationPipe }                  from 'src/app/Pipe/DurationPipe';
import { SettingsIcon }                  from 'src/app/SettingsIcon';
import { ConfigPartyComponent }          from './Component/Config/ConfigPartyComponent';
import { ConfigPlayerComponent }         from './Component/Config/ConfigPlayerComponent';

export function getBaseUrl() {
	return document.getElementsByTagName('base')[0].href;
}

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

		// Config Windows
		ConfigWindowMainComponent, ConfigPlayerComponent, ConfigTargetComponent, ConfigPartyComponent,
		ConfigAuraComponent,
		ConfigTargetOfTargetComponent, ConfigTTSComponent, ConfigAggroListComponent, ConfigWindowColorComponent,
		ConfigWindowProfileComponent,

		// Custom Elements
		CustomElementComponent, CustomElementsPanelComponent,

		// Pipes
		DurationPipe,

		// Directives
		AnchorDirective,

		// Icons
		IconMover, IconCog, IconClose, SettingsIcon, IconSpeaker, IconEye, IconApps, IconPlus,

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
	providers: [
		{ provide: 'BASE_URL', useFactory: getBaseUrl }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
