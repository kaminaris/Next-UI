import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-main',
	template: `
		<config-group title="Main Configuration">
			<config-input [configObj]="config" prop="fontFamily" label="Font family"></config-input>
			<config-input [configObj]="config" prop="webFont" label="Web font path"></config-input>
			<config-select [configObj]="config" [items]="conf.numberFormats" prop="numberFormat" bindLabel="name"
				bindValue="value" label="Number Format"></config-select>
			<config-checkbox [configObj]="config" prop="blurNames" label="Blur Names"></config-checkbox>
			<config-input [configObj]="config" prop="replaceYourName" label="Replace Your Name"></config-input>
		</config-group>

		<config-group title="Number Templates">
			<h5>Properties to use for HP</h5>
			<p>
				[hp] - current HP <br>
				[hpMax] - maximum HP <br>
				[hpPct] - maximum HP
			</p>
			<config-input [configObj]="config" prop="hpTemplate" label="HP Template"></config-input>

			<h5>Properties to use for Mana</h5>
			<p>
				[hp] - current HP <br>
				[hpMax] - maximum HP <br>
				[hpPct] - maximum HP
			</p>
			<config-input [configObj]="config" prop="manaTemplate" label="Mana Template"></config-input>
		</config-group>

		<config-group title="Custom CSS">
			<div class="mb-3">
				<label for="custom-css">Custom CSS</label>
				<textarea id="custom-css" class="form-control font-monospace" rows="10"
					[(ngModel)]="config.customCss"></textarea>
			</div>
		</config-group>

		<config-group title="Actions">
			<button type="button" class="btn btn-danger d-block" (click)="resetAll()">Reset All config</button>
			<button type="button" class="btn btn-warning d-block" (click)="reload()">Reload Overlay</button>
		</config-group>
	`
})
export class ConfigWindowMainComponent {

	config = this.conf.config;

	constructor(public conf: ConfigService) {}

	reload() {
		window.location.reload();
	}

	resetConfig(prop: string) {
		this.conf.resetConfig(prop, '');
	}

	closeConfig() {
		this.conf.closeConfig();
	}

	resetAll() {
		this.conf.resetAllConfig();
	}
}