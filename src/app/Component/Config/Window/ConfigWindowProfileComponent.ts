import { Component }          from '@angular/core';
import { ConfigProfile }      from 'src/app/Interface/ConfigProfile';
import { MainConfig }         from 'src/app/Model/Config/MainConfig';
import { ConfigService }      from 'src/app/Service/ConfigService';

@Component({
	selector: 'config-window-profile',
	template: `
		<config-group title="Profiles">
			<div class="custom-config-row">
				<div class="config-label">Create New</div>
				<div class="config-input">
					<input class="form-control form-control-sm w100p" type="text" [(ngModel)]="newProfileName">
				</div>
				<div class="config-reset">
					<button class="btn btn-sm btn-warning" type="button" (click)="createNew()">Create</button>
				</div>
			</div>
			<div class="custom-config-row">
				<div class="config-label">Select Profile</div>
				<div class="config-input">
					<ng-select
						class="form-control form-control-sm"
						[(ngModel)]="selectedProfile"
						[items]="profiles"
						[clearable]="false"
						[searchable]="false"
						bindLabel="name"
						bindValue="name"
					></ng-select>
				</div>
			</div>
			<div>
				<div class="btn-group">
					<button class="btn btn-success" (click)="loadProfile()">Load</button>
					<button class="btn btn-success" (click)="saveProfile()">Save</button>
					<button class="btn btn-success" (click)="deleteProfile()">Delete</button>
				</div>
			</div>
			<div>
				<textarea [(ngModel)]="exportInput" class="form-control font-monospace" rows="10"></textarea>

				<div class="btn-group">
					<button class="btn btn-success" (click)="exportProfile()">Export</button>
					<button class="btn btn-success" (click)="importProfile()">Import</button>
				</div>
			</div>
		</config-group>
	`
})
export class ConfigWindowProfileComponent {
	frameName: keyof MainConfig['frames'] = 'auraBar';

	selectedProfile: string;

	profiles: ConfigProfile[];
	newProfileName = '';

	exportInput = '';

	constructor(
		protected conf: ConfigService
	) {
		this.profiles = conf.profiles;
	}

	loadProfile() {
		if (!this.selectedProfile) {
			return;
		}

		this.conf.loadProfile(this.selectedProfile);
	}

	deleteProfile() {
		if (!this.selectedProfile) {
			return;
		}

		this.conf.deleteProfile(this.selectedProfile);
		this.profiles = this.conf.profiles;
	}

	createNew() {
		this.conf.createNewProfile(this.newProfileName);
		this.profiles = this.conf.profiles;
	}

	saveProfile() {
		this.conf.saveAsProfile(this.selectedProfile);
	}

	async exportProfile() {
		if (!this.selectedProfile) {
			return;
		}

		this.exportInput = await this.conf.exportProfile(this.selectedProfile);
	}

	async importProfile() {
		if (!this.selectedProfile || !this.exportInput) {
			return;
		}

		await this.conf.importProfile(this.selectedProfile, this.exportInput)
	}
}