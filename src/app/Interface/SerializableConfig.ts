import { Observable, Subject } from 'rxjs';

export interface SerializableConfig {
	anyChanged: Observable<any>;

	unserialize(value: any): void;
	serialize(): any;

	getSubjects(): Subject<any>[];
}