import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

export type XivSocketCommand = 'setTarget' | 'setFocus' | 'setMouseOver' | 'setMouseOverEx' | 'clearMouseOverEx';

export interface CastInfo {
	event: string;
	target: string;
	actionId: number;
	actionName: string;
	currentTime: number;
	totalTime: number;
}

@Injectable({ providedIn: 'root' })
export class XivPluginService {
	socket: WebSocket;
	port = 32805;

	connected = false;
	retries = 1;

	events = {
		castStart: new Subject<CastInfo>()
	};

	constructor() {
		this.connect();
	}

	connect() {
		if (this.socket) {
			this.socket.close();
		}

		try {
			this.socket = new WebSocket(`ws://127.0.0.1:${ this.port }/ws`);
			this.socket.addEventListener('open', this.onOpen.bind(this));
			this.socket.addEventListener('close', this.onClose.bind(this));
			this.socket.addEventListener('error', this.onError.bind(this));
			this.socket.addEventListener('message', this.onMessage.bind(this));
		}
		catch (e) {
			console.log(e);
		}
	}

	generateGuid() {
		return 'NU' + Math.random().toString(36).substr(2, 9);
	}

	setTarget(targetId: number, type: XivSocketCommand = 'setTarget') {
		if (!this.connected) {
			return;
		}

		this.socket.send(JSON.stringify({
			guid: this.generateGuid(),
			type: type,
			target: targetId,
			message: ''
		}));
	}

	setAcceptFocus(accept: boolean) {
		if (!this.connected) {
			return;
		}

		this.socket.send(JSON.stringify({
			guid: this.generateGuid(),
			type: 'setAcceptFocus',
			accept
		}));
	}

	onOpen() {
		console.log('XiVPlugin connected');
		this.retries = 1;
		this.connected = true;
	}

	onClose() {
		console.log('XiVPlugin disconnected');
		this.connected = false;
		this.reconnect();

	}

	onError() {
		console.log('XiVPlugin error');
		this.connected = false;
		this.reconnect();
	}

	reconnect() {
		if (this.retries >= 5) {
			return;
		}

		console.log('Cannot connect to XIV Plugin, retrying in 1s, attempt: ' + this.retries);
		this.retries++;
		setTimeout(() => {
			this.connect();
		}, 1000);
	}

	onMessage(event: any) {
		try {
			const data = JSON.parse(event.data);
			if (data.event) {
				const ev = (this.events as any)[data.event] as Subject<any>;
				if (ev) {
					ev.next(data);
				}
			}
			console.log('XiVPlugin', data);
		} catch (e) {
			console.log(e);
		}
	}
}