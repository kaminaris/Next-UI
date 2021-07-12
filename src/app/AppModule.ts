import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { BrowserModule }             from '@angular/platform-browser';
import { AppComponent }              from 'src/app/AppComponent';
import { PlayerService }             from 'src/app/PlayerService';
import { SettingsIcon }              from 'src/app/SettingsIcon';

@NgModule({
	declarations: [
		AppComponent, SettingsIcon
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
