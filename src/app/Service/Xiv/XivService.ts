import { Injectable }             from '@angular/core';
import { Subject }                from 'rxjs';
import { Combatant }              from 'src/app/Model/Combatant';
import { ConfigService }          from 'src/app/Service/ConfigService';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { Util }                   from 'src/app/Service/LogParser/Util';
import { ActionEffect1 }          from 'src/app/Service/Xiv/Interface/ActionEffect';
import { AppliedStatus }          from 'src/app/Service/Xiv/Interface/AppliedStatus';
import { UpdatePositionInstance } from 'src/app/Service/Xiv/Interface/UpdatePositionInstance';
import { EffectResultBasic }      from './Interface/EffectResultBasic';
import { UpdatePosition }         from './Interface/UpdatePosition';
import { EffectResult }           from './Interface/EffectResult';
import { NpcSpawn }               from './Interface/NpcSpawn';
import { UpdateHpMpTp }           from './Interface/UpdateHpMpTp';
import { PlayerSpawn }            from './Interface/PlayerSpawn';
import { ActorChangedEvent }      from './Interface/ActorChangedEvent';
import { ChatMessageEvent }       from './Interface/ChatMessageEvent';
import { NetworkEvent }           from './Interface/NetworkEvent';
import { TargetChangedEvent }     from './Interface/TargetChangedEvent';
import { ActorSetPos }            from './Interface/ActorSetPos';
import { PartyMember }            from './Interface/PartyMember';
import { Actor }                  from './Interface/Actor';
import { ActorCast }              from './Interface/ActorCast';
import { ActorMove }              from './Interface/ActorMove';
import { ObjectDespawn }          from './Interface/ObjectDespawn';

import { StatusEffectList, StatusEffectList2, StatusEffectList3 } from './Interface/StatusEffectList';

import { ActorControl, ActorControlCategory, ActorControlSelf, ActorControlTarget } from './Interface/ActorControl';

export type XivSocketCommand = 'setTarget' | 'setFocus' | 'setMouseOver' | 'setMouseOverEx' | 'clearMouseOverEx';

@Injectable({ providedIn: 'root' })
export class XivService {
	socket: WebSocket;
	port = 32805;

	connected = false;

	events = {
		playerLogin: new Subject<{ player: Actor }>(),
		playerLogout: new Subject<any>(),

		chatMessage: new Subject<{ data: ChatMessageEvent }>(),
		actorChanged: new Subject<{ data: ActorChangedEvent }>(),
		targetChanged: new Subject<{ data: TargetChangedEvent }>(),
		actorCast: new Subject<NetworkEvent & { data: ActorCast }>(),
		actorMove: new Subject<NetworkEvent & { data: ActorMove }>(),
		actorSetPos: new Subject<NetworkEvent & { data: ActorSetPos }>(),
		actorControl: new Subject<NetworkEvent & { data: ActorControl }>(),
		actorControlSelf: new Subject<NetworkEvent & { data: ActorControlSelf }>(),
		actorControlTarget: new Subject<NetworkEvent & { data: ActorControlTarget }>(),
		objectDespawn: new Subject<NetworkEvent & { data: ObjectDespawn }>(),
		playerSpawn: new Subject<NetworkEvent & { data: PlayerSpawn }>(),
		npcSpawn: new Subject<NetworkEvent & { data: NpcSpawn }>(),
		updateHpMpTp: new Subject<NetworkEvent & { data: UpdateHpMpTp }>(),
		effectResult: new Subject<NetworkEvent & { data: EffectResult }>(),
		effectResultBasic: new Subject<NetworkEvent & { data: EffectResultBasic }>(),
		updatePosition: new Subject<NetworkEvent & { data: UpdatePosition }>(),
		updatePositionInstance: new Subject<NetworkEvent & { data: UpdatePositionInstance }>(),

		actionEffect1: new Subject<NetworkEvent & { data: ActionEffect1 }>(),
		statusEffectList: new Subject<NetworkEvent & { data: StatusEffectList }>(),
		statusEffectList2: new Subject<NetworkEvent & { data: StatusEffectList2 }>(),
		statusEffectList3: new Subject<NetworkEvent & { data: StatusEffectList3 }>(),

		zoneChanged: new Subject<{ zone: number }>(),
		partyChanged: new Subject<{ data: PartyMember[] }>(),
		enmityListChanged: new Subject<{ data: Actor[] }>()
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

		this.config.acceptFocus.subscribe(value => {
			this.setAcceptFocus(value);
		});

		this.events.playerLogin.subscribe(this.playerLogin.bind(this));
		this.events.actorChanged.subscribe(this.actorChanged.bind(this));
		this.events.targetChanged.subscribe(this.targetChanged.bind(this));
		this.events.chatMessage.subscribe(this.chatMessage.bind(this));
		this.events.actorCast.subscribe(this.actorCast.bind(this));
		this.events.actorControl.subscribe(this.actorControl.bind(this));
		this.events.zoneChanged.subscribe(this.zoneChanged.bind(this));
		this.events.objectDespawn.subscribe(this.objectDespawn.bind(this));
		this.events.playerSpawn.subscribe(this.playerSpawn.bind(this));
		this.events.npcSpawn.subscribe(this.npcSpawn.bind(this));
		this.events.updateHpMpTp.subscribe(this.updateHpMpTp.bind(this));
		this.events.effectResult.subscribe(this.effectResult.bind(this));
		this.events.effectResultBasic.subscribe(this.effectResultBasic.bind(this));
		this.events.partyChanged.subscribe(this.partyChanged.bind(this));
		this.events.enmityListChanged.subscribe(this.enmityListChanged.bind(this));
		this.events.actorMove.subscribe(this.actorMove.bind(this));
		this.events.updatePosition.subscribe(this.updatePosition.bind(this));
		this.events.updatePositionInstance.subscribe(this.updatePositionInstance.bind(this));

		this.events.actionEffect1.subscribe(this.actionEffect1.bind(this));
		this.events.statusEffectList.subscribe(this.statusEffectList.bind(this));
		await this.subscribeEvents();
		return connected;
	}

	toPascalCase(str: string) {
		return str
			.split(' ')
			.map(word => word[0].toUpperCase().concat(word.slice(1)))
			.join(' ');
	}

	actionEffect1() {

	}

	statusEffectList(ev: { data: StatusEffectList }) {
		console.log('STATUS EF LIST', ev.data);
	}

	updatePosition(ev: { data: UpdatePosition }) {
		const p = this.parser.player.value;
		if (p) {
			p.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	updatePositionInstance(ev: { data: UpdatePositionInstance }) {
		const p = this.parser.player.value;
		if (p) {
			p.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	actorMove(ev: { data: ActorMove }) {
		const c = this.parser.findCombatant(ev.data.targetActorId, ev.data.targetActorName);
		if (c) {
			c.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	async enmityListChanged(ev: { data: Actor[] }) {
		console.log('ENMITY CHANGED', ev.data);
		const newEnemies: Combatant[] = [];
		for (const enemy of ev.data) {
			let e = this.updateCombatantFromActor(enemy);
			newEnemies.push(e);
		}

		await this.parser.setAggroList(newEnemies);
	}

	async partyChanged(ev: { data: PartyMember[] }) {
		console.log('PARTY CHANGED', ev.data);
		const newParty: Combatant[] = [];
		for (const pm of ev.data) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}

		await this.setParty(newParty);
	}

	async setParty(newParty: Combatant[]) {
		const partyIds = this.parser.party.value.map(c => c.id);
		if (partyIds.length > 0) {
			await this.unwatchActors(partyIds);
		}

		this.parser.setParty(newParty);
		const newPartyIds = newParty.map(npm => npm.id);
		if (newPartyIds.length > 0) {
			await this.watchActors(newPartyIds);
		}
	}

	effectResult(ev: { data: EffectResult }) {
		const data = ev.data;
		const c = this.parser.updateCombatant(
			data.targetActorId,
			data.targetActorName,
			data.currentHp,
			data.maxHp,
			data.currentMp,
			null
		);

		const effectCount = data.effectCount > 4 ? 4 : data.effectCount;
		if (effectCount == 0) {
			return;
		}

		for (let i = 0; i < effectCount; i++) {
			const status = data.statusEntries[i];
			if (!status.id) {
				continue;
			}

			c.updateAura(
				status.id,
				null,
				1,
				status.sourceActorId,
				status.duration
			);
		}
	}

	effectResultBasic(ev: { data: EffectResultBasic }) {
		const data = ev.data;
		this.parser.updateCombatant(
			data.targetActorId,
			null,
			data.currentHp,
			null,
			null,
			null
		);
	}

	updateHpMpTp(ev: { data: UpdateHpMpTp }) {
		const data = ev.data;
		this.parser.updateCombatant(
			data.targetActorId,
			null,
			data.currentHp,
			null,
			data.currentMp,
			null
		);
	}

	npcSpawn(ev: { data: NpcSpawn }) {
		const npc = ev.data;
		if (!npc.targetId || !npc.name) {
			return;
		}
		this.parser.updateCombatant(
			npc.spawnerId,
			this.toPascalCase(npc.name),
			npc.hp,
			npc.hpMax,
			10000,
			10000,
			npc.position.x,
			npc.position.y,
			npc.position.z,
			null,
			npc.level,
			true,
			'npc-spawn'
		);
	}

	playerSpawn(ev: { data: PlayerSpawn }) {
		const player = ev.data;
		this.parser.updateCombatant(
			player.targetId,
			player.name,
			player.hp,
			player.hpMax,
			player.mana,
			player.manaMax,
			player.position.x,
			player.position.y,
			player.position.z,
			null,
			player.level,
			true,
			'player-spawn'
		);
	}

	objectDespawn(ev: { data: ObjectDespawn }) {
		if (ev.data.actorId) {
			this.parser.removeCombatant(ev.data.actorId);
		}
	}

	zoneChanged(data: { zone: number }) {
		console.log('Zone changed: ' + data.zone);

		const combatants = this.parser.combatants.value;
		this.parser.combatants.next(combatants.filter(c => c.isPlayer || c.inParty.value));

		for (const c of this.parser.combatants.value) {
			c.clearPermaAuras();
		}
	}

	async actorCast(ev: NetworkEvent & { data: ActorCast }) {
		const cast = ev.data;
		const c = this.parser.findCombatant(cast.targetActorId, cast.targetActorName);
		if (!c) {
			return;
		}

		const delay = (this.config.config.castDelay / 1000);
		c.cast.start(
			cast.actionId,
			null,
			cast.castTime - delay,
			delay
		);
	}

	async actorControl(ev: { data: ActorControl }) {
		const ctrl = ev.data;
		const c = this.parser.findCombatant(ctrl.targetActorId, ctrl.targetActorName);
		if (!c) {
			return;
		}

		switch (ctrl.category) {
			case ActorControlCategory.CancelAbility:
				c.cast.cancel();
				break;
			case ActorControlCategory.Death:
				this.parser.removeCombatant(c);
				break;
			case ActorControlCategory.KeyItem:
				console.log('KEY ITEM', ctrl);
				c.cast.start(ctrl.param1, null, 3);
				break;
			case ActorControlCategory.UpdateEffect:
			case ActorControlCategory.GainEffect: {
				const statusId = ctrl.param1;
				const duration = ctrl.param2;
				const appliedBy = ctrl.param3;
				c.updateAura(statusId, null, 1, appliedBy, duration);
				break;
			}
			case ActorControlCategory.LoseEffect: {
				const statusId = ctrl.param1;
				const appliedBy = ctrl.param3;
				c.removeAura(statusId, null, appliedBy);
				break;
			}
			case ActorControlCategory.LimitBreak:
				// TODO
				break;
			case ActorControlCategory.SetTargetSign:
				// TODO
				break;
			case ActorControlCategory.OverTime:
			case ActorControlCategory.Tether:
			case ActorControlCategory.DirectorUpdate:
				// No action
				break;
			default:
				console.log('UNRECOGNIZED AC', ctrl);
		}

	}

	chatMessage(ev: { data: ChatMessageEvent }) {
		const type = 'say';
		this.parser.eventDispatcher.chat.next({ type, speaker: ev.data.sender, message: ev.data.message });

		if (ev.data.sender) {
			this.parser.tts.say(type, ev.data.sender, ev.data.message);
		}
	}

	async actorChanged(ev: { data: ActorChangedEvent }) {
		if (ev.data.removed) {
			this.parser.removeCombatant(ev.data.actorId);
			return;
		}

		if (!ev.data.actor) {
			return;
		}

		this.updateCombatantFromActor(ev.data.actor);
	}

	async targetChanged(ev: { data: TargetChangedEvent }) {
		const data = ev.data;

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

	/**
	 * Fetch necessary data after player login
	 */
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

		const c = this.updateCombatantFromActor(player);
		this.parser.registerPlayer(player.name, player.id);

		const statuses = await this.getActorStatuses(player.id);
		for (const status of statuses) {
			c.updateAura(status.id, status.name, status.stack, status.sourceId, status.remains);
		}

		await this.watchActor(player.id);

		const party = await this.getParty();
		const newParty: Combatant[] = [];
		for (const pm of party) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}

		await this.setParty(newParty);
	}

	async subscribeEvents() {
		const response = await this.doRequest('subscribeTo', {
			request: {
				events: [
					'chatMessage', 'actorCast', 'actorMove', 'actorControl', 'targetChanged',
					'playerSpawn', 'npcSpawn', 'effectResult', 'effectResultBasic', 'updatePosition',
					'actorControlSelf', 'actorControlTarget', 'actorSetPos', 'updateHpMpTp',
					'partyChanged', 'updatePositionInstance', 'enmityListChanged'
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
		this.parser.removeHandler(0x00);
		this.parser.removeHandler(0x01);
		this.parser.removeHandler(0x02);
		this.parser.removeHandler(0x03);
		this.parser.removeHandler(0x04);
		this.parser.removeHandler(0x14);
		this.parser.removeHandler(0x15);
		this.parser.removeHandler(0x16);
		this.parser.removeHandler(0x17);
		this.parser.removeHandler(0x19);
		this.parser.removeHandler(0x1A);
		this.parser.removeHandler(0x1E);
		this.parser.removeHandler(0x25);
		this.parser.removeHandler(0x26);
		this.parser.removeHandler(0x27);
	}

	generateGuid() {
		return 'NU' + Math.random().toString(36).substr(2, 9);
	}

	async getPlayer(): Promise<Actor> {
		return await this.doRequest('getPlayer');
	}

	async getParty(): Promise<PartyMember[]> {
		return await this.doRequest('getParty');
	}

	async watchActor(id: number) {
		await this.doRequest('watchActor', { request: { requestFor: id } });
	}

	async watchActors(ids: number[]) {
		for (const id of ids) {
			await this.watchActor(id);
		}
	}

	async unwatchActor(id: number) {
		await this.doRequest('unwatchActor', { request: { requestFor: id } });
	}

	async unwatchActors(ids: number[]) {
		for (const id of ids) {
			await this.watchActor(id);
		}
	}

	updateCombatantFromActor(a: Actor) {
		return this.parser.updateCombatant(
			a.id,
			a.name,
			a.hp,
			a.hpMax,
			a.mana,
			a.manaMax,
			a.position.x,
			a.position.y,
			a.position.z,
			Util.jobEnumToJob(a.jobId),
			a.level,
			null,
			'xiv-actor-changed'
		);
	}

	updateCombatantFromPartyMember(pm: PartyMember) {
		return this.parser.updateCombatant(
			pm.id,
			pm.name,
			pm.hp,
			pm.hpMax,
			pm.mana,
			pm.manaMax,
			pm.position.x,
			pm.position.y,
			pm.position.z,
			Util.jobEnumToJob(pm.jobId),
			pm.level,
			null,
			'xiv-party-member-changed'
		);
	}

	async loadCombatants() {
		const actors = await this.getActors();
		for (const actor of actors) {
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

			let tim: number;
			const guid = this.generateGuid();
			const oneTime = (event: any) => {
				try {
					const response = JSON.parse(event.data);
					if (response.guid === guid) {
						clearTimeout(tim);
						resolve(response.data);
						this.socket.removeEventListener('message', oneTime);
					}
				}
				catch (e) {
					console.log(e);
				}
			};

			this.socket.addEventListener('message', oneTime);
			const dataToSend = Object.assign({
				guid: guid,
				type: type
			}, data);
			this.socket.send(JSON.stringify(dataToSend));
			tim = setTimeout(() => {
				resolve(null);
				this.socket.removeEventListener('message', oneTime);
			}, timeout);
		});
	}

	async getActors(): Promise<Actor[]> {
		return await this.doRequest('getActors');
	}

	async getActor(id: number) {
		return await this.doRequest('getActor', { request: { requestFor: id } });
	}

	async getActorStatuses(id: number): Promise<AppliedStatus[]> {
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
			//console.log('XiVPlugin', data);
		}
		catch (e) {
			console.log(e);
		}
	}
}