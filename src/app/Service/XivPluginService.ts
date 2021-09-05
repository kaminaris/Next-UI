import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class XivPluginService {
	socket: WebSocket;
	port = 32805;

	connected = false;

	constructor() {
		this.connect();
	}

	connect() {
		if (this.socket) {
			this.socket.close();
		}

		this.socket = new WebSocket(`ws://127.0.0.1:${ this.port }/ws`);
		this.socket.addEventListener('open', this.onOpen.bind(this));
		this.socket.addEventListener('close', this.onClose.bind(this));
		this.socket.addEventListener('error', this.onClose.bind(this));
		this.socket.addEventListener('message', this.onMessage.bind(this));
	}

	setTarget(targetId: number) {
		if (!this.connected) {
			return;
		}

		this.socket.send(JSON.stringify({
			guid: 'aaa',
			type: 'setTarget',
			target: targetId,
			message: ''
		}));
	}

	onOpen() {
		console.log('XiVPlugin connected');
		this.connected = true;
	}

	onClose() {
		console.log('XiVPlugin disconnected');
		this.connected = false;
	}

	onMessage(event: any) {
		console.log('XiVPlugin disconnected', event);
	}
}