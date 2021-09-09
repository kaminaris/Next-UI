import { BehaviorSubject } from 'rxjs';

export function serialize(instance: any) {
	const out: any = {};

	for (const key in instance) {
		if (!instance.hasOwnProperty(key)) {
			continue;
		}

		const value = instance[key];
		if (value instanceof BehaviorSubject) {
			if (!key.endsWith('Sub')) {
				console.log('Subject does not end with "Sub":' + key);
				continue;
			}

			const propKey = key.substring(0, key.length - 3);

			if (Array.isArray(instance[propKey])) {
				out[propKey] = [...instance[propKey]];
			} else if (typeof instance[propKey] === 'object') {
				out[propKey] = Object.assign({}, instance[propKey]);
			} else {
				out[propKey] = instance[propKey];
			}
		} else if (typeof value === 'object') {
			if ('serialize' in value) {
				out[key] = value.serialize();
			} else {
				out[key] = serialize(value);
			}
		} else if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
			out[key] = value;
		}
	}

	return out;
}