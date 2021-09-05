import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration'
})
export class DurationPipe implements PipeTransform {
	transform(value: number, precision: number): string {
		if (value > 3600) {
			return Math.round(value / 3600) + 'h';
		}
		if (value > 60) {
			// const sec = value % 60;
			// TODO: do we really need seconds here?
			return Math.round(value / 60) + 'm';
			// return Math.floor(value / 60) + ':' + (sec.toFixed(precision)) + 'm';
		}

		return value.toFixed(precision);
	}
}