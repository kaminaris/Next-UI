import { Injectable }             from '@angular/core';
import { Subject }                from 'rxjs';
import { Combatant }              from 'src/app/Model/Combatant';
import { ConfigService }          from 'src/app/Service/ConfigService';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { Util }                   from 'src/app/Service/LogParser/Util';
import { ActionEffect1 }          from './Interface/ActionEffect';
import { AppliedStatus }          from './Interface/AppliedStatus';
import { CrossWorldPartyMember }  from './Interface/CrossWorldPartyMember';
import { UpdatePositionInstance } from './Interface/UpdatePositionInstance';
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
		crossWorldPartyChanged: new Subject<{ currentParty: CrossWorldPartyMember[] }>(),
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
		this.events.crossWorldPartyChanged.subscribe(this.crossWorldPartyChanged.bind(this));
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

	actionEffect1(ev: NetworkEvent<ActionEffect1>) {
		// console.log(ev)
	}

	statusEffectList(ev: NetworkEvent<StatusEffectList>) {
		const c = this.parser.findCombatant(ev.data.targetActorId, ev.data.targetActorName);
		if (!c) {
			return;
		}

		const timestamp = new Date();
		// TODO: NOT SURE ABOUT THIS
		// c.clearStatuses();
		for (const effect of ev.data.effects) {
			if (!effect.effectId) {
				continue;
			}

			c.updateStatus(effect.effectId, null, 1, effect.sourceActorId, effect.duration, timestamp);
		}
	}

	updatePosition(ev: NetworkEvent<UpdatePosition>) {
		this.parser.updateCombatantPosition(
			this.parser.player.value,
			ev.data.position.x,
			ev.data.position.y,
			ev.data.position.z
		);
	}

	updatePositionInstance(ev: NetworkEvent<UpdatePositionInstance>) {
		this.parser.updateCombatantPosition(
			this.parser.player.value,
			ev.data.position.x,
			ev.data.position.y,
			ev.data.position.z
		);
	}

	actorMove(ev: NetworkEvent<ActorMove>) {
		// const c = this.parser.findCombatant(ev.data.targetActorId, ev.data.targetActorName);
		this.parser.updateCombatantPosition(
			ev.data.targetActorId,
			ev.data.position.x,
			ev.data.position.y,
			ev.data.position.z
		);
	}

	async enmityListChanged(data: Actor[]) {
		const newEnemies: Combatant[] = [];
		for (const enemy of data) {
			let e = this.updateCombatantFromActor(enemy);
			newEnemies.push(e);
		}

		await this.parser.setAggroList(newEnemies);
	}

	regularParty: Combatant[] = [];
	xworldParty: Combatant[] = [];

	async partyChanged(ev: { currentParty: PartyMember[], partyLeader: number }) {
		const newParty: Combatant[] = [];
		for (const pm of ev.currentParty) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}
		this.regularParty = newParty;

		const party = this.mergeCrossWorldParty(this.regularParty, this.xworldParty);
		await this.setParty(party, ev.partyLeader);
	}

	async crossWorldPartyChanged(ev: { currentParty: CrossWorldPartyMember[] }) {
		const newParty: Combatant[] = [];
		for (const pm of ev.currentParty) {
			let nc = this.updateCombatantFromCrossWorldPartyMember(pm);
			newParty.push(nc);
		}
		this.xworldParty = newParty;

		const party = this.mergeCrossWorldParty(this.regularParty, this.xworldParty);
		await this.setParty(party);
	}

	mergeCrossWorldParty(regularParty: Combatant[], xworldParty: Combatant[]) {
		const p = [...regularParty];
		for (const pm of p) {
			pm.crossWorldMember = false;
		}

		for (const pm of xworldParty) {
			if (p.indexOf(pm) < 0) {
				p.push(pm);
				pm.crossWorldMember = true;
			}
		}

		return p;
	}

	async setXWorldParty(newParty: Combatant[]) {
		const oldParty = this.parser.party.value;
		const regularMembers = oldParty.filter(c => !c.crossWorldMember && newParty.indexOf(c) < 0);
		this.parser.setParty([...newParty, ...regularMembers]);
	}

	async setParty(newParty: Combatant[], partyLeader?: number) {
		if (newParty.length === 1 && newParty[0].isPlayer) {
			newParty = [];
		}

		this.parser.setParty(newParty);

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

			c.updateStatus(
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
		const c = this.parser.findCombatant(data.targetActorId);
		if (!c) {
			return;
		}

		c.hp.next(data.currentHp);
	}

	updateHpMpTp(ev: NetworkEvent<UpdateHpMpTp>) {
		const data = ev.data;
		const c = this.parser.findCombatant(data.targetActorId);
		if (!c) {
			return;
		}

		c.hp.next(data.currentHp);
		c.mana.next(data.currentMp);
	}

	npcSpawn(ev: NetworkEvent<NpcSpawn>) {
		const npc = ev.data;
		if (!npc.targetId || !npc.name) {
			return;
		}

		const c = this.parser.updateCombatant(
			npc.targetActorId,
			this.toPascalCase(npc.name),
			npc.hp,
			npc.hpMax,
			10000,
			10000,
			null,
			npc.level,
			true,
			'npc-spawn'
		);
		c.nameId = npc.bNPCName;
		this.parser.updateCombatantPosition(c, npc.position.x, npc.position.y, npc.position.z);
	}

	playerSpawn(ev: NetworkEvent<PlayerSpawn>) {
		//TODO: do we need it even?
		return;
		const player = ev.data;
		const c = this.parser.updateCombatant(
			player.targetActorId,
			player.name,
			player.hp,
			player.hpMax,
			player.mana,
			player.manaMax,
			null,
			player.level,
			false,
			'player-spawn'
		);
		this.parser.updateCombatantPosition(c, player.position.x, player.position.y, player.position.z);
	}

	objectDespawn(ev: NetworkEvent<ObjectDespawn>) {
		if (ev.data.actorId) {
			this.parser.removeCombatant(ev.data.actorId);
		}
	}

	zoneChanged(zone: number) {
		console.log('Zone changed: ' + zone);
		this.parser.changeZone(zone);
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

				c.updateStatus(statusId, null, 1, appliedBy, duration, new Date());
				break;
			}
			case ActorControlCategory.LoseEffect: {
				const statusId = ctrl.param1;
				let appliedBy = ctrl.param3;
				if (appliedBy === 0 || appliedBy === Combatant.ENV_ID) {
					appliedBy = ctrl.targetActorId;
				}

				c.removeStatus(statusId, null, appliedBy);
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
		this.parser.chatMessage(type, data.sender, data.message);
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
			c.updateStatus(status.id, status.name, status.stack, status.sourceId, status.remains, new Date());
		}

		await this.watchActor(player.id);

		const party = await this.getParty();
		const newParty: Combatant[] = [];
		for (const pm of party.currentParty) {
			let nc = this.updateCombatantFromPartyMember(pm);
			newParty.push(nc);
		}
		this.regularParty = newParty;

		const xwParty = await this.getCrossWorldParty();
		const newxWParty: Combatant[] = [];
		for (const cwpm of xwParty.currentParty) {
			let nc = this.updateCombatantFromCrossWorldPartyMember(cwpm);
			newxWParty.push(nc);
		}
		this.xworldParty = newxWParty;

		const partyMerged = this.mergeCrossWorldParty(this.regularParty, this.xworldParty);
		await this.setParty(partyMerged, party.partyLeader);
	}

	async subscribeEvents() {
		const response = await this.doRequest('subscribeTo', {
			events: [
				'chatMessage', 'actorCast', 'actorMove', 'actorControl',
				'targetChanged', 'targetOfTargetChanged', 'focusChanged',
				'playerSpawn', 'npcSpawn', 'effectResult', 'effectResultBasic', 'updatePosition',
				'actorControlSelf', 'actorControlTarget', 'actorSetPos', 'updateHpMpTp',
				'partyChanged', 'updatePositionInstance', 'enmityListChanged', 'uiVisibilityChanged',
				'statusEffectList', 'crossWorldPartyChanged'
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

	generateGuid() {
		return 'NU' + Math.random().toString(36).substr(2, 9);
	}

	async getPlayer(): Promise<Actor> {
		return await this.doRequest('getPlayer');
	}

	async getParty(): Promise<{ currentParty: PartyMember[], partyLeader: number }> {
		return await this.doRequest('getParty');
	}

	async getCrossWorldParty(): Promise<{ currentParty: CrossWorldPartyMember[] }> {
		return await this.doRequest('getCrossWorldParty');
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
		const c = this.parser.updateCombatant(
			a.id,
			a.name,
			a.hp,
			a.hpMax,
			a.mana,
			a.manaMax,
			Util.jobEnumToJob(a.jobId),
			a.level,
			null,
			'xiv-actor-changed'
		);
		c.nameId = a.nameId;
		if (a.contentId) {
			c.contentId = a.contentId;
		}

		this.parser.updateCombatantPosition(c, a.position.x, a.position.y, a.position.z);
		return c;
	}

	updateCombatantFromCrossWorldPartyMember(cwpm: CrossWorldPartyMember) {
		return this.parser.updateCombatantProvisional(
			cwpm.contentId,
			cwpm.name,
			cwpm.jobId,
			cwpm.level
		);
	}

	updateCombatantFromPartyMember(pm: PartyMember) {
		// Data is severely incomplete, gotta fix that
		if (pm.provisional) {
			return this.parser.updateCombatantProvisional(pm.contentId, pm.name);
		}

		const c = this.parser.updateCombatant(
			pm.id,
			pm.name,
			pm.hp,
			pm.hpMax,
			pm.mana,
			pm.manaMax,
			Util.jobEnumToJob(pm.jobId),
			pm.level,
			null,
			'xiv-party-member-changed',
			pm.contentId
		);

		this.parser.updateCombatantPosition(c, pm.position.x, pm.position.y, pm.position.z);
		return c;
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

	async resetEnmity(id: number) {
		await this.doRequest('resetEnmity', { id });
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