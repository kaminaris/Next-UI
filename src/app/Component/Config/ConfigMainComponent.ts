import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-main',
	template: `
		<h3 class="ta-c">Main Configuration</h3>
		<hr>

		<table style="width: 100%;">
			<tr>
				<td>Font family</td>
				<td><input type="text" [(ngModel)]="config.fontFamily"></td>
				<td>
					<button type="button" (click)="resetConfig('fontFamily')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Number Format</td>
				<td>
					<ng-select 
						[(ngModel)]="config.numberFormat" 
						[items]="conf.numberFormats"
						[clearable]="false"
						[searchable]="false"
						bindLabel="name" 
						bindValue="value"
					></ng-select>
				</td>
				<td>
					<button type="button" (click)="resetConfig('numberFormat')">Reset</button>
				</td>
			</tr>
		</table>
	`
})
export class ConfigMainComponent {

	config = this.conf.config;

	constructor(public conf: ConfigService) {}

	resetConfig(prop: string) {
		this.conf.resetConfig(prop);
	}

	closeConfig() {
		this.conf.closeConfig();
	}
}