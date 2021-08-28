import { Component }     from '@angular/core';
import { ConfigService } from 'src/app/Service/ConfigService';
import { Util }          from 'src/app/Service/LogParser/Util';

@Component({
	selector: 'config-window-color',
	template: `
		<h4 class="ta-c">Color Configuration</h4>

		<config-group title="Job Colors">
			<config-color *ngFor="let j of jobs"
				[customSet]="true"
				[label]="j.job"
				(getProp)="getProp($event, j.jobId)"
				(setProp)="setProp($event, j.jobId)"
				(resetProp)="resetProp(j.jobId)"
			></config-color>
		</config-group>
	`
})
export class ConfigWindowColorComponent {
	jobs = Util.jobsArray();

	config = this.conf.config;

	constructor(public conf: ConfigService) {}

	resetConfig(prop: string) {
		this.conf.resetConfig(prop);
	}

	closeConfig() {
		this.conf.closeConfig();
	}

	getProp($event: {value: any}, jobId: number) {
		$event.value = this.config.colorConfig.getJobColor(jobId);
	}

	setProp($event: any, jobId: number) {
		this.config.colorConfig.setJobColor(jobId, $event);
	}

	resetProp(jobId: number) {
		this.config.colorConfig.resetJobColor(jobId);
	}
}