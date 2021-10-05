import { BehaviorSubject, Subscriber } from 'rxjs';

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

export function getSubjectsRecursive(instance: any) {
	const subjects: (BehaviorSubject<any>)[] = [];
	for (const key in instance) {
		if (!instance.hasOwnProperty(key)) {
			continue;
		}

		if (typeof instance[key] === 'object' && instance[key] && instance[key].getSubjects) {
			const deepSubjects = getSubjectsRecursive(instance[key]);
			subjects.push(...deepSubjects);
			continue;
		}

		if (instance[key] instanceof BehaviorSubject) {
			subjects.push(instance[key] as any);
		}
	}
	return subjects;
}