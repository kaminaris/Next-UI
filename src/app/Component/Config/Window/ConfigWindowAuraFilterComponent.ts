import { Component, Inject } from '@angular/core';
import { AuraDefinition } from 'src/app/Interface/AuraDefinition';
import { StatusFilter }   from 'src/app/Interface/StatusFilter';
import { ConfigService }  from 'src/app/Service/ConfigService';
import { statuses }          from 'src/app/Data/statuses';

@Component({
	selector: 'config-window-aura-filter',
	template: `
		<config-group title="Aura Filters">
			<div class="custom-config-row">
				<div class="config-label">Create New Filter</div>
				<div class="config-input">
					<input class="form-control form-control-sm w100p" type="text" [(ngModel)]="newFilterName">
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
						[(ngModel)]="selectedFilter"
						[items]="filters"
						[clearable]="false"
						[searchable]="false"
						bindLabel="name"
						(change)="changeFilter($event)"
					></ng-select>
				</div>
				<div class="config-reset">
					<button class="btn btn-sm btn-danger" type="button" (click)="deleteFilter()">Delete</button>
				</div>
			</div>
		</config-group>
		<config-group *ngIf="selectedFilter" [title]="'Filter: ' + selectedFilter.name">
			<div class="custom-config-row">
				<div class="config-label">Name</div>
				<div class="config-input">
					<input type="text" class="w100p" [(ngModel)]="selectedFilter.name">
				</div>
			</div>
			<div class="custom-config-row">
				<div class="config-label">Type</div>
				<div class="config-input">
					<ng-select
						class="form-control form-control-sm"
						[(ngModel)]="selectedFilter.type"
						[items]="filterTypes"
						[clearable]="false"
						[searchable]="false"
						bindLabel="label"
						bindValue="value"
						(change)="matchAll()"
					></ng-select>
				</div>
			</div>

			<div class="custom-config-row">
				<button type="button" class="btn btn-sm btn-success" (click)="addFilterToMatch()">+</button>
			</div>

			<div class="custom-config-row" *ngFor="let f of selectedFilter.filter; let i = index">
				<div class="config-label">Name</div>
				<div class="config-input d-flex">
					<input type="text" class="w50p" [(ngModel)]="f.raw" (ngModelChange)="findMatch(i, f)">
					<div class="w50p ps-1" style="line-height: 30px;">
						<span *ngIf="!auraMatchMap[i]; else matched" style="color: red">!</span>
						<ng-template #matched>
							<span class="cursor-pointer" (click)="setAuraToMatch(i)">
								<img [src]="auraMatchIcon[i]" style="height: 28px;" alt="">
								{{ auraMatchMap[i].name }}
							</span>
						</ng-template>
					</div>
				</div>
				<div class="config-reset">
					<button class="btn btn-sm btn-danger" type="button" (click)="removeRule(i)">Delete</button>
				</div>
			</div>

			<div>
				<button type="button" class="btn btn-success" (click)="saveFilter()">Save Filter</button>
			</div>

		</config-group>
	`
})
export class ConfigWindowAuraFilterComponent {
	filterTypes = [
		{ value: 'blacklist', label: 'Blacklist' },
		{ value: 'whitelist', label: 'Whitelist' }
	];

	selectedFilter: StatusFilter;

	filters: StatusFilter[] = [];
	newFilterName = '';

	exportInput = '';

	allStatuses = statuses;
	auraMatchMap: { [x: number]: AuraDefinition } = {};
	auraMatchIcon: { [x: number]: string } = {};

	constructor(
		protected conf: ConfigService,
		@Inject('BASE_URL') protected baseUrl: string
	) {
		this.filters = conf.config.filters;
	}

	deleteFilter() {
		if (!this.selectedFilter) {
			return;
		}

		this.filters.splice(this.filters.indexOf(this.selectedFilter), 1);
		this.conf.config.filtersSub.next(this.filters);
	}

	createNew() {
		this.filters.push({
			name: this.newFilterName,
			filter: [],
			type: 'blacklist'
		});
		this.filters = [...this.filters];

		this.conf.config.filtersSub.next(this.filters);
	}

	changeFilter($event: any) {
		console.log($event);
	}

	removeRule(i: number) {
		this.selectedFilter.filter.splice(i, 1);
	}

	addFilterToMatch() {
		this.selectedFilter.filter.push({
			raw: '',
			id: 0,
			name: ''
		});
	}

	findMatch(i: number, f: { raw: string; id: number; name: string }) {
		const matched: AuraDefinition = this.allStatuses.find(
			s => s.name.toLowerCase().indexOf(f.raw.toLowerCase()) >= 0 || s.id === +f.raw
		);

		this.auraMatchMap[i] = matched;
		this.auraMatchIcon[i] = matched ? this.baseUrl + 'assets/status/' + matched.id + '.png' : '';
	}

	matchAll() {
		for (let i = 0; i < this.selectedFilter.filter.length; i++) {
			let f = this.selectedFilter.filter[i];
			this.findMatch(i, f);
		}
	}

	setAuraToMatch(i: number) {
		const auraMatched = this.auraMatchMap[i];
		const filter = this.selectedFilter.filter[i];
		filter.id = auraMatched.id;
		filter.name = auraMatched.name;
		filter.raw = auraMatched.name;
	}

	saveFilter() {
		this.filters = [...this.filters];

		this.conf.config.filtersSub.next(this.filters);
	}
}