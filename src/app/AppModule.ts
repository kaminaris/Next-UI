import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { NgSelectModule }         from '@ng-select/ng-select';
import { AngularDraggableModule } from 'angular2-draggable';
import { ColorSketchModule }      from 'ngx-color/sketch';
import { AppComponent }           from 'src/app/AppComponent';

import { ConfigButtonComponent }      from 'src/app/Component/Config/Ui/ConfigButtonComponent';
import { ConfigCheckboxComponent }    from 'src/app/Component/Config/Ui/ConfigCheckboxComponent';
import { ConfigColorComponent }       from 'src/app/Component/Config/Ui/ConfigColorComponent';
import { ConfigGroupComponent }       from 'src/app/Component/Config/Ui/ConfigGroupComponent';
import { ConfigInputComponent }       from 'src/app/Component/Config/Ui/ConfigInputComponent';
import { ConfigMultiselectComponent } from 'src/app/Component/Config/Ui/ConfigMultiselectComponent';
import { ConfigPositionComponent }    from 'src/app/Component/Config/Ui/ConfigPositionComponent';
import { ConfigRangeComponent }       from 'src/app/Component/Config/Ui/ConfigRangeComponent';
import { ConfigSelectComponent }      from 'src/app/Component/Config/Ui/ConfigSelectComponent';
import { ConfigSizeComponent }        from 'src/app/Component/Config/Ui/ConfigSizeComponent';
import { ConfigTextWidgetComponent }  from 'src/app/Component/Config/Ui/ConfigTextWidgetComponent';

import { ConfigWindowAggroListComponent }      from 'src/app/Component/Config/Window/ConfigWindowAggroListComponent';
import { ConfigWindowAuraComponent }           from 'src/app/Component/Config/Window/ConfigWindowAuraComponent';
import { ConfigWindowAuraFilterComponent }     from 'src/app/Component/Config/Window/ConfigWindowAuraFilterComponent';
import { ConfigWindowColorComponent }          from 'src/app/Component/Config/Window/ConfigWindowColorComponent';
import { ConfigWindowFocusComponent }          from 'src/app/Component/Config/Window/ConfigWindowFocusComponent';
import { ConfigWindowMainComponent }           from 'src/app/Component/Config/Window/ConfigWindowMainComponent';
import { ConfigWindowPartyComponent }          from 'src/app/Component/Config/Window/ConfigWindowPartyComponent';
import { ConfigWindowPlayerComponent }         from 'src/app/Component/Config/Window/ConfigWindowPlayerComponent';
import { ConfigWindowProfileComponent }        from 'src/app/Component/Config/Window/ConfigWindowProfileComponent';
import { ConfigWindowTargetComponent }         from 'src/app/Component/Config/Window/ConfigWindowTargetComponent';
import { ConfigWindowTargetOfTargetComponent } from 'src/app/Component/Config/Window/ConfigWindowTargetOfTargetComponent';
import { ConfigWindowTooltipComponent }        from 'src/app/Component/Config/Window/ConfigWindowTooltipComponent';
import { ConfigWindowTTSComponent }            from 'src/app/Component/Config/Window/ConfigWindowTTSComponent';

import { ConfigComponent }              from 'src/app/Component/ConfigComponent';
import { ControlComponent }             from 'src/app/Component/ControlComponent';
import { CustomElementComponent }       from 'src/app/Component/CustomElementComponent';
import { CustomElementsPanelComponent } from 'src/app/Component/CustomElementsPanelComponent';
import { ProgressBarComponent }         from 'src/app/Component/ProgressBarComponent';

import { IconApps }    from 'src/app/Component/Icon/IconApps';
import { IconClose }   from 'src/app/Component/Icon/IconClose';
import { IconCog }     from 'src/app/Component/Icon/IconCog';
import { IconEye }     from 'src/app/Component/Icon/IconEye';
import { IconMover }   from 'src/app/Component/Icon/IconMover';
import { IconPlus }    from 'src/app/Component/Icon/IconPlus';
import { IconSpeaker } from 'src/app/Component/Icon/IconSpeaker';
import { IconDps }     from 'src/app/Component/Icon/Role/IconDps';
import { IconHealer }  from 'src/app/Component/Icon/Role/IconHealer';
import { IconTank }    from 'src/app/Component/Icon/Role/IconTank';

import { AggroListComponent }      from 'src/app/Component/UnitFrame/AggroListComponent';
import { AggroMemberComponent }    from 'src/app/Component/UnitFrame/AggroMemberComponent';
import { AuraIconComponent }       from 'src/app/Component/UnitFrame/AuraIconComponent';
import { FocusComponent }          from 'src/app/Component/UnitFrame/FocusComponent';
import { PartyComponent }          from 'src/app/Component/UnitFrame/PartyComponent';
import { PartyMemberComponent }    from 'src/app/Component/UnitFrame/PartyMemberComponent';
import { PlayerComponent }         from 'src/app/Component/UnitFrame/PlayerComponent';
import { RoleIconComponent }       from 'src/app/Component/UnitFrame/RoleIconComponent';
import { TargetComponent }         from 'src/app/Component/UnitFrame/TargetComponent';
import { TargetOfTargetComponent } from 'src/app/Component/UnitFrame/TargetOfTargetComponent';

import { TextWidget }         from 'src/app/Component/TextWidget';
import { TooltipComponent }   from 'src/app/Component/TooltipComponent';
import { UnitFrameComponent } from 'src/app/Component/UnitFrame/UnitFrameComponent';
import { AnchorDirective }    from 'src/app/Directive/AnchorDirective';
import { TooltipDirective }   from 'src/app/Directive/TooltipDirective';
import { DurationPipe }       from 'src/app/Pipe/DurationPipe';

export function getBaseUrl() {
	return document.getElementsByTagName('base')[0].href;
}

@NgModule({
	declarations: [
		ConfigComponent,
		AppComponent,

		// Custom components
		TextWidget,
		AuraIconComponent,
		TooltipComponent,

		// Unit Frame components
		UnitFrameComponent,
		PartyMemberComponent,
		PartyComponent,
		AggroMemberComponent,
		AggroListComponent,
		TargetComponent,
		FocusComponent,
		TargetOfTargetComponent,
		PlayerComponent,
		ControlComponent,
		ProgressBarComponent,

		// Config Windows
		ConfigWindowMainComponent, ConfigWindowPlayerComponent, ConfigWindowTargetComponent,
		ConfigWindowPartyComponent, ConfigWindowTargetOfTargetComponent, ConfigWindowColorComponent,
		ConfigWindowProfileComponent, ConfigWindowAuraFilterComponent, ConfigWindowAggroListComponent,
		ConfigWindowAuraComponent, ConfigWindowTTSComponent, ConfigWindowTooltipComponent,
		ConfigWindowFocusComponent,

		// Custom Elements
		CustomElementComponent, CustomElementsPanelComponent,

		// Pipes
		DurationPipe,

		// Directives
		AnchorDirective,
		TooltipDirective,

		// Icons
		IconMover, IconCog, IconClose, IconSpeaker, IconEye, IconApps, IconPlus,

		// Role icons
		RoleIconComponent, IconDps, IconTank, IconHealer,

		// Config UI
		ConfigGroupComponent, ConfigInputComponent, ConfigSizeComponent, ConfigPositionComponent,
		ConfigCheckboxComponent, ConfigColorComponent, ConfigSelectComponent, ConfigTextWidgetComponent,
		ConfigRangeComponent, ConfigButtonComponent, ConfigMultiselectComponent
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
