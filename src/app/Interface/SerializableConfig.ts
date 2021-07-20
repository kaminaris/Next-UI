import { BehaviorSubject } from 'rxjs';

export interface SerializableConfig {
	anyChanged: BehaviorSubject<any>;

	unserialize(value: any): void;
	serialize(): any;
}