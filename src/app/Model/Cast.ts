import { BehaviorSubject } from 'rxjs';

export class Cast {
	id: number = null;
	name: string = null;
	duration: number = null;
	delay: number = null;

	elapsed = new BehaviorSubject<number>(0);
	started = new BehaviorSubject<Date>(null);
	stopped = new BehaviorSubject<{ date: Date, canceled: boolean, reason?: string }>(null);

	protected interval: number = null;
	protected timeout: number = null;

	start(id: number, name: string, duration: number, delay?: number) {
		this.stop();

		const startTime = new Date();
		this.id = id;
		this.name = name;
		this.duration = duration + (delay || 0);
		this.delay = delay || 0;
		this.started.next(startTime);

		this.tick();
		this.interval = window.setInterval(this.tick.bind(this), 50);
		this.timeout = window.setTimeout(this.stop.bind(this), this.duration * 1000 + 50);
	}

	tick() {
		this.elapsed.next((new Date().valueOf() - this.started.value.valueOf()) / 1000);
	}

	stop(cancel = false, reason?: string, id?: number) {
		if (id && id !== this.id) {
			console.log('THIS SHOULD NEVER HAPPEN', id, this.id);
			return;
		}

		if (this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}

		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}

		this.stopped.next({date: new Date(), canceled: cancel, reason: reason});
	}

	cancel() {
		this.stop(true);
	}
}