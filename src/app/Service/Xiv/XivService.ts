import { Injectable }      from '@angular/core';
import { Subject }         from 'rxjs';
import { ConfigService }   from 'src/app/Service/ConfigService';
import { LogParser }       from 'src/app/Service/LogParser/LogParser';
import { Util }            from 'src/app/Service/LogParser/Util';
import { CastInfo }        from 'src/app/Service/Xiv/Interface/CastInfo';
import { EventActorsList } from 'src/app/Service/Xiv/Interface/EventActorsList';

export type XivSocketCommand = 'setTarget' | 'setFocus' | 'setMouseOver' | 'setMouseOverEx' | 'clearMouseOverEx';

@Injectable({ providedIn: 'root' })
export class XivService {
	socket: WebSocket;
	port = 32805;

	connected = false;

	events = {
		castStart: new Subject<CastInfo>()
	};

	constructor(
		protected parser: LogParser,
		protected config: ConfigService
	) {}

	async initialize() {
		await this.connect();
		await this.progressiveUpgrade();
		this.subscribeTargets();

		this.config.acceptFocus.subscribe(value => {
			this.setAcceptFocus(value);
		});
	}

	connect(): Promise<boolean> {
		return new Promise<boolean>(resolve => {
			if (this.socket) {
				this.socket.close();
			}

			try {
				this.socket = new WebSocket(`ws://127.0.0.1:${ this.port }/ws`);
				this.socket.addEventListener('open', () => {
					this.onOpen();
					resolve(true);
				});

				this.socket.addEventListener('close', this.onClose.bind(this));
				this.socket.addEventListener('error', () => {
					resolve(false);
					this.onError();
				});
				this.socket.addEventListener('message', this.onMessage.bind(this));
			}
			catch (e) {
				console.log(e);
				resolve(false);
			}
		});
	}

	// TODO: Needed to disable certain events when they are hooked from NU Plugin
	async progressiveUpgrade() {
		// Remove ability use handler
		this.parser.removeHandler(0x14);
	}

	generateGuid() {
		return 'NU' + Math.random().toString(36).substr(2, 9);
	}

	subscribeTargets() {
		this.events.castStart.subscribe((e) => {
			const target = e.target as keyof Pick<LogParser, 'target' | 'focus' | 'player' | 'targetOfTarget'>;
			const actor = this.parser[target].value;
			if (!actor || e.totalTime < 0.1) {
				return;
			}

			const delay = (this.config.config.castDelay / 1000);
			actor.cast.start(e.actionId, e.actionName, e.totalTime - delay, delay);
		});
	}

	async loadCombatants() {
		const actors = await this.getActors();
		for (const actor of actors.actors) {
			this.parser.updateCombatant(
				actor.id,
				actor.name,
				actor.hp,
				actor.hpMax,
				actor.mana,
				actor.manaMax,
				actor.position.X,
				actor.position.Y,
				actor.position.Z,
				Util.jobEnumToJob(actor.jobId),
				actor.level
			);
		}
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

	doRequest(type: string, data: any = {}, timeout = 2000): Promise<any> {
		return new Promise<any>(resolve => {
			if (!this.connected) {
				resolve(null);
				return null;
			}

			const guid = this.generateGuid();
			const oneTime = (event: any) => {
				try {
					const response = JSON.parse(event.data);
					if (response.guid === guid) {
						resolve(response);
						this.socket.removeEventListener('message', oneTime);
					}
				}
				catch (e) {
					console.log(e);
					//resolve(null);
				}
			};

			this.socket.addEventListener('message', oneTime);
			const dataToSend = Object.assign({
				guid: guid,
				type: type
			}, data);
			this.socket.send(JSON.stringify(dataToSend));
		});
	}

	async getActors(): Promise<EventActorsList> {
		return await this.doRequest('getActors');
	}

	async getActor(id: number) {
		return await this.doRequest('getActor', { request: { requestFor: id } });
	}

	async getActorStatuses(id: number) {
		return await this.doRequest('getActorStatuses', { request: { requestFor: id } });
	}

	onOpen() {
		console.log('XiVPlugin connected');
		this.connected = true;
	}

	onClose() {
		console.log('XiVPlugin disconnected');
		this.connected = false;
	}

	onError() {
		console.log('XiVPlugin error');
		this.connected = false;
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
			// console.log('XiVPlugin', data);
		}
		catch (e) {
			console.log(e);
		}
	}
}