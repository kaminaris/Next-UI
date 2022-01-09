import { BehaviorSubject, Observable } from 'rxjs';

export function unserialize(instance: any, data: any) {
	for (const key in instance) {
		if (!instance.hasOwnProperty(key)) {
			continue;
		}

		const origValue = instance[key];
		if (origValue instanceof BehaviorSubject) {
			if (!key.endsWith('Sub')) {
				console.log('Subject does not end with "Sub":' + key);
				continue;
			}

			const propKey = key.substring(0, key.length - 3);
			if (Array.isArray(instance[propKey])) {
				instance[propKey] = Array.isArray(data[propKey]) ? [...data[propKey]] : [];
			}
			else if (typeof instance[propKey] === 'object') {
				instance[propKey] = Object.assign({}, data[propKey]);
			}
			else {
				instance[propKey] = data[propKey];
			}
		}
		else if (typeof origValue === 'object') {
			if (origValue instanceof Observable) {
				continue;
			}
			else if ('unserialize' in instance[key]) {
				instance[key].unserialize(data[key]);
			}
			else {
				unserialize(instance[key], data[key]);
			}

		}
		else if (typeof origValue === 'string' || typeof origValue === 'boolean' || typeof origValue === 'number') {
			instance[key] = data[key];
		}
	}
}