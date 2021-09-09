import { BehaviorSubject } from 'rxjs';

export function getSubjects(instance: any) {
	const subjects: (BehaviorSubject<any>)[] = [];
	for (const key in instance) {
		if (!instance.hasOwnProperty(key) || !(instance[key] instanceof BehaviorSubject)) {
			continue;
		}

		subjects.push(instance[key] as any);
	}
	return subjects;
}