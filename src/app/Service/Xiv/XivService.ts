import { Injectable }      from '@angular/core';
import { Subject }         from 'rxjs';
import { Combatant }       from 'src/app/Model/Combatant';
import { ConfigService }   from 'src/app/Service/ConfigService';
import { LogParser }       from 'src/app/Service/LogParser/LogParser';
import { Util }            from 'src/app/Service/LogParser/Util';
import { Actor }           from 'src/app/Service/Xiv/Interface/Actor';
import { CastInfo }        from 'src/app/Service/Xiv/Interface/CastInfo';
import { EventActorsList } from 'src/app/Service/Xiv/Interface/EventActorsList';
import { XivChatType }     from 'src/app/Service/Xiv/Interface/XivChatType';

export type XivSocketCommand = 'setTarget' | 'setFocus' | 'setMouseOver' | 'setMouseOverEx' | 'clearMouseOverEx';

@Injectable({ providedIn: 'root' })
export class XivService {
	socket: WebSocket;
	port = 32805;

	connected = false;

	events = {
		castStart: new Subject<CastInfo>(),
		playerLogin: new Subject<{ player: Actor }>(),
		playerLogout: new Subject<any>(),
		chatMessage: new Subject<{ typeId: XivChatType, senderId: number, sender: string, message: string }>(),
		actorChanged: new Subject<{ actorId: number, removed: boolean, actor: Actor }>(),
		targetChanged: new Subject<{ actorId: number, actorName: string, actor: Actor, targetType: string }>()
	};

	constructor(
		protected parser: LogParser,
		protected config: ConfigService
	) {}

	async initialize() {
		const connected = await this.connect();
		if (!connected) {
			return false;
		}
		await this.progressiveUpgrade();
		this.subscribeTargets();

		this.config.acceptFocus.subscribe(value => {
			this.setAcceptFocus(value);
		});

		this.events.playerLogin.subscribe(this.playerLogin.bind(this));
		this.events.actorChanged.subscribe(this.actorChanged.bind(this));
		this.events.targetChanged.subscribe(this.targetChanged.bind(this));
		this.events.chatMessage.subscribe(this.chatMessage.bind(this));
		await this.subscribeEvents();
		return connected;
	}

	async chatMessage(data: { typeId: XivChatType, senderId: number, sender: string, message: string }) {
		const type = 'say';
		this.parser.eventDispatcher.chat.next({ type, speaker: data.sender, message: data.message });

		// so far we don't need that
		if (data.sender) {
			this.parser.tts.say(type, data.sender, data.message);
		}
	}

	async actorChanged(data: { actorId: number, removed: boolean, actor: Actor }) {
		if (data.removed) {
			const combatants = this.parser.combatants.value;
			const idx = combatants.findIndex(c => c.id === data.actorId);
			if (idx >= 0) {
				combatants.splice(idx, 1);
				this.parser.combatants.next(combatants);
			}
			return;
		}
	}

	async targetChanged(data: { actorId: number, actorName: string, actor: Actor, targetType: string }) {
		let c: Combatant;
		if (data.actor) {
			c = this.updateCombatantFromActor(data.actor);
		}

		if (data.targetType === 'hover') {
			// For now, no support for hover
			return;
		}

		if (!data.actorId) {
			this.parser.setTarget(data.targetType as any, null);
			return;
		}

		if (!c) {
			// this is NPC
			c = this.parser.updateCombatant(
				data.actorId,
				data.actorName
			);
		}

		this.parser.setTarget(data.targetType as any, c, data.actorName);
	}

	async playerLogin(data: { player: Actor }) {
		let player: Actor = data.player;
		if (!player) {
			// We did not get player from event, can happen
			await new Promise(resolve => setTimeout(resolve, 400));
			player = await this.getPlayer();
		}

		if (!player) {
			console.log('player not found');
			return;
		}

		this.updateCombatantFromActor(player);
		this.parser.registerPlayer(player.name, player.id);

		await this.watchActor(player.id);
	}

	async subscribeEvents() {
		const response = await this.doRequest('subscribeEvents', {
			request: {
				events: [
					'chatMessage'
				]
			}
		});
		console.log('Events subscribed', response);
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
		this.parser.removeHandler(0x00);
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

	async getPlayer(): Promise<Actor> {
		const response = await this.doRequest('getPlayer');
		return response.player;
	}

	async watchActor(id: number): Promise<Actor> {
		const response = await this.doRequest('watchActor', { request: { requestFor: id } });
		return response.player;
	}

	updateCombatantFromActor(a: Actor) {
		return this.parser.updateCombatant(
			a.id,
			a.name,
			a.hp,
			a.hpMax,
			a.mana,
			a.manaMax,
			a.position.X,
			a.position.Y,
			a.position.Z,
			Util.jobEnumToJob(a.jobId),
			a.level,
			null,
			'xiv-actor-changed'
		);
	}

	async loadCombatants() {
		const actors = await this.getActors();
		for (const actor of actors.actors) {
			this.updateCombatantFromActor(actor);
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
			console.log('XiVPlugin', data);
		}
		catch (e) {
			console.log(e);
		}
	}
}