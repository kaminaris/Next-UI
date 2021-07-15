import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window',
	template: `
		<settings-icon class="settings-icon" [fill]="'#000'" (click)="closeConfig()"></settings-icon>
		<table style="width: 100%; padding-top: 20px">
			<tr>
				<td>Show mana</td>
				<td><input type="checkbox" [(ngModel)]="config.showMana"></td>
				<td>
					<button type="button" (click)="resetConfig('showMana')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Display Char Name</td>
				<td><input type="checkbox" [(ngModel)]="config.displayCharName"></td>
				<td>
					<button type="button" (click)="resetConfig('displayCharName')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Font family</td>
				<td><input type="text" [(ngModel)]="config.fontFamily"></td>
				<td>
					<button type="button" (click)="resetConfig('fontFamily')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Hp Height</td>
				<td><input type="text" [(ngModel)]="config.hpHeight"></td>
				<td>
					<button type="button" (click)="resetConfig('hpHeight')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Mana Height</td>
				<td><input type="text" [(ngModel)]="config.manaHeight"></td>
				<td>
					<button type="button" (click)="resetConfig('manaHeight')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Hp Color</td>
				<td><input type="text" [(ngModel)]="config.hpColor"></td>
				<td>
					<button type="button" (click)="resetConfig('hpColor')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Mana Color</td>
				<td><input type="text" [(ngModel)]="config.manaColor"></td>
				<td>
					<button type="button" (click)="resetConfig('manaColor')">Reset</button>
				</td>
			</tr>
			<tr>
				<td>Number Format</td>
				<td>
					<select [(ngModel)]="config.numberFormat">
						<option *ngFor="let f of conf.numberFormats" [ngValue]="f.value">{{ f.name }}</option>
					</select>
				</td>
				<td>
					<button type="button" (click)="resetConfig('numberFormat')">Reset</button>
				</td>
			</tr>
		</table>
	`
})
export class ConfigComponent {

	config = this.conf.config;

	constructor(public conf: ConfigService) {}

	resetConfig(prop: string) {
		this.conf.resetConfig(prop);
	}

	closeConfig() {
		this.conf.closeConfig();
	}
}