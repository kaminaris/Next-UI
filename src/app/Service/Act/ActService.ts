import { Injectable }                       from '@angular/core';
import { CombatantData }                    from 'src/app/Interface/Act/CombatantData';
import { AggroTarget, EnmityAggroList }     from 'src/app/Interface/EnmityAggroList';
import { ActorInterface, EnmityTargetData } from 'src/app/Interface/EnmityTargetData';
import { PartyMember }                      from 'src/app/Interface/PartyMember';
import { PlayerDetails }                    from 'src/app/Interface/PlayerDetails';
import { Combatant }                        from 'src/app/Model/Combatant';
import { ConfigService }                    from 'src/app/Service/ConfigService';
import { AbilityCancelHandler }             from 'src/app/Service/LogParser/Handlers/AbilityCancelHandler';
import { AbilityHitCloneHandler }           from 'src/app/Service/LogParser/Handlers/AbilityHitCloneHandler';
import { AbilityHitHandler }                from 'src/app/Service/LogParser/Handlers/AbilityHitHandler';
import { AbilityUseHandler }                from 'src/app/Service/LogParser/Handlers/AbilityUseHandler';
import { ActionSyncHandler }                from 'src/app/Service/LogParser/Handlers/ActionSyncHandler';
import { AddedCombatantHandler }            from 'src/app/Service/LogParser/Handlers/AddedCombatantHandler';
import { AuraGainedHandler }                from 'src/app/Service/LogParser/Handlers/AuraGainedHandler';
import { AuraLostHandler }                  from 'src/app/Service/LogParser/Handlers/AuraLostHandler';
import { ChatEventHandler }                 from 'src/app/Service/LogParser/Handlers/ChatEventHandler';
import { CombatantDefeatedHandler }         from 'src/app/Service/LogParser/Handlers/CombatantDefeatedHandler';
import { FloorMarkerHandler }               from 'src/app/Service/LogParser/Handlers/FloorMarkerHandler';
import { HandlerInterface }                 from 'src/app/Service/LogParser/Handlers/HandlerInterface';
import { HeadMarkerHandler }                from 'src/app/Service/LogParser/Handlers/HeadMarkerHandler';
import { HpUpdatedHandler }                 from 'src/app/Service/LogParser/Handlers/HpUpdatedHandler';
import { JobGaugeHandler }                  from 'src/app/Service/LogParser/Handlers/JobGaugeHandler';
import { LimitGaugeHandler }                from 'src/app/Service/LogParser/Handlers/LimitGaugeHandler';
import { NameplateToggleHandler }           from 'src/app/Service/LogParser/Handlers/NameplateToggleHandler';
import { NetworkStatusHandler }             from 'src/app/Service/LogParser/Handlers/NetworkStatusHandler';
import { OverTimeTickHandler }              from 'src/app/Service/LogParser/Handlers/OverTimeTickHandler';
import { PlayerChangedHandler }             from 'src/app/Service/LogParser/Handlers/PlayerChangedHandler';
import { PlayerStatsHandler }               from 'src/app/Service/LogParser/Handlers/PlayerStatsHandler';
import { RemovedCombatantHandler }          from 'src/app/Service/LogParser/Handlers/RemovedCombatantHandler';
import { SignHandler }                      from 'src/app/Service/LogParser/Handlers/SignHandler';
import { TetherHandler }                    from 'src/app/Service/LogParser/Handlers/TetherHandler';
import { ZoneChangedHandler }               from 'src/app/Service/LogParser/Handlers/ZoneChangedHandler';
import { LogParser }                        from 'src/app/Service/LogParser/LogParser';
import { Util }                             from 'src/app/Service/LogParser/Util';

@Injectable({ providedIn: 'root' })
export class ActService {
	wsUrl = /[\?&]OVERLAY_WS=([^&]+)/.exec(location.href);

	connected = false;

	ws: WebSocket = null;
	sendMessage: (data: any) => Promise<any>;
	eventsStarted = false;

	win = (window as any);

	handlers: HandlerInterface[] = [
		new ChatEventHandler(this), // 0x00
		new ZoneChangedHandler(this), // 0x01
		new PlayerChangedHandler(this), // 0x02
		new AddedCombatantHandler(this), // 0x03
		new RemovedCombatantHandler(this), // 0x04
		new PlayerStatsHandler(this), // 0x0C
		new AbilityUseHandler(this), // 0x14
		new AbilityHitHandler(this), // 0x15,
		new AbilityHitCloneHandler(this), // 0x16
		new AbilityCancelHandler(this), // 0x17
		new OverTimeTickHandler(this), // 0x18
		new CombatantDefeatedHandler(this), // 0x19
		new AuraGainedHandler(this), // 0x1A
		new HeadMarkerHandler(this), // 0x1B
		new FloorMarkerHandler(this), // 0x1C
		new SignHandler(this), // 0x1D
		new AuraLostHandler(this), // 0x1E
		new JobGaugeHandler(this), // 0x1F
		new NameplateToggleHandler(this), // 0x22
		new TetherHandler(this), // 0x23
		new LimitGaugeHandler(this), // 0x24
		new ActionSyncHandler(this), // 0x25
		new NetworkStatusHandler(this), // 0x26
		new HpUpdatedHandler(this) // 0x27
	];

	constructor(
		public parser: LogParser,
		protected config: ConfigService
	) {}

	async initialize() {
		document.addEventListener('onOverlayStateUpdate', this.overlayStateUpdate.bind(this));
		this.config.acceptFocus.subscribe((accept: boolean) => {
			try {
				this.win.OverlayPluginApi.setAcceptFocus(accept);
			} catch (e) {
			}
		});

		await this.connect();
		if (this.connected) {
			await this.sendMessage({
				call: 'subscribe',
				events: [
					'ChangePrimaryPlayer', 'LogLine', 'PartyChanged', 'EnmityTargetData', 'EnmityAggroList',
					'onPlayerChangedEvent'
				],
			});
		}

	}

	connect(): Promise<boolean> {
		return new Promise<boolean>(resolve => {
			if (this.wsUrl) {
				this.ws = new WebSocket(this.wsUrl[1]);

				this.ws.addEventListener('error', (e: Event) => {
					console.error(e);
				});

				this.ws.addEventListener('open', () => {
					console.log('ACT Connected!');
					this.connected = true;
					resolve(true);
				});

				this.ws.addEventListener('message', this.onMessage.bind(this));

				this.ws.addEventListener('close', () => {
					this.connected = false;
					resolve(false);
				});

				this.sendMessage = (obj: any): Promise<any> => {
					return new Promise<any>(resolve => {
						const response = (res: MessageEvent) => {
							resolve(res);
							this.ws.removeEventListener('message', response);
						};

						this.ws.addEventListener('message', response);
						this.ws.send(JSON.stringify(obj));
					});
				};
			}
			else {
				if (!this.win.OverlayPluginApi) {
					this.connected = false;
					console.log('ACT Is not present!');
					return;
				}

				this.connected = true;
				console.log('ACT Connected!');

				this.win.__OverlayCallback = this.onMessage.bind(this);

				this.sendMessage = (obj: any): Promise<any> => {
					return new Promise<any>(resolve2 => {
						this.win.OverlayPluginApi.callHandler(JSON.stringify(obj), (data: any) => {
							resolve2(JSON.parse(data));
						});
					});
				};
				resolve(true);
			}
		})
	}

	onMessage(msg: any) {
		try {
			if (msg.data && typeof msg.data === 'string') {
				msg = JSON.parse(msg.data);
			}
		}
		catch (e) {
			console.error('Invalid message received: ', msg);
			return;
		}

		switch (msg.type) {
			case 'ChangePrimaryPlayer':
				this.changePrimaryPlayer(msg);
				return;
			case 'LogLine':
				this.logLine(msg);
				return;
			case 'PartyChanged':
				this.partyChanged(msg);
				return;
			case 'EnmityTargetData':
				this.enmityTargetData(msg);
				return;
			case 'EnmityAggroList':
				this.enmityAggroList(msg);
				return;
			case 'onPlayerChangedEvent':
				this.playerChangedEvent(msg);
				return;
		}
		// this.win.addOverlayListener('ChangePrimaryPlayer', this.changePrimaryPlayer.bind(this));
		// this.win.addOverlayListener('LogLine', this.logLine.bind(this));
		// this.win.addOverlayListener('PartyChanged', this.partyChanged.bind(this));
		// this.win.addOverlayListener('EnmityTargetData', this.enmityTargetData.bind(this));
		// this.win.addOverlayListener('EnmityAggroList', this.enmityAggroList.bind(this));
		// this.win.addOverlayListener('onPlayerChangedEvent', this.playerChangedEvent.bind(this));
	}

	overlayStateUpdate(e: any) {
		if (!(e as any).detail.isLocked) {
			document.documentElement.classList.add('resizeHandle');
		}
		else {
			document.documentElement.classList.remove('resizeHandle');
		}
	}

	logLine(e: { line: string[] }) {
		const eventId = +e.line[0];
		for (const handler of this.handlers) {
			if (handler.eventId === eventId) {
				handler.handle(e.line);
				return;
			}
		}
	}

	changePrimaryPlayer(e: { charName: string, charID: number }) {
		// this.charName = e.charName;
		this.parser.registerPlayer(e.charName, e.charID);
	}

	partyChanged(e: { party: PartyMember[] }) {
		const party = e.party.slice(0, 8);
		const members = this.parser.party.value;
		let hasChange = false;
		const newMembers = [];

		// handle remove party members
		for (const member of members) {
			if (party.find(pm => parseInt(pm.id, 16) === member.id)) {
				// still a member, don't touch
				newMembers.push(member);
				continue;
			}

			// not a member anymore
			// member.inParty.next(false);
			hasChange = true;
		}

		// handle new party members
		for (const partyMember of party) {
			const newMemberId = parseInt(partyMember.id, 16);
			if (members.find(m => m.id === newMemberId)) {
				// already in party, dont touch
				continue;
			}

			// new member
			const combatants = this.parser.combatants.value;
			let combatant = this.parser.findCombatant(newMemberId);

			if (!combatant) {
				const combatant = this.parser.createAndAddCombatant(newMemberId, partyMember.name);
				combatant.job.next(Util.jobEnumToJob(partyMember.job));
			}

			// combatant.inParty.next(true);
			newMembers.push(combatant);

			hasChange = true;
		}

		if (hasChange) {
			this.parser.setParty(newMembers);
		}
	}

	playerChangedEvent(e: { type: string, detail: PlayerDetails }) {
		const details = e.detail;
		if (!this.parser.player.value) {
			this.parser.registerPlayer(details.name, details.id);
			return;
		}

		const player = this.parser.player.value;
		const c = this.parser.updateCombatant(
			details.id,
			details.name,
			details.currentHP,
			details.maxHP,
			player.isGatherer || player.isCrafter ? null : details.currentMP,
			player.isGatherer || player.isCrafter ? null : details.maxMP,
			details.job,
			details.level,
			null,
			'player-changed'
		);
		this.parser.updateCombatantPosition(c, details.pos.x, details.pos.y, details.pos.z);
	}

	enmityAggroList(e: EnmityAggroList) {
		// Most common occurrence, ignore
		if (e.AggroList.length === 0 && this.parser.aggroList.value.length === 0) {
			return;
		}

		let combatants = [];
		// check if whole list needs change
		if (e.AggroList.length !== this.parser.aggroList.value.length) {

			// this doesn't work
			for (const a of e.AggroList) {
				const c = this.combatantFromEnmityActor(a);
				combatants.push(c);
			}

			this.parser.setAggroList(combatants);
			return;
		}

		// special treatment if just their data changed?
	}

	enmityTargetData(e: EnmityTargetData) {
		const newFocus = e.Focus ? this.combatantFromEnmityActor(e.Focus) : null;
		this.parser.setTarget('focus', newFocus);

		const newTarget = e.Target ? this.combatantFromEnmityActor(e.Target) : null;
		this.parser.setTarget('target', newTarget);

		if (newTarget) {
			const newTargetOfTarget = e.TargetOfTarget ? this.combatantFromEnmityActor(e.TargetOfTarget) : null;
			this.parser.setTarget('targetOfTarget', newTargetOfTarget);
		}
	}

	combatantFromEnmityActor(actor: ActorInterface | AggroTarget) {
		let hp = actor.CurrentHP;
		let hpMax = actor.MaxHP;
		let isNpc = false;
		if (!Combatant.isPlayerId(actor.ID)) {
			hp = 1;
			hpMax = 1;
			isNpc = true;
		}

		const job = (actor as ActorInterface).Job ? Util.jobEnumToJob((actor as ActorInterface).Job) : null;

		let combatant = this.parser.findCombatant(actor.ID, actor.Name);

		if (!combatant) {
			combatant = this.parser.updateCombatant(
				actor.ID,
				actor.Name,
				hp,
				hpMax,
				null,
				null,
				job,
				null,
				isNpc
			);
			this.parser.updateCombatantPosition(
				combatant,
				(actor as ActorInterface).PosX ?? null,
				(actor as ActorInterface).PosZ ?? null,
				(actor as ActorInterface).PosY ?? null,
			)
		}

		return combatant;
	}

	async loadCombatants() {
		const actors = await this.sendMessage({
			call: 'getCombatants'
		});

		for (const actor of actors.combatants as CombatantData[]) {
			const c = this.parser.updateCombatant(
				actor.ID,
				actor.Name,
				actor.CurrentHP,
				actor.MaxHP,
				actor.CurrentMP,
				actor.MaxMP,
				Util.jobEnumToJob(actor.Job),
				actor.Level
			);
			this.parser.updateCombatantPosition(c, actor.PosX, actor.PosY, actor.PosZ);
		}
	}
}