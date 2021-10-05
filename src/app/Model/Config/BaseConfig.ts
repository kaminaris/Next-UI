import { merge, Observable, Subject } from 'rxjs';
import { debounceTime }                      from 'rxjs/operators';
import { getSubjects, getSubjectsRecursive } from 'src/app/Function/getSubjects';
import { serialize }                         from 'src/app/Function/serialize';
import { unserialize }                from 'src/app/Function/unserialize';

export class BaseConfig {
	anyChangedCache: Observable<any>;
	get anyChanged(): Observable<any> {
		this.anyChangedCache ??= merge(...this.getSubjects()).pipe(debounceTime(10));
		return this.anyChangedCache;
	};

	anyChangedRecursiveCache: Observable<any>;
	get anyChangedRecursive(): Observable<any> {
		this.anyChangedRecursiveCache ??= merge(...this.getSubjectsRecursive()).pipe(debounceTime(10));
		return this.anyChangedRecursiveCache;
	};

	getSubjects(): Subject<any>[] {
		return getSubjects(this);
	}

	getSubjectsRecursive(): Subject<any>[] {
		return getSubjectsRecursive(this);
	}

	serialize(): any {
		return serialize(this);
	}

	unserialize(value: any): void {
		unserialize(this, value);
	}
}