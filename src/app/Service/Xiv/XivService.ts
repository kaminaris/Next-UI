import { Injectable }             from '@angular/core';
import { Subject }                from 'rxjs';
import { Combatant }              from 'src/app/Model/Combatant';
import { ConfigService }          from 'src/app/Service/ConfigService';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { Util }                   from 'src/app/Service/LogParser/Util';
import { ActionEffect1 }          from 'src/app/Service/Xiv/Interface/ActionEffect';
import { AppliedStatus }          from 'src/app/Service/Xiv/Interface/AppliedStatus';
import { UpdatePositionInstance } from 'src/app/Service/Xiv/Interface/UpdatePositionInstance';
import { Actor }                  from './Interface/Actor';
import { ActorCast }              from './Interface/ActorCast';
import { ActorChangedEvent }      from './Interface/ActorChangedEvent';
import { ActorMove }              from './Interface/ActorMove';
import { ActorSetPos }            from './Interface/ActorSetPos';
import { ChatMessageEvent }       from './Interface/ChatMessageEvent';
import { EffectResult }           from './Interface/EffectResult';
import { EffectResultBasic }      from './Interface/EffectResultBasic';
import { NetworkEvent }           from './Interface/NetworkEvent';
import { NpcSpawn }               from './Interface/NpcSpawn';
import { ObjectDespawn }          from './Interface/ObjectDespawn';
import { PartyMember }            from './Interface/PartyMember';
import { PlayerSpawn }            from './Interface/PlayerSpawn';
import { TargetChangedEvent }     from './Interface/TargetChangedEvent';
import { UpdateHpMpTp }           from './Interface/UpdateHpMpTp';
import { UpdatePosition }         from './Interface/UpdatePosition';

import { ActorControl, ActorControlCategory, ActorControlSelf, ActorControlTarget } from './Interface/ActorControl';
import { StatusEffectList, StatusEffectList2, StatusEffectList3 }                   from './Interface/StatusEffectList';

export type XivSocketCommand = 'setTarget' | 'setFocus' | 'setMouseOver' | 'setMouseOverEx' | 'clearMouseOverEx';

@Injectable({ providedIn: 'root' })
export class XivService {
	socket: WebSocket;
	port = 32805;

	connected = false;

	events = {
		playerLogin: new Subject<Actor>(),
		playerLogout: new Subject<any>(),

		chatMessage: new Subject<ChatMessageEvent>(),
		actorChanged: new Subject<ActorChangedEvent>(),

		targetChanged: new Subject<TargetChangedEvent>(),
		targetOfTargetChanged: new Subject<TargetChangedEvent>(),
		focusChanged: new Subject<TargetChangedEvent>(),

		uiVisibilityChanged: new Subject<boolean>(),

		actorCast: new Subject<NetworkEvent<ActorCast>>(),
		actorMove: new Subject<NetworkEvent<ActorMove>>(),
		actorSetPos: new Subject<NetworkEvent<ActorSetPos>>(),
		actorControl: new Subject<NetworkEvent<ActorControl>>(),
		actorControlSelf: new Subject<NetworkEvent<ActorControlSelf>>(),
		actorControlTarget: new Subject<NetworkEvent<ActorControlTarget>>(),
		objectDespawn: new Subject<NetworkEvent<ObjectDespawn>>(),
		playerSpawn: new Subject<NetworkEvent<PlayerSpawn>>(),
		npcSpawn: new Subject<NetworkEvent<NpcSpawn>>(),
		updateHpMpTp: new Subject<NetworkEvent<UpdateHpMpTp>>(),
		effectResult: new Subject<NetworkEvent<EffectResult>>(),
		effectResultBasic: new Subject<NetworkEvent<EffectResultBasic>>(),
		updatePosition: new Subject<NetworkEvent<UpdatePosition>>(),
		updatePositionInstance: new Subject<NetworkEvent<UpdatePositionInstance>>(),

		actionEffect1: new Subject<NetworkEvent<ActionEffect1>>(),
		statusEffectList: new Subject<NetworkEvent<StatusEffectList>>(),
		statusEffectList2: new Subject<NetworkEvent<StatusEffectList2>>(),
		statusEffectList3: new Subject<NetworkEvent<StatusEffectList3>>(),

		zoneChanged: new Subject<number>(),
		partyChanged: new Subject<{ currentParty: PartyMember[], partyLeader: number }>(),
		enmityListChanged: new Subject<Actor[]>()
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
		this.events.targetOfTargetChanged.subscribe(this.targetChanged.bind(this));
		this.events.focusChanged.subscribe(this.targetChanged.bind(this));

		this.events.chatMessage.subscribe(this.chatMessage.bind(this));
		this.events.actorCast.subscribe(this.actorCast.bind(this));
		this.events.uiVisibilityChanged.subscribe(this.uiVisibilityChanged.bind(this));

		this.events.actorControl.subscribe(this.actorControl.bind(this));
		this.events.actorControlSelf.subscribe(this.actorControlSelf.bind(this));
		this.events.actorControlTarget.subscribe(this.actorControlTarget.bind(this));

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

	uiVisibilityChanged(visible: boolean) {
		this.config.uiVisible = visible;
	}

	actionEffect1() {

	}

	statusEffectList(ev: NetworkEvent<StatusEffectList>) {
		const c = this.parser.findCombatant(ev.data.targetActorId, ev.data.targetActorName);
		if (!c) {
			return;
		}

		for (const effect of ev.data.effects) {
			if (!effect.effectId) {
				continue;
			}

			c.updateAura(effect.effectId, null, 1, effect.sourceActorId, effect.duration);
		}
	}

	updatePosition(ev: NetworkEvent<UpdatePosition>) {
		const p = this.parser.player.value;
		if (p) {
			p.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	updatePositionInstance(ev: NetworkEvent<UpdatePositionInstance>) {
		const p = this.parser.player.value;
		if (p) {
			p.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	actorMove(ev: NetworkEvent<ActorMove>) {
		const c = this.parser.findCombatant(ev.data.targetActorId, ev.data.targetActorName);
		if (c) {
			c.updatePosition(
				ev.data.position.x,
				ev.data.position.y,
				ev.data.position.z
			);
		}
	}

	async enmityListChanged(data: Actor[]) {
		const newEnemies: Combatant[] = [];
		for (const enemy of data) {
			let e = this.updateCombatantFromActor(enemy);
			newEnemies.push(e);
		}

		await this.parser.setAggroList(newEnemies);
	}

	async partyChanged(ev: { currentParty: PartyMember[], partyLeader: number }) {
		const newParty: Combatant[] = [];
		for (const pm of ev.currentParty) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}

		await this.setParty(newParty, ev.partyLeader);
	}

	/**
	 * TODO: OPTIMIZE THIS
	 * TODO: OPTIMIZE THIS
	 * TODO: OPTIMIZE THIS
	 * TODO: OPTIMIZE THIS
	 * TODO: OPTIMIZE THIS
	 */
	async setParty(newParty: Combatant[], partyLeader?: number) {
		const oldParty = this.parser.party.value;
		if (oldParty != null) {
			const oldPartyIds: number[] = [];
			for (const oldP of oldParty) {
				if (oldP.inParty.value) {
					oldP.inParty.next(false);
					oldPartyIds.push(oldP.id);
				}
			}

			if (oldPartyIds.length > 0) {
				await this.unwatchActors(oldPartyIds);
			}
		}

		this.parser.setParty(newParty);
		for (const p of newParty) {
			p.inParty.next(true);
		}

		const newPartyIds = newParty.map(npm => npm.id);
		if (newPartyIds.length > 0) {
			await this.watchActors(newPartyIds);
		}

		if (newParty.length === 0) {
			this.parser.partyLeader.next(null);
		}
		else if (partyLeader >= 0 && newParty[partyLeader]) {
			this.parser.partyLeader.next(newParty[partyLeader]);
		}
	}

	effectResult(ev: NetworkEvent<EffectResult>) {
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

		const timestamp = new Date();
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
				status.duration,
				timestamp
			);
		}
	}

	effectResultBasic(ev: NetworkEvent<EffectResultBasic>) {
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

	updateHpMpTp(ev: NetworkEvent<UpdateHpMpTp>) {
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

	npcSpawn(ev: NetworkEvent<NpcSpawn>) {
		const npc = ev.data;
		if (!npc.targetId || !npc.name) {
			return;
		}

		this.parser.updateCombatant(
			npc.targetActorId,
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

	playerSpawn(ev: NetworkEvent<PlayerSpawn>) {
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
			false,
			'player-spawn'
		);
	}

	objectDespawn(ev: NetworkEvent<ObjectDespawn>) {
		if (ev.data.actorId) {
			this.parser.removeCombatant(ev.data.actorId);
		}
	}

	zoneChanged(zone: number) {
		console.log('Zone changed: ' + zone);

		const combatants = this.parser.combatants.value;
		this.parser.combatants.next(combatants.filter(c => c.isPlayer || c.inParty.value));

		for (const c of this.parser.combatants.value) {
			c.clearPermaAuras();
		}
	}

	async actorCast(ev: NetworkEvent<ActorCast>) {
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

	async actorControlSelf(ev: NetworkEvent<ActorControlSelf>) {
		const ctrl = ev.data;
		const c = this.parser.player.value;

		await this.actorControlGeneric(c, ctrl);
	}

	async actorControlTarget(ev: NetworkEvent<ActorControlTarget>) {
		const ctrl = ev.data;
		// For now we dont support other stuff than STS
		if (ctrl.category !== ActorControlCategory.SetTargetSign) {
			return;
		}
		const c = this.parser.target.value;

		await this.actorControlGeneric(c, ctrl);
	}

	async actorControl(ev: NetworkEvent<ActorControl>) {
		const ctrl = ev.data;
		const c = this.parser.findCombatant(ctrl.targetActorId, ctrl.targetActorName);

		await this.actorControlGeneric(c, ctrl);
	}

	async actorControlGeneric(c: Combatant, ctrl: ActorControl | ActorControlTarget | ActorControlTarget) {
		if (!c) {
			return;
		}

		switch (ctrl.category) {
			case ActorControlCategory.CancelAbility:
				c.cast.cancel();
				break;
			case ActorControlCategory.Death:
				if (c.isNPC) {
					this.parser.removeCombatant(c);
				}
				break;
			case ActorControlCategory.KeyItem:
				//TODO: its not good one
				// console.log('KEY ITEM', ctrl);
				c.cast.start(ctrl.param1, null, 3);
				break;
			case ActorControlCategory.UpdateEffect:
			case ActorControlCategory.GainEffect: {
				const statusId = ctrl.param1;
				const duration = ctrl.param2;
				let appliedBy = ctrl.param3;
				// Hidden statuses
				if (appliedBy === 1) {
					return;
				}
				if (appliedBy === 0 || appliedBy === Combatant.ENV_ID) {
					appliedBy = ctrl.targetActorId;
				}

				c.updateAura(statusId, null, 1, appliedBy, duration);
				break;
			}
			case ActorControlCategory.LoseEffect: {
				const statusId = ctrl.param1;
				let appliedBy = ctrl.param3;
				if (appliedBy === 0 || appliedBy === Combatant.ENV_ID) {
					appliedBy = ctrl.targetActorId;
				}

				c.removeAura(statusId, null, appliedBy);
				break;
			}
			case ActorControlCategory.LimitBreak:
				// TODO
				break;
			case ActorControlCategory.SetTargetSign:
				const newSign = c.sign.value === ctrl.param1 ? null : ctrl.param1;
				if (newSign !== null) {
					const oldC = this.parser.combatants.value.find(c => c.sign.value === newSign);
					if (oldC) {
						oldC.sign.next(null);
					}
				}
				c.sign.next(c.sign.value === ctrl.param1 ? null : ctrl.param1);
				break;
			case ActorControlCategory.TargetIcon:
				// Head marker (log line 34)
				// TODO: which ones is marker id?
				this.parser.eventDispatcher.headMarker.next({
					headMarkerId: ctrl.param1,
					targetId: c.id,
					targetName: c.name
				});
				break;
			case ActorControlCategory.OverTime:
			case ActorControlCategory.Tether:
			case ActorControlCategory.DirectorUpdate:
				// No action
				break;
			default:
			//console.log('UNRECOGNIZED AC', ctrl);
		}
	}

	chatMessage(data: ChatMessageEvent) {
		const type = 'say';
		this.parser.eventDispatcher.chat.next({ type, speaker: data.sender, message: data.message });

		if (data.sender) {
			this.parser.tts.say(type, data.sender, data.message);
		}
	}

	async actorChanged(data: ActorChangedEvent) {
		if (data.removed) {
			const player = this.parser.player.value;
			if (!player || player.id !== data.actorId) {
				this.parser.removeCombatant(data.actorId);
			}
			return;
		}

		if (!data.actor) {
			return;
		}

		this.updateCombatantFromActor(data.actor);
	}

	async targetChanged(data: TargetChangedEvent) {
		let c: Combatant;
		if (data.actor) {
			c = this.updateCombatantFromActor(data.actor);
		}

		if (!data.actorId) {
			this.parser.setTarget(data.unit as any, null);
			return;
		}

		if (!c) {
			// this is NPC
			c = this.parser.updateCombatant(
				data.actorId,
				data.actorName
			);
		}

		this.parser.setTarget(data.unit as any, c, data.actorName);
	}

	/**
	 * Fetch necessary data after player login
	 */
	async playerLogin(player: Actor) {
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
		for (const pm of party.currentParty) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}

		await this.setParty(newParty, party.partyLeader);
	}

	async subscribeEvents() {
		const response = await this.doRequest('subscribeTo', {
			events: [
				'chatMessage', 'actorCast', 'actorMove', 'actorControl',
				'targetChanged', 'targetOfTargetChanged', 'focusChanged',
				'playerSpawn', 'npcSpawn', 'effectResult', 'effectResultBasic', 'updatePosition',
				'actorControlSelf', 'actorControlTarget', 'actorSetPos', 'updateHpMpTp',
				'partyChanged', 'updatePositionInstance', 'enmityListChanged', 'uiVisibilityChanged'
			]
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

	async getParty(): Promise<{ currentParty: PartyMember[], partyLeader: number }> {
		return await this.doRequest('getParty');
	}

	async watchActor(id: number) {
		await this.doRequest('watchActor', { id });
	}

	async watchActors(ids: number[]) {
		for (const id of ids) {
			await this.watchActor(id);
		}
	}

	async unwatchActor(id: number) {
		await this.doRequest('unwatchActor', { id });
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

	async examine(id: number) {
		await this.doRequest('examine', { id });
	}

	async sendTell(id: number) {
		await this.doRequest('sendTell', { id });
	}

	/**
	 * Trade is only possible with target
	 */
	async trade() {
		await this.doRequest('tradeRequest');
	}

	async promote(id: number) {
		await this.doRequest('promotePartyMember', { id });
	}

	async kick(id: number) {
		await this.doRequest('kickFromParty', { id });
	}

	/**
	 * Can only invite target
	 */
	async invite() {
		await this.doRequest('inviteToParty');
	}

	async follow() {
		await this.doRequest('followTarget');
	}

	async meldRequest() {
		await this.doRequest('meldRequest');
	}

	async disbandParty() {
		await this.doRequest('disbandParty');
	}

	async showEmoteWindow() {
		await this.doRequest('showEmoteWindow');
	}

	async showSignsWindow() {
		await this.doRequest('showSignsWindow');
	}

	async leaveParty() {
		await this.doRequest('leaveParty');
	}

	/**
	 * Zero to clear target/focus/mouseOver
	 */
	async setTarget(id: number) {
		await this.doRequest('setTarget', { id });
	}

	async setFocus(id: number) {
		await this.doRequest('setFocus', { id });
	}

	async setMouseOver(id: number) {
		await this.doRequest('setMouseOverEx', { id });
	}

	async clearMouseOver() {
		await this.doRequest('clearMouseOverEx');
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
					if (typeof response.data?.success === 'boolean' && !response.data?.success) {
						console.log('REQUEST FAILED');
						console.log(data);
						console.log(response);
					}
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
			let dataToSend = {
				guid: guid,
				type: type
			};
			if (data) {
				dataToSend = Object.assign(dataToSend, { request: data });
			}

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
		return await this.doRequest('getActor', { id });
	}

	async getActorStatuses(id: number): Promise<AppliedStatus[]> {
		return await this.doRequest('getActorStatuses', { id });
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
			const response = JSON.parse(event.data);
			if (response.event) {
				const ev = (this.events as any)[response.event] as Subject<any>;
				if (ev) {
					ev.next(response.data);
				}
			}
		}
		catch (e) {
			console.log(e);
		}
	}
}