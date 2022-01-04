import { StatusDefinition } from 'src/app/Interface/StatusDefinition';

export const statuses: StatusDefinition[] = [
	{
		id: 1,
		name: 'Petrification',
		iconId: 15001,
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 3,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 4,
		name: 'Daze',
		iconId: 15003,
		description: 'Scattered senses are preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 5,
		name: 'Amnesia',
		iconId: 15015,
		description: 'Unable to use abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 6,
		name: 'Pacification',
		iconId: 15017,
		description: 'Unable to use weaponskills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 7,
		name: 'Silence',
		iconId: 15005,
		description: 'A stifling magic is preventing casts.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 8,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 9,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 10,
		name: 'Slow',
		iconId: 15545,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 11,
		name: 'Confused',
		iconId: 15603,
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 12,
		name: 'Levitation',
		iconId: 15037,
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 13,
		name: 'Bind',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 14,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 15,
		name: 'Blind',
		iconId: 15012,
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 17,
		name: 'Paralysis',
		iconId: 15006,
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 18,
		name: 'Poison',
		iconId: 15007,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 19,
		name: 'Pollen',
		iconId: 15517,
		description: 'Deadly pollen has filled the lungs, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 20,
		name: 'TP Bleed',
		iconId: 15025,
		description: 'Bleeding TP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 21,
		name: 'HP Boost',
		iconId: 15075,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 22,
		name: 'HP Penalty',
		iconId: 15076,
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 23,
		name: 'MP Boost',
		iconId: 15077,
		description: 'Maximum MP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 24,
		name: 'MP Penalty',
		iconId: 15078,
		description: 'Maximum MP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 25,
		name: 'Attack Up',
		iconId: 15050,
		description: 'Attack power is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 26,
		name: 'Attack Down',
		iconId: 15051,
		description: 'Attack power is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 27,
		name: 'Accuracy Up',
		iconId: 15060,
		description: 'Accuracy is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 28,
		name: 'Accuracy Down',
		iconId: 15061,
		description: 'Accuracy is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 29,
		name: 'Defense Up',
		iconId: 15052,
		description: 'Defense is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 30,
		name: 'Defense Down',
		iconId: 15053,
		description: 'Defense is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 31,
		name: 'Evasion Up',
		iconId: 15062,
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 32,
		name: 'Evasion Down',
		iconId: 15063,
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 33,
		name: 'Attack Magic Potency Up',
		iconId: 15054,
		description: 'Attack magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 34,
		name: 'Attack Magic Potency Down',
		iconId: 15055,
		description: 'Attack magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 35,
		name: 'Healing Potency Up',
		iconId: 15058,
		description: 'Healing magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 36,
		name: 'Healing Potency Down',
		iconId: 15059,
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 37,
		name: 'Magic Defense Up',
		iconId: 15056,
		description: 'Magic defense is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 38,
		name: 'Magic Defense Down',
		iconId: 15057,
		description: 'Magic defense is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 39,
		name: 'Stun Resistance',
		iconId: 15566,
		description: 'Immune to stun effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 40,
		name: 'Silence Resistance',
		iconId: 15567,
		description: 'Immune to silence effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 41,
		name: 'Crafting Facility',
		iconId: 16107,
		description: 'Maximum CP is increased for crafters level 80 or below.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 42,
		name: 'The Echo',
		iconId: 16207,
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 43,
		name: 'Weakness',
		iconId: 15010,
		description: 'Strength, dexterity, intelligence, and mind are reduced by 25%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 44,
		name: 'Brink of Death',
		iconId: 15011,
		description: 'Strength, dexterity, intelligence, and mind are reduced by 50%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 45,
		name: 'Crafter\'s Grace',
		iconId: 16106,
		description: 'Increased experience point gains as a Disciple of the Hand.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 46,
		name: 'Gatherer\'s Grace',
		iconId: 16006,
		description: 'Increased experience point gains as a Disciple of the Land.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 47,
		name: 'Sneak',
		iconId: 16015,
		description: 'You tread carefully, making nary a sound. Enemies up to 4 levels higher than you are oblivious to your presence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 48,
		name: 'Well Fed',
		iconId: 16202,
		description: 'Enjoying the benefits of a full belly.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 49,
		name: 'Medicated',
		iconId: 16203,
		description: 'Performance is being enhanced by a medicinal item.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 50,
		name: 'Sprint',
		iconId: 10101,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 51,
		name: 'Strength Down',
		iconId: 15080,
		description: 'Strength is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 52,
		name: 'Vitality Down',
		iconId: 15082,
		description: 'Vitality is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 53,
		name: 'Physical Damage Up',
		iconId: 15050,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 54,
		name: 'Physical Damage Down',
		iconId: 15051,
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 55,
		name: 'Physical Vulnerability Down',
		iconId: 15052,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 56,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 57,
		name: 'Magic Damage Up',
		iconId: 15054,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 58,
		name: 'Magic Damage Down',
		iconId: 15055,
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 59,
		name: 'Magic Vulnerability Down',
		iconId: 15056,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 60,
		name: 'Magic Vulnerability Up',
		iconId: 15057,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 61,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 62,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 63,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 64,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 65,
		name: 'Critical Skill',
		iconId: 15016,
		description: 'All weaponskills are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 66,
		name: 'Terror',
		iconId: 15516,
		description: 'Frozen with fear and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 67,
		name: 'Leaden',
		iconId: 15518,
		description: 'Movement speed is reduced, and cannot be restored by normal means.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 68,
		name: 'Drainstrikes',
		iconId: 15504,
		description: 'Auto-attacks are generating an Absorb HP effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 69,
		name: 'Aspirstrikes',
		iconId: 15505,
		description: 'Auto-attacks are generating an Absorb MP effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 70,
		name: 'Stunstrikes',
		iconId: 15506,
		description: 'Auto-attacks may stun target.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 71,
		name: 'Rampart',
		iconId: 10152,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 72,
		name: 'Convalescence',
		iconId: 10157,
		description: 'HP recovery via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 73,
		name: 'Awareness',
		iconId: 13916,
		description: 'Cannot suffer critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 74,
		name: 'Sentinel',
		iconId: 10151,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 75,
		name: 'Tempered Will',
		iconId: 10153,
		description: 'Immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 76,
		name: 'Fight or Flight',
		iconId: 10155,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 77,
		name: 'Bulwark',
		iconId: 10156,
		description: 'Block rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 78,
		name: 'Sword Oath',
		iconId: 12505,
		description: 'Auto-attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 79,
		name: 'Iron Will',
		iconId: 12506,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 80,
		name: 'Cover',
		iconId: 12501,
		description: 'Protecting a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 81,
		name: 'Covered',
		iconId: 12502,
		description: 'Under the protection of a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 82,
		name: 'Hallowed Ground',
		iconId: 12504,
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 83,
		name: 'Foresight',
		iconId: 10252,
		description: 'Defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 84,
		name: 'Bloodbath',
		iconId: 13913,
		description: 'Physical attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 85,
		name: 'Maim',
		iconId: 10262,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 86,
		name: 'Berserk',
		iconId: 17217,
		description: 'All weaponskill attacks are both critical and direct hits.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 87,
		name: 'Thrill of Battle',
		iconId: 10254,
		description: 'Maximum HP is increased.Enhanced Thrill of Battle Effect: HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 88,
		name: 'Holmgang',
		iconId: 10255,
		description: 'Unable to move until effect fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 89,
		name: 'Vengeance',
		iconId: 10256,
		description: 'Inflicting a portion of sustained damage back to its source.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 90,
		name: 'Storm\'s Eye',
		iconId: 10263,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 91,
		name: 'Defiance',
		iconId: 12551,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 92,
		name: 'Unchained',
		iconId: 12552,
		description: 'Damage penalty inflicted by Defiance is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 93,
		name: 'Wrath',
		iconId: 10257,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 94,
		name: 'Wrath II',
		iconId: 10258,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 95,
		name: 'Wrath III',
		iconId: 10259,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 96,
		name: 'Wrath IV',
		iconId: 10260,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 97,
		name: 'Infuriated',
		iconId: 10261,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 98,
		name: 'Dragon Kick',
		iconId: 10215,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 99,
		name: 'Featherfoot',
		iconId: 10201,
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 100,
		name: 'Internal Release',
		iconId: 10204,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 101,
		name: 'Twin Snakes',
		iconId: 10216,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 102,
		name: 'Mantra',
		iconId: 10206,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 103,
		name: 'Fists of Fire',
		iconId: 10202,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 104,
		name: 'Fists of Earth',
		iconId: 10203,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 105,
		name: 'Fists of Wind',
		iconId: 12526,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 106,
		name: 'Touch of Death',
		iconId: 10211,
		description: 'Organs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 107,
		name: 'Opo-opo Form',
		iconId: 10212,
		description: 'Employing the opo-opo fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 108,
		name: 'Raptor Form',
		iconId: 10213,
		description: 'Employing the raptor fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 109,
		name: 'Coeurl Form',
		iconId: 10214,
		description: 'Employing the coeurl fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 110,
		name: 'Perfect Balance',
		iconId: 17564,
		description: 'Employing all three pugilistic fighting stances─opo-opo, raptor, and coeurl.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 111,
		name: 'Greased Lightning',
		iconId: 10207,
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 112,
		name: 'Greased Lightning II',
		iconId: 10208,
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 113,
		name: 'Greased Lightning III',
		iconId: 10209,
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 114,
		name: 'Keen Flurry',
		iconId: 10301,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 115,
		name: 'Heavy Thrust',
		iconId: 10306,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 116,
		name: 'Life Surge',
		iconId: 10302,
		description: 'Next weaponskill will result in a critical hit with a portion of the resulting damage being absorbed as HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 117,
		name: 'Blood for Blood',
		iconId: 10304,
		description: 'Damage dealt and damage taken are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 118,
		name: 'Chaos Thrust',
		iconId: 10307,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 119,
		name: 'Phlebotomize',
		iconId: 10305,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 120,
		name: 'Power Surge',
		iconId: 10303,
		description: 'Damage is increased for next Jump or Spineshatter Dive.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 121,
		name: 'Disembowel',
		iconId: 12576,
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 122,
		name: 'Straight Shot Ready',
		iconId: 10365,
		description: 'Able to execute Straight Shot.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 123,
		name: 'Hawk\'s Eye',
		iconId: 10351,
		description: 'Dexterity is increased and all attacks are guaranteed to land.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 124,
		name: 'Venomous Bite',
		iconId: 10352,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 125,
		name: 'Raging Strikes',
		iconId: 10354,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 126,
		name: 'Physical Vulnerability Up',
		iconId: 18001,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 127,
		name: 'Diversion',
		iconId: 13914,
		description: 'Enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 128,
		name: 'Barrage',
		iconId: 10356,
		description: 'Striking multiple times per weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 129,
		name: 'Windbite',
		iconId: 10360,
		description: 'Wounds are exposed to the elements, causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 130,
		name: 'Straight Shot',
		iconId: 10361,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 131,
		name: 'Downpour of Death',
		iconId: 12607,
		description: 'Next Rain of Death will not require any TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 132,
		name: 'Quicker Nock',
		iconId: 10362,
		description: 'Next Quick Nock will not require any TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 133,
		name: 'Swiftsong',
		iconId: 10358,
		description: 'Movement speed of self and nearby party members is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 134,
		name: 'Swiftsong',
		iconId: 10357,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 135,
		name: 'Mage\'s Ballad',
		iconId: 12603,
		description: 'Using MP to gradually restore the MP of nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 136,
		name: 'Mage\'s Ballad',
		iconId: 12602,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 137,
		name: 'Army\'s Paeon',
		iconId: 12605,
		description: 'Using MP to gradually refresh the TP of self and nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 138,
		name: 'Army\'s Paeon',
		iconId: 12604,
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 139,
		name: 'Foe Requiem',
		iconId: 12606,
		description: 'Using MP to increase the damage taken by nearby enemies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 140,
		name: 'Foe Requiem',
		iconId: 12608,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 141,
		name: 'Battle Voice',
		iconId: 12601,
		description: 'Direct hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 142,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 143,
		name: 'Aero',
		iconId: 10403,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 144,
		name: 'Aero II',
		iconId: 10409,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 145,
		name: 'Cleric Stance',
		iconId: 10402,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 146,
		name: 'Protect',
		iconId: 10405,
		description: 'Both physical and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 147,
		name: 'Protect',
		iconId: 10405,
		description: 'Both physical and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 148,
		name: 'Raise',
		iconId: 10406,
		description: 'Teetering on the brink of consciousness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 149,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 150,
		name: 'Medica II',
		iconId: 10413,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 151,
		name: 'Stoneskin',
		iconId: 10401,
		description: 'Lithified flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 152,
		name: 'Stoneskin (Physical)',
		iconId: 15041,
		description: 'Lithified flesh is absorbing physical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 153,
		name: 'Stoneskin (Magical)',
		iconId: 15042,
		description: 'Lithified flesh is absorbing magic damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 154,
		name: 'Shroud of Saints',
		iconId: 10408,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 155,
		name: 'Freecure',
		iconId: 10410,
		description: 'Next Cure II will not require any MP to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 156,
		name: 'Overcure',
		iconId: 10411,
		description: 'Next Cure III will cost half MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 157,
		name: 'Presence of Mind',
		iconId: 12627,
		description: 'Spell cast times, recast times, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 158,
		name: 'Regen',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 159,
		name: 'Divine Seal',
		iconId: 10407,
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 160,
		name: 'Surecast',
		iconId: 10452,
		description: 'Spells cannot be interrupted by taking damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 161,
		name: 'Thunder',
		iconId: 10457,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 162,
		name: 'Thunder II',
		iconId: 10458,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 163,
		name: 'Thunder III',
		iconId: 10459,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 164,
		name: 'Thundercloud',
		iconId: 10461,
		description: 'Next Thunder spell will add its full damage over time amount to its initial damage, require no time to cast, and cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 165,
		name: 'Firestarter',
		iconId: 10460,
		description: 'Next Fire III will require no time to cast and cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 166,
		name: 'Succor',
		iconId: 12804,
		description: 'Next Succor will cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 167,
		name: 'Swiftcast',
		iconId: 10454,
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 168,
		name: 'Manaward',
		iconId: 10456,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 169,
		name: 'Manawall',
		iconId: 12651,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 170,
		name: 'Apocatastasis',
		iconId: 10451,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 171,
		name: 'Ekpyrosis',
		iconId: 12652,
		description: 'Unable to receive Apocatastasis.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 172,
		name: 'Infirmity',
		iconId: 15531,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 173,
		name: 'Astral Fire',
		iconId: 10463,
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 174,
		name: 'Astral Fire II',
		iconId: 10464,
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 175,
		name: 'Astral Fire III',
		iconId: 10465,
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage, and casting times are halved. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 176,
		name: 'Umbral Ice',
		iconId: 10466,
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 177,
		name: 'Umbral Ice II',
		iconId: 10467,
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 178,
		name: 'Umbral Ice III',
		iconId: 10468,
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage, and their casting times are halved. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 179,
		name: 'Bio',
		iconId: 10504,
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 180,
		name: 'Miasma',
		iconId: 10506,
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 181,
		name: 'Disease',
		iconId: 15014,
		description: 'Movement speed and HP recovered via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 182,
		name: 'Virus',
		iconId: 10510,
		description: 'Motor skills are hampered, causing reduced strength and dexterity.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 183,
		name: 'Fever',
		iconId: 10511,
		description: 'Head is burning, causing reduced mind and intelligence.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 184,
		name: 'Sustain',
		iconId: 10508,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 185,
		name: 'Eye for an Eye',
		iconId: 13918,
		description: 'Chance that next hit suffered will lower the attacker\'s damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 186,
		name: 'Eye for an Eye',
		iconId: 13919,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 187,
		name: 'Rouse',
		iconId: 10509,
		description: 'Damage and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 188,
		name: 'Miasma II',
		iconId: 10507,
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 189,
		name: 'Bio II',
		iconId: 10505,
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 190,
		name: 'Shadow Flare',
		iconId: 10514,
		description: 'Burning shadows dance across the ground, dealing unaspected damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 191,
		name: 'Malady',
		iconId: 15531,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 192,
		name: 'Spur',
		iconId: 12679,
		description: 'Attack power and attack magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 193,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 194,
		name: 'Shield Wall',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 195,
		name: 'Stronghold',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 196,
		name: 'Last Bastion',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 197,
		name: 'Blaze Spikes',
		iconId: 15508,
		description: 'Elemental spikes are dealing fire damage to attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 198,
		name: 'Ice Spikes',
		iconId: 15501,
		description: 'Elemental spikes are dealing ice damage to and sometimes slowing down attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 199,
		name: 'Shock Spikes',
		iconId: 15502,
		description: 'Elemental spikes are dealing lightning damage to and sometimes stunning attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 200,
		name: 'Physical Vulnerability Up',
		iconId: 18001,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 201,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 202,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 203,
		name: 'Boost',
		iconId: 15507,
		description: 'Attack power on next special technique is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 204,
		name: 'Enfire',
		iconId: 15509,
		description: 'Fire damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 205,
		name: 'Enblizzard',
		iconId: 15510,
		description: 'Ice damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 206,
		name: 'Enaero',
		iconId: 15511,
		description: 'Wind damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 207,
		name: 'Enstone',
		iconId: 15512,
		description: 'Earth damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 208,
		name: 'Enthunder',
		iconId: 15513,
		description: 'Lightning damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 209,
		name: 'Enwater',
		iconId: 15514,
		description: 'Water damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 210,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 211,
		name: 'Sharpened Knife',
		iconId: 15515,
		description: 'Next Lateral Slash is changed to Sharpened Knife, increasing damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 212,
		name: 'True Sight',
		iconId: 15076,
		description: 'Able to see through the levequest target\'s glamour.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 213,
		name: 'Pacification',
		iconId: 16301,
		description: 'The target is pacified and will no longer attack.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 214,
		name: 'Agitation',
		iconId: 16302,
		description: 'Excited by failed pacification. Attack power and attack magic potency are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 215,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 216,
		name: 'Paralysis',
		iconId: 15006,
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 217,
		name: 'Triangulate',
		iconId: 11051,
		description: 'Able to locate mature trees and lush vegetation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 218,
		name: 'Gathering Rate Up',
		iconId: 16002,
		description: 'Chance of obtaining an item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 219,
		name: 'Gathering Yield Up',
		iconId: 16003,
		description: 'Number of items obtained while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 220,
		name: 'Gathering Fortune Up',
		iconId: 16004,
		description: 'Chance of obtaining an HQ item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 221,
		name: 'Truth of Forests',
		iconId: 11057,
		description: 'Able to locate unspoiled, legendary, and clouded mature trees and lush vegetation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 222,
		name: 'Truth of Mountains',
		iconId: 11007,
		description: 'Able to locate unspoiled, legendary, and clouded mineral deposits and rocky outcrops.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 223,
		name: 'Byregot\'s Ward',
		iconId: 11054,
		description: 'Affinity to the element lightning is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 224,
		name: 'Nophica\'s Ward',
		iconId: 11055,
		description: 'Affinity to the element earth is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 225,
		name: 'Prospect',
		iconId: 11001,
		description: 'Able to locate mineral deposits and rocky outcrops.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 226,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 227,
		name: 'Seduced',
		iconId: 15552,
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 228,
		name: 'Menphina\'s Ward',
		iconId: 11004,
		description: 'Affinity to the element ice is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 229,
		name: 'Nald\'thal\'s Ward',
		iconId: 11005,
		description: 'Affinity to the element fire is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 230,
		name: 'Llymlaen\'s Ward',
		iconId: 11056,
		description: 'Affinity to the element wind is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 231,
		name: 'Thaliak\'s Ward',
		iconId: 11006,
		description: 'Affinity to the element water is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 232,
		name: 'Preparation',
		iconId: 16005,
		description: 'Able to recognize the conditions for obtaining HQ items while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 233,
		name: 'Arbor Call',
		iconId: 11052,
		description: 'Surveying the land for the nearest mature tree or lush vegetation.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 234,
		name: 'Lay of the Land',
		iconId: 11002,
		description: 'Surveying the land for the nearest mineral deposit or rocky outcrop.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 235,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 236,
		name: 'Choco Beak',
		iconId: 15522,
		description: 'Bleeding HP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 237,
		name: 'Choco Regen',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 238,
		name: 'Choco Surge',
		iconId: 15058,
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 239,
		name: 'The Echo',
		iconId: 16207,
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 240,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 241,
		name: 'Blessing of Light',
		iconId: 15548,
		description: 'Bathed in the light of the Mothercrystal.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 242,
		name: 'Arbor Call II',
		iconId: 11053,
		description: 'Surveying the land for the highest-level mature tree or lush vegetation.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 243,
		name: 'Lay of the Land II',
		iconId: 11003,
		description: 'Surveying the land for the highest-level mineral deposit or rocky outcrop.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 244,
		name: 'Fracture',
		iconId: 10264,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 245,
		name: 'Sanction',
		iconId: 16206,
		description: 'Receiving the gear-enhancing benefits of a Grand Company sanction.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 246,
		name: 'Demolish',
		iconId: 10218,
		description: 'Internal bleeding is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 247,
		name: 'Rain of Death',
		iconId: 12609,
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 248,
		name: 'Circle of Scorn',
		iconId: 10158,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 249,
		name: 'Flaming Arrow',
		iconId: 10363,
		description: 'The ground is ablaze, dealing fire damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 250,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 251,
		name: 'Inner Quiet',
		iconId: 17321,
		description: 'Receiving a bonus to Touch action efficiency with every increase in quality.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 252,
		name: 'Waste Not',
		iconId: 11701,
		description: 'Durability loss is reduced by half.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 253,
		name: 'Steady Hand',
		iconId: 11551,
		description: 'Action success rate is increased by 20%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 254,
		name: 'Great Strides',
		iconId: 16105,
		description: 'Efficiency of next Touch action is significantly increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 255,
		name: 'Ingenuity',
		iconId: 11552,
		description: 'Effectiveness of Touch and Synthesis actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 256,
		name: 'Ingenuity II',
		iconId: 11553,
		description: 'Recipe level is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 257,
		name: 'Waste Not II',
		iconId: 11702,
		description: 'Durability loss is reduced by half.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 258,
		name: 'Manipulation',
		iconId: 11651,
		description: 'Receiving 10 points of durability after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 259,
		name: 'Innovation',
		iconId: 11652,
		description: 'Control is increased by 50%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 260,
		name: 'Reclaim',
		iconId: 11851,
		description: '90% chance that materials will not be lost in the event of botched synthesis.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 261,
		name: 'Comfort Zone',
		iconId: 11801,
		description: 'Regaining 8 CP after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 262,
		name: 'Steady Hand II',
		iconId: 11852,
		description: 'Action success rate is increased by 30%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 263,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 264,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 265,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 266,
		name: 'Concussion',
		iconId: 15523,
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 267,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 268,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 269,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 270,
		name: 'Sludge',
		iconId: 15527,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 271,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 272,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 273,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 274,
		name: 'Recuperation',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 275,
		name: 'Poison +1',
		iconId: 17001,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 10
	},
	{
		id: 276,
		name: 'Voice of Valor',
		iconId: 15549,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 277,
		name: 'Voice of Fortitude',
		iconId: 15550,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 278,
		name: 'Relentless March',
		iconId: 15551,
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 279,
		name: 'Rehabilitation',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 280,
		name: 'Bind',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 281,
		name: 'Physical Damage Down',
		iconId: 15051,
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 282,
		name: 'Mana Modulation',
		iconId: 15055,
		description: 'Damage dealt by attack spells and HP restored via healing magic are reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 283,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 284,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 285,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 286,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 287,
		name: 'Sludge',
		iconId: 15527,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 288,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 289,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 290,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 291,
		name: 'Hundred Fists',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 292,
		name: 'Fetters',
		iconId: 15534,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 293,
		name: 'Skill Speed Up',
		iconId: 15553,
		description: 'Weaponskill cast and recast times are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 294,
		name: 'Spell Speed Up',
		iconId: 15554,
		description: 'Spell cast and recast times are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 295,
		name: 'Goldbile',
		iconId: 15533,
		description: 'Sulphuric sludge is eating away at the skin, causing extreme discomfort and gradual HP loss.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 296,
		name: 'Hysteria',
		iconId: 15552,
		description: 'Unable to act on your own free will.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 297,
		name: 'Galvanize',
		iconId: 12801,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 298,
		name: 'Sacred Soil',
		iconId: 12802,
		description: 'An area of land has been sanctified, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 299,
		name: 'Sacred Soil',
		iconId: 12803,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 300,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 301,
		name: 'Critical Strikes',
		iconId: 15555,
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 302,
		name: 'Gold Lung',
		iconId: 17021,
		description: 'A layer of sulphuric sludge has built up on the body.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 303,
		name: 'Burrs',
		iconId: 17041,
		description: 'Hooked burrs have dug into your flesh.',
		category: 2,
		isPermanent: false,
		maxStacks: 9,
		partyListPriority: 50
	},
	{
		id: 304,
		name: 'Aetherflow',
		iconId: 10501,
		description: 'Aether is gathering in the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 305,
		name: 'The Dragon\'s Curse',
		iconId: 12626,
		description: 'Under the power of the dragon\'s eye.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 306,
		name: 'Inner Dragon',
		iconId: 12626,
		description: 'Under control of the dragon\'s eye.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 307,
		name: 'Voice of Valor',
		iconId: 15549,
		description: 'Gradually restoring the HP of nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 308,
		name: 'Voice of Fortitude',
		iconId: 15550,
		description: 'Reducing damage taken by nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 309,
		name: 'Relentless March',
		iconId: 15551,
		description: 'Increasing frequency of actions executed by nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 310,
		name: 'Curl',
		iconId: 10526,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 311,
		name: 'Earthen Ward',
		iconId: 12701,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 312,
		name: 'Razed Earth',
		iconId: 12702,
		description: 'Jagged shards protrude from the ground, dealing earth damage to any who tread upon them.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 313,
		name: 'Radiant Shield',
		iconId: 12711,
		description: 'Increasing physical damage taken by attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 314,
		name: 'Inferno',
		iconId: 12712,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 315,
		name: 'Whispering Dawn',
		iconId: 12826,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 316,
		name: 'Fey Covenant',
		iconId: 12827,
		description: 'Magic defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 317,
		name: 'Fey Illumination',
		iconId: 12828,
		description: 'Magic defense and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 318,
		name: 'Fey Glow',
		iconId: 12836,
		description: 'Spell speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 319,
		name: 'Fey Light',
		iconId: 12837,
		description: 'Skill speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 320,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 321,
		name: 'Gungnir',
		iconId: 15530,
		description: 'The power slumbering within the legendary lance has awoken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 322,
		name: 'Crystal Veil',
		iconId: 15556,
		description: 'Damage taken is significantly reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 323,
		name: 'Reduced Immunity',
		iconId: 15557,
		description: 'HP recovery via healing magic is reduced. Can be cured with Esuna.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 324,
		name: 'Greenwrath',
		iconId: 15530,
		description: 'The anger of the elementals tears at your very sanity, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 325,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 326,
		name: 'Lightning Charge',
		iconId: 15513,
		description: 'Lightning-aspected actions are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 327,
		name: 'Ice Charge',
		iconId: 15510,
		description: 'Ice-aspected actions are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 328,
		name: 'Heart of the Mountain',
		iconId: 15024,
		description: 'Armored by impenetrable stone. Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 329,
		name: 'Modification',
		iconId: 17061,
		description: 'Applying parts from another bot to enhance and repair systems.',
		category: 1,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 330,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 331,
		name: 'Magic Vulnerability Down',
		iconId: 15056,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 332,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 333,
		name: 'Allagan Rot',
		iconId: 15538,
		description: 'An ancient pestilence corrupts your humours. Mortal pathogen is released when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 334,
		name: 'Allagan Immunity',
		iconId: 15539,
		description: 'Your body is showing resistance to the Allagan Rot.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 335,
		name: 'Firestream',
		iconId: 15524,
		description: 'The flesh melts from your bones, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 336,
		name: 'Sequence AB1',
		iconId: 15535,
		description: 'Blunt resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 337,
		name: 'Sequence AP1',
		iconId: 15536,
		description: 'Piercing resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 338,
		name: 'Sequence AS1',
		iconId: 15537,
		description: 'Slashing resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 339,
		name: 'Bleeding',
		iconId: 17121,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 340,
		name: 'Physical Field',
		iconId: 10401,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 341,
		name: 'Aetherial Field',
		iconId: 10401,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 342,
		name: 'Repelling Spray',
		iconId: 15542,
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 343,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 344,
		name: 'Neurolink',
		iconId: 15545,
		description: 'Movement is slowed, damage dealt and HP recovery via actions is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 345,
		name: 'Recharge',
		iconId: 17061,
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 346,
		name: 'Waxen Flesh',
		iconId: 17081,
		description: 'The rate at which Firestorm burns your flesh is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 347,
		name: 'Pox',
		iconId: 15544,
		description: 'An ancient pestilence corrupts your humours, reducing maximum HP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 348,
		name: 'Disseminate',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 349,
		name: 'Steel Scales',
		iconId: 17061,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 350,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 351,
		name: 'Rancor',
		iconId: 17141,
		description: 'The rage of fallen brethren is enhancing the potency of certain attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 352,
		name: 'Spjot',
		iconId: 15530,
		description: 'Magicks of eld permeate your body, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 353,
		name: 'Brave New World',
		iconId: 16501,
		description: 'Attributes are increased when a low-level Disciple of War or Magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 354,
		name: 'Live off the Land',
		iconId: 16502,
		description: 'Gathering is increased when a Disciple of the Land.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 355,
		name: 'What You See',
		iconId: 16503,
		description: 'Perception is increased when a Disciple of the Land.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 356,
		name: 'Eat from the Hand',
		iconId: 16504,
		description: 'Craftsmanship is increased when a Disciple of the Hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 357,
		name: 'In Control',
		iconId: 16505,
		description: 'Control is increased when a Disciple of the Hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 358,
		name: 'Snowman',
		iconId: 15510,
		description: 'Covered in snow and able to deal damage to targets under the Fey Fire effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 359,
		name: 'Fey Fire',
		iconId: 15508,
		description: 'A fey fire envelops you, nullifying all damage received.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 360,
		name: 'Meat and Mead',
		iconId: 16508,
		description: 'Food effect duration is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 361,
		name: 'That Which Binds Us',
		iconId: 16509,
		description: 'Spiritbonding speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 362,
		name: 'Proper Care',
		iconId: 16510,
		description: 'Gear wear is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 364,
		name: 'Reduced Rates',
		iconId: 16512,
		description: 'Teleportation fees are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 365,
		name: 'The Heat of Battle',
		iconId: 16513,
		description: 'EXP earned through battle is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 366,
		name: 'A Man\'s Best Friend',
		iconId: 16514,
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 367,
		name: 'Earth and Water',
		iconId: 16515,
		description: 'EXP earned through gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 368,
		name: 'Helping Hand',
		iconId: 16516,
		description: 'EXP earned through crafting is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 369,
		name: 'Viscous Aetheroplasm',
		iconId: 17281,
		description: 'Aetheroplasm is attached to your body. A stack of 5 will result in severe damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 370,
		name: 'Siren Song',
		iconId: 15558,
		description: 'The siren\'s song is gradually invading your mind. Must be at maximum HP when effect ends to avoid becoming charmed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 371,
		name: 'Zombification',
		iconId: 15559,
		description: 'Turned into a mindless zombie under enemy control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 372,
		name: 'Brood Rage',
		iconId: 17221,
		description: 'The mother zu is maddened by the death of her brood. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 373,
		name: 'Blight',
		iconId: 15561,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 374,
		name: 'Corrupted Crystal',
		iconId: 17161,
		description: 'Shards of corrupted crystals are attached to your body. A stack of three will trigger an explosion.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 375,
		name: 'Suppuration',
		iconId: 17181,
		description: 'Maximum HP is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 376,
		name: 'Searing Wind',
		iconId: 15560,
		description: 'Ignited by white-hot embers and scorching those nearby. Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 377,
		name: 'Infernal Fetters',
		iconId: 17201,
		description: 'A prison of fire is reducing damage dealt and inflicting fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 378,
		name: 'Death Throes',
		iconId: 15003,
		description: 'Held firmly by the leg and unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 379,
		name: 'Thermal Low',
		iconId: 17241,
		description: 'The wind is high. Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 100
	},
	{
		id: 380,
		name: 'Thermal High',
		iconId: 15030,
		description: 'The wind has died. Resistance to wind damage is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 381,
		name: 'Sword Oath',
		iconId: 12505,
		description: 'Auto-attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 383,
		name: 'Growing',
		iconId: 19541,
		description: 'Absorbed nutrients are spurring rapid development.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 199
	},
	{
		id: 384,
		name: 'Full-grown',
		iconId: 15971,
		description: 'Fully matured.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 385,
		name: 'Fool\'s Tightrope',
		iconId: 15972,
		description: 'Weaving the illusion of a precarious path.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 386,
		name: 'Unfooled',
		iconId: 15973,
		description: 'Aware that the fool\'s tightrope is a mere illusion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 387,
		name: 'Fool\'s Tumble',
		iconId: 15974,
		description: 'Convinced that you have taken a fall and are unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 388,
		name: 'Fool\'s Figure',
		iconId: 15975,
		description: 'Weaving the illusion of an altered self.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 389,
		name: 'Skewer',
		iconId: 14808,
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 390,
		name: 'Growing',
		iconId: 19541,
		description: 'Absorbed nutrients are spurring rapid development.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 391,
		name: 'Full-grown',
		iconId: 15971,
		description: 'Fully matured.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 392,
		name: 'Royal Guard',
		iconId: 13603,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 393,
		name: 'Iron Will',
		iconId: 12506,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 394,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 395,
		name: 'Physical Damage Down',
		iconId: 15051,
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 396,
		name: 'Concentration',
		iconId: 14815,
		description: 'Next enfeeblement received is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 397,
		name: 'Safeguard',
		iconId: 14816,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 398,
		name: 'Astral Realignment',
		iconId: 15562,
		description: 'Existentially aligned to the astral realm. Damage dealt is reduced, but can attack ghostly beings.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 399,
		name: 'Corporeal Return',
		iconId: 15563,
		description: 'Weakened by the time in astral realignment. Damage taken is doubled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 400,
		name: 'Charge',
		iconId: 17261,
		description: 'Storing lightning energy. Resistance to lightning damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 401,
		name: 'Seized',
		iconId: 15564,
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 402,
		name: 'Thrown for a Loop',
		iconId: 15565,
		description: 'Provoked beyond all mortal limits and heedless of danger. Can only pursue the target.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 403,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 404,
		name: 'Transporting',
		iconId: 16208,
		description: 'Carrying an object in your arms, growing wearier with each passing second.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 405,
		name: 'Bewildered',
		iconId: 15545,
		description: 'Confused and unable to control your actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 406,
		name: 'Vulnerability Down',
		iconId: 17301,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 30
	},
	{
		id: 407,
		name: 'Dust Poisoning',
		iconId: 17001,
		description: 'Poisoned by the crystal dust you inhaled. A stack of 4 will render you unable to act.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 408,
		name: 'Storm\'s Path',
		iconId: 10265,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 409,
		name: 'Holmgang',
		iconId: 10266,
		description: 'Most attacks cannot reduce your HP to less than 1.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 410,
		name: 'Antibody',
		iconId: 10515,
		description: 'Immune to the effects of virus and fever.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 411,
		name: 'Inner Beast',
		iconId: 12553,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 412,
		name: 'Hover',
		iconId: 15683,
		description: 'Floating above ground.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 413,
		name: 'Mark Up',
		iconId: 16517,
		description: 'Wolf Marks earned are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 414,
		name: 'Seal Sweetener',
		iconId: 16518,
		description: 'Company seals earned are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 415,
		name: 'Regain',
		iconId: 16203,
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 416,
		name: 'Transparent',
		iconId: 16209,
		description: 'Body is allowing light to pass, rendering you invisible to the enemy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 417,
		name: 'Protect',
		iconId: 10405,
		description: 'Defense and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 418,
		name: 'Transcendent',
		iconId: 15273,
		description: 'Recently resurrected and temporarily invulnerable to most damage. Status ends upon execution of an action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 419,
		name: 'Misty Veil',
		iconId: 14811,
		description: 'Attack range is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 420,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 421,
		name: 'Devoured',
		iconId: 15571,
		description: 'Being devoured is preventing the execution of actions and causing damage over time. ',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 422,
		name: 'Healing Magic Down',
		iconId: 15572,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 423,
		name: 'Nightmare',
		iconId: 15573,
		description: 'Troubled sleep is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 424,
		name: 'Diabolic Curse',
		iconId: 17341,
		description: 'Placed under a diabolic curse. Damage taken is increased. ',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 425,
		name: 'Eerie Air',
		iconId: 15574,
		description: 'A sense of dread is heightening your alertness, granting resistance to sleep.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 426,
		name: 'Noctoshield',
		iconId: 15575,
		description: 'A magicked barrier is granting resistance to stun.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 427,
		name: 'Slow+',
		iconId: 17361,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased. Effect cannot be nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 428,
		name: 'Haste+',
		iconId: 17381,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 429,
		name: 'Scale Flakes',
		iconId: 17401,
		description: 'Dusted with wamoura scales and giving off a scent which attracts Arioch. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 430,
		name: 'Misery',
		iconId: 15576,
		description: 'Plunged into the depths of misery. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 431,
		name: 'Water Resistance Down',
		iconId: 17421,
		description: 'Water resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 432,
		name: 'Briny Mirror',
		iconId: 15577,
		description: 'Covered in a watery membrane. Any party member who uses a healing spell or action on you receives the Briny Veil status.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 433,
		name: 'Briny Veil',
		iconId: 17441,
		description: 'Covered in a watery membrane which impairs vision, reducing your attack range. A stack of 16 will render you unable to act. ',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 434,
		name: 'Absolute Bind',
		iconId: 15579,
		description: 'Bound by advanced thaumaturgy and rendered unable to act.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 435,
		name: 'Demon Eye',
		iconId: 15578,
		description: 'Petrified by a demonic gaze. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 436,
		name: 'Briar',
		iconId: 15601,
		description: 'Thick briar is reducing movement speed and causing damage over time. Prevents draw-in and knockback effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 437,
		name: 'Stone Curse',
		iconId: 15586,
		description: 'Turned into stone. Taking damage results in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 438,
		name: 'Minimum',
		iconId: 15581,
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 439,
		name: 'Toad',
		iconId: 15580,
		description: 'Transformed into a toad and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 440,
		name: 'Minimum',
		iconId: 16211,
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 441,
		name: 'Toad',
		iconId: 16210,
		description: 'Transformed into a toad and unable to execute actions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 442,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 443,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 444,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 445,
		name: 'Thorny Vine',
		iconId: 15582,
		description: 'Thorny vines are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 446,
		name: 'Honey-glazed',
		iconId: 15583,
		description: 'Covered in honey and attracting hornets.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 447,
		name: 'Potent Acid',
		iconId: 17021,
		description: 'Doused in potent acid, resulting in increased damage taken from Acid Cloud. Strength of effect is determined by stack number.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 448,
		name: 'Swarmed',
		iconId: 17461,
		description: 'A swarm of bees will soon sting you.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 449,
		name: 'Stung',
		iconId: 17001,
		description: 'Bee venom is coursing through your body. Damage received from bee swarms is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 450,
		name: 'Petrification Resistance',
		iconId: 15608,
		description: 'Immune to petrification effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 451,
		name: 'Cursed Voice',
		iconId: 15587,
		description: 'Your body is being taken over, and will soon be used to unleash a petrifying curse.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 452,
		name: 'Cursed Shriek',
		iconId: 15588,
		description: 'Your body is being taken over, and will soon be used to unleash a petrifying curse.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 453,
		name: 'Allagan Venom',
		iconId: 15007,
		description: 'Involuntarily spreading Allagan snake venom and causing damage over time to all party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 454,
		name: 'Allagan Field',
		iconId: 15590,
		description: 'A magicked field is converting damage taken into an explosion which will trigger when the effect ends or you are KO\'d.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 455,
		name: 'Languishing',
		iconId: 17101,
		description: 'Life force is weakened, resulting in increased damage taken from Life Drain.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 150
	},
	{
		id: 456,
		name: 'HP Penalty',
		iconId: 17481,
		description: 'Maximum HP is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 457,
		name: 'Bind+',
		iconId: 15602,
		description: 'Unable to move. Effect cannot be nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 458,
		name: 'Raven Blight',
		iconId: 15517,
		description: 'Afflicted by the White Raven\'s miasma, which will soon cause you to explode.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 459,
		name: 'Normal Stance',
		iconId: 15591,
		description: 'Being commanded to execute standard battle maneuvers.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 460,
		name: 'Aggressive Stance',
		iconId: 15592,
		description: 'Being commanded to execute actions that deal area damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 461,
		name: 'Subversive Stance',
		iconId: 15593,
		description: 'Being commanded to execute actions that disrupt the enemy.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 462,
		name: 'Garrote Twist',
		iconId: 15594,
		description: 'Garrote is stacking at an increased rate.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 463,
		name: 'Garrote',
		iconId: 17501,
		description: 'A death grip is tightening around you. A stack of 9 will result in instant death.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 464,
		name: 'Firescorched',
		iconId: 15595,
		description: 'Resistance to attacks by Firehorn is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 465,
		name: 'Icebitten',
		iconId: 15596,
		description: 'Resistance to attacks by Iceclaw is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 466,
		name: 'Thunderstruck',
		iconId: 15597,
		description: 'Your body is accumulating a lightning charge. Will inflict lightning damage to those nearby when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 467,
		name: 'Briny Veil',
		iconId: 17456,
		description: 'Covered in a watery membrane which impairs vision, reducing your attack range. A stack of 16 will render you unable to act. ',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 468,
		name: 'Voidbound',
		iconId: 15585,
		description: 'Trapped in the void and unable to interact with the physical realm.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 469,
		name: 'High and Mighty',
		iconId: 15589,
		description: 'Invulnerable to all damage. Long live the king, kupo!',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 470,
		name: 'Pombination',
		iconId: 15584,
		description: 'In the midst of a combination attack. Immune to stun and silence effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 471,
		name: 'Moglight Resistance Down',
		iconId: 15598,
		description: 'Massive damage is taken from Stifling Mogdark.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 472,
		name: 'Mogdark Resistance Down',
		iconId: 15599,
		description: 'Massive damage is taken from Searing Moglight.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 473,
		name: 'Bemoggled',
		iconId: 15600,
		description: 'Massive damage is taken from Moogle-Go-Round.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 474,
		name: 'Royal Rouse',
		iconId: 17541,
		description: 'Damage dealt and HP recovery is increased. Long live the king, kupo!',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 150
	},
	{
		id: 475,
		name: 'Slippery Prey',
		iconId: 15027,
		description: 'Unable to be marked as prey by would-be predators.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 476,
		name: 'Gloam',
		iconId: 15012,
		description: 'A shroud of darkness is impairing your accuracy while rendering you immune to Demon Eye. Can be cured with Esuna.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 477,
		name: 'Mantle of the Whorl',
		iconId: 15542,
		description: 'Reflecting damage dealt by magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 478,
		name: 'Veil of the Whorl',
		iconId: 12651,
		description: 'Reflecting damage dealt by ranged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 479,
		name: 'Rehabilitation',
		iconId: 17521,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 480,
		name: 'Haste+',
		iconId: 17381,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 481,
		name: 'Sprint',
		iconId: 10101,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 482,
		name: 'Paralysis',
		iconId: 15006,
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 483,
		name: 'HP Boost',
		iconId: 15075,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 484,
		name: 'Ink',
		iconId: 15569,
		description: 'Your body is dripping with thick toxic ink, slowing movement speed and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 485,
		name: 'Dropsy',
		iconId: 17641,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 486,
		name: 'Watery Grave',
		iconId: 15038,
		description: 'You are trapped in a magicked prison of water and are unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 487,
		name: 'Deep Freeze',
		iconId: 17621,
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 488,
		name: 'Shade Shift',
		iconId: 10605,
		description: 'Shadows are nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 489,
		name: 'Kiss of the Wasp',
		iconId: 10606,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 490,
		name: 'Kiss of the Viper',
		iconId: 10609,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 491,
		name: 'Dancing Edge',
		iconId: 10601,
		description: 'Slashing resistance and HP recovery via healing magic and actions are reduced.※HP recovery unaffected in PvP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 492,
		name: 'Mutilation',
		iconId: 10602,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 493,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 494,
		name: 'Magic Vulnerability Up',
		iconId: 15057,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 495,
		name: 'Goad',
		iconId: 10608,
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 496,
		name: 'Mudra',
		iconId: 12901,
		description: 'Readying ninjutsu by combining ritual hand gestures.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 497,
		name: 'Kassatsu',
		iconId: 12902,
		description: 'Able to execute a ninjutsu with increased potency.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 498,
		name: 'Infirmity',
		iconId: 15531,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 500,
		name: 'Huton',
		iconId: 12903,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 501,
		name: 'Doton',
		iconId: 12904,
		description: 'Foul magicks corrupt the ground, dealing earth damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 502,
		name: 'Doton Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 503,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 504,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 505,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 506,
		name: 'Vertigo',
		iconId: 15039,
		description: 'Balance is compromised, resulting in a loss of motor skills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 507,
		name: 'Suiton',
		iconId: 12906,
		description: 'Body is enveloped in a light-bending veil of water, allowing use of actions normally requiring the Hidden status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 508,
		name: 'Shadow Fang',
		iconId: 10612,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 509,
		name: 'Aetherochemical Bomb',
		iconId: 15606,
		description: 'An aetherochemical bomb is attached to your body, dealing damage each time it explodes.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 510,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 511,
		name: 'Fire Toad',
		iconId: 15607,
		description: 'Transformed into a fire toad and only able to execute the action Toad Breath.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 512,
		name: 'Electroconductivity',
		iconId: 17561,
		description: 'Conductive matter clings to your person. A stack of 3 will grant you the effect of Surge Protection.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 100
	},
	{
		id: 513,
		name: 'Static Condensation',
		iconId: 17581,
		description: 'Excess electric charge is stored within your body. The greater the stack, the fewer the HP recovered via healing magic.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 100
	},
	{
		id: 514,
		name: 'Causality',
		iconId: 15034,
		description: 'Damage is taken each time an action is used.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 515,
		name: 'Thunderclap',
		iconId: 17601,
		description: 'Sustaining damage over time. If the effect is not removed, it will continue to stack, increasing the amount of damage inflicted.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 98
	},
	{
		id: 516,
		name: 'Chaos',
		iconId: 15605,
		description: 'Experiencing mental breakdown resulting in a stunned state, followed by the desire to draw near the Lord of Levin.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 517,
		name: 'Surge Protection',
		iconId: 15604,
		description: 'Your body is covered in conductive matter, helping to redirect and nullify the electrical charge of lightning attacks.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 518,
		name: 'Reflect',
		iconId: 15035,
		description: 'All magic attacks are reflected back at the caster.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 519,
		name: 'Counter',
		iconId: 15036,
		description: 'All physical attacks are reflected back at the dealer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 520,
		name: 'Fire Resistance Up',
		iconId: 15028,
		description: 'Fire resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 521,
		name: 'Water Resistance Up',
		iconId: 15033,
		description: 'Water resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 522,
		name: 'Wind Resistance Up',
		iconId: 15030,
		description: 'Wind resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 523,
		name: 'Lightning Resistance Up',
		iconId: 15032,
		description: 'Lightning resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 524,
		name: 'Earth Resistance Up',
		iconId: 15031,
		description: 'Earth resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 525,
		name: 'Ice Resistance Up',
		iconId: 15029,
		description: 'Ice resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 526,
		name: 'Frost Blade',
		iconId: 15633,
		description: 'Regenerating HP over time. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 527,
		name: 'Frost Brand',
		iconId: 15634,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 528,
		name: 'Frost Bow',
		iconId: 15635,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 529,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 530,
		name: 'Burns',
		iconId: 19001,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 531,
		name: 'Dropsy',
		iconId: 17641,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 532,
		name: 'Windburn',
		iconId: 19021,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 533,
		name: 'Electrocution',
		iconId: 19041,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 534,
		name: 'Sludge',
		iconId: 18881,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 535,
		name: 'Frostbite',
		iconId: 19061,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 536,
		name: 'Companion EXP Up',
		iconId: 14026,
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 537,
		name: 'Companion EXP Up II',
		iconId: 14027,
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 538,
		name: 'Companion Attack Up',
		iconId: 14028,
		description: 'Companion attack power is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 539,
		name: 'Companion Attack Up II',
		iconId: 14029,
		description: 'Companion attack power is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 540,
		name: 'Companion Healing Potency Up',
		iconId: 14030,
		description: 'Companion healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 541,
		name: 'Companion Healing Potency Up II',
		iconId: 14031,
		description: 'Companion healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 542,
		name: 'Companion Maximum HP Up',
		iconId: 14032,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 543,
		name: 'Companion Maximum HP Up II',
		iconId: 14033,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 544,
		name: 'Companion Enmity Up',
		iconId: 14034,
		description: 'Companion enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 545,
		name: 'Companion Enmity Up II',
		iconId: 14035,
		description: 'Companion enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 546,
		name: 'Enervation',
		iconId: 15040,
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 547,
		name: 'Facility Access: Production',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 548,
		name: 'Facility Access: Finishing',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 549,
		name: 'Facility Access: Detailing',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 550,
		name: 'Facility Access: Production II',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 551,
		name: 'Facility Access: Specialization',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 552,
		name: 'Facility Access: Specialization II',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 553,
		name: 'Facility Access: Detailing II',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 554,
		name: 'Facility Access: Finishing II',
		iconId: 16108,
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 555,
		name: 'Repelling Spray',
		iconId: 15036,
		description: 'Countering any physical attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 556,
		name: 'Repelling Spray',
		iconId: 15542,
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 557,
		name: 'Repelling Spray',
		iconId: 15036,
		description: 'Countering any physical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 558,
		name: 'Repelling Spray',
		iconId: 15542,
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 559,
		name: 'Poison',
		iconId: 15007,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 560,
		name: 'Poison',
		iconId: 17001,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 561,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 562,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 563,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 564,
		name: 'Bind',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 565,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form has been altered, inhibiting use of actions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 566,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 567,
		name: 'Six Fulms Under',
		iconId: 15769,
		description: 'You are slowly slipping down, your movement speed dropping as you descend deeper. Burial will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 568,
		name: 'Fisher\'s Intuition',
		iconId: 11101,
		description: 'Heightened senses are improving chances of discovering rare fish only obtainable under special conditions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 569,
		name: 'Slime',
		iconId: 15609,
		description: 'Viscous discharge is hampering movement and inflicting damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 570,
		name: 'In the Line of Fire',
		iconId: 15636,
		description: 'Damage dealt by firearms is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 51
	},
	{
		id: 571,
		name: 'Blind',
		iconId: 15012,
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 572,
		name: 'Slashing Resistance Down',
		iconId: 17681,
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 573,
		name: 'Blunt Resistance Down',
		iconId: 17701,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 574,
		name: 'Erratic Blaster',
		iconId: 15616,
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 575,
		name: 'Static Charge',
		iconId: 17721,
		description: 'Damage dealt by Electric Burst is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 576,
		name: 'Lightning Resistance Down',
		iconId: 17741,
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 577,
		name: 'Barofield',
		iconId: 15617,
		description: 'Damage taken when Kaliya is nearby.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 578,
		name: 'In the Headlights',
		iconId: 15618,
		description: 'Damage taken by main head increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 579,
		name: 'Critical Strikes',
		iconId: 15555,
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 580,
		name: 'Aetherochemical Nanospores α',
		iconId: 15619,
		description: 'An Allagan-engineered malady is corrupting your humours.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 581,
		name: 'Aetherochemical Nanospores β',
		iconId: 15620,
		description: 'An Allagan-engineered malady is corrupting your humours.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 582,
		name: 'Magic Vulnerability Down',
		iconId: 17761,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 583,
		name: 'Physical Vulnerability Down',
		iconId: 17781,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 584,
		name: 'Energy Field',
		iconId: 15621,
		description: 'Invulnerable to ranged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 585,
		name: 'Energy Field Down',
		iconId: 15622,
		description: 'Energy field is no longer deflecting ranged attacks. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 586,
		name: 'HP Boost',
		iconId: 17801,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 587,
		name: 'Forked Lightning',
		iconId: 15623,
		description: 'Storing an electric charge which, when released, will deal lightning damage to nearby allies.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 588,
		name: 'Revelation Resistance Down',
		iconId: 15624,
		description: 'Damage taken by Revelation is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 589,
		name: 'Chain of Purgatory',
		iconId: 15625,
		description: 'Marked by the Brand of Purgatory. Damage taken by the Flames of Unforgiveness is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 590,
		name: 'Arm of Purgatory',
		iconId: 15626,
		description: 'Marked by the Brand of Purgatory. Damage taken by the Flames of Unforgiveness is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 591,
		name: 'Bluefire',
		iconId: 15627,
		description: 'Cold blue flames are severely reducing damage dealt and HP restored via actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 592,
		name: 'Ring of Fire',
		iconId: 15628,
		description: 'Enveloped in protective flames. Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 593,
		name: 'Rise of the Phoenix',
		iconId: 17821,
		description: 'The holy flames of Phoenix burn bright, increasing potency of the Flames of Rebirth with each additional stack.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 594,
		name: 'Harvest',
		iconId: 15629,
		description: 'Redirecting the remaining life energies of incapacitated victims in order to gain the effect of Rise of the Phoenix.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 595,
		name: 'Cloak of Death',
		iconId: 17841,
		description: 'Damage taken by the Fountain of Death is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 596,
		name: 'Suffocated Will',
		iconId: 17861,
		description: 'Overwhelmed by the sheer spiritual might of the dreadwyrm. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 597,
		name: 'Flare Dampening',
		iconId: 15545,
		description: 'Damage taken by Bahamut\'s Teraflare is reduced, and damage dealt is significantly reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 598,
		name: '(仮)物理シールド(ストンスキン)',
		iconId: 15041,
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 599,
		name: '(仮)魔法シールド(ストンスキン)',
		iconId: 15042,
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 600,
		name: 'Magic Vulnerability Down',
		iconId: 15056,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 601,
		name: 'Physical Vulnerability Down',
		iconId: 15052,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 602,
		name: 'Curse of the Mummy',
		iconId: 17881,
		description: 'Suffering an ancient curse. A stack of 4 will result in mummification.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 603,
		name: 'Mummification',
		iconId: 15632,
		description: 'Serving the Sunken Temple of Qarn as a mindless thrall.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 604,
		name: 'Thin Ice',
		iconId: 15615,
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 605,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 606,
		name: 'Frozen',
		iconId: 17661,
		description: 'Ice has begun forming on gear. A stack of 4 will result in Deep Freeze.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 607,
		name: 'Snowball',
		iconId: 15611,
		description: 'Trapped inside a giant ball of packed snow.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 608,
		name: 'Death Throes',
		iconId: 15003,
		description: 'Held firmly by the leg and unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 609,
		name: 'Seized',
		iconId: 15564,
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 610,
		name: 'Petrification',
		iconId: 15001,
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 611,
		name: 'Invigoration',
		iconId: 17901,
		description: 'Experiencing increased pep in one\'s step. Wet Plate status is removed upon executing Imp Punch.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 612,
		name: 'Wet Plate',
		iconId: 17921,
		description: 'Sufficient water remains on the imp plate. Status removed if Imp Punch is executed while Typhon is invigorated.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 613,
		name: 'Imp',
		iconId: 15043,
		description: 'Transformed into an imp and only able to execute the action Imp Punch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 614,
		name: 'Hidden',
		iconId: 10607,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 615,
		name: 'Hidden',
		iconId: 10607,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 616,
		name: 'Invisible',
		iconId: 15642,
		description: 'Unable to be detected by sight.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 617,
		name: 'Irradiated',
		iconId: 15641,
		description: 'Luminescence is being stored within the body and will result in an emission of Banishing Light once the effect ends.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 618,
		name: 'Area of Influence Up',
		iconId: 17981,
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 619,
		name: 'Burns',
		iconId: 17181,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 620,
		name: 'Pacification',
		iconId: 15017,
		description: 'Unable to use weaponskills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 621,
		name: 'Fire Resistance Down',
		iconId: 17941,
		description: 'Fire resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 622,
		name: 'Rotting Lungs',
		iconId: 15638,
		description: 'Lungs are filled with noxious fumes and will emit the toxic vapors if subjected to further Rot Gas.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 623,
		name: 'Disease',
		iconId: 15014,
		description: 'Movement speed and HP recovered via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 624,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 625,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 626,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 627,
		name: 'Neurolink',
		iconId: 15545,
		description: 'A powerful Allagan device is limiting strength.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 628,
		name: 'Damage Down',
		iconId: 18441,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 629,
		name: 'Infirmity',
		iconId: 17961,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 630,
		name: 'Heavy',
		iconId: 16576,
		description: 'Chocobo speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 631,
		name: 'Tireless',
		iconId: 16577,
		description: 'Chocobo has limitless stamina.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 632,
		name: 'Frenzied',
		iconId: 16578,
		description: 'Chocobo is panicked and accelerating out of control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 633,
		name: 'Lamed',
		iconId: 16579,
		description: 'Chocobo is injured and cannot accelerate.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 634,
		name: 'Silenced',
		iconId: 16580,
		description: 'Chocobo has lost its wark and cannot use race abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 635,
		name: 'Distracted',
		iconId: 16581,
		description: 'Chocobo is discomposed and refuses to use race items.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 636,
		name: 'Brand of the Sullen',
		iconId: 18041,
		description: 'Damage taken by Sullen Gaze is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 637,
		name: 'Brand of the Ireful',
		iconId: 18061,
		description: 'Damage taken by Ireful Gaze is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 638,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 639,
		name: 'Pyretic',
		iconId: 15647,
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 640,
		name: 'Poison Resistance Up',
		iconId: 15648,
		description: 'Poison resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 641,
		name: 'Choco Reflect',
		iconId: 16582,
		description: 'All non-area of effect enfeeblements are being repelled back to their point of origin.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 642,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 643,
		name: 'Bleeding',
		iconId: 17121,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 644,
		name: 'Chicken',
		iconId: 15640,
		description: 'Transformed into a chicken and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 645,
		name: 'Digesting',
		iconId: 18081,
		description: 'Taking damage over time as body tissue is slowly broken down by gastric fluid. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 646,
		name: 'Abandonment',
		iconId: 15649,
		description: 'Will suffer Fear when straying too far from party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 647,
		name: 'Atrophy',
		iconId: 15639,
		description: 'All attributes are reduced by 30%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 648,
		name: 'Rehabilitation',
		iconId: 15532,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 649,
		name: 'Attack Up',
		iconId: 15050,
		description: 'Attack power is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 650,
		name: 'Attack Magic Potency Up',
		iconId: 15054,
		description: 'Attack magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 651,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast/recast time, spell cast/recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 652,
		name: 'HP & MP Boost',
		iconId: 15085,
		description: 'Maximum HP and MP are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 653,
		name: 'Battle High',
		iconId: 16215,
		description: 'Damage dealt is increased and adrenaline builds faster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 654,
		name: 'Battle Fever',
		iconId: 16216,
		description: 'Damage dealt is increased further and adrenaline builds faster than when experiencing a Battle High.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 655,
		name: 'Aegis Boon',
		iconId: 14823,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 656,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 657,
		name: 'Physical Vulnerability Up',
		iconId: 18001,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 658,
		name: 'Magic Vulnerability Up',
		iconId: 18021,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 659,
		name: 'Blight',
		iconId: 15643,
		description: 'Sustaining damage over time as lungs are filled with corruption. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 660,
		name: 'Extend',
		iconId: 15644,
		description: 'Temporal flow is disrupted.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 661,
		name: 'Double',
		iconId: 15645,
		description: 'The next action initiated will be executed twice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 662,
		name: 'Triple',
		iconId: 15646,
		description: 'The next action initiated will be executed thrice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 663,
		name: 'Red Light',
		iconId: 16217,
		description: 'You are no longer allowed to move. All that\'s left is to pray the snort misses its mark.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 664,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 665,
		name: 'Slippery Prey',
		iconId: 15027,
		description: 'Unable to be marked as prey by would-be predators.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 666,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 667,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 668,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 669,
		name: 'Movement Speed Up',
		iconId: 10101,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 670,
		name: 'Fire Resistance Down',
		iconId: 17941,
		description: 'Fire resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 50
	},
	{
		id: 671,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 672,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 673,
		name: 'Nanoparticles',
		iconId: 18221,
		description: 'Nanoparticles have invaded the body. If buildup continues, severe biomass atrophy may occur.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 674,
		name: 'Resin',
		iconId: 15653,
		description: 'A sticky substance covers the body, reducing movement speed.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 676,
		name: 'Concealed',
		iconId: 15673,
		description: 'Unable to be detected from a distance.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 677,
		name: 'Concentrated Poison',
		iconId: 15672,
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 678,
		name: 'Tailwind',
		iconId: 18261,
		description: 'Wind is buffeting the body, increasing evasion.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 679,
		name: 'Windwall',
		iconId: 15674,
		description: 'A wall of wind surrounds the body, allowing for evasion of all attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 680,
		name: 'Directional Parry',
		iconId: 15046,
		description: 'Parry rate is increased for all attacks from a certain direction.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 681,
		name: 'Offensive Optimization',
		iconId: 15048,
		description: 'Battle tactics optimized for offense. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 682,
		name: 'Defensive Optimization',
		iconId: 15047,
		description: 'Battle tactics optimized for defense. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 683,
		name: 'Blessing of Earth',
		iconId: 15103,
		description: 'An earthen barrier is nullifying damage. If the barrier retains power when the effect ends, the Blessing of Fire will be granted.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 684,
		name: 'Blessing of Fire',
		iconId: 15100,
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 685,
		name: 'Wind Resistance Down',
		iconId: 18201,
		description: 'Resistance to wind damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 686,
		name: 'Poison',
		iconId: 15007,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 687,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 688,
		name: 'Hypercharge',
		iconId: 13012,
		description: 'Battle turret is overcharged.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 689,
		name: 'Mana Capacitor',
		iconId: 13013,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 690,
		name: 'Muscle Activator',
		iconId: 13014,
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 691,
		name: 'Marked for Vulnerability Up',
		iconId: 15659,
		description: 'Physical damage taken is increased following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 692,
		name: 'Marked for Damage Down',
		iconId: 15660,
		description: 'Damage dealt is reduced following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 693,
		name: 'Marked for Healing Magic Down',
		iconId: 15661,
		description: 'HP recovery via healing magic is reduced following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 694,
		name: 'Hard Marked',
		iconId: 15662,
		description: 'The marked status cannot be moved to another ally.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 695,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 696,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 697,
		name: 'Healing Magic Down',
		iconId: 15572,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 698,
		name: 'Positive Charge',
		iconId: 15663,
		description: 'Exhibiting a positive magnetic charge.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 699,
		name: 'Negative Charge',
		iconId: 15664,
		description: 'Exhibiting a negative magnetic charge.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 700,
		name: 'Throttle',
		iconId: 15665,
		description: 'Windpipe is crushed. KO is imminent.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 701,
		name: 'Battle Efficiency Down',
		iconId: 15049,
		description: '',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 702,
		name: 'Bloated',
		iconId: 17101,
		description: 'The bomb\'s body is filled to bursting with deadly gas.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 703,
		name: 'Draconian Gaze',
		iconId: 15657,
		description: 'The Dragon\'s Eye is limiting Nidhogg\'s strength.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 704,
		name: 'Draconian Light',
		iconId: 15658,
		description: 'The Dragon\'s Eye is significantly reducing damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 705,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 706,
		name: 'Luminous Aetheroplasm',
		iconId: 18121,
		description: 'Luminous aetheroplasm buildup has occurred. If it continues, exhaust will be released to relieve pressure.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 707,
		name: 'Decree Nisi A',
		iconId: 18141,
		description: 'If Decree Nisi B is also issued, steam regulator ruling becomes Decree Absolute and death sentence is carried out.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 200
	},
	{
		id: 708,
		name: 'Decree Nisi B',
		iconId: 18161,
		description: 'If Decree Nisi A is also issued, steam regulator ruling becomes Decree Absolute and death sentence is carried out.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 709,
		name: 'Heavy Feet',
		iconId: 15653,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 710,
		name: 'Charge',
		iconId: 15654,
		description: 'The order to charge has been given.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 711,
		name: 'Temporary Insanity',
		iconId: 15655,
		description: 'Overcome with temporary insanity. Unable to execute actions. Enmity is reset when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 712,
		name: 'Tempered Will',
		iconId: 10153,
		description: 'Immune to knockback and draw-in effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 713,
		name: 'Severe Damage',
		iconId: 15656,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 714,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 715,
		name: 'Staggered',
		iconId: 15044,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 80
	},
	{
		id: 716,
		name: 'Turbulence',
		iconId: 17241,
		description: 'Violent atmospheric disruption is causing damage over time. Increased turbulence results in increased vulnerability to Bismarck\'s magicks.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 717,
		name: 'Will of the Wind',
		iconId: 15650,
		description: 'Under the influence of the wind magicks of the so\'sanuwa.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 718,
		name: 'Will of the Water',
		iconId: 15651,
		description: 'Under the influence of the water magicks of the ul\'sanuwa.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 719,
		name: 'Whaleback',
		iconId: 15652,
		description: 'Able to deal damage to Bismarck, but susceptible to the primal\'s magicks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 720,
		name: 'Slashing Resistance Up',
		iconId: 15537,
		description: 'Slashing resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 721,
		name: 'Piercing Resistance Up',
		iconId: 15536,
		description: 'Piercing resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 722,
		name: 'Blunt Resistance Up',
		iconId: 15535,
		description: 'Blunt resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 723,
		name: 'Aetherochemical Bomb',
		iconId: 15606,
		description: 'An aetherochemical bomb is affixed to your person, and it is only a matter of time before it detonates.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 724,
		name: 'Strength Down',
		iconId: 15080,
		description: 'Strength is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 725,
		name: 'Goring Blade',
		iconId: 12507,
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 726,
		name: 'Divine Veil',
		iconId: 12508,
		description: 'Upon HP recovery via healing magic, a damage-reducing barrier is created.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 727,
		name: 'Divine Veil',
		iconId: 12509,
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 728,
		name: 'Sheltron',
		iconId: 12510,
		description: 'Next attack will be blocked.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 729,
		name: 'Deliverance',
		iconId: 12554,
		description: 'Damage dealt is increased. Using certain actions will increase your Beast Gauge.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 730,
		name: 'Abandon',
		iconId: 18321,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 731,
		name: 'Abandon II',
		iconId: 18322,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 732,
		name: 'Abandon III',
		iconId: 18323,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 733,
		name: 'Abandon IV',
		iconId: 18324,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 734,
		name: 'Uncontrollable',
		iconId: 18325,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 735,
		name: 'Raw Intuition',
		iconId: 12555,
		description: 'Damage taken is reduced and HP is restored with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 736,
		name: 'Blood of the Dragon',
		iconId: 12577,
		description: 'Potency of Jump and Spineshatter Dive are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 737,
		name: 'Ley Lines',
		iconId: 12653,
		description: 'Naturally occurring ley lines have been connected into a circle of power.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 738,
		name: 'Circle of Power',
		iconId: 12654,
		description: 'Spell cast times, recast times, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 739,
		name: 'Asylum',
		iconId: 12629,
		description: 'A veil of succor is healing party members in the area.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 740,
		name: 'Shadowskin',
		iconId: 13112,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 741,
		name: 'Scourge',
		iconId: 13101,
		description: 'Sanity is slipping, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 742,
		name: 'Blood Weapon',
		iconId: 13109,
		description: 'Absorbing MP upon landing weaponskills or spells.Enhanced Blackblood Effect: Increasing Blood Gauge upon landing weaponskills or spells.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 743,
		name: 'Grit',
		iconId: 13108,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 744,
		name: 'Dark Dance',
		iconId: 13111,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 745,
		name: 'Blood Price',
		iconId: 13110,
		description: 'Partial MP restored when damage is taken.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 746,
		name: 'Dark Mind',
		iconId: 13114,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 747,
		name: 'Shadow Wall',
		iconId: 13113,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 748,
		name: 'Delirium',
		iconId: 13102,
		description: 'Intelligence is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 749,
		name: 'Salted Earth',
		iconId: 13104,
		description: 'The ground is rendered void of all life, dealing unaspected damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 750,
		name: 'Another Victim',
		iconId: 13105,
		description: 'When target is KO\'d or effect expires, the dark knight who marked target will recover HP and MP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 751,
		name: 'Darkside',
		iconId: 13106,
		description: 'Damage dealt is increased while MP regeneration is stopped.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 752,
		name: 'Dark Arts',
		iconId: 13107,
		description: 'Potency of certain dark knight actions is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 753,
		name: 'Reprisal',
		iconId: 13103,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 754,
		name: 'Gathering Rate Up (Limited)',
		iconId: 16007,
		description: 'Chance of obtaining an item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 755,
		name: 'Gathering Fortune Up (Limited)',
		iconId: 16008,
		description: 'Chance of obtaining an HQ item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 756,
		name: 'Gathering Yield Up (Limited)',
		iconId: 16009,
		description: 'Number of items obtained on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 757,
		name: 'Scrutiny',
		iconId: 16017,
		description: 'Collectability increase is improved.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 758,
		name: 'Utmost Caution',
		iconId: 11010,
		description: 'Item wear increase reduced on next appraisal.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 759,
		name: 'Gift of the Land II',
		iconId: 16024,
		description: 'Increased chance of triggering Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 760,
		name: 'Single Mind',
		iconId: 11011,
		description: 'The next appraisal will not use a gathering attempt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 761,
		name: 'Snagging',
		iconId: 11102,
		description: 'Able to land fish and items inaccessible with normal bait or lures.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 762,
		name: 'Fish Eyes',
		iconId: 11103,
		description: 'Able to locate fish usually hidden regardless of their normal hours of activity.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 763,
		name: 'Chum',
		iconId: 11104,
		description: 'The amount of time waiting for a bite is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 764,
		name: 'Inefficient Hooking',
		iconId: 11105,
		description: 'Hook efficiency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 765,
		name: 'Catch and Release',
		iconId: 11106,
		description: 'Chance of landing fish of greater size is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 766,
		name: 'Anthropomorph',
		iconId: 15669,
		description: 'The fluid has assumed the form of a man.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 767,
		name: 'Chiromorph',
		iconId: 15670,
		description: 'The fluid has assumed the form of a hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 768,
		name: 'Anemomorph',
		iconId: 15671,
		description: 'The fluid has assumed the form of a vortex.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 769,
		name: 'Burning Chains',
		iconId: 15666,
		description: 'Red-hot chains sear the flesh on your body, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 770,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 773,
		name: 'Enliven',
		iconId: 14819,
		description: 'All action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 774,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 775,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 776,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 777,
		name: 'Blessing of the Void',
		iconId: 15753,
		description: 'A voidal barrier is nullifying damage and granting critical damage for all attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 778,
		name: 'Earthen Accord',
		iconId: 15794,
		description: 'The land is under unwavering rule.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 779,
		name: 'Out of Body',
		iconId: 15797,
		description: 'Spirit and body are temporarily disjoined.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 780,
		name: 'Resonant',
		iconId: 15795,
		description: 'Strength is transcending that of mere mortals.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 781,
		name: 'Aether Sickness',
		iconId: 15796,
		description: 'Overexposure to concentrated aether is preventing resonation.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 782,
		name: 'Unbridled',
		iconId: 15802,
		description: 'The true power of Ame-no-Habakiri is unleashed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 783,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 784,
		name: 'Voidblood',
		iconId: 15675,
		description: 'Covered in voidsent blood. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 785,
		name: 'Nymian Plague',
		iconId: 18281,
		description: 'Infected with the Nymian Plague. If not cured, you will transform into a tonberry.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 786,
		name: 'Battle Litany',
		iconId: 12578,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 787,
		name: 'Silhouette',
		iconId: 12907,
		description: 'A portion of enmity generated by a ninja is being directed to you.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 788,
		name: 'Shadewalker',
		iconId: 12908,
		description: 'A portion of enmity generated is being directed to a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 789,
		name: 'Smoke Screen',
		iconId: 12909,
		description: 'Enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 790,
		name: 'Duality',
		iconId: 12910,
		description: 'Next weaponskill will be executed multiple times.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 791,
		name: 'Dissipation',
		iconId: 12805,
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 792,
		name: 'Emergency Tactics',
		iconId: 12806,
		description: 'The next Galvanize and Catalyze statuses are transformed into HP recovery equaling the amount of damage reduction intended for their barriers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 793,
		name: 'First Chakra',
		iconId: 18301,
		description: 'The first chakra is open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 794,
		name: 'Second Chakra',
		iconId: 18302,
		description: 'The first and second chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 795,
		name: 'Third Chakra',
		iconId: 18303,
		description: 'The first, second, and third chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 796,
		name: 'Fourth Chakra',
		iconId: 18304,
		description: 'The first, second, third, and fourth chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 797,
		name: 'Fifth Chakra',
		iconId: 18305,
		description: 'The first, second, third, fourth, and fifth chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 798,
		name: 'Aero III',
		iconId: 12630,
		description: 'Swift air currents are tearing at the flesh causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 799,
		name: 'Fey Wind',
		iconId: 12807,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 800,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 801,
		name: 'Poison',
		iconId: 17001,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 802,
		name: 'Sharper Fang and Claw',
		iconId: 12579,
		description: 'Able to execute Fang and Claw.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 803,
		name: 'Enhanced Wheeling Thrust',
		iconId: 12580,
		description: 'Able to execute Wheeling Thrust.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 804,
		name: 'Vulnerability Down',
		iconId: 17301,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 805,
		name: 'Collector\'s Glove',
		iconId: 11008,
		description: 'Able to discern the location of collectables.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 806,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 807,
		name: 'Aethertrail Attunement',
		iconId: 18341,
		description: 'Aether within the body is attuned to the aethertrails left by the dreadwyrm Bahamut.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 808,
		name: 'Dreadwyrm Trance',
		iconId: 12680,
		description: 'Drawing on the power of Bahamut, increasing magic damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 809,
		name: 'Slime',
		iconId: 15609,
		description: 'Viscous discharge is hampering movement and inflicting damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 810,
		name: 'Living Dead',
		iconId: 13115,
		description: 'Unable to be KO\'d by most attacks. Status changed to Walking Dead in most cases when HP is reduced to 0.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 811,
		name: 'Walking Dead',
		iconId: 13116,
		description: 'Most attacks will not reduce HP below 1. The inability to restore 100% of HP before timer runs out will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 812,
		name: 'Magic Vulnerability Down',
		iconId: 15056,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 813,
		name: 'Dark Dance',
		iconId: 13111,
		description: 'Parry and evasion rates are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 814,
		name: 'Enhanced Unleash',
		iconId: 13117,
		description: 'Next Unleash will not require any MP to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 815,
		name: 'Enhanced Benefic II',
		iconId: 13228,
		description: 'Next Benefic II will restore critical HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 816,
		name: 'Enhanced Royal Road',
		iconId: 13210,
		description: 'Potency of the card played is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 817,
		name: 'Expanded Royal Road',
		iconId: 13211,
		description: 'Adds area of effect to next card played.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 818,
		name: 'Extended Royal Road',
		iconId: 13212,
		description: 'Duration of the card played is extended.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 819,
		name: 'Slashing Resistance Down',
		iconId: 15786,
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 820,
		name: 'Piercing Resistance Down',
		iconId: 15065,
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 821,
		name: 'Blunt Resistance Down',
		iconId: 15064,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 822,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 823,
		name: 'Seduced',
		iconId: 15552,
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 825,
		name: 'The Twelve\'s Bounty',
		iconId: 16016,
		description: 'Elemental shard\u0003�\u0001\u0003 increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 826,
		name: 'Card Drawn',
		iconId: 13201,
		description: 'An arcanum is drawn from the deck.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 827,
		name: 'Royal Road',
		iconId: 13202,
		description: 'Effect of the next card drawn will be altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 828,
		name: 'Card Held',
		iconId: 13203,
		description: 'An arcanum is being held in the spread.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 829,
		name: 'The Balance',
		iconId: 13204,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 830,
		name: 'The Bole',
		iconId: 13205,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 831,
		name: 'The Arrow',
		iconId: 13206,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 832,
		name: 'The Spear',
		iconId: 13207,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 833,
		name: 'The Ewer',
		iconId: 13208,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 834,
		name: 'The Spire',
		iconId: 13209,
		description: 'Restoring TP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 835,
		name: 'Aspected Benefic',
		iconId: 13215,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 836,
		name: 'Aspected Helios',
		iconId: 13216,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 837,
		name: 'Nocturnal Field',
		iconId: 13217,
		description: 'An astromantic field is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 838,
		name: 'Combust',
		iconId: 13213,
		description: 'Proximity of a theoretical sun is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 839,
		name: 'Diurnal Sect',
		iconId: 13218,
		description: 'A Regen effect is added to certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 840,
		name: 'Nocturnal Sect',
		iconId: 13219,
		description: 'A damage-nullifying barrier effect is added to certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 841,
		name: 'Lightspeed',
		iconId: 13220,
		description: 'Spell casting time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 842,
		name: 'Luminiferous Aether',
		iconId: 13221,
		description: 'Restoring MP over time while enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 843,
		name: 'Combust II',
		iconId: 13214,
		description: 'Proximity of a theoretical sun is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 844,
		name: 'Disabled',
		iconId: 13222,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 845,
		name: 'Synastry',
		iconId: 13223,
		description: 'An aetheric bond is created with a party member. Each time a single-target healing spell is cast, that member will recover partial HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 846,
		name: 'Synastry',
		iconId: 13224,
		description: 'An aetheric bond is created with a party astrologian. Each time a single-target healing spell is cast by the astrologian, you will recover partial HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 847,
		name: 'Collective Unconscious',
		iconId: 13227,
		description: 'An area of mind attunement is healing party members.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 848,
		name: 'Collective Unconscious',
		iconId: 13227,
		description: 'An area of mind attunement is created, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 849,
		name: 'Collective Unconscious',
		iconId: 13226,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 850,
		name: 'Angler\'s Fortune',
		iconId: 16023,
		description: 'Chance of landing a large-sized catch while fishing is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 851,
		name: 'Reassembled',
		iconId: 13001,
		description: 'Next weaponskill will result in a critical direct hit.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 852,
		name: 'Promotion',
		iconId: 13002,
		description: 'Autoturret auto-attack mode is disabled.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 853,
		name: 'Rapid Fire',
		iconId: 13003,
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 854,
		name: 'Lead Shot',
		iconId: 13007,
		description: 'Poisonous lead slowly spreads through the bloodstream, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 855,
		name: 'Hot Shot',
		iconId: 13005,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 856,
		name: 'Enhanced Slug Shot',
		iconId: 13004,
		description: 'Potency of next Slug Shot is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 857,
		name: 'Cleaner Shot',
		iconId: 13006,
		description: 'Potency of next Clean Shot is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 858,
		name: 'Gauss Barrel',
		iconId: 13010,
		description: 'A gauss barrel is attached to the firearm, increasing attack power but adding cast times to machinist weaponskills.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 859,
		name: 'Rent Mind',
		iconId: 13008,
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 860,
		name: 'Dismantled',
		iconId: 13009,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 861,
		name: 'Wildfire',
		iconId: 13011,
		description: 'Damage is being accumulated with each weaponskill landed by the machinist who applied the effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 862,
		name: 'Ammunition Loaded',
		iconId: 18401,
		description: 'Firearm is loaded with special ammunition.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 863,
		name: 'Land Waker',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 864,
		name: 'Dark Force',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 865,
		name: 'The Wanderer\'s Minuet',
		iconId: 12610,
		description: 'Damage dealt is increased while cast time is added to all archer and bard weaponskills.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 866,
		name: 'The Warden\'s Paean',
		iconId: 12611,
		description: 'Impervious to the next enfeeblement.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 867,
		name: 'Sharpcast',
		iconId: 12655,
		description: 'Next Scathe, Fire, or Thunder spell cast will trigger enhanced status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 868,
		name: 'Enochian',
		iconId: 12656,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 869,
		name: 'Carnal Chill',
		iconId: 14818,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 870,
		name: 'Push Back',
		iconId: 14817,
		description: 'Countering any physical attacks and reflecting next knockback effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 871,
		name: 'Name of the Elements',
		iconId: 16122,
		description: 'Efficiency of Brand of the Elements is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 877,
		name: 'Nameless',
		iconId: 16117,
		description: 'Unable to recite the Name of the Elements.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 878,
		name: 'Maker\'s Mark',
		iconId: 11653,
		description: 'Flawless Synthesis CP cost and durability loss is reduced to zero.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 879,
		name: 'Crafter\'s Soul',
		iconId: 16118,
		description: 'Chances of material condition becoming good are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 880,
		name: 'Whistle',
		iconId: 18361,
		description: 'Synthesis-related effects granted based on stack size.',
		category: 1,
		isPermanent: false,
		maxStacks: 11,
		partyListPriority: 0
	},
	{
		id: 893,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 894,
		name: 'Wind Resistance Down',
		iconId: 18201,
		description: 'Resistance to wind damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 895,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 896,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 897,
		name: 'Regen',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 898,
		name: 'Lightning Resistance Down',
		iconId: 17741,
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 50
	},
	{
		id: 899,
		name: 'Physical Vulnerability Down',
		iconId: 15052,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 900,
		name: 'Temporal Displacement',
		iconId: 15579,
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 901,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 902,
		name: 'Jackpot',
		iconId: 16519,
		description: 'MGP earned at Gold Saucer attractions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 903,
		name: 'Collectable Synthesis',
		iconId: 16116,
		description: 'Creating collectables.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 904,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 905,
		name: 'Thin Ice',
		iconId: 17661,
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 906,
		name: 'Darkness',
		iconId: 17061,
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 907,
		name: 'Arcanum Blessing',
		iconId: 17061,
		description: 'HP restored via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 908,
		name: 'Aethertrail Attunement',
		iconId: 17061,
		description: 'Aether within the body is near completely attuned to the aethertrails left by the dreadwyrm Bahamut. When attunement reaches 6, you will enter the Dreadwyrm Trance.',
		category: 1,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 909,
		name: 'Refresh',
		iconId: 10408,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 910,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 911,
		name: 'Thin Ice',
		iconId: 15615,
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 912,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 913,
		name: 'Balance Drawn',
		iconId: 13229,
		description: 'The Balance card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 914,
		name: 'Bole Drawn',
		iconId: 13230,
		description: 'The Bole card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 915,
		name: 'Arrow Drawn',
		iconId: 13231,
		description: 'The Arrow card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 916,
		name: 'Spear Drawn',
		iconId: 13232,
		description: 'The Spear card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 917,
		name: 'Ewer Drawn',
		iconId: 13233,
		description: 'The Ewer card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 918,
		name: 'Spire Drawn',
		iconId: 13234,
		description: 'The Spire card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 919,
		name: 'Heightened Visibility',
		iconId: 15676,
		description: 'Able to see and attack concealed targets.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 920,
		name: 'Balance Held',
		iconId: 13235,
		description: 'The Balance card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 921,
		name: 'Bole Held',
		iconId: 13236,
		description: 'The Bole card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 922,
		name: 'Arrow Held',
		iconId: 13237,
		description: 'The Arrow card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 923,
		name: 'Spear Held',
		iconId: 13238,
		description: 'The Spear card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 924,
		name: 'Ewer Held',
		iconId: 13239,
		description: 'The Ewer card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 925,
		name: 'Spire Held',
		iconId: 13240,
		description: 'The Spire card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 926,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 927,
		name: 'Nectar',
		iconId: 15583,
		description: 'Your entire body is covered in sweet-smelling nectar.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 928,
		name: 'Black Menace',
		iconId: 15503,
		description: 'The beast is overtaken with madness.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 929,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 930,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 931,
		name: 'Blunt Resistance Down',
		iconId: 17701,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 932,
		name: 'Quarantine',
		iconId: 15677,
		description: 'You are separated from your allies.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 933,
		name: 'Healing Potency Down',
		iconId: 15059,
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 934,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 937,
		name: 'Unwilling Host',
		iconId: 15680,
		description: 'A parasite has entered the body and taken control of all motor skills. Parasite is passed via direct contact with other players.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 938,
		name: 'Throttle',
		iconId: 15665,
		description: 'Windpipe is crushed. KO is imminent.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 939,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 940,
		name: 'Bleeding',
		iconId: 17121,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 941,
		name: 'Ranged Resistance',
		iconId: 15681,
		description: 'Invulnerable to ranged attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 942,
		name: 'Magic Resistance',
		iconId: 15682,
		description: 'Invulnerable to magic attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 943,
		name: 'Light of Ascalon',
		iconId: 18241,
		description: 'Strengthened by the power of the dragon\'s eye imbued within the holy blade.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 944,
		name: 'Sword of the Heavens',
		iconId: 15668,
		description: 'Damage dealt by self and nearby allies is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 945,
		name: 'Shield of the Heavens',
		iconId: 15667,
		description: 'Damage taken by self and all nearby allies is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 946,
		name: 'Legs of the Spider',
		iconId: 15679,
		description: 'Physical form is changed to that of a spider.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 947,
		name: 'Wings of the Raptor',
		iconId: 15678,
		description: 'Physical form is changed to that of a bird of prey.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 948,
		name: 'Shocking Counter',
		iconId: 15684,
		description: 'Countering all attacks with lightning damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 949,
		name: 'Burning Counter',
		iconId: 15685,
		description: 'Countering all attacks with fire damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 950,
		name: 'Freezing Counter',
		iconId: 15686,
		description: 'Countering all attacks with ice damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 951,
		name: 'Cutting Counter',
		iconId: 15687,
		description: 'Countering all attacks with wind damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 952,
		name: 'Burying Counter',
		iconId: 15688,
		description: 'Countering all attacks with earth damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 953,
		name: 'Drowning Counter',
		iconId: 15689,
		description: 'Countering all attacks with water damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 954,
		name: 'Unrelenting Counter',
		iconId: 15690,
		description: 'Countering all attacks with unaspected damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 955,
		name: 'Healing Potency Up',
		iconId: 15058,
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 956,
		name: 'Wheel of Fortune',
		iconId: 13225,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 957,
		name: 'Digestive Enzymes',
		iconId: 18421,
		description: 'Corrosive enzymes cover your body, increasing damage sustained by Devoured status.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 958,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any enemy you wander near will become marked in your stead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 959,
		name: 'Strings of the Marionette',
		iconId: 15669,
		description: 'Physical form is changed to that of a doll.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 960,
		name: 'Pyretic',
		iconId: 15647,
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 961,
		name: 'Seized',
		iconId: 15564,
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 962,
		name: 'ATK Up',
		iconId: 15050,
		description: 'ATK is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 963,
		name: 'ATK Down',
		iconId: 15051,
		description: 'ATK is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 964,
		name: 'DEF Up',
		iconId: 15052,
		description: 'DEF is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 965,
		name: 'DEF Down',
		iconId: 15053,
		description: 'DEF is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 966,
		name: 'SPD Up',
		iconId: 15062,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 967,
		name: 'SPD Down',
		iconId: 15063,
		description: 'Movement speed is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 968,
		name: 'Arcana Breaker',
		iconId: 16206,
		description: 'Dealing extra damage to Arcana Stones.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 969,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 970,
		name: 'Critter Resistance',
		iconId: 16601,
		description: 'Invulnerable to damage dealt by critter-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 971,
		name: 'Monster Resistance',
		iconId: 16602,
		description: 'Invulnerable to damage dealt by monster-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 972,
		name: 'Poppet Resistance',
		iconId: 16603,
		description: 'Invulnerable to damage dealt by poppet-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 973,
		name: 'Gadget Resistance',
		iconId: 16604,
		description: 'Invulnerable to damage dealt by gadget-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 974,
		name: 'Critter Vulnerability',
		iconId: 16605,
		description: 'Suffering extra damage from critter-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 975,
		name: 'Monster Vulnerability',
		iconId: 16606,
		description: 'Suffering extra damage from monster-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 976,
		name: 'Poppet Vulnerability',
		iconId: 16607,
		description: 'Suffering extra damage from poppet-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 977,
		name: 'Forced Withdrawal',
		iconId: 15607,
		description: 'Readying withdrawal from the playing field.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 978,
		name: 'ATK & DEF Up',
		iconId: 15050,
		description: 'ATK and DEF are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 979,
		name: 'Damage Over Time',
		iconId: 15007,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 980,
		name: 'Expanded Attack',
		iconId: 15641,
		description: 'Auto-attacks reach all nearby enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 981,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 982,
		name: 'Critter Resistance',
		iconId: 15024,
		description: 'Invulnerable to damage dealt by critter-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 983,
		name: 'Monster Resistance',
		iconId: 15024,
		description: 'Invulnerable to damage dealt by monster-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 984,
		name: 'Poppet Resistance',
		iconId: 15024,
		description: 'Invulnerable to damage dealt by poppet-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 985,
		name: 'Gadget Resistance',
		iconId: 15024,
		description: 'Invulnerable to damage dealt by gadget-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 986,
		name: 'Bind',
		iconId: 15609,
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 987,
		name: 'Trapper',
		iconId: 16609,
		description: 'Readying trap.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 988,
		name: 'Paralysis',
		iconId: 15006,
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 989,
		name: 'Rehabilitation',
		iconId: 17521,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 990,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 991,
		name: 'Seduced',
		iconId: 15552,
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 992,
		name: 'Offense Kit',
		iconId: 15719,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 993,
		name: 'Defense Kit',
		iconId: 15720,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 98
	},
	{
		id: 994,
		name: 'Marked for Culling',
		iconId: 18621,
		description: 'Damage taken is increased. The greater the stack, the higher the increase.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 995,
		name: 'Headache',
		iconId: 18521,
		description: 'Suffering mild head trauma. Damage dealt is reduced. Increased trauma results in a Concussion.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 996,
		name: 'Concussion',
		iconId: 15712,
		description: 'Suffering severe head trauma. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 997,
		name: 'Concussion',
		iconId: 15712,
		description: 'Suffering severe head trauma. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 998,
		name: 'Bigbulge Goblixer',
		iconId: 15713,
		description: 'Transformed into a sasquatch and only able to execute the action Browbeat.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 999,
		name: 'Swiftkicks Goblixer',
		iconId: 15714,
		description: 'Transformed into a vulture and only able to execute the action Wing Cutter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1000,
		name: 'Blankface Goblixer',
		iconId: 15715,
		description: 'Unable to be readily detected by sight.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1001,
		name: 'Goblixer Overgulp',
		iconId: 18541,
		description: 'Overdosed on goblixers. Side effects will emerge if stack increases.',
		category: 2,
		isPermanent: false,
		maxStacks: 12,
		partyListPriority: 100
	},
	{
		id: 1002,
		name: 'Goblixer Grumblygut',
		iconId: 15717,
		description: 'Experiencing side effects from overconsumption of goblixers.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1003,
		name: 'Bigbulge Biggerbrain',
		iconId: 15718,
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1004,
		name: 'Anti-coagulant',
		iconId: 18561,
		description: 'Wounds are bleeding, causing damage over time. Overexposure to anti-coagulant will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1005,
		name: 'Force Against Might',
		iconId: 15709,
		description: 'Physical damage taken is significantly reduced while magic damage taken is significantly increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1006,
		name: 'Force Against Magic',
		iconId: 15710,
		description: 'Magic damage taken is significantly reduced while physical damage taken is significantly increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1007,
		name: 'Invisible',
		iconId: 15642,
		description: 'Unable to be detected by sight.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1008,
		name: 'Nohurts Goblixer',
		iconId: 15716,
		description: 'Removing anti-coagulant from blood while regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1009,
		name: 'Road to Toad',
		iconId: 18641,
		description: 'Slowly transforming into a toad. Process accelerates as stack increases.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 1010,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1011,
		name: 'Concentrated Poison',
		iconId: 18581,
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic and actions is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 1012,
		name: 'High Wire',
		iconId: 18601,
		description: 'Heightened excitement is causing actions to become erratic.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1013,
		name: 'Reverse',
		iconId: 15691,
		description: 'The effects of white magicks have been reversed from beneficial to corrupting.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1014,
		name: 'Rehabilitation',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1015,
		name: 'Seed of Life',
		iconId: 18661,
		description: 'Each stacked seed staves off the hands of death.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1016,
		name: 'Damage Down',
		iconId: 18441,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1017,
		name: 'Physical Damage Up',
		iconId: 15050,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1018,
		name: 'Physical Damage Up',
		iconId: 18461,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1019,
		name: 'Magic Damage Up',
		iconId: 18481,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1020,
		name: 'Allied Arithmeticks',
		iconId: 15693,
		description: 'Increasing attributes by an amount calculated using the number of nearby allies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1021,
		name: 'Low Arithmeticks',
		iconId: 15694,
		description: 'Vulnerable to damage while on low ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1022,
		name: 'High Arithmeticks',
		iconId: 15695,
		description: 'Vulnerable to damage while on high ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1023,
		name: 'Compressed Water',
		iconId: 15696,
		description: 'Highly compressed aetherial energy covers the body. Water-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1024,
		name: 'Compressed Lightning',
		iconId: 15697,
		description: 'Highly compressed aetherial energy covers the body. Lightning-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1025,
		name: 'Water Resistance Down II',
		iconId: 15698,
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1026,
		name: 'Lightning Resistance Down II',
		iconId: 15597,
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1027,
		name: 'Final Punishment',
		iconId: 18501,
		description: 'Sentenced to public flogging. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 199
	},
	{
		id: 1028,
		name: 'Direct Attack',
		iconId: 15652,
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1029,
		name: 'Final Decree Nisi A',
		iconId: 15699,
		description: 'Decree Nisi A is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 1030,
		name: 'Final Decree Nisi B',
		iconId: 15700,
		description: 'Decree Nisi B is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 1031,
		name: 'Final Judgment: Max HP',
		iconId: 15701,
		description: 'Sentenced to receive increased HP. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1032,
		name: 'Final Judgment: Min HP',
		iconId: 15702,
		description: 'Sentenced to receive reduced HP. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1033,
		name: 'Final Judgment: Penalty I',
		iconId: 15703,
		description: 'Sentenced to receive enfeeblement I. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1034,
		name: 'Final Judgment: Penalty II',
		iconId: 15704,
		description: 'Sentenced to receive enfeeblement II. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1035,
		name: 'Final Judgment: Penalty III',
		iconId: 15705,
		description: 'Sentenced to receive enfeeblement III. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1036,
		name: 'Final Judgment: Decree Nisi A',
		iconId: 15706,
		description: 'Sentenced to receive Decree Nisi A. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1037,
		name: 'Final Judgment: Decree Nisi B',
		iconId: 15707,
		description: 'Sentenced to receive Decree Nisi B. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1038,
		name: 'Final Flight',
		iconId: 15708,
		description: 'Damage taken from J Storm is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 1039,
		name: 'Brilliant Conviction',
		iconId: 15711,
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1040,
		name: 'Brilliant Conviction',
		iconId: 15711,
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1041,
		name: 'Brilliant Conviction',
		iconId: 15711,
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1042,
		name: 'Direct Attack',
		iconId: 15652,
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1043,
		name: 'Direct Attack',
		iconId: 15652,
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1044,
		name: 'Magnetic Levitation',
		iconId: 15037,
		description: 'Hovering above the ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1045,
		name: 'Gradual Zombification',
		iconId: 15728,
		description: 'Slowly transforming into a brain-craving zombie.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 1046,
		name: 'Concentrated Poison',
		iconId: 18581,
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 1047,
		name: 'Confused',
		iconId: 15603,
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1048,
		name: 'Direct Attack',
		iconId: 15652,
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1049,
		name: 'Pyretic',
		iconId: 15647,
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1050,
		name: 'EXP Bonus',
		iconId: 16222,
		description: 'Receiving a mentor/new adventurer/returner party bonus.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1051,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1052,
		name: 'Wind Resistance Down II',
		iconId: 15721,
		description: 'Wind resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1053,
		name: 'Earth Resistance Down II',
		iconId: 15722,
		description: 'Earth resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1054,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1055,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1056,
		name: 'Mimic',
		iconId: 16583,
		description: 'Repeating any ability or item used by forerunning chocobos.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1057,
		name: 'Feather Field',
		iconId: 16584,
		description: 'Effects inflicted by other chocobos\' fields are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1058,
		name: 'Super Sprint',
		iconId: 16585,
		description: 'Sprinting until all stamina is spent.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1059,
		name: 'Enervation',
		iconId: 15040,
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1060,
		name: 'Silence',
		iconId: 15005,
		description: 'A stifling magic is preventing casts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1061,
		name: 'Priority Aetheryte Pass',
		iconId: 16512,
		description: 'Aetheryte teleportation fees are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1062,
		name: 'Heavy Medal',
		iconId: 18681,
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 200
	},
	{
		id: 1063,
		name: 'Healing Potency Down',
		iconId: 15059,
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1064,
		name: 'Off-balance',
		iconId: 15723,
		description: 'The next attack suffered will result in knockback.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1065,
		name: 'Brand of the Fallen',
		iconId: 15729,
		description: 'Damage taken is increased the further those branded are from each other.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1066,
		name: 'Bitter Hate',
		iconId: 18701,
		description: 'Suffering the mind-rending effects of Nidhogg\'s raw fury. A stack of 8 will result in extreme damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1067,
		name: 'Dirty Venom',
		iconId: 17001,
		description: 'Dark poisons course through your veins, reducing damage dealt and maximum HP.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 100
	},
	{
		id: 1068,
		name: 'Assimilation',
		iconId: 18721,
		description: 'Eye contact with the enemy is resulting in gradual assimilation of body and mind.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 1069,
		name: 'Assimilated',
		iconId: 15724,
		description: 'Completely assimilated with the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1070,
		name: 'Cube',
		iconId: 15725,
		description: 'Damage taken is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1071,
		name: 'Pyramid',
		iconId: 15726,
		description: 'Evasion is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1072,
		name: 'Acceleration Bomb',
		iconId: 15727,
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1073,
		name: 'Digestive Fluid',
		iconId: 15609,
		description: 'Highly corrosive acid is reducing movement speed while causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1074,
		name: 'Bleeding',
		iconId: 17121,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 1075,
		name: 'Heart of Man',
		iconId: 15731,
		description: 'Nidhogg has taken the form of a man.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1076,
		name: 'Heart of Dragon',
		iconId: 15732,
		description: 'Nidhogg has taken his true form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1077,
		name: 'Lightning Chain',
		iconId: 15733,
		description: 'Bound by searing chains causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1078,
		name: 'Priority Seal Allowance',
		iconId: 16518,
		description: 'Company seals earned are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1079,
		name: 'Gold Saucer VIP Card',
		iconId: 16519,
		description: 'MGP earned at Gold Saucer attractions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1080,
		name: 'Squadron Battle Manual',
		iconId: 16513,
		description: 'EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1081,
		name: 'Squadron Survival Manual',
		iconId: 16515,
		description: 'EXP earned through gathering is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1082,
		name: 'Squadron Engineering Manual',
		iconId: 16516,
		description: 'EXP earned through crafting is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1083,
		name: 'Squadron Spiritbonding Manual',
		iconId: 16509,
		description: 'Spiritbonding speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1084,
		name: 'Squadron Rationing Manual',
		iconId: 16508,
		description: 'Food effect duration is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1085,
		name: 'Squadron Gear Maintenance Manual',
		iconId: 16510,
		description: 'Gear wear is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1086,
		name: 'Squadron Enlistment Manual',
		iconId: 16223,
		description: 'Squadron recruit enlistment chance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1087,
		name: 'Accursed Pox',
		iconId: 16821,
		description: 'Humours are corrupted, causing damage over time. HP regeneration has also stopped and damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1088,
		name: 'Blind',
		iconId: 15012,
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1089,
		name: 'HP Penalty',
		iconId: 15076,
		description: 'Maximum HP is decreased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1090,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1091,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1092,
		name: 'Amnesia',
		iconId: 15015,
		description: 'Unable to use abilities.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1093,
		name: 'HP & MP Boost',
		iconId: 15085,
		description: 'Maximum HP and MP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1094,
		name: 'Item Penalty',
		iconId: 16822,
		description: 'Unable to use items or pomanders.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1095,
		name: 'Sprint Penalty',
		iconId: 16823,
		description: 'Unable to sprint.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1096,
		name: 'Knockback Penalty',
		iconId: 16824,
		description: 'Unable to use knockback and draw-in effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1097,
		name: 'Auto-heal Penalty',
		iconId: 16825,
		description: 'HP regeneration has stopped.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1098,
		name: 'Aetherial Surge',
		iconId: 15746,
		description: 'Releasing excess aether.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1099,
		name: 'Healing Potency Up',
		iconId: 15058,
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1100,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1101,
		name: 'Toad',
		iconId: 15580,
		description: 'Transformed into a toad.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1102,
		name: 'Chicken',
		iconId: 15640,
		description: 'Transformed into a chicken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1103,
		name: 'Imp',
		iconId: 15043,
		description: 'Transformed into an imp.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1104,
		name: 'Obfuscated',
		iconId: 16209,
		description: 'An obfuscation charm is hiding you from enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1105,
		name: 'Pumpkin',
		iconId: 15751,
		description: 'Transformed into a pumpkin.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1106,
		name: 'Obfuscated',
		iconId: 16209,
		description: 'Hidden from enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1107,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1108,
		name: 'Hidden',
		iconId: 10607,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1109,
		name: 'Impervious',
		iconId: 16224,
		description: 'Impervious to all but select attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1110,
		name: 'Clawbound',
		iconId: 15734,
		description: 'Your body is bound to Nidhogg\'s claw. Any damage taken also results in damage to the claw.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1111,
		name: 'Fangbound',
		iconId: 15735,
		description: 'Your body is bound to Nidhogg\'s fang. Any damage taken heals the fang.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1112,
		name: 'Movement Speed Up',
		iconId: 10101,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1113,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1114,
		name: 'Disease',
		iconId: 15014,
		description: 'Movement speed and HP recovery via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1115,
		name: 'Eternal Doom',
		iconId: 15745,
		description: 'Zombification when counter reaches zero or upon KO. KO does not remove zombification.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1116,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1117,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1118,
		name: 'Passenger',
		iconId: 15743,
		description: 'Riding a moving object.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1119,
		name: 'Temporal Displacement',
		iconId: 15579,
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1120,
		name: 'Defamation',
		iconId: 15738,
		description: 'You are convicted with defamation.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1121,
		name: 'Aggravated Assault',
		iconId: 15739,
		description: 'You are convicted with aggravated assault.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1122,
		name: 'Shared Sentence',
		iconId: 15740,
		description: 'You are convicted for a crime committed by you and your peers.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1123,
		name: 'House Arrest',
		iconId: 15741,
		description: 'You are ordered to remain bound to another party.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1124,
		name: 'Restraining Order',
		iconId: 15742,
		description: 'You are ordered to remain separated from another party.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1125,
		name: 'Directional Invincibility',
		iconId: 15744,
		description: 'Invulnerable to all damage taken from a certain direction.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1126,
		name: 'Main Hull Reassembly',
		iconId: 18741,
		description: 'Repairing main hull.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1127,
		name: 'Right Arm Reassembly',
		iconId: 18761,
		description: 'Repairing right arm.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1128,
		name: 'Left Arm Reassembly',
		iconId: 18781,
		description: 'Repairing left arm.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1129,
		name: 'Main Hull Operational',
		iconId: 15748,
		description: 'Main hull repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1130,
		name: 'Right Arm Operational',
		iconId: 15749,
		description: 'Right arm repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1131,
		name: 'Left Arm Operational',
		iconId: 15750,
		description: 'Left arm repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1132,
		name: 'Extreme Caution',
		iconId: 15747,
		description: 'A penalty will be assessed for any action, auto-attack, or movement taken after status ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1133,
		name: 'Pyretic',
		iconId: 15647,
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1134,
		name: 'Imp',
		iconId: 15043,
		description: 'Transformed into an imp and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1135,
		name: 'Sunseal',
		iconId: 15737,
		description: 'Marked with the sunseal.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1136,
		name: 'Moonseal',
		iconId: 15736,
		description: 'Marked with the moonseal.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1137,
		name: 'Fire Resistance Down II',
		iconId: 15595,
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1138,
		name: 'Magic Vulnerability Up',
		iconId: 15057,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1139,
		name: 'Physical Damage Up',
		iconId: 15519,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1140,
		name: 'Raise',
		iconId: 10406,
		description: 'Teetering on the brink of consciousness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1141,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1142,
		name: 'Aetherial Surge',
		iconId: 15746,
		description: 'Releasing excess aether.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1143,
		name: 'Infinite Fire',
		iconId: 15758,
		description: 'Marked with fire.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1144,
		name: 'Infinite Ice',
		iconId: 15759,
		description: 'Marked with ice.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1145,
		name: 'Keen Edge',
		iconId: 15754,
		description: 'Sustaining damage over time in exchange for dealing increased damage to targets.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1146,
		name: 'Riled',
		iconId: 15755,
		description: 'Damage dealt is increased and restoring HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1147,
		name: 'Shadow Links',
		iconId: 15756,
		description: 'Sustaining damage over time. Movement speed is also decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1148,
		name: 'Shadow Limb',
		iconId: 15757,
		description: 'A shadowy appendage has sprouted from Scathach\'s body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1149,
		name: 'Wolf\'s Heart Kit',
		iconId: 15752,
		description: 'Movement speed is increased while restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1150,
		name: 'Deep Freeze',
		iconId: 15637,
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1151,
		name: 'Fae Cloak',
		iconId: 16209,
		description: 'An enchantment is preventing detection by fae creatures.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1152,
		name: 'Darksight',
		iconId: 16207,
		description: 'Able to see with little illumination.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1153,
		name: 'Fetters',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1154,
		name: 'Beastking\'s Boon',
		iconId: 15760,
		description: 'Receiving the boon of the Beastking, Buer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1155,
		name: 'Aetherial Enhancement',
		iconId: 15761,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1156,
		name: 'Magic Damage Up',
		iconId: 18481,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1157,
		name: 'Water Resistance Down II',
		iconId: 15698,
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1158,
		name: 'Nose for Battle',
		iconId: 15762,
		description: 'Detecting a skirmish nearby.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1159,
		name: 'Infinite Anguish',
		iconId: 15643,
		description: 'Sustaining damage over time and damage taken from attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1160,
		name: 'Enfeebled',
		iconId: 15517,
		description: 'Enfeebling elixir has corrupted the humours, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1161,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1162,
		name: 'Infinite Anguish',
		iconId: 15643,
		description: 'Sustaining damage over time and damage taken from attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1163,
		name: 'Stroke of Genius',
		iconId: 16119,
		description: 'Maximum CP is increased by 15.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1164,
		name: 'Manipulation',
		iconId: 11651,
		description: 'Receiving 5 points of durability after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1165,
		name: 'Initial Preparations',
		iconId: 16121,
		description: 'CP consumption may be reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1166,
		name: 'Fathom',
		iconId: 11107,
		description: 'Able to locate teeming waters suitable for spearfishing.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1167,
		name: 'Shark Eye',
		iconId: 11108,
		description: 'Surveying the waters for the nearest teeming waters.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1168,
		name: 'Shark Eye II',
		iconId: 11109,
		description: 'Surveying the waters for the highest-level teeming waters.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1169,
		name: 'Veteran Trade',
		iconId: 11110,
		description: 'Fish of a certain type are now aware of your presence and have left the area.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1170,
		name: 'Bountiful Catch',
		iconId: 11111,
		description: 'Number of items obtained on your next gigging attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1171,
		name: 'Nature\'s Bounty',
		iconId: 11112,
		description: 'Chance of landing large-sized fish is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1172,
		name: 'Salvage',
		iconId: 11113,
		description: 'Able to discover treasure maps.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1173,
		name: 'Truth of Oceans',
		iconId: 11114,
		description: 'Able to locate swimming shadows.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1174,
		name: 'Intervention',
		iconId: 12511,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1175,
		name: 'Passage of Arms',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1176,
		name: 'Arms Up',
		iconId: 12513,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1177,
		name: 'Inner Release',
		iconId: 17247,
		description: 'Beast Gauge consumption is reduced to 0. All weaponskill attacks are both critical and direct hits. All Stun, Sleep, Bind, Heavy, and most knockback and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1178,
		name: 'Blackest Night',
		iconId: 13118,
		description: 'An all-encompassing darkness is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1179,
		name: 'Riddle of Earth',
		iconId: 17271,
		description: 'Contemplating the riddle of earth. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1180,
		name: 'Earth\'s Reply',
		iconId: 12531,
		description: 'Damage taken is reduced and all action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1181,
		name: 'Riddle of Fire',
		iconId: 12528,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1182,
		name: 'Meditative Brotherhood',
		iconId: 12529,
		description: 'Grants chance to open a chakra to the monk who applied the effect when a weaponskill is used or a spell is cast by any affected party member or self.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1183,
		name: 'Right Eye',
		iconId: 12581,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1184,
		name: 'Left Eye',
		iconId: 12582,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1185,
		name: 'Brotherhood',
		iconId: 12532,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1186,
		name: 'Ten Chi Jin',
		iconId: 12911,
		description: 'Able to execute ninjutsu in succession.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1187,
		name: 'Troubadour\'s Ballad',
		iconId: 12612,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1188,
		name: 'Critical Up',
		iconId: 12613,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1189,
		name: 'Troubadour\'s Paeon',
		iconId: 12614,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1190,
		name: 'Troubadour\'s Minuet',
		iconId: 12615,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1191,
		name: 'Rampart',
		iconId: 13911,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1192,
		name: 'Convalescence',
		iconId: 13912,
		description: 'HP recovery via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1193,
		name: 'Reprisal',
		iconId: 13901,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1194,
		name: 'Anticipation',
		iconId: 13902,
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1195,
		name: 'Feint',
		iconId: 13904,
		description: 'Physical and magic damage are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1196,
		name: 'Palisade',
		iconId: 13905,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1197,
		name: 'Tactician',
		iconId: 13906,
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1198,
		name: 'Refresh',
		iconId: 13907,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1199,
		name: 'Peloton',
		iconId: 13908,
		description: 'Movement speed is increased. Effect ends upon entering battle.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1200,
		name: 'Caustic Bite',
		iconId: 12616,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1201,
		name: 'Stormbite',
		iconId: 12617,
		description: 'Wounds are exposed to the elements, causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1202,
		name: 'Nature\'s Minne',
		iconId: 12618,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1203,
		name: 'Addle',
		iconId: 13917,
		description: 'Physical and magic damage are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1204,
		name: 'Lucid Dreaming',
		iconId: 13909,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1205,
		name: 'Flamethrower',
		iconId: 13017,
		description: 'Emitting a gout of searing flames in a cone before you, dealing damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1206,
		name: 'Wheel of Fortune',
		iconId: 13226,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1207,
		name: 'Largesse',
		iconId: 13910,
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1208,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1209,
		name: 'Arm\'s Length',
		iconId: 13915,
		description: 'Slowing enemies when attacked. Immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1210,
		name: 'Thunder IV',
		iconId: 12657,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1211,
		name: 'Triplecast',
		iconId: 19621,
		description: 'Spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1212,
		name: 'Further Ruin',
		iconId: 19481,
		description: 'Able to cast Ruin IV.',
		category: 1,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 1213,
		name: 'Devotion',
		iconId: 12681,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1214,
		name: 'Bio III',
		iconId: 12682,
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1215,
		name: 'Miasma III',
		iconId: 12683,
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1216,
		name: 'Load-bearing',
		iconId: 16246,
		description: 'Carrying a weighty burden and growing wearier with each passing second.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1217,
		name: 'Thin Air',
		iconId: 12631,
		description: 'Next spell cast consumes no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1218,
		name: 'Divine Benison',
		iconId: 12632,
		description: 'A holy blessing from the gods is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1219,
		name: 'Confession',
		iconId: 12637,
		description: 'Sins are confessed. Ready for Plenary Indulgence.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1220,
		name: 'Excogitation',
		iconId: 12808,
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1221,
		name: 'Chain Stratagem',
		iconId: 12809,
		description: 'Rate at which critical hits are taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1222,
		name: 'Fey Union',
		iconId: 12810,
		description: 'Allowing regeneration of HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1223,
		name: 'Fey Union',
		iconId: 12811,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1224,
		name: 'Earthly Dominance',
		iconId: 13241,
		description: 'An earthly star is in your control.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1225,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1226,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1227,
		name: 'Yukikaze',
		iconId: 13303,
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1228,
		name: 'Higanbana',
		iconId: 13304,
		description: 'Open wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1229,
		name: 'Kaiten',
		iconId: 13305,
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1230,
		name: 'Recuperation',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1231,
		name: 'Meditate',
		iconId: 13306,
		description: 'Storing Kenki.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1232,
		name: 'Third Eye',
		iconId: 13307,
		description: 'Next damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1233,
		name: 'Meikyo Shisui',
		iconId: 19641,
		description: 'Combo prerequisites are met.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1234,
		name: 'Verfire Ready',
		iconId: 13402,
		description: 'Able to cast Verfire.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1235,
		name: 'Verstone Ready',
		iconId: 13403,
		description: 'Able to cast Verstone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1236,
		name: 'Enhanced Enpi',
		iconId: 13310,
		description: 'Next Enpi will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1237,
		name: 'Enhanced Scatter',
		iconId: 13404,
		description: 'Next Scatter will store increased black and white mana.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1238,
		name: 'Acceleration',
		iconId: 13405,
		description: 'Next Verthunder III, Veraero III�DVerthunder, Veraero\u0003�DVerthunder, Veraero\u0003, or Impact� Scatter\u0003� Scatter\u0003 can be cast immediately.Potency of Impact� Scatter\u0003� Scatter\u0003 is increased, and Verthunder III and Veraero III�GVerthunder and Veraero\u0003�GVerthunder and Veraero\u0003 trigger Verfire Ready or Verstone Ready respectively.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1239,
		name: 'Embolden',
		iconId: 13409,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1240,
		name: 'Chiten',
		iconId: 14820,
		description: 'Damage taken is reduced while countering any physical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1241,
		name: 'Monomachy',
		iconId: 14821,
		description: 'Damage dealt to target is increased while damage taken from target is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1242,
		name: 'Monomachy',
		iconId: 14822,
		description: 'Damage dealt to target red mage is decreased while damage taken from target red mage is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1243,
		name: 'Dive Ready',
		iconId: 12583,
		description: 'Able to execute Mirage Dive.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1244,
		name: 'Riddle of Wind',
		iconId: 12530,
		description: 'Able to execute Riddle of Wind.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1247,
		name: 'Diurnal Balance',
		iconId: 13254,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1248,
		name: 'Giant Dominance',
		iconId: 13242,
		description: 'An earthly star is in your control.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1249,
		name: 'Dualcast',
		iconId: 13406,
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1250,
		name: 'True North',
		iconId: 13903,
		description: 'All action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1251,
		name: 'Turret Reset',
		iconId: 13018,
		description: 'Unable to deploy turrets.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1252,
		name: 'Eyes Open',
		iconId: 13308,
		description: 'Succeeded at opening the Third Eye.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1253,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1254,
		name: 'Deep Freeze',
		iconId: 15637,
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1255,
		name: 'Fire Resistance Down II',
		iconId: 15595,
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1256,
		name: 'Wounded',
		iconId: 15763,
		description: 'Severe wounds are reducing damage dealt while increasing damage taken by certain attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1257,
		name: 'Forced March',
		iconId: 15773,
		description: 'Advancing in the ordered direction.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1258,
		name: 'Fetters',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1259,
		name: 'Old',
		iconId: 15771,
		description: 'You have aged considerably. Movement speed is severely reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1260,
		name: 'Lightning Resistance Down II',
		iconId: 15597,
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1262,
		name: 'Gathering Fortune Up II (Limited)',
		iconId: 16010,
		description: 'Chance of obtaining an HQ item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1263,
		name: 'Rehabilitation',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1264,
		name: 'Brilliant Conviction',
		iconId: 15711,
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1265,
		name: 'Brilliant Conviction',
		iconId: 15711,
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1266,
		name: 'Transparent II',
		iconId: 16209,
		description: 'Body is allowing light to pass, rendering you invisible to the enemy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 1267,
		name: 'Affixed',
		iconId: 15764,
		description: 'Affixed to another object.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1268,
		name: 'In Event',
		iconId: 15765,
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1269,
		name: 'Extreme Caution',
		iconId: 15747,
		description: 'A penalty will be assessed for any action, auto-attack, or movement taken after status ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1270,
		name: 'Churning',
		iconId: 15784,
		description: 'Churning waters are upon you. Severe damage will be suffered if moving when the effect wears off.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1271,
		name: 'Clashing',
		iconId: 15785,
		description: 'Pushing back at another weapon with your own.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1272,
		name: 'Slashing Resistance Down II',
		iconId: 15826,
		description: 'Slashing resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1273,
		name: 'Sinking',
		iconId: 15787,
		description: 'Your body is slowly sinking. Burial will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1274,
		name: 'Bardam\'s Price',
		iconId: 18841,
		description: 'You are being punished for failing Bardam\'s trial. A stack of 2 will render you unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1275,
		name: 'Fire Convergence',
		iconId: 15788,
		description: 'Reflecting back all ice- and lightning-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1276,
		name: 'Ice Convergence',
		iconId: 15789,
		description: 'Reflecting back all fire- and lightning-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1277,
		name: 'Lightning Convergence',
		iconId: 15790,
		description: 'Reflecting back all ice- and fire-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1278,
		name: 'Aspected to Fire',
		iconId: 15791,
		description: 'Harboring a dangerous amount of fire-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1279,
		name: 'Aspected to Ice',
		iconId: 15792,
		description: 'Harboring a dangerous amount of ice-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1280,
		name: 'Aspected to Lightning',
		iconId: 15793,
		description: 'Harboring a dangerous amount of lightning-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1281,
		name: 'Empowered Rahu',
		iconId: 18801,
		description: 'Rahu\'s strength is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1282,
		name: 'Empowered Ketu',
		iconId: 18821,
		description: 'Ketu\'s strength is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1283,
		name: 'Confused',
		iconId: 15603,
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1284,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1285,
		name: 'Gathering Fortune Up II',
		iconId: 16011,
		description: 'Chance of obtaining an HQ item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1286,
		name: 'Gathering Yield Up II',
		iconId: 16012,
		description: 'Number of items obtained while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1287,
		name: 'Seized',
		iconId: 15564,
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1288,
		name: 'Twist of Fate',
		iconId: 16225,
		description: 'Experience earned on FATEs is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1289,
		name: 'Twist of Fate',
		iconId: 16226,
		description: 'Experience earned on FATEs is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1290,
		name: 'Vril',
		iconId: 15766,
		description: 'Damage taken by certain attacks is reduced or converted in to HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1291,
		name: 'Ruination',
		iconId: 12684,
		description: 'Damage taken from Outburst and Ruin spells cast by arcanists and summoners is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1292,
		name: 'Piggy',
		iconId: 15772,
		description: 'Transformed into a pig and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1293,
		name: 'Forward March',
		iconId: 15774,
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1294,
		name: 'About Face',
		iconId: 15775,
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1295,
		name: 'Left Face',
		iconId: 15776,
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1296,
		name: 'Right Face',
		iconId: 15777,
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1297,
		name: 'Embolden',
		iconId: 13410,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1298,
		name: 'Fugetsu',
		iconId: 13311,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1299,
		name: 'Fuka',
		iconId: 13312,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1300,
		name: 'Cover',
		iconId: 12501,
		description: 'Protecting a party member. Damage taken is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1301,
		name: 'Covered',
		iconId: 12502,
		description: 'Under the protection of a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1302,
		name: 'Hallowed Ground',
		iconId: 12504,
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1303,
		name: 'Inner Release',
		iconId: 12556,
		description: 'Beast Gauge consumption is reduced to 0. All Stun, Sleep, Bind, Heavy, Silence, knockback, and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1304,
		name: 'Holmgang',
		iconId: 10255,
		description: 'Unable to move until effect fades. Most attacks cannot reduce your HP to less than 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1305,
		name: 'Holmgang',
		iconId: 14824,
		description: 'Unable to move until effect fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1306,
		name: 'Sole Survivor',
		iconId: 13105,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1307,
		name: 'Ice Spikes',
		iconId: 15501,
		description: 'Upon taking physical damage, sharpened spikes deal ice damage to the attacking opponent, potentially slowing them.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1308,
		name: 'Blackest Night',
		iconId: 13118,
		description: 'An all-encompassing darkness is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1309,
		name: 'Demolish',
		iconId: 10218,
		description: 'Sustaining damage over time, as well as increased damage from target who executed Demolish.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1310,
		name: 'Riddle of Earth',
		iconId: 12527,
		description: 'Contemplating the riddle of earth. Taking a certain amount of damage triggers Earth\'s Reply.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1311,
		name: 'Earth\'s Reply',
		iconId: 12531,
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1312,
		name: 'Chaos Thrust',
		iconId: 10307,
		description: 'Sustaining damage over time, as well as increased damage from target who executed Chaos Thrust.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1313,
		name: 'Shadow Fang',
		iconId: 10612,
		description: 'Sustaining damage over time, as well as increased damage from target who executed Shadow Fang.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1314,
		name: 'Assassinated',
		iconId: 14825,
		description: 'Sustaining damage over time, as well as increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1315,
		name: 'Kakuremi',
		iconId: 14826,
		description: 'Slowly blending in with the environment. If not attacked, you will eventually become hidden.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1316,
		name: 'Hidden',
		iconId: 10607,
		description: 'Unable to be detected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1317,
		name: 'Three Mudra',
		iconId: 12902,
		description: 'Able to execute any ninjutsu action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1318,
		name: 'Yukikaze',
		iconId: 13303,
		description: 'Sustaining increased damage from target who executed Yukikaze.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1319,
		name: 'Higanbana',
		iconId: 13304,
		description: 'Open wounds are bleeding, causing damage over time. HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1320,
		name: 'Meikyo Shisui',
		iconId: 13309,
		description: 'Final combo prerequisite is met.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1321,
		name: 'Caustic Bite',
		iconId: 12616,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1322,
		name: 'Stormbite',
		iconId: 12617,
		description: 'Wounds are exposed to the elements, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1323,
		name: 'Wildfire',
		iconId: 13011,
		description: 'A portion of damage dealt is being stored.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1324,
		name: 'Thunder',
		iconId: 10457,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1325,
		name: 'Swiftcast',
		iconId: 10454,
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1326,
		name: 'Bio III',
		iconId: 12682,
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1327,
		name: 'Miasma III',
		iconId: 12683,
		description: 'Lungs are failing, causing damage over time and reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1328,
		name: 'Electrocution',
		iconId: 19041,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1329,
		name: 'Withering',
		iconId: 14812,
		description: 'HP recovery via healing actions is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1330,
		name: 'Regen',
		iconId: 12626,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1331,
		name: 'Galvanize',
		iconId: 12801,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1332,
		name: 'Chanchala',
		iconId: 15805,
		description: 'Lakshmi\'s divine nature vacillates unsteadily.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1333,
		name: 'Eye for an Eye',
		iconId: 13918,
		description: 'Chance that next hit suffered will lower the attacker\'s damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1334,
		name: 'Eye for an Eye',
		iconId: 13919,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1335,
		name: 'Abridged',
		iconId: 14827,
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1336,
		name: 'Synastry',
		iconId: 13223,
		description: 'An aetheric bond is created with a party member. Each time a single-target healing spell is cast, that member will recover partial HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1337,
		name: 'Synastry',
		iconId: 13224,
		description: 'An aetheric bond is created with a party astrologian. Each time a single-target healing spell is cast by the astrologian, you will recover partial HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1338,
		name: 'The Balance',
		iconId: 13204,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1339,
		name: 'The Bole',
		iconId: 13205,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1340,
		name: 'The Ewer',
		iconId: 13208,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1341,
		name: 'The Spire',
		iconId: 13209,
		description: 'Restoring TP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1342,
		name: 'Bolt',
		iconId: 14828,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1343,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1344,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1345,
		name: 'Bind',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1346,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1347,
		name: 'Silence',
		iconId: 15005,
		description: 'A stifling magic is preventing the use of any actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1348,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1349,
		name: 'Stun Resistance',
		iconId: 14829,
		description: 'Immune to stun effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1350,
		name: 'Heavy Resistance',
		iconId: 14830,
		description: 'Immune to heavy effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1351,
		name: 'Bind Resistance',
		iconId: 14831,
		description: 'Immune to bind effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1352,
		name: 'Slow Resistance',
		iconId: 14832,
		description: 'Immune to slow effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1353,
		name: 'Silence Resistance',
		iconId: 14833,
		description: 'Immune to silence effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1354,
		name: 'Sleep Resistance',
		iconId: 14834,
		description: 'Immune to sleep effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1355,
		name: 'Knockback Penalty',
		iconId: 14835,
		description: 'Immune to knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1356,
		name: 'Imp',
		iconId: 15043,
		description: 'Transformed into an imp and only able to execute the action Imp Punch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1357,
		name: 'Gravity Flip',
		iconId: 15767,
		description: 'Gravity is inverted, slowly lifting you further from the ground.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1358,
		name: 'Elevated',
		iconId: 15768,
		description: 'Bound to current elevation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1359,
		name: 'Gradual Petrification',
		iconId: 18861,
		description: 'Flesh once soft is slowly turning to stone.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 1360,
		name: 'Unstable Gravity',
		iconId: 15770,
		description: 'The gravity about you is highly unstable and will soon rupture, dealing unaspected damage to all allies within range.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1361,
		name: 'Magitek Levitation',
		iconId: 15037,
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1363,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1364,
		name: 'Riddle of Wind',
		iconId: 12530,
		description: 'Able to execute Riddle of Wind.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1365,
		name: 'Thundercloud',
		iconId: 10461,
		description: 'Able to cast Thunder III or Thunder IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1366,
		name: 'Levitation',
		iconId: 15037,
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1367,
		name: 'Impactful',
		iconId: 13401,
		description: 'Able to execute Impact.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1368,
		name: 'Requiescat',
		iconId: 18345,
		description: 'Potency of Holy Spirit and Holy Circle is increased and spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1369,
		name: 'Requiescat',
		iconId: 12514,
		description: 'Spells require no time to cast and consume no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1370,
		name: 'Rage of Halone',
		iconId: 14836,
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1371,
		name: 'Butcher\'s Block',
		iconId: 14837,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1372,
		name: 'Power Slash',
		iconId: 14838,
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1373,
		name: 'Immaterialized',
		iconId: 15798,
		description: 'Not yet fully materialized to a complete form.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1374,
		name: 'Target Right',
		iconId: 15800,
		description: 'Focusing attack on target to the right.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1375,
		name: 'Target Left',
		iconId: 15801,
		description: 'Focusing attack on target to the left.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1376,
		name: 'Kyoshin',
		iconId: 15799,
		description: 'Body is enlarged, increasing damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1377,
		name: 'Life Drain',
		iconId: 15778,
		description: 'Life force is being drained, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1378,
		name: 'Dualcast',
		iconId: 15779,
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1379,
		name: 'Almagest',
		iconId: 15781,
		description: 'Celestial magicks are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1380,
		name: 'White Wound',
		iconId: 15782,
		description: 'Taking extra damage from White Antilight.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1381,
		name: 'Black Wound',
		iconId: 15783,
		description: 'Taking extra damage from Black Antilight.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1382,
		name: 'Beyond Death',
		iconId: 15780,
		description: 'Only beyond death\'s boundaries can life be achieved.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1383,
		name: 'HP Penalty',
		iconId: 15076,
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1384,
		name: 'Acceleration Bomb',
		iconId: 15727,
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1385,
		name: 'Off-balance',
		iconId: 15723,
		description: 'Attacks suffered will result in knockback.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1386,
		name: 'Sludge',
		iconId: 18881,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1387,
		name: 'Altered States',
		iconId: 10404,
		description: 'Action area of effect has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1388,
		name: 'Ashen',
		iconId: 15804,
		description: 'Covered in stygian ash.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1389,
		name: 'Seduced',
		iconId: 15552,
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1390,
		name: 'Levitation',
		iconId: 15037,
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1391,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1392,
		name: 'Shining Moonstone',
		iconId: 15803,
		description: 'Empowered by the light of the moonstone, increasing damage dealt while reducing damage taken.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1393,
		name: 'Dualcast',
		iconId: 13406,
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1394,
		name: 'Limp',
		iconId: 14839,
		description: 'Your mount has been lamed by an attack. Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1395,
		name: 'Shield Oath',
		iconId: 12506,
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1396,
		name: 'Defiance',
		iconId: 12551,
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1397,
		name: 'Grit',
		iconId: 13108,
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1398,
		name: 'Inner Beast',
		iconId: 12553,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1399,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1400,
		name: 'Terror',
		iconId: 15516,
		description: 'Frozen with fear and unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1401,
		name: 'Enervation',
		iconId: 15040,
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1402,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1403,
		name: 'Lightspeed',
		iconId: 13220,
		description: 'Spell casting time and MP cost are reduced by 100% and 50% respectively.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1404,
		name: 'Divine Benison',
		iconId: 12632,
		description: 'A holy blessing from the gods is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1405,
		name: 'Disabled',
		iconId: 13222,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1406,
		name: 'Chain Stratagem',
		iconId: 12809,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1407,
		name: 'Barrage',
		iconId: 10356,
		description: 'Striking multiple times per weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1408,
		name: 'Cometeor',
		iconId: 14843,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1409,
		name: 'Terminal Velocity',
		iconId: 14844,
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1410,
		name: 'Chanchala',
		iconId: 15805,
		description: 'Lakshmi\'s divine nature vacillates unsteadily.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1411,
		name: 'The Road to 80',
		iconId: 16227,
		description: 'Experience earned while below level 80 is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1412,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1413,
		name: 'Riddle of Fire',
		iconId: 12528,
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1414,
		name: 'Battle Litany',
		iconId: 12578,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1415,
		name: 'Protect',
		iconId: 10405,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1416,
		name: 'Grounded',
		iconId: 15806,
		description: 'Bound to current elevation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1417,
		name: 'Stone Curse',
		iconId: 15586,
		description: 'Turned into stone. Taking damage results in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1418,
		name: 'Abandonment',
		iconId: 15649,
		description: 'Will suffer Fear when straying too far from party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1419,
		name: 'The Worm\'s Curse',
		iconId: 15815,
		description: 'HP regeneration is nullified and damage is taken slowly over time. Attacking, however, will periodically restore HP.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1420,
		name: 'Mounted',
		iconId: 15821,
		description: 'Mounted in warmachina. HP recovery and beneficial effects conferred by actions are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1421,
		name: 'Craven',
		iconId: 15810,
		description: 'Courage is fully tapped, increasing damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1422,
		name: 'Temporary Misdirection',
		iconId: 15809,
		description: 'Overcome with temporary insanity. Can only move in the direction indicated.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1423,
		name: 'Transfiguration',
		iconId: 15811,
		description: 'Spiritual and corporeal forms are drastically altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1424,
		name: 'Divine Commandment: Flee',
		iconId: 15807,
		description: 'Affected by the word of a god.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1425,
		name: 'Divine Commandment: Turn',
		iconId: 15808,
		description: 'Affected by the word of a god.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1426,
		name: 'Unnerved',
		iconId: 18961,
		description: 'Courage is tapped, increasing damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 250
	},
	{
		id: 1427,
		name: 'Drenched',
		iconId: 15814,
		description: 'Body is covered in water and susceptible to freezing.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1428,
		name: '削除予定',
		iconId: 0,
		description: '削除予定',
		category: 0,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1429,
		name: 'Breathless',
		iconId: 18981,
		description: 'Toxins in the water are causing difficulty breathing. A stack of 10 will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 250
	},
	{
		id: 1430,
		name: 'Legendary Resolve',
		iconId: 15816,
		description: 'Convinced of your mettle, Shinryu has unleashed its true power.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1431,
		name: 'Tower Defense',
		iconId: 15822,
		description: 'The tower\'s field invigorates those who enter its sphere of influence, halving damage taken and regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1432,
		name: 'Tower Defense',
		iconId: 15823,
		description: 'The tower\'s protective field is active.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1433,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form is altered.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1434,
		name: 'Mana Hypersensitivity',
		iconId: 15817,
		description: 'Additional damage taken from Hatch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1435,
		name: 'Piercing Resistance Down II',
		iconId: 15818,
		description: 'Piercing resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1436,
		name: 'Phoenix\'s Blessing',
		iconId: 15819,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1437,
		name: 'Lohs Daih',
		iconId: 15820,
		description: 'Bahamut Prime\'s insanity has peaked. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1438,
		name: 'Resonant',
		iconId: 15795,
		description: 'Strength is transcending that of mere mortals.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1439,
		name: 'Independent Tactics',
		iconId: 19101,
		description: 'Maximum HP and damage dealt are increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1440,
		name: 'Offensive Tactics',
		iconId: 19121,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1441,
		name: 'Defensive Tactics',
		iconId: 19141,
		description: 'Maximum HP is increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1442,
		name: 'Balanced Tactics',
		iconId: 19161,
		description: 'Maximum HP and damage dealt are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1443,
		name: 'Clockwork',
		iconId: 15825,
		description: 'When the gears run down, functionality will cease. HP restoration is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1444,
		name: 'Magitek Field',
		iconId: 15824,
		description: 'Impervious to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1445,
		name: 'The Deceiver',
		iconId: 15812,
		description: 'Wearing the face of the god of lies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1446,
		name: 'The Upholder',
		iconId: 15813,
		description: 'Wearing the face of the god of truth.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1447,
		name: 'Elemental EXP Up',
		iconId: 15836,
		description: 'Elemental EXP earned through battle while at an elemental level lower than 50 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1448,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1449,
		name: 'Troubadour\'s Minuet',
		iconId: 12615,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1450,
		name: 'Troubadour\'s Paeon',
		iconId: 12614,
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1451,
		name: 'Lord of Crowns',
		iconId: 13243,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1452,
		name: 'Lady of Crowns',
		iconId: 13244,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1453,
		name: 'Right Eye',
		iconId: 12581,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1454,
		name: 'Left Eye',
		iconId: 12582,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1455,
		name: 'Flamethrower',
		iconId: 13017,
		description: 'Emitting a gout of searing flames in a cone, dealing damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1456,
		name: 'Thrill of War',
		iconId: 14803,
		description: 'Refreshing HP of party members within range while draining own MP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1457,
		name: 'Shake It Off',
		iconId: 12557,
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1458,
		name: 'Flamethrower Flames',
		iconId: 19081,
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1459,
		name: 'Transfiguration',
		iconId: 15811,
		description: 'Spiritual and corporeal forms are drastically altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1460,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1461,
		name: 'Elemental Blessing: EXP',
		iconId: 15887,
		description: 'Receiving the blessing of Eureka\'s elementals. Elemental EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1462,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1463,
		name: 'Elemental Blessing: Damage',
		iconId: 15835,
		description: 'Receiving the blessing of Eureka\'s elementals. Damage dealt is increased and restoring HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1464,
		name: 'Time\'s Up',
		iconId: 15832,
		description: 'Nearing the end of allotted exploration time in Eureka. ',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1465,
		name: 'Soaring',
		iconId: 19181,
		description: 'Overcome with the battle high, increasing damage dealt and potency of HP restoration actions. Effect is nullified when piloting warmachina.',
		category: 1,
		isPermanent: true,
		maxStacks: 19,
		partyListPriority: 0
	},
	{
		id: 1466,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1467,
		name: 'Yellow Paint',
		iconId: 15829,
		description: 'Carrying a pot of yellow paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1468,
		name: 'Blue Paint',
		iconId: 15828,
		description: 'Carrying a pot of light blue paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1469,
		name: 'Black Paint',
		iconId: 15830,
		description: 'Carrying a pot of black paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1470,
		name: 'Red Paint',
		iconId: 15827,
		description: 'Carrying a pot of red paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1471,
		name: 'Last Kiss',
		iconId: 15842,
		description: 'Cursed by a kiss. Unaspected damage dealt to all nearby allies when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1472,
		name: 'Apathetic',
		iconId: 15843,
		description: 'Unable to use HP restoration abilities while MP slowly drains. Not that you care.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1473,
		name: 'Cemented',
		iconId: 0,
		description: 'Cement is slowly covering your body. Petrification sets in when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1474,
		name: 'Filthy',
		iconId: 15527,
		description: 'Earthen residue is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1475,
		name: 'Aether Rot',
		iconId: 15538,
		description: 'Infected with an unknown pestilience. Mortal pathogen is released when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1476,
		name: 'Aether Rot Immunity',
		iconId: 15539,
		description: 'Unable to be an Aether Rot carrier.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1477,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1478,
		name: 'Connectivity',
		iconId: 19201,
		description: 'The Phantom Train is slowly leeching your life essence. Damage taken is also increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 100
	},
	{
		id: 1479,
		name: 'Falling',
		iconId: 15831,
		description: 'Decided absence of terra firma is causing an inability to execute certain actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1480,
		name: 'Unrelenting Anguish',
		iconId: 15833,
		description: 'Continuously launching Aratama from your body.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1481,
		name: 'Ominous Wind',
		iconId: 15834,
		description: 'Touched by an ominous wind. Coming in contact with another cursed by the selfsame wind causes the omen to spread.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1482,
		name: 'Mana Charge',
		iconId: 15845,
		description: 'Charging mana for a forthcoming spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1483,
		name: 'Fire Charged',
		iconId: 15846,
		description: 'Mana sufficient to cast Fire III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1484,
		name: 'Blizzard Charged',
		iconId: 15847,
		description: 'Mana sufficient to cast Blizzard III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1485,
		name: 'Thunder Charged',
		iconId: 15848,
		description: 'Mana sufficient to cast Thunder III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1486,
		name: 'Jester\'s Antics',
		iconId: 15849,
		description: 'Effect radius and characteristics for Fire, Ice, and Lightning spells are severely altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1487,
		name: 'Jester\'s Truths',
		iconId: 15850,
		description: 'Effect radius and characteristics for Fire, Ice, and Lightning spells are unaltered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1488,
		name: 'Incurable',
		iconId: 15851,
		description: 'All HP restoration is nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1489,
		name: 'Ultros Simulation',
		iconId: 15837,
		description: 'The Ultros simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1490,
		name: 'Air Force Simulation',
		iconId: 15838,
		description: 'The Air Force simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1491,
		name: 'Dadaluma Simulation',
		iconId: 15839,
		description: 'The Dadaluma simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1492,
		name: 'Bibliotaph Simulation',
		iconId: 15840,
		description: 'The Bibliotaph simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1493,
		name: 'Virus',
		iconId: 15841,
		description: 'A virus is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1494,
		name: 'Face in the Crowd',
		iconId: 15853,
		description: 'Participating in a live performance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1495,
		name: 'Scalebound',
		iconId: 15860,
		description: 'You have entered the sacred domain of the Rathalos and are somehow unable to heal wounds via any method save mega potions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1496,
		name: 'Vanished',
		iconId: 16826,
		description: 'Invisible to enemies and traps.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1497,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1498,
		name: 'Shocked',
		iconId: 15852,
		description: 'Experiencing periodic immobility while bleeding HP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1499,
		name: 'Heavy Medal',
		iconId: 18681,
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1500,
		name: 'Heavy Medal',
		iconId: 18682,
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1501,
		name: 'Heavy Medal',
		iconId: 18683,
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1502,
		name: 'Heavy Medal',
		iconId: 18684,
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1503,
		name: 'Light Medal',
		iconId: 19221,
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1504,
		name: 'Light Medal',
		iconId: 19222,
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1505,
		name: 'Light Medal',
		iconId: 19223,
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1506,
		name: 'Light Medal',
		iconId: 19224,
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1507,
		name: 'Pollen',
		iconId: 15517,
		description: 'Deadly pollen has filled the lungs, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1508,
		name: 'Windburn',
		iconId: 19021,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1509,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1510,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1511,
		name: 'Petrification',
		iconId: 15001,
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1512,
		name: 'Knockback Penalty',
		iconId: 16824,
		description: 'Unable to use knockback and draw-in effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1513,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1514,
		name: 'スリル・オブ・ウォー：効果',
		iconId: 14842,
		description: '連続してＨＰが回復している状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1515,
		name: 'Hover',
		iconId: 15683,
		description: 'Floating above ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1516,
		name: 'Cemented',
		iconId: 0,
		description: 'Cement is slowly covering your body. Petrification sets in when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1517,
		name: 'Fire Resistance Up',
		iconId: 15028,
		description: 'Fire resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1518,
		name: 'King of the Skies',
		iconId: 15856,
		description: 'The Rathalos has unleashed its true might.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1519,
		name: 'Drubbed',
		iconId: 15523,
		description: 'Taking blunt damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1520,
		name: 'Mounted',
		iconId: 15857,
		description: 'Riding atop a Rathalos.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1521,
		name: 'Stun',
		iconId: 15858,
		description: 'Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1522,
		name: 'Stun',
		iconId: 15859,
		description: 'Unable to act.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1523,
		name: 'Haste+',
		iconId: 17381,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 1524,
		name: 'Blind',
		iconId: 15012,
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1525,
		name: 'Thermal Low',
		iconId: 17241,
		description: 'The wind is high.',
		category: 2,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 1526,
		name: 'Thermal High',
		iconId: 15030,
		description: 'The wind has died. Resistance to wind damage is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1527,
		name: 'Accursed Flame',
		iconId: 15866,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1528,
		name: 'Aetherially Charged',
		iconId: 19241,
		description: 'Charged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 1529,
		name: 'Woken',
		iconId: 15863,
		description: 'Overcharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1530,
		name: 'Beyond Limits',
		iconId: 15864,
		description: 'Hypercharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1531,
		name: 'Down the Rabbit Hole',
		iconId: 15886,
		description: 'Being guided to buried treasure.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1532,
		name: 'Viscous Aetheroplasm',
		iconId: 15867,
		description: 'Aetheroplasm is attached to your body. A stack of 5 will result in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1533,
		name: 'Airbound',
		iconId: 15865,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1534,
		name: 'Role-playing',
		iconId: 15111,
		description: 'Experiencing what it is to be someone else.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1535,
		name: 'Full Moon',
		iconId: 15878,
		description: 'Unleashing the power of the full moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1536,
		name: 'New Moon',
		iconId: 15879,
		description: 'Unleashing the power of the new moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1537,
		name: 'Blood Moon',
		iconId: 15880,
		description: 'Bringing to bear the full might of the dark and bright blades.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1538,
		name: 'Moonlit',
		iconId: 19261,
		description: 'Under the influence of the full moon.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1539,
		name: 'Moonshadowed',
		iconId: 19281,
		description: 'Under the influence of the new moon.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1540,
		name: 'Veil of Shadow',
		iconId: 15881,
		description: 'Darkness shields you from the full moon\'s influence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1541,
		name: 'Veil of Light',
		iconId: 15882,
		description: 'Light shields you from the new moon\'s influence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1542,
		name: 'Haunt',
		iconId: 15883,
		description: 'Memory is taking corporeal form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1543,
		name: 'Haunt',
		iconId: 15883,
		description: 'Memory is taking corporeal form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1544,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 2
	},
	{
		id: 1545,
		name: 'Vulnerability Down',
		iconId: 17301,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 1
	},
	{
		id: 1546,
		name: 'Odder',
		iconId: 16827,
		description: 'Transformed into an otter and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1547,
		name: 'Indomitable Spirit',
		iconId: 15869,
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1548,
		name: 'Sprint',
		iconId: 10101,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1549,
		name: 'Unmagicked',
		iconId: 16828,
		description: 'Unable to use magicite.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1550,
		name: 'Magnetic Lysis +',
		iconId: 15854,
		description: 'Body is exhibiting a positive magnetic charge.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1551,
		name: 'Magnetic Lysis -',
		iconId: 15855,
		description: 'Body is exhibiting a negative magnetic charge.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1552,
		name: 'Magnetic Levitation',
		iconId: 15066,
		description: 'Suspended in midair.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1553,
		name: 'The One Dragon',
		iconId: 15861,
		description: 'Yiazmat\'s body is pulsing with power.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1554,
		name: 'Borne Heart',
		iconId: 15861,
		description: 'Yiazmat\'s heart is exposed and can be broken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1555,
		name: 'Heartless',
		iconId: 15862,
		description: 'Yiazmat\'s heart is destroyed. Maximum HP is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1556,
		name: 'Threatened',
		iconId: 15862,
		description: 'Maximum HP is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1557,
		name: 'HP Penalty',
		iconId: 15870,
		description: 'Maximum HP is severely decreased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1558,
		name: 'HP Boost +1',
		iconId: 15871,
		description: 'Maximum HP is increased by 1.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1559,
		name: 'HP Boost +2',
		iconId: 15872,
		description: 'Maximum HP is increased by 2.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1560,
		name: 'HP Boost +3',
		iconId: 15873,
		description: 'Maximum HP is increased by 3.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1561,
		name: 'HP Boost +4',
		iconId: 15874,
		description: 'Maximum HP is increased by 4.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1562,
		name: 'Computation Mode',
		iconId: 15875,
		description: 'Basic computation protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1563,
		name: 'Tartarus Mode',
		iconId: 15876,
		description: 'Tartarean protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1564,
		name: 'Annihilation Mode',
		iconId: 15877,
		description: 'Annihilation protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1565,
		name: 'Computation Boost',
		iconId: 19301,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 100
	},
	{
		id: 1566,
		name: 'Computation Error',
		iconId: 19321,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 50
	},
	{
		id: 1567,
		name: 'Primal Rage',
		iconId: 16829,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1568,
		name: 'Slow+',
		iconId: 17361,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased. Effect cannot be nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 1569,
		name: 'Auspicious',
		iconId: 15868,
		description: 'Temporarily granted the power of an auspice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1570,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1571,
		name: 'Temporal Barrier',
		iconId: 14832,
		description: 'The effect of Temporal Stasis is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1572,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1573,
		name: 'Grudge',
		iconId: 15044,
		description: 'Damage taken is turning to resentment.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1575,
		name: 'Brotherly Love',
		iconId: 15753,
		description: 'Bound by fraternal bonds.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1576,
		name: '石化の呪い',
		iconId: 15586,
		description: '石化した状態。攻撃を受けると戦闘不能になる。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1577,
		name: 'Burns',
		iconId: 19001,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1578,
		name: 'Searing Wind',
		iconId: 15560,
		description: 'Ignited by white-hot embers and scorching those nearby. Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1579,
		name: 'Thin Ice',
		iconId: 15615,
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1580,
		name: 'Thin Ice',
		iconId: 15615,
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1581,
		name: 'Adaptation',
		iconId: 15884,
		description: 'Adapted to an aetherially unstable environment.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1582,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1583,
		name: 'Elemental EXP Up',
		iconId: 15836,
		description: 'Elemental EXP earned through battle while at an elemental level lower than 20 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1584,
		name: 'Komainu\'s Favor',
		iconId: 16830,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1585,
		name: 'Inugami\'s Favor',
		iconId: 16831,
		description: 'Damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1586,
		name: 'Senri\'s Favor',
		iconId: 16832,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1587,
		name: 'Elemental Harmony',
		iconId: 15888,
		description: 'Elemental EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1588,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1589,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1590,
		name: 'Light in the Dark',
		iconId: 15100,
		description: 'Absorbing the light of a deepvoid torch and transforming it into mana.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1591,
		name: 'Woken',
		iconId: 15863,
		description: 'Overcharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1592,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1593,
		name: 'Adaptation',
		iconId: 15884,
		description: 'Adapted to an aetherially unstable environment.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1594,
		name: 'Hundred Fists',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1595,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1596,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1597,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1598,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1599,
		name: 'Pyretic',
		iconId: 15647,
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1600,
		name: 'Entropy',
		iconId: 15902,
		description: 'Plagued by chaotic flames that will deal damage to nearby party members when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1601,
		name: 'Dynamic Fluid',
		iconId: 15903,
		description: 'Plagued by a chaotic body of water that will deal damage when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1602,
		name: 'Headwind',
		iconId: 15904,
		description: 'Plagued by chaotic frontal winds that will deal damage when the effect ends. Effect dissipates upon exposure to directional winds. Knockback effects from winds faced head-on are doubled, while those of rear winds are reduced by half.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1603,
		name: 'Tailwind',
		iconId: 15905,
		description: 'Plagued by chaotic rear winds that will deal damage when the effect ends. Effect dissipates upon exposure to directional winds. Knockback effects from winds faced head-on are reduced by half, while those of rear winds are doubled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1604,
		name: 'Accretion',
		iconId: 15906,
		description: 'Plagued by rapidly hardening mud. All HP recovery is reduced. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1605,
		name: 'Primordial Crust',
		iconId: 15907,
		description: 'Plagued by rapidly hardening mud. Damage taken is reduced, but all HP recovery is nullified. Effect dissipates when damage that would cause HP to drop below 0 is taken, leaving HP at 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1606,
		name: 'Muddy',
		iconId: 15889,
		description: 'In need of a good rinsing. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1607,
		name: '●弱点：雷属性',
		iconId: 15597,
		description: '●強烈な雷属性が有効。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1608,
		name: 'Transfiguration',
		iconId: 15890,
		description: 'Corporeal form has been altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1609,
		name: 'Transfiguration',
		iconId: 15890,
		description: 'Corporeal form has been altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1610,
		name: 'Landborne',
		iconId: 15896,
		description: 'Drawing power from the land itself.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1611,
		name: 'Arcane Bulwark',
		iconId: 15897,
		description: 'Protected by a magicked barrier.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1612,
		name: 'Defenseless',
		iconId: 15898,
		description: 'Unable to call upon the arcane bulwark for protection.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1613,
		name: 'Burning Soul',
		iconId: 19381,
		description: 'The immortal spirit blazes bright within.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 1614,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1615,
		name: 'Crumbling Bulwark',
		iconId: 15899,
		description: 'Magicked barrier is gradually disintegrating.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1616,
		name: 'Death from Above',
		iconId: 15900,
		description: 'Any auto-attack from a skyborne opponent will apply Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1617,
		name: 'Death from Below',
		iconId: 15901,
		description: 'Any auto-attack from a landborne opponent will apply Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1618,
		name: 'Logos-minded',
		iconId: 16626,
		description: 'Ruminating on extracted mnemes. Ready to use select logos actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1619,
		name: 'Preoccupied',
		iconId: 15765,
		description: 'Engaged in complex maneuvers.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1620,
		name: 'Unveiled',
		iconId: 15928,
		description: 'Gilgamesh\'s true form is revealed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1621,
		name: 'Concealed',
		iconId: 15673,
		description: 'Unable to be detected from a distance.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1622,
		name: 'Critical Strikes',
		iconId: 15555,
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1623,
		name: 'Live Wire',
		iconId: 15891,
		description: 'Crackling like a levinbolt. Damage dealt against opponents vulnerable to electricity is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1624,
		name: 'Looper',
		iconId: 15892,
		description: 'Corrupted by Omega\'s program loop.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1625,
		name: 'Memory Degredation',
		iconId: 19361,
		description: 'Gradually forgetting important details. A stack of 6 will result in full memory loss.',
		category: 2,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 1626,
		name: 'Memory Loss',
		iconId: 15893,
		description: 'Bereft of sense of self and purpose.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1627,
		name: 'Chains of Memory',
		iconId: 15894,
		description: 'Under siege by what you can no longer remember.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1628,
		name: 'Gradual Petrification',
		iconId: 15895,
		description: 'Flesh once soft is slowly turning to stone. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1629,
		name: 'Kill Command',
		iconId: 15892,
		description: 'Deleting variables from the Interdimensional Rift.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1630,
		name: 'Love\'s True Form',
		iconId: 15908,
		description: 'Suzaku\'s heretofore unknown visage is revealed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1631,
		name: 'Wisdom of the Aetherweaver',
		iconId: 16627,
		description: 'Magic damage is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1632,
		name: 'Wisdom of the Martialist',
		iconId: 16628,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1633,
		name: 'Wisdom of the Platebearer',
		iconId: 16629,
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1634,
		name: 'Wisdom of the Guardian',
		iconId: 16630,
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1635,
		name: 'Wisdom of the Ordained',
		iconId: 16631,
		description: 'Maximum MP and healing magic potency are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1636,
		name: 'Wisdom of the Skirmisher',
		iconId: 16632,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1637,
		name: 'Wisdom of the Watcher',
		iconId: 16633,
		description: 'Evasion is enhanced, while damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1638,
		name: 'Wisdom of the Templar',
		iconId: 16634,
		description: 'Maximum HP and healing magic potency are increased, while damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1639,
		name: 'Wisdom of the Irregular',
		iconId: 16635,
		description: 'Damage dealt is increased, while magic defense is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1640,
		name: 'Wisdom of the Breathtaker',
		iconId: 16636,
		description: 'Movement speed, evasion, and poison resistance are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1641,
		name: 'Spirit of the Remembered',
		iconId: 16637,
		description: 'Maximum HP and accuracy are increased. Chance of automatic revival upon KO.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1642,
		name: 'Protect L',
		iconId: 16638,
		description: 'Physical defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1643,
		name: 'Shell L',
		iconId: 16639,
		description: 'Magic defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1644,
		name: 'Swift L',
		iconId: 16640,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1645,
		name: 'Rapid Recast',
		iconId: 16641,
		description: 'Recast time of next ability is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1646,
		name: 'Bravery L',
		iconId: 16642,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1647,
		name: 'Solid Shield',
		iconId: 16643,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1648,
		name: 'Spell Shield',
		iconId: 16644,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1649,
		name: 'Reflect L',
		iconId: 16645,
		description: 'Reflecting magic back on its caster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1650,
		name: 'Poison L',
		iconId: 16646,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1651,
		name: 'Refresh L',
		iconId: 16647,
		description: 'Magia aether regeneration is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1652,
		name: 'Magic Burst',
		iconId: 16648,
		description: 'Damage dealt by spells and MP cost of spells is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1653,
		name: 'Double Edge L',
		iconId: 19401,
		description: 'Physical damage dealt is increasing, while you are sustaining damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 70
	},
	{
		id: 1654,
		name: 'Spirit Dart L',
		iconId: 16650,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1655,
		name: 'Banish L',
		iconId: 16651,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1656,
		name: 'Boost',
		iconId: 19341,
		description: 'Attack power of next weaponskill is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1657,
		name: 'Incense L',
		iconId: 16652,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1658,
		name: 'Omega',
		iconId: 15909,
		description: 'Inscrutable.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1659,
		name: 'Infinite Limit',
		iconId: 15910,
		description: 'Actions transcending standard limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1660,
		name: 'Packet Filter M',
		iconId: 15911,
		description: 'Firewall is preventing the dealing of damage to Omega-M.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1661,
		name: 'Packet Filter F',
		iconId: 15912,
		description: 'Firewall is preventing the dealing of damage to Omega-F.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1662,
		name: 'Local Resonance',
		iconId: 15913,
		description: 'Combat capabilities increase with proximity to counterpart.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1663,
		name: 'Remote Resonance',
		iconId: 15914,
		description: 'Combat capabilities increase with distance from counterpart.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1664,
		name: 'Critical Synchronization Bug',
		iconId: 15915,
		description: 'Affected by a critical error. Data corruption will cause damage and spread when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1665,
		name: 'Critical Overflow Bug',
		iconId: 15916,
		description: 'Affected by a critical error. Data corruption will cause damage and spread when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1666,
		name: 'Critical Underflow Bug',
		iconId: 15917,
		description: 'Affected by a critical error. Coming in contact with allies will cause data corruption to spread. Corruption will cause damage when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1667,
		name: 'Synchronization Debugger',
		iconId: 15918,
		description: 'Invulnerable to synchronization bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1668,
		name: 'Overflow Debugger',
		iconId: 15919,
		description: 'Invulnerable to overflow bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1669,
		name: 'Underflow Debugger',
		iconId: 15920,
		description: 'Invulnerable to underflow bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1670,
		name: 'Latent Defect',
		iconId: 15921,
		description: 'Affected by a hidden error that will cause damage when the effect ends. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1671,
		name: 'Cascading Latent Defect',
		iconId: 15922,
		description: 'Affected by a hidden error that will cause damage when the effect ends. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1672,
		name: 'Local Regression',
		iconId: 15923,
		description: 'Affected by a patch error. Data corruption will cause damage when in close proximity to others affected by the same error, or when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1673,
		name: 'Remote Regression',
		iconId: 15924,
		description: 'Affected by a patch error. Data corruption will cause damage when out of range of others affected by the same error, or when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1674,
		name: 'Omega-M',
		iconId: 15925,
		description: 'Mimicking the male form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1675,
		name: 'Omega-F',
		iconId: 15926,
		description: 'Mimicking the female form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1676,
		name: 'Superfluid',
		iconId: 15927,
		description: 'In a transitional liquid state.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1677,
		name: 'Bloodbath L',
		iconId: 16653,
		description: 'Attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1679,
		name: 'Spell-in-Waiting: Return IV',
		iconId: 15331,
		description: 'Designated target of Return IV, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1680,
		name: 'Spell-in-Waiting: Flare',
		iconId: 15970,
		description: 'Designated target of Flare, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1681,
		name: 'Paying the Piper',
		iconId: 15773,
		description: 'Advancing in the direction to which you are called.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1682,
		name: 'Sleeping Dark',
		iconId: 15929,
		description: 'Ying is fast asleep.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1683,
		name: 'Sleeping Light',
		iconId: 15930,
		description: 'Yang is fast asleep.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1684,
		name: 'Break III Edict',
		iconId: 15555,
		description: 'Following orders to perform Little Break III.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1685,
		name: 'Rush Edict',
		iconId: 15555,
		description: 'Following orders to perform Little Rush.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1686,
		name: 'Tornado Edict',
		iconId: 15555,
		description: 'Following orders to perform Little Tornado.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1687,
		name: 'Rehabilitation',
		iconId: 15532,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1688,
		name: 'Group Oriented',
		iconId: 15931,
		description: 'Cooperatively attacking the primary target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1689,
		name: 'Primary Target',
		iconId: 15932,
		description: 'Identified as the focus of a coordinated attack.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1690,
		name: 'Skyborne',
		iconId: 15934,
		description: 'Drawing power from the firmament.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1691,
		name: 'Landborne',
		iconId: 15896,
		description: 'Drawing power from the land itself.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1692,
		name: 'Guardian Spirit',
		iconId: 15869,
		description: 'Soul ablaze with the will to protect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1693,
		name: 'Slashing Resistance Down',
		iconId: 15786,
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1694,
		name: 'Piercing Resistance Down',
		iconId: 15065,
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1695,
		name: 'Apathetic',
		iconId: 15843,
		description: 'Unable to use HP restoration abilities while MP slowly drains. Not that you care.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1696,
		name: 'Drowning',
		iconId: 15936,
		description: 'Being dragged under by the current. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1697,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1698,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1699,
		name: 'Looming Crescendo',
		iconId: 15933,
		description: 'The melody of the pyre calls. Will be compelled in the designated direction when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1700,
		name: 'Mutation',
		iconId: 15885,
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1701,
		name: 'Electromagnetic Field',
		iconId: 15056,
		description: 'Encased by a highly charged protective barrier.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1702,
		name: 'Ice Resistance Down',
		iconId: 15596,
		description: 'Ice resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1703,
		name: 'Biohacked',
		iconId: 15935,
		description: 'Mind is being infiltrated. Will be temporarily stunned when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1704,
		name: 'Looper',
		iconId: 15892,
		description: 'Corrupted by Omega\'s program loop.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1705,
		name: 'Hidden',
		iconId: 10607,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1706,
		name: 'Evasion Up',
		iconId: 15062,
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1707,
		name: 'Right Unseen',
		iconId: 15939,
		description: 'Only vulnerabilities on the right side of the body remain undetected. Hits to the front, back, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1708,
		name: 'Left Unseen',
		iconId: 15940,
		description: 'Only vulnerabilities on the left side of the body remain undetected. Hits to the front, back, and right sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1709,
		name: 'Back Unseen',
		iconId: 15941,
		description: 'Only vulnerabilities on the back of the body remain undetected. Hits to the front, right, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1710,
		name: 'Astral Essence',
		iconId: 15950,
		description: 'Astrally charged attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1711,
		name: 'Umbral Essence',
		iconId: 15951,
		description: 'Umbrally charged attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1712,
		name: 'Astral Cloak',
		iconId: 15952,
		description: 'Enshrouded in light and resistant to certain umbrally charged attacks. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1713,
		name: 'Umbral Cloak',
		iconId: 15953,
		description: 'Enshrouded in shadow and resistant to certain astrally charged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1714,
		name: 'Bleeding',
		iconId: 13501,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1715,
		name: 'Malodorous',
		iconId: 13502,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1716,
		name: 'Boost',
		iconId: 13503,
		description: 'Potency of next offensive spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1717,
		name: 'Off-guard',
		iconId: 13504,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1718,
		name: 'Waxing Nocturne',
		iconId: 13505,
		description: 'Damage dealt and movement speed are increased. Waning Nocturne will take hold when the effect ends.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1719,
		name: 'Mighty Guard',
		iconId: 13506,
		description: 'Damage taken and dealt are reduced, while enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1720,
		name: 'Ice Spikes',
		iconId: 13507,
		description: 'Upon taking physical damage, sharpened spikes deal ice damage to the attacking opponent, potentially slowing them.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1721,
		name: 'Peculiar Light',
		iconId: 13508,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1722,
		name: 'Diamondback',
		iconId: 13509,
		description: 'Though unable to move, damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1723,
		name: 'Windburn',
		iconId: 13510,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1724,
		name: 'Veil of the Whorl',
		iconId: 13511,
		description: 'Dealing water damage to attackers upon taking damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1725,
		name: 'Cursekeeper',
		iconId: 15937,
		description: 'Afflicted by a karmic curse carried within a paper doll. Damage taken will be channeled into an explosion when the effect ends or you are KO\'d.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1726,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1727,
		name: 'Waning Nocturne',
		iconId: 13512,
		description: 'Unable to auto-attack or use spells, weaponskills, and abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1728,
		name: 'Contractual Obligation',
		iconId: 15945,
		description: 'Mercenaries are allied to a team. Contract will expire when the counter reaches zero. HP restored by healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1729,
		name: 'Sheer Will',
		iconId: 15946,
		description: 'Remaining standing through pure determination. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1730,
		name: 'Flying High',
		iconId: 14845,
		description: 'Nearly giddy with the thrill of battle, increasing damage dealt, potency of HP restoration actions, and the rate at which the adrenaline gauge fills. Effect is nullified when piloting warmachina.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1731,
		name: 'Deep Freeze',
		iconId: 13513,
		description: 'Frozen solid and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1732,
		name: 'Elemental EXP Up',
		iconId: 15836,
		description: 'Elemental EXP earned through battle while at an elemental level lower than 35 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1733,
		name: 'Shieldbearer',
		iconId: 15942,
		description: 'Equipped with an ethereal shield and able to use the duty action Heavenly Shield.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1734,
		name: 'Swordbearer',
		iconId: 15943,
		description: 'Equipped with an ethereal sword and able to use the duty action Heavenly Sword.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1735,
		name: 'Heavenly Shield',
		iconId: 15944,
		description: 'Protected by an ethereal shield. Damage taken from certain attacks is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1736,
		name: 'Dropsy',
		iconId: 13514,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1737,
		name: 'Toad Oil',
		iconId: 13515,
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1738,
		name: 'Doom',
		iconId: 13516,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1739,
		name: 'Wisdom of the Elder',
		iconId: 16654,
		description: 'Magic damage dealt and magic defense are increased. Spell MP cost is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1740,
		name: 'Wisdom of the Duelist',
		iconId: 16655,
		description: 'Physical damage dealt and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1741,
		name: 'Wisdom of the Fiendhunter',
		iconId: 16656,
		description: 'Physical damage dealt and evasion are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1742,
		name: 'Wisdom of the Indomitable',
		iconId: 16657,
		description: 'Defense is increased. Maximum HP is boosted each time you take damage equivalent to at least 50% of your maximum HP from a single-target attack.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1743,
		name: 'Sacrifice',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1744,
		name: 'Stellation',
		iconId: 15954,
		description: 'Transformed into a many-pointed star. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1745,
		name: 'Black Hole Buffer',
		iconId: 15955,
		description: 'Invulnerable to the pull of the black hole.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1746,
		name: 'Blown Away',
		iconId: 15066,
		description: 'Carried away by an updraft.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1747,
		name: 'Fearless',
		iconId: 15948,
		description: 'Empowered by courage, increasing damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1748,
		name: 'Guardians\' Aegis',
		iconId: 15949,
		description: 'Shielded by a protective barrier.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1749,
		name: 'Area of Influence Up',
		iconId: 17981,
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1750,
		name: 'Twin Fates',
		iconId: 15947,
		description: 'Orlasrach and Munderg are in resonance with one another, each protecting its twin.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1751,
		name: 'Soul of Fire',
		iconId: 15509,
		description: 'Aetherial aspect is leaning primarily to fire.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1752,
		name: 'Soul of Ice',
		iconId: 15510,
		description: 'Aetherial aspect is leaning primarily to ice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1753,
		name: 'Blood Sacrifice',
		iconId: 15675,
		description: 'Damage taken is increased if those bonded by the blood ritual are separated.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1754,
		name: 'Aetherially Primed',
		iconId: 15958,
		description: 'Awash in aether attuned for traveling via unstable currents.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1755,
		name: 'Resurrection Restricted',
		iconId: 15959,
		description: 'The influence of Eureka-forged weapons is making resurrection by certain means impossible.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1756,
		name: 'Elemental Blessing',
		iconId: 15021,
		description: 'An area of land has been granted the elementals\' protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1757,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1758,
		name: 'Deep Freeze',
		iconId: 17621,
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 1759,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1760,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1761,
		name: 'Ice Resistance Up',
		iconId: 15029,
		description: 'Ice resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1762,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1763,
		name: 'HP Boost',
		iconId: 17801,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1764,
		name: 'Artificially Enhanced',
		iconId: 15956,
		description: 'Magitek plate armor has been enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1765,
		name: 'Artificially Enhanced',
		iconId: 15956,
		description: 'Magitek plate armor has been enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1766,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1767,
		name: 'Weak Magitek Field',
		iconId: 15957,
		description: 'Protection provided by towers has lessened, but damage taken is still reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1768,
		name: 'Watery Grave',
		iconId: 15038,
		description: 'You are trapped in a magicked prison of water and are unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1769,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1770,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1771,
		name: 'True Virtue',
		iconId: 15960,
		description: 'As an ideal made manifest, strength surpasses mortal imagination.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1772,
		name: 'Aggressive Posture',
		iconId: 15555,
		description: 'Prepared to carry out an assault.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1773,
		name: 'Defensive Posture',
		iconId: 15555,
		description: 'Prepared to stand fast.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1774,
		name: 'Blazing Aramitama',
		iconId: 15961,
		description: 'The aramitama has been stoked, and both body and soul surrendered to it.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1775,
		name: 'Reforged',
		iconId: 15938,
		description: 'Aetherial composition has been altered, changing elemental aspect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1776,
		name: 'Blunt Resistance Down',
		iconId: 15064,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1777,
		name: 'Reforged',
		iconId: 15938,
		description: 'Aetherial composition has been altered, changing elemental aspect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1778,
		name: 'Hoofing It',
		iconId: 16232,
		description: 'Unable to summon or ride mounts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1779,
		name: 'Ajisai',
		iconId: 13304,
		description: 'Fine cuts are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1780,
		name: '魔力汚染',
		iconId: 15057,
		description: '害意ある魔力によって汚染された状態。特定の攻撃によって、戦闘不能状態に陥る。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1781,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1782,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1783,
		name: 'Soul of Fire',
		iconId: 15509,
		description: 'Aetherial aspect is leaning primarily to fire.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1784,
		name: 'Soul of Ice',
		iconId: 15510,
		description: 'Aetherial aspect is leaning primarily to ice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1785,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1786,
		name: 'Pure Muscle',
		iconId: 15718,
		description: 'Muscles are rippling with power. Potency and range of certain actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1787,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1788,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1789,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 1790,
		name: 'Shadow Links',
		iconId: 15756,
		description: 'Sustaining damage over time. Movement speed is also decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1791,
		name: 'Magic Infusion',
		iconId: 15863,
		description: 'Imbued with enough potent aether to execute a certain action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1792,
		name: 'Artificial Boost',
		iconId: 15956,
		description: 'Magitek plate armor has been enhanced beyond standard limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1793,
		name: 'Mark of Mortality',
		iconId: 19421,
		description: 'Branded with a mark of mortality. Damage dealt is reduced. Too many stacks will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 1794,
		name: 'Heated Up',
		iconId: 15977,
		description: 'Burning vast quantities of energy and emitting steam from a portion of the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1795,
		name: 'Heated Up',
		iconId: 15977,
		description: 'Burning vast quantities of energy and emitting steam from a portion of the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1796,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1797,
		name: 'Critical Strikes',
		iconId: 15555,
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1798,
		name: 'Dualcast',
		iconId: 15779,
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1799,
		name: 'Fae Light',
		iconId: 15976,
		description: 'Cane is aglow with the ethereal light of ancient magicks. Damage dealt is greatly increased. All auto-attacks become area of effect attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1800,
		name: 'Bloated',
		iconId: 19441,
		description: 'Damage taken is increased. The greater the stack, the higher the increase.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1801,
		name: 'Pick Clean',
		iconId: 16013,
		description: 'Reduces the chance of obtaining HQ items to 0% but increases item yield. Amount of increase is determined by your perception rating.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1802,
		name: 'The Giving Land',
		iconId: 16014,
		description: 'Increases the number of shards, crystals, or clusters that are obtained by a random amount.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1803,
		name: 'Surface Slap',
		iconId: 11115,
		description: 'Fish of the same type as the last one caught are now aware of your presence and will not bite.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1804,
		name: 'Identical Cast',
		iconId: 11116,
		description: 'You\'re feeling lucky about catching a fish of the same type as the last one you caught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1805,
		name: 'Identical Gig',
		iconId: 11117,
		description: 'You\'re feeling lucky about catching a fish of the same type as the last one you caught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1806,
		name: 'Reusing',
		iconId: 16123,
		description: 'A portion of materials are being returned to your inventory.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1807,
		name: 'Cocoon of the Penitent',
		iconId: 15963,
		description: 'Metamorphosing into a sin eater.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1808,
		name: 'Spell-in-Waiting',
		iconId: 15982,
		description: 'The next spell cast will activate after a delay.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1809,
		name: 'Spell-in-Waiting: Unholy Darkness',
		iconId: 15983,
		description: 'Designated target of Unholy Darkness, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1810,
		name: 'Spell-in-Waiting: Dark Fire III',
		iconId: 15984,
		description: 'Designated target of Dark Fire III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1811,
		name: 'Spell-in-Waiting: Hell Wind',
		iconId: 15985,
		description: 'Designated target of Hell Wind, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1812,
		name: 'Spell-in-Waiting: Shadoweye',
		iconId: 15986,
		description: 'Designated target of Shadoweye, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1813,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1814,
		name: 'Flourishing Cascade',
		iconId: 13701,
		description: 'Able to execute Reverse Cascade.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1815,
		name: 'Flourishing Fountain',
		iconId: 13702,
		description: 'Able to execute Fountainfall.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1816,
		name: 'Flourishing Windmill',
		iconId: 13703,
		description: 'Able to execute Rising Windmill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1817,
		name: 'Flourishing Shower',
		iconId: 13704,
		description: 'Able to execute Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1818,
		name: 'Standard Step',
		iconId: 13705,
		description: 'Caught up in the dance and only able to execute step actions, role actions, Sprint, Limit Break, Standard Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1819,
		name: 'Technical Step',
		iconId: 13706,
		description: 'Caught up in the dance and only able to execute step actions, role actions, Sprint, Limit Break, Technical Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1820,
		name: 'Threefold Fan Dance',
		iconId: 13707,
		description: 'Able to execute Fan Dance III.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1821,
		name: 'Standard Finish',
		iconId: 13708,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1822,
		name: 'Technical Finish',
		iconId: 13709,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1823,
		name: 'Closed Position',
		iconId: 13712,
		description: 'Sharing the effects of certain actions with target party member.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1824,
		name: 'Dance Partner',
		iconId: 13713,
		description: 'Sharing the effects of certain actions executed by your dancer companion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1825,
		name: 'Devilment',
		iconId: 13714,
		description: 'Critical hit rate and direct hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1826,
		name: 'Shield Samba',
		iconId: 13715,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1827,
		name: 'Improvisation',
		iconId: 13716,
		description: 'Dancing to the beat of your own drum.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1828,
		name: 'Improvisation',
		iconId: 13717,
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1829,
		name: 'Invincibility',
		iconId: 15024,
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1830,
		name: 'Monstrous',
		iconId: 15978,
		description: 'Vile magicks have wrought a terrible transformation to body and mind.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1831,
		name: 'No Mercy',
		iconId: 13601,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1832,
		name: 'Camouflage',
		iconId: 13602,
		description: 'Parry rate is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1833,
		name: 'Royal Guard',
		iconId: 13603,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1834,
		name: 'Nebula',
		iconId: 13604,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1835,
		name: 'Aurora',
		iconId: 13605,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1836,
		name: 'Superbolide',
		iconId: 13606,
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1837,
		name: 'Sonic Break',
		iconId: 13607,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1838,
		name: 'Bow Shock',
		iconId: 13608,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1839,
		name: 'Heart of Light',
		iconId: 13609,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1840,
		name: 'Heart of Stone',
		iconId: 13610,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1842,
		name: 'Ready to Rip',
		iconId: 13611,
		description: 'Able to execute Jugular Rip.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1843,
		name: 'Ready to Tear',
		iconId: 13612,
		description: 'Able to execute Abdomen Tear.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1844,
		name: 'Ready to Gouge',
		iconId: 13613,
		description: 'Able to execute Eye Gouge.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1845,
		name: 'Vulnerability Up',
		iconId: 15020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1846,
		name: 'Curse of the Ronka',
		iconId: 19521,
		description: 'A plague of ancient anathema clutters your thoughts, spurring you to deny your very existence. Increased exposure will eventually lead to madness and death.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 1847,
		name: 'Esprit',
		iconId: 13710,
		description: 'The Esprit Gauge is increasing when you or the party member designated as your Dance Partner executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1848,
		name: 'Esprit',
		iconId: 13711,
		description: 'The Esprit Gauge is increasing when you or a party member executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1849,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1850,
		name: 'Surging Waters',
		iconId: 15964,
		description: 'Overflowing with water-aspected aether. A Surging Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1851,
		name: 'Splashing Waters',
		iconId: 15965,
		description: 'Overflowing with water-aspected aether. A Splashing Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1852,
		name: 'Swirling Waters',
		iconId: 15968,
		description: 'Overflowing with water-aspected aether. A Swirling Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1853,
		name: 'Smothering Waters',
		iconId: 15969,
		description: 'Overflowing with water-aspected aether. A Smothering Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1854,
		name: 'Sundering Waters',
		iconId: 15966,
		description: 'Overflowing with water-aspected aether. A Sundering Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1855,
		name: 'Sweeping Waters',
		iconId: 15967,
		description: 'Overflowing with water-aspected aether. A Sweeping Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1856,
		name: 'Sheltron',
		iconId: 12510,
		description: 'Blocking incoming attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1857,
		name: 'Nascent Flash',
		iconId: 12558,
		description: 'Restoring HP with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 1858,
		name: 'Nascent Glint',
		iconId: 12559,
		description: 'Receiving 100% of all HP recovered by the warrior who granted this status via Nascent Flash. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 1859,
		name: 'Fading Fast',
		iconId: 15116,
		description: 'Reduction of life-sustaining aether by concealment techniques is placing strain on the body. Failure to remove this effect will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1860,
		name: 'Vital Sign',
		iconId: 15117,
		description: 'Severing the flow of life-sustaining aether in order to avoid detection has damaged the body\'s vital functions. Movement speed is severely decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1861,
		name: 'Leaden Fist',
		iconId: 12533,
		description: 'Next Bootshine will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1862,
		name: 'Anatman',
		iconId: 12534,
		description: 'Form and Disciplined Fist timers are suspended due to a transcendent inner calm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1863,
		name: 'Draconian Fire',
		iconId: 12585,
		description: 'Able to execute Raiden ThrustDraconian Fury�\u0001\u0003�\u0001\u0003.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1864,
		name: 'Lance Charge',
		iconId: 10304,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1865,
		name: 'Meditation',
		iconId: 19501,
		description: 'Deep in contemplation.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1866,
		name: 'Bioblaster',
		iconId: 13020,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1867,
		name: 'Hellish Conduit',
		iconId: 12733,
		description: 'Able to execute Brand of Purgatory.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1868,
		name: 'Everlasting Flight',
		iconId: 12732,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1869,
		name: 'Gale Enforcer',
		iconId: 12721,
		description: 'Maintaining a localized windstorm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1871,
		name: 'Dia',
		iconId: 12635,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1872,
		name: 'Temperance',
		iconId: 12634,
		description: 'Healing magic potency is increased while damage taken by nearby party members is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1873,
		name: 'Temperance',
		iconId: 12633,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1874,
		name: 'Angel\'s Whisper',
		iconId: 12846,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1875,
		name: 'Seraphic Illumination',
		iconId: 12847,
		description: 'Magic defense and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1876,
		name: 'Lord of Crowns',
		iconId: 13243,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1877,
		name: 'Lady of Crowns',
		iconId: 13244,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1878,
		name: 'Divination',
		iconId: 13245,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1879,
		name: 'Opposition',
		iconId: 13246,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1880,
		name: 'Nocturnal Opposition',
		iconId: 13247,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1881,
		name: 'Combust III',
		iconId: 13248,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1882,
		name: 'The Balance',
		iconId: 13204,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1883,
		name: 'The Bole',
		iconId: 13205,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1884,
		name: 'The Arrow',
		iconId: 13206,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1885,
		name: 'The Spear',
		iconId: 13207,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1886,
		name: 'The Ewer',
		iconId: 13208,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1887,
		name: 'The Spire',
		iconId: 13209,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1888,
		name: 'Diurnal Intersection',
		iconId: 13249,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1889,
		name: 'Intersection',
		iconId: 13250,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1890,
		name: 'Horoscope',
		iconId: 13251,
		description: 'Primed to receive the healing effects of Horoscope.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1891,
		name: 'Horoscope Helios',
		iconId: 13252,
		description: 'Primed to receive the healing effects of Horoscope.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1892,
		name: 'Neutral Sect',
		iconId: 13253,
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1893,
		name: 'Scouring Waters',
		iconId: 15996,
		description: 'Overflowing with water-aspected aether. A Scouring Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1894,
		name: 'Dark Missionary',
		iconId: 13122,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1895,
		name: 'Biolysis',
		iconId: 12812,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1896,
		name: 'Recitation',
		iconId: 12813,
		description: 'The next Adloquium, Succor, Indomitability, or Excogitation executed will cost no MP or Aetherflow stacks and will restore critical HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1897,
		name: 'Nascent Chaos',
		iconId: 12560,
		description: 'Decimate is upgraded to Chaotic Cyclone.Nascent Chaos Effect: Fell Cleave is upgraded to Inner Chaos.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1898,
		name: 'Brutal Shell',
		iconId: 13614,
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1899,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1900,
		name: 'Winged Shield',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1901,
		name: 'Enshielded',
		iconId: 12513,
		description: 'Winged shield is reducing damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1902,
		name: 'Sword Oath',
		iconId: 19461,
		description: 'Able to execute Atonement.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1903,
		name: 'Phantasmal',
		iconId: 15980,
		description: 'Without corporeal form.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1904,
		name: 'Light in the Dark',
		iconId: 15987,
		description: 'Unleashing the Light trapped within you in defiance of the Darkness. Damage dealt and HP recovery are increased. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1905,
		name: 'Veil of Gukumatz',
		iconId: 15992,
		description: 'Combat capabilities are sharply enhanced by Gukumatz\'s power.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1906,
		name: 'Perfect Deception',
		iconId: 15112,
		description: 'Having severely restricted the flow of life-sustaining aether, your presence is concealed but you are subject to the effect of Fading Fast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1907,
		name: 'Faded Out',
		iconId: 15114,
		description: 'Overburdened body is unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1908,
		name: 'Fetters',
		iconId: 15534,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1909,
		name: 'Area of Influence Up',
		iconId: 17981,
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1910,
		name: 'Right Eye',
		iconId: 12581,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1911,
		name: 'Asylum',
		iconId: 12629,
		description: 'A veil of succor is healing party members in the area.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1912,
		name: 'Asylum',
		iconId: 12636,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1913,
		name: 'Vauthry\'s Blessing',
		iconId: 15962,
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1914,
		name: 'Disembowel',
		iconId: 12576,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1915,
		name: 'Summon Order',
		iconId: 19701,
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1916,
		name: 'Name of the Elements',
		iconId: 11501,
		description: 'Efficiency of Brand of the Elements is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1917,
		name: 'Seraphic Veil',
		iconId: 12848,
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1918,
		name: 'Catalyze',
		iconId: 12814,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1919,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1920,
		name: 'Diurnal Balance',
		iconId: 13254,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1921,
		name: 'Neutral Sect',
		iconId: 13255,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1922,
		name: 'Vauthry\'s Blessing',
		iconId: 15962,
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1923,
		name: 'Vauthry\'s Blessing',
		iconId: 15962,
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1924,
		name: 'Vauthry\'s Blessing',
		iconId: 15962,
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1925,
		name: 'Vauthry\'s Blessing',
		iconId: 15962,
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1926,
		name: 'Sleeve Draw',
		iconId: 19561,
		description: 'Draws a new arcanum after executing Play, Minor Arcana, or Undraw.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1927,
		name: 'Trusty Shield',
		iconId: 12506,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1928,
		name: 'Levinskin',
		iconId: 15021,
		description: 'A subtle field of levin crackles about the body, increasing defense.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1929,
		name: 'Light Beyond Darkness',
		iconId: 15988,
		description: 'Unleashing the Light trapped within you in defiance of the Darkness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1931,
		name: 'Gunmetal Soul',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1932,
		name: 'Army\'s Muse',
		iconId: 12619,
		description: 'Auto-attack delay as well as weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1933,
		name: 'Army\'s Ethos',
		iconId: 12620,
		description: 'Singing Mage\'s Ballad or the Wanderer\'s Minuet will grant the effect of Army\'s Muse.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1934,
		name: 'Troubadour',
		iconId: 12615,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1935,
		name: 'Soaking Wet',
		iconId: 15995,
		description: 'Waterlogged gear is reducing movement speed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1936,
		name: 'Stone Wall',
		iconId: 12703,
		description: 'An invisible-yet-rock-solid barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1937,
		name: 'In Event',
		iconId: 15765,
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1939,
		name: 'Beckoned',
		iconId: 15002,
		description: 'Fae magicks have taken hold, and your will is not entirely your own.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1940,
		name: 'Chilled to the Bone',
		iconId: 15525,
		description: 'Drenched in ice-cold water, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1941,
		name: 'Accursed Poison',
		iconId: 15007,
		description: 'An ancient corruption is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1942,
		name: 'Ranging',
		iconId: 15994,
		description: 'Scouting territory. Will halt if engaged in combat. If not engaged while scouting, will end foray and return home.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1943,
		name: 'Hastilude',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1944,
		name: 'Sacred Soil',
		iconId: 12802,
		description: 'A circle of sanctified earth is healing party members and reducing damage taken within its bounds.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1945,
		name: 'Hoofing It',
		iconId: 16232,
		description: 'Unable to summon or ride mounts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1946,
		name: 'Wildfire',
		iconId: 13019,
		description: 'Currently afflicting an enemy with Wildfire.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1947,
		name: 'Sleep',
		iconId: 15013,
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1948,
		name: 'Magic Damage Down',
		iconId: 15055,
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1949,
		name: 'Splashing Waters',
		iconId: 15965,
		description: 'Overflowing with water-aspected aether. A Splashing Tsunami will occur when effect expires. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1950,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1951,
		name: 'Tactician',
		iconId: 13021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1952,
		name: 'Hide',
		iconId: 10607,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1953,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1954,
		name: 'Bunshin',
		iconId: 19681,
		description: 'Your corporeal shadow is performing an attack each time you execute a weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1955,
		name: 'Assassinate Ready',
		iconId: 12913,
		description: 'Able to execute Assassinate.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1956,
		name: 'Souldeep Invisibility',
		iconId: 15113,
		description: 'Having severed the flow of life-sustaining aether, your presence is completely concealed but you are subject to the effects of Fading Fast and Vital Sign.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1958,
		name: 'Forward March',
		iconId: 15774,
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1959,
		name: 'About Face',
		iconId: 15775,
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1960,
		name: 'Left Face',
		iconId: 15776,
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1961,
		name: 'Right Face',
		iconId: 15777,
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1962,
		name: 'Haste',
		iconId: 15008,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1963,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1964,
		name: 'Summon Order II',
		iconId: 19711,
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1965,
		name: 'Summon Order III',
		iconId: 19721,
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1966,
		name: 'Summon Order IV',
		iconId: 19731,
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1967,
		name: 'Sleep Resistance',
		iconId: 14834,
		description: 'Far too invigorated to fall easily to slumber\'s temptation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1968,
		name: 'Behelmed',
		iconId: 15990,
		description: 'Head is crammed awkwardly into a dwarven helmet, granting resistance to sleep.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1969,
		name: 'Behelmed',
		iconId: 15991,
		description: 'Dwarven helmet is preventing the use of certain restorative actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1970,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1971,
		name: 'Manafication',
		iconId: 17491,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 1972,
		name: 'Delirium',
		iconId: 17147,
		description: 'Blackblood cost for Bloodspiller and Quietus is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1973,
		name: 'Lightning Resistance Down II',
		iconId: 15597,
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1974,
		name: 'Paradise Regained',
		iconId: 15997,
		description: 'Magical power is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1975,
		name: 'Enlarged',
		iconId: 19541,
		description: 'Body has grown to a massive size.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 1976,
		name: 'Fully Enlarged',
		iconId: 15971,
		description: 'Body has grown to maximum size.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1977,
		name: 'Full Swing',
		iconId: 14866,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1978,
		name: 'Rampart',
		iconId: 10152,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1979,
		name: 'アルティメイタム',
		iconId: 14846,
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1980,
		name: 'アルティメイタム[被]',
		iconId: 14847,
		description: '与ダメージが低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1981,
		name: 'Blood for Blood',
		iconId: 10304,
		description: 'Damage dealt and damage taken are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1982,
		name: 'Bloodbath',
		iconId: 13913,
		description: 'Attacks generate HP equal to the amount of physical damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1983,
		name: 'Fetter Ward',
		iconId: 14867,
		description: 'All Stun, Sleep, Bind, Heavy, Silence, knockback, and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1984,
		name: 'Arm\'s Length',
		iconId: 13915,
		description: 'Damage taken is reduced. Impervious to the next stun, sleep, bind, heavy, silence, knockback, or draw-in effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1985,
		name: 'Peloton',
		iconId: 13908,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1986,
		name: 'Phantom Dart',
		iconId: 14868,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1987,
		name: 'Swiftcast',
		iconId: 10454,
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1988,
		name: 'Addle',
		iconId: 13917,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1989,
		name: 'Manaward',
		iconId: 10456,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1990,
		name: 'Attunement',
		iconId: 14816,
		description: 'Damage taken is significantly reduced. Unable to act.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1991,
		name: 'Sword Oath',
		iconId: 19461,
		description: 'Able to execute Atonement and Glory Slash.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1992,
		name: 'Nascent Chaos',
		iconId: 12560,
		description: 'Fell Cleave is upgraded to Inner Chaos, while Decimate is upgraded to Chaotic Cyclone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1993,
		name: 'Shake It Off',
		iconId: 12557,
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1994,
		name: 'ブラッドスピラー',
		iconId: 14850,
		description: '自身に対するＨＰ回復効果が低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1995,
		name: 'クワイタス',
		iconId: 14851,
		description: '自身に対するＨＰ回復効果が低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1996,
		name: 'Delirium',
		iconId: 13121,
		description: 'Blackblood cost is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1997,
		name: 'Brutal Shell',
		iconId: 13614,
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1998,
		name: 'バーストストライク',
		iconId: 14852,
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1999,
		name: 'フェイテッドサークル',
		iconId: 14853,
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2000,
		name: 'Heart of Light',
		iconId: 13609,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2001,
		name: '無敵',
		iconId: 13606,
		description: 'すべての攻撃に対してＨＰが1より減ることがない状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2002,
		name: 'Ready to Rip',
		iconId: 13611,
		description: 'Able to execute Jugular Rip.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2003,
		name: 'Ready to Tear',
		iconId: 13612,
		description: 'Able to execute Abdomen Tear.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2004,
		name: 'Ready to Gouge',
		iconId: 13613,
		description: 'Able to execute Eye Gouge.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2005,
		name: 'Fists of Fire',
		iconId: 10202,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2006,
		name: 'Fists of Earth',
		iconId: 10203,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2007,
		name: 'Fists of Wind',
		iconId: 12526,
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2008,
		name: 'Riddle of Earth',
		iconId: 12527,
		description: 'A barrier created through profound comprehension of the earth is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2009,
		name: 'Wanderer\'s Minuet',
		iconId: 12613,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2010,
		name: 'Bunshin',
		iconId: 19681,
		description: 'Your corporeal shadow is performing an attack each time you execute a weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2011,
		name: 'Shade Shift',
		iconId: 10605,
		description: 'Shadows are nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2012,
		name: 'Corps-a-corps',
		iconId: 14882,
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2013,
		name: 'Displacement',
		iconId: 14883,
		description: 'Next spell cast will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2014,
		name: 'Trick Attack',
		iconId: 14857,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2015,
		name: '陣風',
		iconId: 13301,
		description: '与ダメージが向上した状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2016,
		name: '士風',
		iconId: 13302,
		description: 'ウェポンスキルおよび魔法のキャストタイムとリキャストタイムが短縮された状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2017,
		name: 'Repelling Shot',
		iconId: 14858,
		description: 'Damage dealt by weaponskills is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2018,
		name: 'ワイルドファイア',
		iconId: 13019,
		description: 'ワイルドファイアを付与した状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2019,
		name: 'Bioblaster',
		iconId: 13020,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2020,
		name: 'Intervention',
		iconId: 12511,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2021,
		name: 'Flourishing Fan Dance',
		iconId: 13707,
		description: 'Able to execute Fan Dance III.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2022,
		name: 'Saber Dance',
		iconId: 14859,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2023,
		name: 'Standard Step',
		iconId: 13705,
		description: 'Caught up in the dance and only able to execute step actions, additional actions, Head Graze, Bolt, Medical Kit, Standard Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2024,
		name: 'Standard Finish',
		iconId: 13708,
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2025,
		name: 'Esprit',
		iconId: 13710,
		description: 'The Esprit Gauge is increasing when you or the party member designated as your Dance Partner executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2026,
		name: 'Closed Position',
		iconId: 13712,
		description: 'Sharing the effects of certain actions with target party member.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2027,
		name: 'Dance Partner',
		iconId: 13713,
		description: 'Sharing the effects of certain actions executed by your dancer companion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2028,
		name: '三連魔',
		iconId: 12658,
		description: '魔法が詠唱時間無しで唱えられる状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2029,
		name: 'Fountain of Fire',
		iconId: 12731,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2030,
		name: 'Everlasting Flight',
		iconId: 12732,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2031,
		name: 'ヴァルエアロ',
		iconId: 14862,
		description: '継続ダメージを受ける状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2032,
		name: 'ヴァルサンダー',
		iconId: 14863,
		description: '継続ダメージを受ける状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2033,
		name: 'Engagement',
		iconId: 14864,
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2034,
		name: 'Divination',
		iconId: 13245,
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2035,
		name: 'Dia',
		iconId: 12635,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2036,
		name: 'Afflatus Solace',
		iconId: 14865,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2037,
		name: 'Temperance',
		iconId: 12634,
		description: 'Damage dealt and potency of all HP restoration actions are increased while damage taken by nearby party members is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2038,
		name: 'Temperance',
		iconId: 12633,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2039,
		name: 'Biolysis',
		iconId: 12812,
		description: 'Rapid decomposition of the flesh is reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2040,
		name: 'Seraphic Veil',
		iconId: 12848,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2041,
		name: 'Combust III',
		iconId: 13248,
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2042,
		name: 'Diurnal Balance',
		iconId: 13254,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2043,
		name: 'Nocturnal Balance',
		iconId: 13255,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2044,
		name: 'Neutral Sect',
		iconId: 13253,
		description: 'Spell cast and recast times are reduced.Helios is upgraded to Aspected Helios, while Benefic is upgraded to Aspected Benefic.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2045,
		name: 'シャーク',
		iconId: 10404,
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2046,
		name: 'シャーク[被]',
		iconId: 10404,
		description: '受けるダメージが軽減される状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2047,
		name: 'Wide Awake',
		iconId: 14834,
		description: 'Resistance to the effects of dream powder has been granted by an unpleasant-yet-effective serum.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2048,
		name: 'En Avant',
		iconId: 14860,
		description: 'Cascade is upgraded to Reverse Cascade, Fountain is upgraded to Fountainfall, Windmill is upgraded to Rising Windmill, and Bladeshower is upgraded to Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2049,
		name: 'Technical Step',
		iconId: 13706,
		description: 'Caught up in the dance and only able to execute step actions, additional actions, Technical Finish, En Avant, Head Graze, Bolt, and Medical Kit.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2050,
		name: 'Technical Finish',
		iconId: 13709,
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2051,
		name: 'Esprit',
		iconId: 13711,
		description: 'The Esprit Gauge is increasing when you or a party member executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2052,
		name: 'Fan Dance III',
		iconId: 14861,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2053,
		name: 'Protect',
		iconId: 10405,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2054,
		name: 'Lord of Crowns Drawn',
		iconId: 13256,
		description: 'The Lord of Crowns card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2055,
		name: 'Lady of Crowns Drawn',
		iconId: 13257,
		description: 'The Lady of Crowns card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2061,
		name: 'Nascent Flash',
		iconId: 12558,
		description: 'Absorbing HP with each physical attack delivered. Damage taken is also reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2062,
		name: 'Nascent Glint',
		iconId: 12559,
		description: 'Damage taken is reduced, and receiving 100% of all HP absorbed by the warrior who granted this status via Nascent Flash.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2063,
		name: 'Draw Power',
		iconId: 14869,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2064,
		name: 'Draw Fortitude',
		iconId: 14871,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2065,
		name: 'Aurora',
		iconId: 13605,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2066,
		name: 'Drained Power',
		iconId: 14870,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2067,
		name: 'Drained Fortitude',
		iconId: 14872,
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2068,
		name: 'Smackdown',
		iconId: 15115,
		description: 'Accuracy and damage dealt are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2069,
		name: 'Dissipation',
		iconId: 12805,
		description: 'Damage dealt and potency of all HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2070,
		name: 'Diurnal Opposition',
		iconId: 13246,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2071,
		name: 'Nocturnal Opposition',
		iconId: 13247,
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2072,
		name: 'Focalization',
		iconId: 14813,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2073,
		name: 'Acidic Bite',
		iconId: 12616,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2074,
		name: 'Physical Damage Up',
		iconId: 15050,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2075,
		name: 'Thunder II',
		iconId: 10458,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2076,
		name: 'Confiteor',
		iconId: 14873,
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2077,
		name: 'Inner Chaos',
		iconId: 14874,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2078,
		name: 'Chaotic Cyclone',
		iconId: 14875,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2079,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2080,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2081,
		name: 'Concussion',
		iconId: 15523,
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2082,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2083,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2084,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2085,
		name: 'Sludge',
		iconId: 15527,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2086,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2087,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2088,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2089,
		name: 'Poison',
		iconId: 15007,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2090,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2091,
		name: 'Magic Vulnerability Up',
		iconId: 15057,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2092,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2093,
		name: 'Healing Magic Down',
		iconId: 15572,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2094,
		name: 'Water Resistance Down II',
		iconId: 15698,
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2095,
		name: 'Lightning Resistance Down II',
		iconId: 15597,
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2096,
		name: 'Wind Resistance Down II',
		iconId: 15721,
		description: 'Wind resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2097,
		name: 'Earth Resistance Down II',
		iconId: 15722,
		description: 'Earth resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2098,
		name: 'Fire Resistance Down II',
		iconId: 15595,
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2099,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2100,
		name: 'Unstable Gravity',
		iconId: 15770,
		description: 'The gravity about you is highly unstable and will rupture upon expiration of this effect, dealing unaspected damage to those within range.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2101,
		name: 'Reprisal',
		iconId: 13901,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2102,
		name: 'Edge of Shadow',
		iconId: 14876,
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2103,
		name: 'Concussion',
		iconId: 15523,
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2104,
		name: 'Poison',
		iconId: 15007,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2105,
		name: 'Standard Finish',
		iconId: 13708,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2106,
		name: 'Spell-in-Waiting: Flare',
		iconId: 15970,
		description: 'Designated target of Flare, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2109,
		name: 'Out of the Action',
		iconId: 15045,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2110,
		name: 'Ancient Circle',
		iconId: 15770,
		description: 'Fell darkness spreads out from where you stand. The Ancient Circle will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2111,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2112,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2113,
		name: 'Standard Finish',
		iconId: 13708,
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2114,
		name: 'Gobskin',
		iconId: 13517,
		description: 'Hardened flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2115,
		name: 'Conked',
		iconId: 13518,
		description: 'Intelligence and mind are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2116,
		name: 'Meatily Shielded',
		iconId: 13519,
		description: 'A designated party member is protecting you.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2117,
		name: 'Meat Shield',
		iconId: 13520,
		description: 'You are protecting a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2118,
		name: 'Harmonized',
		iconId: 13521,
		description: 'Potency of next physical damage spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2119,
		name: 'Cactguard',
		iconId: 13522,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2120,
		name: 'HP Boost',
		iconId: 13523,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2121,
		name: 'Astral Attenuation',
		iconId: 13524,
		description: 'Fire-, wind-, and lightning-aspected damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2122,
		name: 'Umbral Attenuation',
		iconId: 13525,
		description: 'Water-, earth-, and ice-aspected damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2123,
		name: 'Physical Attenuation',
		iconId: 13526,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2124,
		name: 'Aetherial Mimicry: Tank',
		iconId: 13527,
		description: 'Copying the aetherial properties of a tank.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2125,
		name: 'Aetherial Mimicry: DPS',
		iconId: 13528,
		description: 'Copying the aetherial properties of a DPS.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2126,
		name: 'Aetherial Mimicry: Healer',
		iconId: 13529,
		description: 'Copying the aetherial properties of a healer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2127,
		name: 'Brush with Death',
		iconId: 13530,
		description: 'Your resolve has deserted you. You are unable to perform actions that would result in your death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2128,
		name: 'Burning Brand',
		iconId: 15998,
		description: 'Branded with a mark of flame and unable to deal damage to Lahabrea\'s shade. Fire damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2129,
		name: 'Freezing Brand',
		iconId: 15999,
		description: 'Branded with a mark of ice and unable to deal damage to Igeyorhm\'s shade. Ice damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2130,
		name: 'Surpanakha\'s Fury',
		iconId: 19581,
		description: 'Potency of Surpanakha is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2131,
		name: 'Battle High I',
		iconId: 14877,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2132,
		name: 'Battle High II',
		iconId: 14878,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2133,
		name: 'Battle High III',
		iconId: 14879,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2134,
		name: 'Battle High IV',
		iconId: 14880,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2135,
		name: 'Battle High V',
		iconId: 14881,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2136,
		name: 'Mortal Flame',
		iconId: 15981,
		description: 'Enveloped by hungry flames that will not be quenched until they have burnt something to ash.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2137,
		name: 'Final Decree Nisi γ',
		iconId: 15201,
		description: 'Decree Nisi γ is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2138,
		name: 'Final Decree Nisi δ',
		iconId: 15202,
		description: 'Decree Nisi δ is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2139,
		name: 'Final Judgment: Decree Nisi γ',
		iconId: 15203,
		description: 'Sentenced to receive Decree Nisi γ. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2140,
		name: 'Final Judgment: Decree Nisi δ',
		iconId: 15204,
		description: 'Sentenced to receive Decree Nisi δ. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2141,
		name: 'Final Judgment: Penalty IV',
		iconId: 15205,
		description: 'Sentenced to receive enfeeblement IV. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2142,
		name: 'Compressed Water',
		iconId: 15696,
		description: 'Highly compressed aetherial energy covers the body. Water-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2143,
		name: 'Compressed Lightning',
		iconId: 15697,
		description: 'Highly compressed aetherial energy covers the body. Lightning-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2144,
		name: 'Water Resistance Down II',
		iconId: 15698,
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2145,
		name: 'Lightning Resistance Down II',
		iconId: 15597,
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2146,
		name: 'Enigma Codex',
		iconId: 15210,
		description: 'The codex is granting you the power to manipulate time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2147,
		name: 'Enigma Codex',
		iconId: 15210,
		description: 'The codex is granting you the power to manipulate time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2148,
		name: 'Contact Prohibition Ordained',
		iconId: 15211,
		description: 'You have received an order prohibiting contact.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2149,
		name: 'Contact Regulation Ordained',
		iconId: 15212,
		description: 'You have received an order to regulate contact.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2150,
		name: 'Escape Prohibition Ordained',
		iconId: 15213,
		description: 'You have received an order prohibiting escape.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2151,
		name: 'Escape Detection Ordained',
		iconId: 15214,
		description: 'You have received an order to detect escape.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2152,
		name: 'Final Word: Contact Prohibition',
		iconId: 15215,
		description: 'You have been issued a writ of contact prohibition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2153,
		name: 'Final Word: Contact Regulation',
		iconId: 15216,
		description: 'You have been issued a writ of contact regulation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2154,
		name: 'Final Word: Escape Prohibition',
		iconId: 15217,
		description: 'You have been issued a writ of escape prohibition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2155,
		name: 'Final Word: Escape Detection',
		iconId: 15218,
		description: 'You have been issued a writ of escape detection.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2156,
		name: 'Suppuration',
		iconId: 15979,
		description: 'Maximum HP is reduced and damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 2157,
		name: 'Oil',
		iconId: 15989,
		description: 'Covered in a sticky oil. Both movement speed and fire resistance are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2158,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2159,
		name: 'Red Light',
		iconId: 16233,
		description: 'Movement has been halted.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2161,
		name: 'Forward March',
		iconId: 15774,
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2162,
		name: 'About Face',
		iconId: 15775,
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2163,
		name: 'Left Face',
		iconId: 15776,
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2164,
		name: 'Right Face',
		iconId: 15777,
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2165,
		name: 'Temporal Displacement',
		iconId: 15579,
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2166,
		name: 'Magitek Field',
		iconId: 15220,
		description: 'Magic attacks are being absorbed and reflected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2168,
		name: 'Divine Veil',
		iconId: 12508,
		description: 'A holy barrier is nullifying damage. When barrier is completely absorbed, creates a barrier around all nearby party members.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2169,
		name: 'Divine Veil',
		iconId: 12509,
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2170,
		name: 'Flood of Shadow',
		iconId: 14884,
		description: 'HP recovery via healing actions is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2171,
		name: 'Dark Missionary',
		iconId: 13122,
		description: 'Damage taken is reduced while HP recovered via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2172,
		name: 'Arm\'s Length',
		iconId: 13915,
		description: 'Weakening enemies when attacked. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2173,
		name: 'Meditative Brotherhood',
		iconId: 12529,
		description: 'Grants chance to open a chakra to the monk who applied the effect when a weaponskill is used or a spell is cast by any affected party member or self.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2174,
		name: 'Brotherhood',
		iconId: 12532,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2175,
		name: 'Life Surge',
		iconId: 10302,
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2176,
		name: 'Meditation',
		iconId: 19501,
		description: 'Deep in contemplation.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2177,
		name: 'Tactician',
		iconId: 13021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2178,
		name: 'Nature\'s Minne',
		iconId: 12618,
		description: 'Damage taken is reduced while HP recovered via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2179,
		name: 'Testudo',
		iconId: 14801,
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2180,
		name: 'Fast Draw',
		iconId: 19601,
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2181,
		name: 'Arm\'s Length',
		iconId: 14885,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2182,
		name: 'Excogitation',
		iconId: 12808,
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2183,
		name: 'Nocturnal Field',
		iconId: 13217,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2184,
		name: 'Retaliation',
		iconId: 14817,
		description: 'Delivering counter damage every time an attack is suffered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2185,
		name: 'Feint',
		iconId: 13904,
		description: 'Sustaining increased damage from target who executed Feint.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2186,
		name: 'Concentrate',
		iconId: 14815,
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2187,
		name: 'Aetheric Burst',
		iconId: 14814,
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2188,
		name: 'Largesse',
		iconId: 10407,
		description: 'Potency of all HP restoration actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2189,
		name: 'Innovation',
		iconId: 11652,
		description: 'Efficiency of Touch actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2190,
		name: 'Final Appraisal',
		iconId: 16124,
		description: 'Ready to stop short of completing synthesis.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2191,
		name: 'Muscle Memory',
		iconId: 16125,
		description: 'Efficiency of the next Synthesis action is significantly increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2192,
		name: 'Blight',
		iconId: 15643,
		description: 'Sustaining damage over time as lungs are filled with corruption. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2194,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2196,
		name: 'Light in the Dark',
		iconId: 15987,
		description: 'Unleashing the Light trapped within you in defiance of the Darkness. Damage dealt and HP recovery are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2197,
		name: 'Death Becomes You',
		iconId: 15728,
		description: 'Shambling the line between dead and undead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2198,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2199,
		name: 'Burns',
		iconId: 17181,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 2200,
		name: 'Electrocution',
		iconId: 19041,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 2201,
		name: 'Ancient Double',
		iconId: 15219,
		description: 'Each action executed will be immediately repeated.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2203,
		name: 'Mortal Powder Mark',
		iconId: 15303,
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2204,
		name: 'Normal',
		iconId: 15286,
		description: 'Maintaining an average body temperature.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2205,
		name: 'Running Hot: +1',
		iconId: 15287,
		description: 'Body temperature has risen to 1 level above normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2206,
		name: 'Atlas',
		iconId: 15231,
		description: 'Resisting the weight of a falling star. When this effect expires, impact will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2207,
		name: 'Unwavering Will',
		iconId: 15024,
		description: 'Protected by an unseen aegis, rendering all attacks ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2208,
		name: 'Blind to Rage',
		iconId: 15232,
		description: 'So consumed by inner rage that the feelings of others pale by comparison. Attacks of players under a Pall of Rage are ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2209,
		name: 'Blind to Grief',
		iconId: 15233,
		description: 'So consumed by inner grief that the feelings of others pale by comparison. Attacks of players under a Pall of Grief are ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2210,
		name: 'Pall of Rage',
		iconId: 15234,
		description: 'Afflicted with an unaccountable feeling of anger. Attacks are ineffective against targets Blind to Rage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2211,
		name: 'Pall of Grief',
		iconId: 15235,
		description: 'Afflicted with an unaccountable feeling of loss. Attacks are ineffective against targets Blind to Grief.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2212,
		name: 'Running Hot: +2',
		iconId: 15288,
		description: 'Body temperature has risen to 2 levels above normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2213,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2214,
		name: 'Army\'s Paeon',
		iconId: 12605,
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2215,
		name: 'The Wanderer\'s Minuet',
		iconId: 12610,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2216,
		name: 'The Wanderer\'s Minuet',
		iconId: 12610,
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2217,
		name: 'Mage\'s Ballad',
		iconId: 12603,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2218,
		name: 'Army\'s Paeon',
		iconId: 12605,
		description: 'Direct hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2219,
		name: 'Shadow of the Dragon',
		iconId: 15731,
		description: 'Drawing on power inherited from Nidhogg.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2220,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2221,
		name: 'Final Judgment: Penalty III',
		iconId: 15705,
		description: 'Sentenced to receive enfeeblement III. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 195
	},
	{
		id: 2222,
		name: 'Final Decree Nisi α',
		iconId: 15221,
		description: 'Decree Nisi α is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2223,
		name: 'Final Decree Nisi β',
		iconId: 15222,
		description: 'Decree Nisi β is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2224,
		name: 'Final Judgment: Decree Nisi α',
		iconId: 15223,
		description: 'Sentenced to receive Decree Nisi α. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2225,
		name: 'Final Judgment: Decree Nisi β',
		iconId: 15224,
		description: 'Sentenced to receive Decree Nisi β. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2226,
		name: 'Veneration',
		iconId: 16126,
		description: 'Efficiency of Synthesis actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2227,
		name: 'Nascent Flash',
		iconId: 12558,
		description: 'Absorbing HP with each physical attack delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 2228,
		name: 'Surge Protection',
		iconId: 17011,
		description: 'Your body is covered in conductive matter, reducing the damage of certain attacks.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 199
	},
	{
		id: 2229,
		name: 'Static Condensation',
		iconId: 15229,
		description: 'Excess electricity is stored within your body, reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2230,
		name: 'パニック',
		iconId: 15605,
		description: 'パニックに陥った状態。ラムウから遠ざかるように移動してしまう。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2231,
		name: 'Fury\'s Bolt',
		iconId: 19741,
		description: 'Overcharged with electricity. Next attack will deal increased damage or differ in range.',
		category: 1,
		isPermanent: true,
		maxStacks: 14,
		partyListPriority: 200
	},
	{
		id: 2232,
		name: 'System Shock',
		iconId: 15230,
		description: 'Being electrified has weakened your heart. Further electrification will prove fatal, resulting in KO. ',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2233,
		name: 'Electrified',
		iconId: 17051,
		description: 'Wracked by electricity. Nearby players will also be Electrified when the effect ends and the charge disperses.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2235,
		name: 'Hated of the Vortex',
		iconId: 15226,
		description: 'The accursed taunt of the winds spurs you to fight only Garuda. Damage against all other targets is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2236,
		name: 'Hated of Embers',
		iconId: 15227,
		description: 'The accursed spitting of the flames spurs you to fight only Ifrit. Damage against all other targets is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2237,
		name: 'Irons of Purgatory',
		iconId: 15666,
		description: 'Manacled to burning chains. Will suffer damage if separated from similarly enchained party members.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2238,
		name: 'Astral Effect',
		iconId: 15236,
		description: 'Due to a severe disruption in aetherial balance, damage taken from astrally charged attacks is increased. Damage taken from umbrally charged attacks is decreased, and will result in the Umbral Effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2239,
		name: 'Umbral Effect',
		iconId: 15237,
		description: 'Due to a severe disruption in aetherial balance, damage taken from umbrally charged attacks is increased. Damage taken from astrally charged attacks is decreased, and will result in the Astral Effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2240,
		name: 'Forward with Thee',
		iconId: 15246,
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved forward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2241,
		name: 'Back with Thee',
		iconId: 15247,
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved backward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2242,
		name: 'Left with Thee',
		iconId: 15248,
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved leftward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2243,
		name: 'Right with Thee',
		iconId: 15249,
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved rightward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2244,
		name: 'Anemomorph',
		iconId: 15671,
		description: 'The flock of sin eaters have assumed the form of a cyclone.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2245,
		name: 'Hated of Levin',
		iconId: 15252,
		description: 'Ramuh has cursed you to discharge a burst of lightning-aspected damage at regular intervals. When this effect expires, you will Panic.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2246,
		name: 'Slow',
		iconId: 15009,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2247,
		name: 'Waymark',
		iconId: 15026,
		description: 'A lodestone by which the flock of sin eaters will chart their course. When this effect expires, you will be stunned.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2248,
		name: 'Blunt Resistance Down',
		iconId: 15064,
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2249,
		name: 'Unstable',
		iconId: 15225,
		description: 'Unable to keep your balance. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2250,
		name: 'Lightheaded',
		iconId: 15228,
		description: 'Experiencing dizziness. Certain attacks will cause Concussion.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2251,
		name: 'Freezing',
		iconId: 15238,
		description: 'Your body is slowly turning to ice. When this effect expires, you will experience a Deep Freeze.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2252,
		name: 'Deep Freeze',
		iconId: 15637,
		description: 'Your body is encased in ice, preventing action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2253,
		name: 'Refulgent Chain',
		iconId: 15239,
		description: 'Bound with chains of light. Your Refulgent Fate will be sealed when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2254,
		name: 'Refulgent Chain',
		iconId: 15239,
		description: 'Bound with chains of light. Your Refulgent Fate will be sealed when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2255,
		name: 'Refulgent Fate',
		iconId: 15240,
		description: 'Cursed by binding light. If the distance between you and the player to whom you are bound becomes too great or too small, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2256,
		name: 'Refulgent Fate',
		iconId: 15240,
		description: 'Cursed by binding light. If the distance between you and the player to whom you are bound becomes too great or too small, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2257,
		name: 'Lightsteeped',
		iconId: 17091,
		description: 'Overflowing with astral energy. Upon accumulating 5 stacks, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 2258,
		name: 'Wyrmclaw',
		iconId: 15241,
		description: 'Shredded by draconic talons. KO will occur when countdown reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2259,
		name: 'Wyrmfang',
		iconId: 15242,
		description: 'Torn by draconic teeth. KO will occur when countdown reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2260,
		name: 'Hated of Frost',
		iconId: 15243,
		description: 'Cursed by the lady herself. Damage from Hraesvelgr is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2261,
		name: 'Hated of the Wyrm',
		iconId: 15244,
		description: 'Cursed by the great wyrm himself. Damage from Shiva is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2262,
		name: 'Grace of Light',
		iconId: 15245,
		description: 'Blessed by Light. Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2263,
		name: 'Shock Spikes',
		iconId: 15502,
		description: 'Elemental spikes are dealing lightning damage to attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2264,
		name: 'Braced',
		iconId: 15251,
		description: 'Ready and able to Stand Firm.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2265,
		name: 'Standing Firm',
		iconId: 15250,
		description: 'Unbowed even by relentless onslaught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2267,
		name: 'Meat Shield',
		iconId: 15024,
		description: 'Subjects are serving as defense. All damage is nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2268,
		name: 'Running Cold: -1',
		iconId: 15289,
		description: 'Body temperature has dropped to 1 level below normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2269,
		name: 'FATE Participant',
		iconId: 16241,
		description: 'Actively participating in a FATE. Actions restricted to FATEs are available, though certain standard actions are unavailable. ',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2271,
		name: 'Panic',
		iconId: 15253,
		description: 'Excessively afeared. Overcome with the urge to flee from particular foes.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2274,
		name: 'Running Cold: -2',
		iconId: 15290,
		description: 'Body temperature has dropped to 2 levels below normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2275,
		name: 'Intemperate',
		iconId: 15291,
		description: 'Easily affected by changes in body temperature. When effect expires, running hot or cold will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2276,
		name: 'In Costume',
		iconId: 16214,
		description: 'Unusually attired.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2277,
		name: 'Hot Brand: +1',
		iconId: 15292,
		description: 'Bearing a fever-inducing brand. Body temperature will increase by 1 level when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2278,
		name: 'Light Resistance Down',
		iconId: 15599,
		description: 'Light resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2280,
		name: 'Enlarged',
		iconId: 19541,
		description: 'Body has grown to a massive size.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 2281,
		name: 'Fully Enlarged',
		iconId: 15971,
		description: 'Body has grown to maximum size.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2282,
		name: 'Embolden',
		iconId: 18921,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2283,
		name: 'Collective Unconscious',
		iconId: 13227,
		description: 'An area of mind attunement is created, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2284,
		name: 'Running Wild',
		iconId: 15255,
		description: 'Unleashing full strength, as commanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2285,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions and sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2286,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2287,
		name: 'True Hallowed Ground',
		iconId: 12504,
		description: 'Impervious to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2288,
		name: 'Shield Protocol A',
		iconId: 15263,
		description: 'Shield protocol A is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2289,
		name: 'Shield Protocol B',
		iconId: 15264,
		description: 'Shield protocol B is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2290,
		name: 'Shield Protocol C',
		iconId: 15265,
		description: 'Shield protocol C is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2291,
		name: 'Hot Brand: +2',
		iconId: 15293,
		description: 'Bearing a fever-inducing brand. Body temperature will increase by 2 levels when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2292,
		name: 'Cold Brand: -1',
		iconId: 15294,
		description: 'Bearing a chill-inducing brand. Body temperature will decrease by 1 level when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2293,
		name: 'Dash',
		iconId: 15266,
		description: 'Movement speed is greatly increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2294,
		name: 'Pyretic Booster',
		iconId: 15257,
		description: 'The G-Warrior\'s capabilities are enhanced, decreasing weaponskill cast and recast time and increasing movement speed. Use of this mode gradually drains HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2295,
		name: 'Aetherial Aegis',
		iconId: 15258,
		description: 'The G-Warrior is protected by an aetherial barrier, reducing damage taken. Use of this mode gradually drains EP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2296,
		name: 'Cold Brand: -2',
		iconId: 15295,
		description: 'Bearing a chill-inducing brand. Body temperature will decrease by 2 levels when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2297,
		name: 'Hot Blade: +1',
		iconId: 15296,
		description: 'Temperature of the entropic blade has risen 1 level.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2298,
		name: 'Hot Blade: +2',
		iconId: 15297,
		description: 'Temperature of the entropic blade has risen 2 levels.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2299,
		name: 'Cold Blade: -1',
		iconId: 15298,
		description: 'Temperature of the entropic blade has dropped 1 level.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2300,
		name: 'Cold Blade: -2',
		iconId: 15299,
		description: 'Temperature of the entropic blade has dropped 2 levels.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2301,
		name: 'Tender Anaphylaxis',
		iconId: 15268,
		description: 'Smothered with affection. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2302,
		name: 'Jealous Anaphylaxis',
		iconId: 15269,
		description: 'Smothered with possessive bitterness. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2303,
		name: 'True Walking Dead',
		iconId: 15270,
		description: 'Certain death when counter reaches zero. Effect dissipates upon being healed by an amount that totals your maximum HP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2304,
		name: 'Floating Fetters',
		iconId: 15301,
		description: 'Bound in midair and unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2305,
		name: 'Zombification',
		iconId: 15559,
		description: 'Turned into a mindless zombie under enemy control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2306,
		name: 'Boot Camp Mode',
		iconId: 15875,
		description: 'Boot Camp protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2307,
		name: 'Safety Lock: Pyretic Booster',
		iconId: 15259,
		description: 'Safety lock is on, preventing use of the Pyretic Booster.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2308,
		name: 'Safety Lock: Aetherial Aegis',
		iconId: 15260,
		description: 'Safety lock is on, preventing use of the Aetherial Aegis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2309,
		name: 'A Bit Berserk',
		iconId: 17251,
		description: 'Getting a taste for violence. Will go Truly Berserk upon reaching maximum stacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2310,
		name: 'Truly Berserk',
		iconId: 15276,
		description: 'Thoughtlessly raining auto-attacks upon main target while inflicting great damage to self with each one.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2311,
		name: 'Spirit of the Aetherweaver',
		iconId: 16660,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2312,
		name: 'Spirit of the Martialist',
		iconId: 16661,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2313,
		name: 'Spirit of the Savior',
		iconId: 16662,
		description: 'Potency of all HP restoration actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2314,
		name: 'Spirit of the Veteran',
		iconId: 16663,
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2315,
		name: 'Spirit of the Platebearer',
		iconId: 16664,
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2316,
		name: 'Spirit of the Guardian',
		iconId: 16665,
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2317,
		name: 'Spirit of the Ordained',
		iconId: 16666,
		description: 'Maximum MP, damage dealt, and potency of all HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2318,
		name: 'Spirit of the Skirmisher',
		iconId: 16667,
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2319,
		name: 'Spirit of the Watcher',
		iconId: 16668,
		description: 'Evasion is increased while maximum HP is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2320,
		name: 'Spirit of the Profane',
		iconId: 16669,
		description: 'Damage dealt is increased while potency of all HP restoration actions is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2321,
		name: 'Spirit of the Irregular',
		iconId: 16670,
		description: 'Damage dealt and taken is increased while maximum HP is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2322,
		name: 'Spirit of the Breathtaker',
		iconId: 16671,
		description: 'Evasion, movement speed, and poison resistance are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2323,
		name: 'Spirit of the Bloodsucker',
		iconId: 16672,
		description: 'Damage dealt is increased, and attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2324,
		name: 'Spirit of the Beast',
		iconId: 16673,
		description: 'Maximum HP and defense are increased, and attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2325,
		name: 'Spirit of the Templar',
		iconId: 16674,
		description: 'Maximum HP, defense, and damage dealt are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2326,
		name: 'Banner of Noble Ends',
		iconId: 16690,
		description: 'HP recovered via most healing actions is nullified, but damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2327,
		name: 'Banner of Honored Sacrifice',
		iconId: 16691,
		description: 'Sustaining damage over time in exchange for dealing increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2328,
		name: 'Banner of Tireless Conviction',
		iconId: 19761,
		description: 'Damage taken is increased, but your conviction is strengthened with each attack received. At maximum stacks, take up the Banner of Unyielding Defense.Banner of Unyielding Defense Effect: Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 2329,
		name: 'Banner of Firm Resolve',
		iconId: 19781,
		description: 'Damage dealt is reduced, but your resolve is strengthened with each attack received. At maximum stacks, take up the Banner of Unyielding Defense.Banner of Unyielding Defense Effect: Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 2330,
		name: 'Banner of Solemn Clarity',
		iconId: 19801,
		description: 'You take a moment to still your mind, gaining clarity as time passes. At maximum stacks, take up the Banner of Limitless Grace.Banner of Limitless Grace Effect: Potency of HP restoration actions is increased while MP cost is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 1
	},
	{
		id: 2331,
		name: 'Banner of Honed Acuity',
		iconId: 19821,
		description: 'Damage taken is increased, but your senses sharpen with each attack evaded. At maximum stacks, take up the Banner of Transcendent Finesse.Banner of Transcendent Finesse Effect: Critical hit rate is increased while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 2332,
		name: 'Lost Font of Magic',
		iconId: 16675,
		description: 'Increasing damage dealt while draining own MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2333,
		name: 'Lost Protect',
		iconId: 16676,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 36
	},
	{
		id: 2334,
		name: 'Lost Shell',
		iconId: 16677,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 35
	},
	{
		id: 2335,
		name: 'Lost Swift',
		iconId: 16678,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2336,
		name: 'Lost Stealth',
		iconId: 16679,
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2337,
		name: 'Lost Reflect',
		iconId: 16680,
		description: 'Reflecting magic back on its caster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2338,
		name: 'Lost Spellforge',
		iconId: 16696,
		description: 'All attacks deal magic damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2339,
		name: 'Lost Steelsting',
		iconId: 16681,
		description: 'All attacks deal physical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2340,
		name: 'Lost Banish',
		iconId: 16682,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2341,
		name: 'Lost Bravery',
		iconId: 16683,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2342,
		name: 'Auto-potion',
		iconId: 16684,
		description: 'Recover HP automatically when HP falls below 50%. When triggered, there is a 50% chance the effect will end. While enlivened by the Spirit of the Breathtaker, this chance is reduced to 10%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2343,
		name: 'Auto-ether',
		iconId: 16685,
		description: 'Recover MP automatically when MP falls below 20%. When triggered, there is a 50% chance the effect will end. While enlivened by the Spirit of the Breathtaker, this chance is reduced to 10%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2344,
		name: 'Auto-remedy',
		iconId: 16686,
		description: 'The next status ailment suffered will be cured automatically.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2345,
		name: 'Lost Manawall',
		iconId: 16687,
		description: 'Damage taken is reduced and immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2346,
		name: 'Lost Font of Power',
		iconId: 16688,
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2347,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2348,
		name: 'Reminiscence',
		iconId: 16626,
		description: 'Ruminating on the memories of the fallen. Ready to use select lost actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2349,
		name: 'Deep Essence of the Victor',
		iconId: 16659,
		description: 'Critical hit rate is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2350,
		name: 'Hastilude',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2351,
		name: 'Hastilude Heartened',
		iconId: 12513,
		description: 'Damage taken is significantly reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2352,
		name: 'Banner of Unyielding Defense',
		iconId: 16692,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2353,
		name: 'Banner of Limitless Grace',
		iconId: 16693,
		description: 'Potency of all HP restoration actions is increased while MP cost is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2354,
		name: 'Banner of Transcendent Finesse',
		iconId: 16694,
		description: 'Critical hit rate is increased while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2355,
		name: 'Reraise',
		iconId: 16695,
		description: 'Chance of automatic revival upon KO.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2356,
		name: 'Lost Incense',
		iconId: 16689,
		description: 'Enmity is increased and damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2357,
		name: 'Fully Analyzed',
		iconId: 15254,
		description: 'All vulnerabilities have been detected. Any damage taken will be severe.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2358,
		name: 'Marching Orders',
		iconId: 16697,
		description: 'Officially selected for priority deployment in critical engagements per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2359,
		name: 'Marching Orders: Vigil for the Lost',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Vigil for the Lost engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2360,
		name: 'Marching Orders: Kill It with Fire',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Kill It with Fire engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2361,
		name: 'Marching Orders: The Hunt for Red Choctober',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Hunt for Red Choctober engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2362,
		name: 'Marching Orders: The Final Furlong',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Final Furlong engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2363,
		name: 'Marching Orders: Rise of the Robots',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Rise of the Robots engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2364,
		name: 'Marching Orders: Metal Fox Chaos',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Metal Fox Chaos engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2365,
		name: 'High Morale',
		iconId: 16698,
		description: 'A dauntless spirit guides you to victory. Mettle earned is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2367,
		name: 'Pall of Darkness',
		iconId: 15012,
		description: 'Encroaching gloom is impairing your accuracy while rendering you immune to Demon Eye.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2368,
		name: 'Warmonger',
		iconId: 15267,
		description: 'The thrill of battle leads you to crave only more. Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2369,
		name: 'Physical Aversion',
		iconId: 15261,
		description: 'Vulnerable to physical attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2370,
		name: 'Magical Aversion',
		iconId: 15262,
		description: 'Vulnerable to magic attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2371,
		name: 'Lightning Resistance Down',
		iconId: 15271,
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2372,
		name: 'Absolute Protect',
		iconId: 10405,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2373,
		name: 'Mark of Mortality',
		iconId: 19421,
		description: 'Branded with a mark of mortality. Damage dealt is reduced. Too many stacks will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2374,
		name: 'EP Penalty',
		iconId: 16825,
		description: 'EP regeneration has stopped.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2375,
		name: 'Feelin\' Hot',
		iconId: 17821,
		description: 'Flammability is increased due to the effects of the flame dance.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2376,
		name: 'Quintuplecast',
		iconId: 17211,
		description: 'Able to cast up to 5 consecutive spells with no recast time.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 200
	},
	{
		id: 2377,
		name: 'Imbued Saber',
		iconId: 17016,
		description: 'Saber is imbued with magicks.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2378,
		name: 'Haste+',
		iconId: 17381,
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2379,
		name: 'Fresh Perspective',
		iconId: 15111,
		description: 'Operating outside the usual conditions of combat.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2380,
		name: 'Warmonger',
		iconId: 15267,
		description: 'The thrill of battle leads you to crave only more. Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2381,
		name: 'Forward March',
		iconId: 15774,
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2382,
		name: 'About Face',
		iconId: 15775,
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2383,
		name: 'Left Face',
		iconId: 15776,
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2384,
		name: 'Right Face',
		iconId: 15777,
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2385,
		name: 'Hypercharged Condensation',
		iconId: 15283,
		description: 'Inexorably drawing in the hypercharged clouds.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2386,
		name: 'Stygian Tendrils',
		iconId: 15601,
		description: 'Sustaining damage over time from grasping tendrils.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2387,
		name: 'Curse of Darkness',
		iconId: 15284,
		description: 'Cursed to become a fell minion, unleashing Particle Beam when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2388,
		name: 'Nausea',
		iconId: 15274,
		description: 'Feeling as if you might vomit at any moment. Damage dealt and maximum HP are decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2389,
		name: 'Pain',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2390,
		name: 'Hover',
		iconId: 15683,
		description: 'Floating above ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2391,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2392,
		name: 'Lightning Shot',
		iconId: 14886,
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2394,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2395,
		name: 'Vulnerability Down',
		iconId: 15021,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2396,
		name: 'At the Limit',
		iconId: 15275,
		description: 'Unable to execute limit breaks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2398,
		name: 'Incurable',
		iconId: 15851,
		description: 'All HP restoration is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2399,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2400,
		name: '孤独感',
		iconId: 15649,
		description: '仲間から離れると恐慌状態になる。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2401,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2402,
		name: 'Evasion Up',
		iconId: 15062,
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2403,
		name: 'Evasion Down',
		iconId: 15063,
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2404,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2405,
		name: 'Out of Control',
		iconId: 17221,
		description: 'Separated from master and becoming increasingly agitated. The higher the stack, the more damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2406,
		name: 'Shock Spikes',
		iconId: 15502,
		description: 'Elemental spikes are dealing lightning damage to and sometimes stunning attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2407,
		name: 'Fetters',
		iconId: 15545,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2408,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2409,
		name: 'Process of Elimination A',
		iconId: 15277,
		description: 'Optimized for engaging with alliance A. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2410,
		name: 'Process of Elimination B',
		iconId: 15278,
		description: 'Optimized for engaging with alliance B. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2411,
		name: 'Process of Elimination C',
		iconId: 15279,
		description: 'Optimized for engaging with alliance C. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2412,
		name: 'Cover',
		iconId: 12501,
		description: 'Protecting an ally.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2413,
		name: 'Covered',
		iconId: 12502,
		description: 'Under the protection of an ally.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2415,
		name: 'Duties as Assigned',
		iconId: 16236,
		description: 'Unable to change to another class or job.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2416,
		name: 'Light Beyond Darkness',
		iconId: 15988,
		description: 'Unleashing the Light trapped within you in defiance of the Darkness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2418,
		name: 'Collector\'s Standard',
		iconId: 16018,
		description: 'Effectiveness of brazen and meticulous actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2419,
		name: 'Servant of Shadow',
		iconId: 15325,
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2420,
		name: 'Servant of Shadow',
		iconId: 15325,
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2421,
		name: 'Servant of Shadow',
		iconId: 15325,
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2422,
		name: 'Servant of Shadow',
		iconId: 15325,
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2423,
		name: 'Shadowed',
		iconId: 15326,
		description: 'Your shadow has been claimed by the Shadowkeeper. Damage taken by your shadow will also be taken by you.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2424,
		name: 'Shackled Apart',
		iconId: 15327,
		description: 'Drawing too near the ally to whom you are chained will result in increased damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2425,
		name: 'Shackled Together',
		iconId: 15328,
		description: 'Drawing too far away from the ally to whom you are chained will result in increased damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2430,
		name: 'Wanderer\'s Fate',
		iconId: 15281,
		description: 'Victim of a labyrinthine fate, resulting in knockback when the Fateful Words are spoken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2431,
		name: 'Sacrifice\'s Fate',
		iconId: 15282,
		description: 'Victim of a labyrinthine fate, to be drawn in by Fateful Words.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2432,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2433,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2434,
		name: 'Spirit of the Gambler',
		iconId: 16611,
		description: 'Evasion, critical hit rate, and direct hit rate are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2435,
		name: 'Spirit of the Elder',
		iconId: 16612,
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2436,
		name: 'Spirit of the Duelist',
		iconId: 16613,
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2437,
		name: 'Spirit of the Fiendhunter',
		iconId: 16614,
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2438,
		name: 'Spirit of the Indomitable',
		iconId: 16615,
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2439,
		name: 'Spirit of the Divine',
		iconId: 16616,
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2440,
		name: 'Lost Flare Star',
		iconId: 16617,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2441,
		name: 'Lost Rend Armor',
		iconId: 16618,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2442,
		name: 'ロスト・ウェポンブレイク',
		iconId: 10404,
		description: '与ダメージが低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2443,
		name: 'Lost Aethershield',
		iconId: 16620,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2444,
		name: 'Lost Dervish',
		iconId: 16621,
		description: 'Critical hit rate and damage dealt are increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2445,
		name: 'Sword-bearer',
		iconId: 15315,
		description: 'Wielding a sword.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2446,
		name: 'Shield-bearer',
		iconId: 15316,
		description: 'Wielding a shield.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2447,
		name: 'Reversal of Forces',
		iconId: 15317,
		description: 'Gravitational principles are inverted. The heavy has become light, and the light, heavy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2448,
		name: 'Boosted',
		iconId: 15318,
		description: 'Storing power. Potency of next action is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2449,
		name: 'Resurrection Restricted',
		iconId: 15959,
		description: 'Resurrection by certain means is impossible.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2450,
		name: 'Mimicry',
		iconId: 15300,
		description: 'Mimicking the actions of opponents. Physical attacks are answered with physical attacks, magical attacks with magical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2451,
		name: 'Powder Mark',
		iconId: 15302,
		description: 'Emblazoned with a mark that will cause you to explode when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2452,
		name: 'Return',
		iconId: 15304,
		description: 'Aetherially entwined with the temporal manifold. You will be stunned and drawn back to your aetherial trace when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2453,
		name: 'Return IV',
		iconId: 15314,
		description: 'Aetherially entwined with the temporal manifold. Return will be applied when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2454,
		name: 'Spell-in-Waiting: Unholy Darkness',
		iconId: 15983,
		description: 'Designated target of Unholy Darkness, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2455,
		name: 'Spell-in-Waiting: Dark Fire III',
		iconId: 15984,
		description: 'Designated target of Dark Fire III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2456,
		name: 'Spell-in-Waiting: Shadoweye',
		iconId: 15986,
		description: 'Designated target of Shadoweye, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2460,
		name: 'Spell-in-Waiting: Dark Eruption',
		iconId: 15305,
		description: 'Designated target of Dark Eruption, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2461,
		name: 'Spell-in-Waiting: Dark Water III',
		iconId: 15306,
		description: 'Designated target of Dark Water III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2462,
		name: 'Spell-in-Waiting: Dark Blizzard III',
		iconId: 15307,
		description: 'Designated target of Dark Blizzard III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2463,
		name: 'Spell-in-Waiting: Dark Aero III',
		iconId: 15308,
		description: 'Designated target of Dark Aero III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2464,
		name: 'Spell-in-Waiting: Return',
		iconId: 15313,
		description: 'Designated target of Return, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2465,
		name: 'Ice Resistance Down II',
		iconId: 15596,
		description: 'Ice resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2466,
		name: 'Stock Holder',
		iconId: 17038,
		description: 'Holding recollections of Eden\'s primals ready.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2467,
		name: 'Pride of the Lioness',
		iconId: 15340,
		description: 'Blessed by the spirit of the lioness. Physical ability is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2468,
		name: 'Junction Shiva',
		iconId: 15310,
		description: 'Drawing strength from the memory of Shiva.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2469,
		name: 'Junction Titan',
		iconId: 15311,
		description: 'Drawing strength from the memory of Titan.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2470,
		name: 'Junction Loghrif',
		iconId: 15312,
		description: 'Awakened as the Oracle of Darkness.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2471,
		name: 'Head in the Clouds',
		iconId: 15329,
		description: 'Perched atop a cloud and unable to be hit by attacks from below.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2472,
		name: 'Head in the Clouds',
		iconId: 15330,
		description: 'Perched on a cloud and able to attack cloudtop enemies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2473,
		name: 'Aetherial Depletion',
		iconId: 19841,
		description: 'Aether is waning, decreasing physical ability.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 199
	},
	{
		id: 2474,
		name: 'Movement Edict: 2 Squares',
		iconId: 15319,
		description: 'Temporarily in service to the Queen. Your Move: 2 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2475,
		name: 'Movement Edict: 3 Squares',
		iconId: 15320,
		description: 'Temporarily in service to the Queen. Your Move: 3 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2476,
		name: 'Movement Edict: 4 Squares',
		iconId: 15321,
		description: 'Temporarily in service to the Queen. Your Move: 4 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2477,
		name: 'Movement Edict: 2 Squares',
		iconId: 15319,
		description: 'Temporarily in service to the Queen. Your Move: 2 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2478,
		name: 'Movement Edict: 3 Squares',
		iconId: 15320,
		description: 'Temporarily in service to the Queen. Your Move: 3 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2479,
		name: 'Movement Edict: 4 Squares',
		iconId: 15321,
		description: 'Temporarily in service to the Queen. Your Move: 4 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2480,
		name: 'Your Move: 2 Squares',
		iconId: 15322,
		description: 'Ordered to move a total of 2 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2481,
		name: 'Your Move: 3 Squares',
		iconId: 15323,
		description: 'Bound to execute the Queen\'s edict by moving a total of 3 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2482,
		name: 'Your Move: 4 Squares',
		iconId: 15324,
		description: 'Bound to execute the Queen\'s edict by moving a total of 4 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2483,
		name: 'Twice-come Ruin',
		iconId: 19861,
		description: 'Bearing signs that the end may be nigh, decreasing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2484,
		name: 'Cleric Stance',
		iconId: 10402,
		description: 'Healing potency is reduced while damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2485,
		name: 'Twice-come Ruin',
		iconId: 19861,
		description: 'Bearing signs that the end may be nigh, decreasing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2486,
		name: 'Sucked In',
		iconId: 15285,
		description: 'Inexorably pulled in one direction. Unable to jump or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2487,
		name: 'Mortal Powder Mark',
		iconId: 15303,
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2488,
		name: 'Phantom Edge',
		iconId: 15332,
		description: 'Wielding aetherial blades. Damage dealt is decreased, but its cuts are not impeded by physical objects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2489,
		name: 'Merciful Air',
		iconId: 15333,
		description: 'Wielding elegant katana in a manner reminiscent of Blaz.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2490,
		name: 'Baleful Air',
		iconId: 15334,
		description: 'Wielding intimidating greatswords in a manner reminiscent of Velibor.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2491,
		name: 'Iron Air',
		iconId: 15335,
		description: 'Wielding relentless fists in a manner reminiscent of Aggie.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2492,
		name: 'Tingling',
		iconId: 13531,
		description: 'Potency of next physical damage spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2493,
		name: 'Cold Fog',
		iconId: 13532,
		description: 'Enveloped in a cold fog. Any damage taken will grant the effect of Touch of Frost.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2494,
		name: 'Touch of Frost',
		iconId: 13533,
		description: 'Enveloped in an icy fog. Able to execute the blue magic spell White Death.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2495,
		name: 'Angel\'s Snack',
		iconId: 13534,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2496,
		name: 'Chelonian Gate',
		iconId: 13535,
		description: 'Damage taken is reduced. Taking a certain amount of damage grants the effect of Auspicious Trance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2497,
		name: 'Auspicious Trance',
		iconId: 13536,
		description: 'Able to execute the blue magic spell Divine Cataract.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2498,
		name: 'Basic Instinct',
		iconId: 13537,
		description: 'Movement speed, damage dealt, and healing magic potency are increased. Mighty Guard will not reduce damage dealt while Basic Instinct is in effect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2499,
		name: 'Incendiary Burns',
		iconId: 13538,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2500,
		name: 'Dragon Force',
		iconId: 13539,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2501,
		name: 'Lightheaded',
		iconId: 13540,
		description: 'Experiencing dizziness. Certain attacks will cause additional effects.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2502,
		name: 'Phantom Flurry',
		iconId: 13541,
		description: 'Executing Phantom Flurry.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2503,
		name: 'Aetherial Ward',
		iconId: 15021,
		description: 'Protected by a magicked barrier. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2504,
		name: 'Minimum',
		iconId: 15581,
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2505,
		name: 'Herbsona',
		iconId: 15890,
		description: 'Transformed into a leafman. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2506,
		name: 'Vulnerability Down',
		iconId: 17301,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 30
	},
	{
		id: 2507,
		name: 'Damage Up',
		iconId: 15519,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2508,
		name: 'Slashing Resistance Down',
		iconId: 17681,
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 2509,
		name: 'Bloody Ruin',
		iconId: 15339,
		description: 'Carapace has taken on a red cast, indicating an increase in strength at the cost of speed.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2510,
		name: 'Torrential Ruin',
		iconId: 15337,
		description: 'Carapace has taken on a blue cast, indicating a tendency toward indiscriminate violence.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2511,
		name: 'Avaricious Ruin',
		iconId: 15338,
		description: 'Carapace has taken on a green cast, indicating an inclination to consume other golems.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2512,
		name: 'Subtle Ruin',
		iconId: 15336,
		description: 'Carapace has taken on a white cast, indicating the activation of regenerative capabilities.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2513,
		name: 'Formless Fist',
		iconId: 12535,
		description: 'Employing all three pugilistic fighting stances─opo-opo, raptor, and coeurl. Additional effects of actions used in these forms will also be triggered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2514,
		name: 'Six-sided Star',
		iconId: 12536,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2516,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2517,
		name: 'Back from the Brink',
		iconId: 16699,
		description: 'Nullifies the damage dealt by certain areas of ground. Effect lasts until Transcendent expires or you move to a safe area.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2518,
		name: 'Bind',
		iconId: 15003,
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2519,
		name: 'Doom',
		iconId: 15503,
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2520,
		name: 'Infirmity',
		iconId: 15531,
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2521,
		name: 'HP Penalty',
		iconId: 15076,
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2522,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2523,
		name: 'Restricted Access',
		iconId: 16237,
		description: 'Unable to move or execute certain actions due to duty restrictions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2524,
		name: 'Royal Favor',
		iconId: 15280,
		description: 'Battle prowess is maximized.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2527,
		name: 'Mortal Powder Mark',
		iconId: 15303,
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2528,
		name: 'Ice Spikes',
		iconId: 15501,
		description: 'Elemental spikes are dealing ice damage to and slowing down attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2529,
		name: 'Sucked In',
		iconId: 15285,
		description: 'Inexorably pulled in one direction. Unable to jump or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2530,
		name: 'Thrice-come Ruin',
		iconId: 19861,
		description: 'Bearing signs that the end may be nigh. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2531,
		name: 'Spell-in-Waiting: Quietus',
		iconId: 15341,
		description: 'Designated target of Quietus, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2532,
		name: 'Cloying Condensation',
		iconId: 15342,
		description: 'Unable to jump due to the Cloud of Darkness\'s airborne magicks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2533,
		name: 'Thrice-come Ruin',
		iconId: 19861,
		description: 'Bearing signs that the end may be nigh, reducing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2534,
		name: 'Twice-come Ruin',
		iconId: 19861,
		description: 'Bearing signs that the end may be nigh. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2535,
		name: 'Distorted',
		iconId: 15354,
		description: 'Black wavelengths pulse in front of you, and white wavelengths behind, causing massive damage if hit by attacks of the opposite color.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2537,
		name: 'Strong of Spear',
		iconId: 15360,
		description: 'Weapon is enhanced.Will grant the effect of Stronger Together if Hansel and Gretel move close together.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2538,
		name: 'Strong of Shield',
		iconId: 15361,
		description: 'Shield is enhanced, decreasing damage taken. Attacks from the sides and rear are turned back on the attacker.Will grant the effect of Stronger Together if Hansel and Gretel move close together.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2539,
		name: 'Stronger Together',
		iconId: 15362,
		description: 'Hansel and Gretel\'s proximity enhances their weapons and shields, decreasing damage taken. Attacks from the sides and rear are turned back on the attacker.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2541,
		name: '不浄の侵食',
		iconId: 15363,
		description: '不浄に侵食されつつある状態。カウント0で不浄の恐怖状態に陥り、対象から離れようとしてしまう。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2542,
		name: '不浄の恐怖',
		iconId: 15364,
		description: '不浄の恐怖で行動できなくなり、対象から離れようとしてしまう状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2543,
		name: 'Gelatinous',
		iconId: 16214,
		description: 'Rendered a boneless ooze unable to jump or execute actions. Movement speed is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2545,
		name: 'Duel or Die',
		iconId: 15349,
		description: 'Singled out for combat. Damage from opponent\'s first blow will be reduced; however, failing to receive a blow from said opponent before this effect expires will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2547,
		name: 'On Fire',
		iconId: 15350,
		description: 'Armed with a flaming axe. Additional effects are applied to auto-attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2548,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2549,
		name: 'Nasty Surprise',
		iconId: 15347,
		description: 'Gunberd is loaded with special ammo.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2550,
		name: 'Damage Up',
		iconId: 17061,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2551,
		name: 'Heavy',
		iconId: 15002,
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2553,
		name: 'One Mind',
		iconId: 15348,
		description: 'Giving and receiving support. Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2554,
		name: 'Lunar Defensive',
		iconId: 15343,
		description: 'Battle tactics optimized for defense.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2555,
		name: 'Physical Damage Up',
		iconId: 15050,
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2556,
		name: 'Magic Damage Up',
		iconId: 15054,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2557,
		name: 'Enthunder',
		iconId: 15513,
		description: 'Lightning damage added to auto-attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2558,
		name: 'Lost Burst',
		iconId: 16619,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2559,
		name: 'Lost Rampage',
		iconId: 16622,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2560,
		name: 'Lost Chainspell',
		iconId: 16623,
		description: 'Spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2561,
		name: 'Lost Protect II',
		iconId: 16624,
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 36
	},
	{
		id: 2562,
		name: 'Lost Shell II',
		iconId: 16625,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 35
	},
	{
		id: 2563,
		name: 'Lost Bubble',
		iconId: 16700,
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 34
	},
	{
		id: 2564,
		name: 'Lost Excellence',
		iconId: 16701,
		description: 'Impervious to most attacks. Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2565,
		name: 'Memorable',
		iconId: 16649,
		description: 'Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2566,
		name: 'Lost Blood Rage',
		iconId: 17486,
		description: 'Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 1
	},
	{
		id: 2567,
		name: 'Blood Rush',
		iconId: 16702,
		description: 'Gradually recovering HP and MP. Damage dealt is increased and ability recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2568,
		name: 'Gullstorm',
		iconId: 16248,
		description: 'Chance of landing a large-sized fish while fishing is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2569,
		name: 'Cetaceous Speed',
		iconId: 16239,
		description: 'GP regeneration rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2570,
		name: 'Auroral Flipper',
		iconId: 16240,
		description: 'Chance of triggering a spectral current is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2571,
		name: 'Destiny Drawn',
		iconId: 15344,
		description: 'An arcanum is drawn from the deck per the vicissitudes of fortune.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2572,
		name: 'The Scroll',
		iconId: 15345,
		description: 'Damage dealt is increased. Auto-attack delay, as well as weaponskill and spell cast time and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2573,
		name: 'Break',
		iconId: 15346,
		description: 'Activity is severely impeded.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2574,
		name: 'Lightning Rod',
		iconId: 15351,
		description: 'Highly conductive and likely to be targeted by lightning.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2575,
		name: 'Right Arm Primed',
		iconId: 15352,
		description: 'Right arm is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2576,
		name: 'Left Arm Primed',
		iconId: 15353,
		description: 'Left arm is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2577,
		name: 'FATE Participant',
		iconId: 16241,
		description: 'Actively participating in a FATE. ',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2578,
		name: 'Immobile Suit',
		iconId: 15370,
		description: 'Unable to teleport due to system overload.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2579,
		name: 'Guise',
		iconId: 16214,
		description: 'Dressed for the occasion.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2580,
		name: 'Marching Orders: Feeling the Burn',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Feeling the Burn engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2581,
		name: 'Marching Orders: On Serpents\' Wings',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the On Serpents\' Wings engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2582,
		name: 'Marching Orders: Never Cry Wolf',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Never Cry Wolf engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2583,
		name: 'Marching Orders: Here Comes the Cavalry',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Here Comes the Cavalry engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2584,
		name: 'Marching Orders: Worn to a Shadow',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the Worn to a Shadow engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2585,
		name: 'Marching Orders: A Familiar Face',
		iconId: 16697,
		description: 'Officially selected for priority deployment in the A Familiar Face engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2586,
		name: 'Death\'s Design',
		iconId: 12926,
		description: 'Damage taken from the reaper who applied this effect is increased. Increases said reaper\'s Soul Gauge if defeated before effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2587,
		name: 'Soul Reaver',
		iconId: 17097,
		description: 'Able to execute Gibbet, Gallows, and Guillotine.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2588,
		name: 'Enhanced Gibbet',
		iconId: 12927,
		description: 'Next Gibbet will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2589,
		name: 'Enhanced Gallows',
		iconId: 12928,
		description: 'Next Gallows will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2590,
		name: 'Enhanced Void Reaping',
		iconId: 12929,
		description: 'Next Void Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2591,
		name: 'Enhanced Cross Reaping',
		iconId: 12930,
		description: 'Next Cross Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2592,
		name: 'Immortal Sacrifice',
		iconId: 17287,
		description: 'Able to execute Plentiful Harvest.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2593,
		name: 'Enshrouded',
		iconId: 12931,
		description: 'Playing host to an avatar.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2594,
		name: 'Soulsow',
		iconId: 12932,
		description: 'Able to execute Harvest Moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2595,
		name: 'Threshold',
		iconId: 12933,
		description: 'Able to execute Regress.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2596,
		name: 'Crest of Time Borrowed',
		iconId: 12934,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2597,
		name: 'Crest of Time Borrowed',
		iconId: 12934,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2598,
		name: 'Crest of Time Returned',
		iconId: 12935,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2599,
		name: 'Arcane Circle',
		iconId: 12936,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2600,
		name: 'Circle of Sacrifice',
		iconId: 12937,
		description: 'Grants Immortal Sacrifice to the reaper who applied this effect after successfully landing a weaponskill or spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2601,
		name: 'Bloodsown Circle',
		iconId: 12938,
		description: 'Grants Immortal Sacrifice to the reaper who applied this effect when duration expires.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2602,
		name: 'Just Chilling',
		iconId: 15510,
		description: 'Lowering temperature in a show of righteous fury.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2603,
		name: 'Hubris',
		iconId: 19881,
		description: 'Overconfident and careless in the face of a small opposing force. Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2604,
		name: 'Kardia',
		iconId: 12951,
		description: 'Triggers a healing effect on a player under the effect of Kardion granted by you when casting attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 45
	},
	{
		id: 2605,
		name: 'Kardion',
		iconId: 12952,
		description: 'Triggers a healing effect when the sage who applied this status casts attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 45
	},
	{
		id: 2606,
		name: 'Eukrasia',
		iconId: 12953,
		description: 'Certain actions are being augmented.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2607,
		name: 'Eukrasian Diagnosis',
		iconId: 12954,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2608,
		name: 'Differential Diagnosis',
		iconId: 12955,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2609,
		name: 'Eukrasian Prognosis',
		iconId: 12954,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2610,
		name: 'Soteria',
		iconId: 12956,
		description: 'The healing potency of Kardia is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2611,
		name: 'Zoe',
		iconId: 12957,
		description: 'Healing magic potency of next spell cast is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2612,
		name: 'Haima',
		iconId: 12958,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2613,
		name: 'Panhaima',
		iconId: 12959,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2614,
		name: 'Eukrasian Dosis',
		iconId: 12960,
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2615,
		name: 'Eukrasian Dosis II',
		iconId: 12961,
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2616,
		name: 'Eukrasian Dosis III',
		iconId: 12962,
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2617,
		name: 'Physis',
		iconId: 12963,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2618,
		name: 'Kerachole',
		iconId: 12964,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2619,
		name: 'Taurochole',
		iconId: 12965,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2620,
		name: 'Physis II',
		iconId: 12966,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2621,
		name: 'Autophysis',
		iconId: 12967,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 20
	},
	{
		id: 2622,
		name: 'Krasis',
		iconId: 12968,
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 20
	},
	{
		id: 2623,
		name: 'Pneuma',
		iconId: 12969,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2624,
		name: 'Primal Rend Ready',
		iconId: 12566,
		description: 'Able to execute Primal Rend.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2625,
		name: 'Ray of Fortitude',
		iconId: 19626,
		description: 'Resistance honors are granting an increase to maximum HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2626,
		name: 'Ray of Valor',
		iconId: 19606,
		description: 'Resistance honors are granting increased damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2627,
		name: 'Ray of Succor',
		iconId: 19646,
		description: 'Resistance honors are granting increased healing potency.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2628,
		name: 'Adamant Purged',
		iconId: 15371,
		description: 'Armor is removed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2631,
		name: 'Down and Out',
		iconId: 15366,
		description: 'Quite dead, and prevented from reviving by all usual means.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2632,
		name: 'Program: #FFFFFFF',
		iconId: 15356,
		description: 'Operating as a “white” program in the ego collective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2633,
		name: 'Program: #000000',
		iconId: 15357,
		description: 'Operating as a “black” program in the ego collective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2634,
		name: 'Null White',
		iconId: 15358,
		description: 'Invulnerable to attacks from Program: #FFFFFF.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2635,
		name: 'Null Black',
		iconId: 15359,
		description: 'Invulnerable to attacks from Program: #000000.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2636,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2637,
		name: 'Sacred Soil',
		iconId: 12802,
		description: 'A circle of sanctified earth is healing party members and reducing damage taken within its bounds.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2638,
		name: 'Sacred Soil',
		iconId: 12803,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2639,
		name: 'Fixed Sign',
		iconId: 13227,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2640,
		name: 'Fixed Sign',
		iconId: 13226,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2641,
		name: 'Fixed Sign',
		iconId: 13225,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2642,
		name: 'Haimatinon',
		iconId: 17585,
		description: 'Stacks are consumed to restore the Haima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2643,
		name: 'Panhaimatinon',
		iconId: 17355,
		description: 'Stacks are consumed to restore the Panhaima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2644,
		name: 'Front Unseen',
		iconId: 15369,
		description: 'Only vulnerabilities on the front of the body remain undetected. Hits to the back, right, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2645,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2646,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2647,
		name: 'Shadow of the Dragon',
		iconId: 15731,
		description: 'Drawing on power inherited from Nidhogg.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2648,
		name: 'Transcendent',
		iconId: 15273,
		description: 'Recently resurrected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2649,
		name: 'Empowered Beast',
		iconId: 15255,
		description: 'Permitted by master to fight to the fullest extent of capabilities.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2650,
		name: 'Leveilleur Dosis III',
		iconId: 12962,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2651,
		name: 'Manusya Berserk',
		iconId: 15392,
		description: 'Unable to think clearly and continuously auto-attacking target.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2652,
		name: 'Manusya Confuse',
		iconId: 15393,
		description: 'Confused and unable to accurately perceive surroundings.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2653,
		name: 'Manusya Stop',
		iconId: 15394,
		description: 'Will be frozen in time when count reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2654,
		name: 'Who Is She',
		iconId: 15395,
		description: 'Outwardly appears to be Sanduruva.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2655,
		name: 'Who Is She',
		iconId: 15395,
		description: 'Outwardly appears to be Sanduruva.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2656,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2657,
		name: 'Acceleration Bomb',
		iconId: 15727,
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2658,
		name: 'Deep Freeze',
		iconId: 15637,
		description: 'Frozen solid and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2665,
		name: 'Heart and Soul',
		iconId: 16127,
		description: 'Able to execute Precise Touch, Intensive Synthesis, and Tricks of the Trade.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2666,
		name: 'Gift of the Land',
		iconId: 16020,
		description: 'Increased chance of triggering Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2667,
		name: 'Gatherer\'s Bounty',
		iconId: 16021,
		description: 'Increasing the item yield of Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2668,
		name: 'Collector\'s Focus',
		iconId: 16022,
		description: 'Increased chance of triggering Collector\'s Intuition.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2669,
		name: 'Klymenos',
		iconId: 13108,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2670,
		name: 'Katabasis',
		iconId: 13116,
		description: 'Most attacks cannot reduce own HP to less than 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2671,
		name: 'Toad',
		iconId: 15580,
		description: 'Transformed into a toad and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2672,
		name: 'Breathless',
		iconId: 18981,
		description: 'Toxins in the water are causing difficulty breathing. A stack of 8 will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 250
	},
	{
		id: 2674,
		name: 'Holy Sheltron',
		iconId: 12515,
		description: 'Blocking incoming attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2675,
		name: 'Knight\'s Resolve',
		iconId: 12516,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2676,
		name: 'Knight\'s Benediction',
		iconId: 12517,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2677,
		name: 'Surging Tempest',
		iconId: 12561,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2678,
		name: 'Bloodwhetting',
		iconId: 12562,
		description: 'Damage taken is reduced and HP is restored with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2679,
		name: 'Stem the Flow',
		iconId: 12563,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2680,
		name: 'Stem the Tide',
		iconId: 12564,
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2681,
		name: 'Equilibrium',
		iconId: 12565,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2682,
		name: 'Oblation',
		iconId: 13123,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2683,
		name: 'Heart of Corundum',
		iconId: 13615,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2684,
		name: 'Clarity of Corundum',
		iconId: 13616,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2685,
		name: 'Catharsis of Corundum',
		iconId: 13617,
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2686,
		name: 'Ready to Blast',
		iconId: 13618,
		description: 'Able to execute Hypervelocity.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2687,
		name: 'Riddle of Wind',
		iconId: 12537,
		description: 'Auto-attack delay is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2688,
		name: '竜眼蒼穹実行可',
		iconId: 0,
		description: '竜眼蒼穹を実行できる状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2689,
		name: 'Meisui',
		iconId: 12914,
		description: 'Next Bhavacakra will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2690,
		name: 'Forked Raiju Ready',
		iconId: 17597,
		description: 'Able to execute Forked Raiju.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2691,
		name: 'Fleeting Raiju Ready',
		iconId: 12916,
		description: 'Able to execute Fleeting Raiju.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2692,
		name: 'Blast Arrow Ready',
		iconId: 12621,
		description: 'Able to execute Blast Arrow.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2693,
		name: 'Flourishing Symmetry',
		iconId: 13718,
		description: 'Able to execute Reverse Cascade or Rising Windmill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2694,
		name: 'Flourishing Flow',
		iconId: 13719,
		description: 'Able to execute Fountainfall or Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2695,
		name: 'Improvisation',
		iconId: 13720,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2696,
		name: 'Rising Rhythm',
		iconId: 17350,
		description: 'Potency of Improvised Finish is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 2697,
		name: 'Improvised Finish',
		iconId: 13721,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2698,
		name: 'Flourishing Finish',
		iconId: 13722,
		description: 'Able to execute Tillana.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2699,
		name: 'Fourfold Fan Dance',
		iconId: 13723,
		description: 'Able to execute Fan Dance IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2700,
		name: 'Flourishing Starfall',
		iconId: 13724,
		description: 'Able to execute Starfall Dance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2701,
		name: 'Further Ruin',
		iconId: 12690,
		description: 'Able to execute Ruin IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2702,
		name: 'Radiant Aegis',
		iconId: 12691,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2703,
		name: 'Searing Light',
		iconId: 12692,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2704,
		name: 'Rekindle',
		iconId: 12693,
		description: 'Undying Flame will be triggered upon HP falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2705,
		name: 'Undying Flame',
		iconId: 12694,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2706,
		name: 'Slipstream',
		iconId: 12695,
		description: 'Maintaining a localized windstorm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2707,
		name: 'Magick Barrier',
		iconId: 13408,
		description: 'Magic damage taken is reduced and HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2708,
		name: 'Aquaveil',
		iconId: 12638,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2709,
		name: 'Liturgy of the Bell',
		iconId: 18373,
		description: 'Triggers a healing effect upon taking damage or when duration expires.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2710,
		name: 'Protraction',
		iconId: 12815,
		description: 'Maximum HP is increased and HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2711,
		name: 'Desperate Measures',
		iconId: 12816,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2712,
		name: 'Expedience',
		iconId: 12817,
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2713,
		name: 'Clarifying Draw',
		iconId: 13258,
		description: 'Able to execute Redraw.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2714,
		name: 'Harmony of Spirit',
		iconId: 13259,
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2715,
		name: 'Harmony of Body',
		iconId: 13260,
		description: 'Spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2716,
		name: 'Harmony of Mind',
		iconId: 13261,
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2717,
		name: 'Exaltation',
		iconId: 13262,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2718,
		name: 'Macrocosmos',
		iconId: 13263,
		description: 'Restores HP when effect duration expires or the astrologian who granted this effect executes Microcosmos. Healing potency is based on damage taken and compiled over the duration of the effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2719,
		name: 'Chaotic Spring',
		iconId: 12586,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2720,
		name: 'Power Surge',
		iconId: 10303,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2721,
		name: 'Blade of Valor',
		iconId: 12518,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2722,
		name: 'Radiant Finale',
		iconId: 12622,
		description: 'Playing a most radiant finale.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2723,
		name: 'Phantom Kamaitachi Ready',
		iconId: 12917,
		description: 'Able to execute Phantom Kamaitachi.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2724,
		name: 'Ifrit\'s Favor',
		iconId: 12696,
		description: 'Able to execute Crimson Cyclone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2725,
		name: 'Garuda\'s Favor',
		iconId: 12697,
		description: 'Able to execute Slipstream.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2726,
		name: 'Anguish',
		iconId: 15007,
		description: 'Pure suffering is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2727,
		name: 'Transfiguration',
		iconId: 16214,
		description: 'Corporeal form has been altered, inhibiting use of actions while allowing you to go undetected by certain enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2729,
		name: 'Incorporeal',
		iconId: 16250,
		description: 'Transcending the boundary between existence and nihility.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2730,
		name: 'Endwalker',
		iconId: 16250,
		description: 'Walking alone unto journey\'s end, the burden weighing heavy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2731,
		name: 'Aether Sickness',
		iconId: 15002,
		description: 'Severe nausea is reducing movement speed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2732,
		name: 'Quadruple',
		iconId: 15384,
		description: 'The next action initiated will be executed four times.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2734,
		name: 'Epic Echo',
		iconId: 16249,
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased beyond what even you thought possible.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2735,
		name: 'Toxicosis',
		iconId: 15517,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2736,
		name: 'Requisitioned Magitek',
		iconId: 15379,
		description: 'Mounted in warmachina. Thick armor reduces damage taken, but the inoperable leg renders you immobile.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2737,
		name: 'Fading Consciousness',
		iconId: 15380,
		description: 'Struggling to maintain consciousness after being gravely wounded.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2738,
		name: 'At Death\'s Door',
		iconId: 17333,
		description: 'Gravely wounded and unable to stand, but still clinging to consciousness.',
		category: 2,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 2751,
		name: 'Fire Alchemy',
		iconId: 15396,
		description: 'Producing and manipulating an orb of fire aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2752,
		name: 'Ice Alchemy',
		iconId: 15397,
		description: 'Producing and manipulating an orb of ice aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2753,
		name: 'Thunder Alchemy',
		iconId: 15398,
		description: 'Producing and manipulating an orb of lightning aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2754,
		name: 'Toxic Alchemy',
		iconId: 15399,
		description: 'Producing and manipulating an orb of toxic aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2760,
		name: 'Borrowed Flesh',
		iconId: 15381,
		description: 'Forced to inhabit the body of another.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2763,
		name: 'Smiley Face',
		iconId: 17311,
		description: 'Face hurts from smiling. Will take increased damage if hit by Smiley Face again.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2764,
		name: 'Frowny Face',
		iconId: 17471,
		description: 'Face hurts from frowning. Will take increased damage if hit by Frowny Face again.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2765,
		name: 'Eureka Moment',
		iconId: 16019,
		description: 'Able to execute Wise to the World.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2778,
		name: 'Angler\'s Art',
		iconId: 17167,
		description: 'Able to execute certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2779,
		name: 'Makeshift Bait',
		iconId: 11118,
		description: 'Able to execute Mooch using average-sized fish.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2780,
		name: 'Prize Catch',
		iconId: 11119,
		description: 'Next catch is guaranteed to be a large-sized fish.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2781,
		name: 'Unlimited',
		iconId: 15864,
		description: 'Confronting physical limits and choosing to defy them.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2783,
		name: 'Vital Sight',
		iconId: 11120,
		description: 'Fish are easier to target while spearfishing.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2784,
		name: 'ホールドブレス',
		iconId: 11121,
		description: '警戒度の自動上昇が停止している状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2786,
		name: 'Spark of Hope',
		iconId: 19901,
		description: 'Burning with dynamis shaped by the memory of your journey, and exceeding your own limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2787,
		name: 'Ploutonos',
		iconId: 13113,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2788,
		name: 'Eubuleus',
		iconId: 13122,
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2789,
		name: 'True Bravery',
		iconId: 16683,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2790,
		name: 'True Step',
		iconId: 13706,
		description: 'Caught up in the dance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2791,
		name: 'True Benison',
		iconId: 12632,
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2792,
		name: 'True Medica II',
		iconId: 10413,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2793,
		name: 'True Stoneskin',
		iconId: 10401,
		description: 'Lithified flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2794,
		name: 'True Hallowed Ground',
		iconId: 12504,
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2795,
		name: 'Circle of Clarity',
		iconId: 10158,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2796,
		name: 'True Sentinel',
		iconId: 10151,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2797,
		name: 'True Rampart',
		iconId: 10152,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2798,
		name: 'True Reprisal',
		iconId: 13103,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2805,
		name: 'Carrot of Happiness',
		iconId: 16242,
		description: 'You find yourself in an unusually good mood, with a sudden craving to eat more carrots.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2806,
		name: 'Philosopher\'s Carrot',
		iconId: 16243,
		description: 'You find your mind is suddenly much sharper than usual.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2807,
		name: 'Lucky Carrot',
		iconId: 16244,
		description: 'You suddenly feel as though Nymeia\'s wheel is spinning in your favor.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2808,
		name: 'Iron Carrot',
		iconId: 16245,
		description: 'You suddenly find yourself full of vim and vigor.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2809,
		name: 'Magic Damage Up',
		iconId: 18481,
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 2810,
		name: 'Chorus Aligned',
		iconId: 15414,
		description: 'Dancing to someone else\'s tune.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2811,
		name: '反転プログラム',
		iconId: 0,
		description: 'プログラムが逆の順番で実行される状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2817,
		name: 'Partygoer',
		iconId: 16214,
		description: 'Attending the Phantoms\' Feast.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2818,
		name: 'Earth-aspected',
		iconId: 15415,
		description: 'Body\'s aetherial balance is leaning toward the earthen.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2819,
		name: 'Lightning-aspected',
		iconId: 15416,
		description: 'Body\'s aetherial balance is leaning toward levin.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2820,
		name: 'Wind-aspected',
		iconId: 15417,
		description: 'Body\'s aetherial balance is leaning toward wind.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2821,
		name: 'To the Dungeons',
		iconId: 15418,
		description: 'Being punished for disobedience. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2822,
		name: 'Wicked Whim',
		iconId: 15419,
		description: 'Feeling whimsically contrarious. Those who obey orders will be punished.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2824,
		name: 'Incapacitated',
		iconId: 15405,
		description: 'Unable to perform any actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2825,
		name: 'Deactivated',
		iconId: 15406,
		description: 'All autonomous movement is temporarily disabled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2826,
		name: 'Creeping Poison',
		iconId: 15420,
		description: 'Poison courses through your veins, causing you to periodically become unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2827,
		name: 'Irmin Hedge',
		iconId: 15421,
		description: 'The Hedge\'s protection makes you immune to poison.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2828,
		name: 'Prayers of Hope',
		iconId: 17571,
		description: 'Drawing strength from the prayers of your comrades. Damage dealt is significantly increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 7,
		partyListPriority: 200
	},
	{
		id: 2829,
		name: 'Last Vigil',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2830,
		name: 'Last Vigil',
		iconId: 12513,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2831,
		name: 'Shield of the Fury',
		iconId: 16401,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2832,
		name: 'Tenebrous Grasp',
		iconId: 15408,
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2839,
		name: 'Suiton',
		iconId: 12906,
		description: 'Body is enveloped in a light-bending veil of water, allowing use of actions normally requiring the Hidden status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2840,
		name: 'Rightward Whimsy',
		iconId: 15425,
		description: 'Seized with the urge to face right.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2841,
		name: 'Leftward Whimsy',
		iconId: 15426,
		description: 'Seized with the urge to face left.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2842,
		name: 'Backward Whimsy',
		iconId: 15423,
		description: 'Seized with the urge to face backward.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2843,
		name: 'Iron Will',
		iconId: 12506,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2844,
		name: 'Somanoutic Barrier',
		iconId: 12954,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2845,
		name: 'Enhanced Harpe',
		iconId: 12939,
		description: 'Next Harpe will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2846,
		name: 'Whispered Incantation',
		iconId: 15409,
		description: 'The next offensive spell cast will be committed to memory.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2847,
		name: 'Whispers Manifest',
		iconId: 15410,
		description: 'The spell cast during Whispered Incantation has been committed to memory and can be cast immediately.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2848,
		name: 'Mirrored Incantation',
		iconId: 17296,
		description: 'The next attack\'s area of effect will be inverted. ',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 2851,
		name: 'In Event',
		iconId: 15765,
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2853,
		name: 'Titan\'s Favor',
		iconId: 12698,
		description: 'Able to execute Mountain Buster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2854,
		name: 'Soul Reaver',
		iconId: 17097,
		description: 'Able to execute Gibbet, Gallows, and Guillotine.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2855,
		name: 'Enhanced Gibbet',
		iconId: 12927,
		description: 'Next Gibbet will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2856,
		name: 'Enhanced Gallows',
		iconId: 12928,
		description: 'Next Gallows will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2857,
		name: 'Enhanced Void Reaping',
		iconId: 12929,
		description: 'Next Void Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2858,
		name: 'Enhanced Cross Reaping',
		iconId: 12930,
		description: 'Next Cross Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2859,
		name: 'Enhanced Harpe',
		iconId: 12939,
		description: 'Next Harpe will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2860,
		name: 'Threshold',
		iconId: 12933,
		description: 'Able to execute Regress.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2861,
		name: 'Crest of Time Borrowed',
		iconId: 12934,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2862,
		name: 'Crest of Time Returned',
		iconId: 12935,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2863,
		name: 'Enshrouded',
		iconId: 12931,
		description: 'Playing host to an avatar.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2864,
		name: 'Eukrasian Dosis III',
		iconId: 12962,
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2865,
		name: 'Eukrasian Diagnosis',
		iconId: 12954,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2866,
		name: 'Eukrasian Prognosis',
		iconId: 12954,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2867,
		name: 'Eukrasia',
		iconId: 12953,
		description: 'Certain actions are being augmented.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2868,
		name: 'Pneuma',
		iconId: 12969,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2869,
		name: 'Haima',
		iconId: 12958,
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2870,
		name: 'Haimatinon',
		iconId: 17585,
		description: 'Stacks are consumed to restore the Haima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2871,
		name: 'Kardia',
		iconId: 12951,
		description: 'Triggers a healing effect on a player under the effect of Kardion granted by you when casting attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2872,
		name: 'Kardion',
		iconId: 12952,
		description: 'Triggers a healing effect when the sage who applied this status casts attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2873,
		name: 'Limit Breaker',
		iconId: 16403,
		description: 'Executing limit break.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2874,
		name: '時限の魔鎖',
		iconId: 15372,
		description: '光属性と火属性のエーテルを宿した魔法の鎖が縛り付けられた状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2875,
		name: '時限の魔鎖',
		iconId: 15372,
		description: '光属性と火属性のエーテルを宿した魔法の鎖が縛り付けられた状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2876,
		name: 'Heros\'s Mantle',
		iconId: 15633,
		description: 'Armed with a hero\'s blade.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2877,
		name: 'Magos\'s Mantle',
		iconId: 15634,
		description: 'Armed with a magus\'s staff.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2878,
		name: 'Mousa\'s Mantle',
		iconId: 15385,
		description: 'Armed with a muse\'s war quoits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2879,
		name: 'Adamantinon Thelema',
		iconId: 12506,
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2880,
		name: '毒',
		iconId: 17001,
		description: '毒に冒された状態。ＨＰが徐々に失われる。',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2882,
		name: '被物理ダメージ増加',
		iconId: 15053,
		description: '受ける物理ダメージが増加する状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2883,
		name: 'スロウ',
		iconId: 15009,
		description: 'オートアタックの攻撃間隔と、ウェポンスキルおよび魔法のキャストタイムとリキャストタイムが延長された状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2884,
		name: 'ＨＰ自然回復無効',
		iconId: 16825,
		description: 'ＨＰ自然回復が無効化された状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2891,
		name: 'Spearfisher\'s Intuition',
		iconId: 11101,
		description: 'Heightened senses are improving chances of discovering rare fish only obtainable under special conditions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2893,
		name: 'Plagued',
		iconId: 15014,
		description: 'Toxic miasma is warping the flesh.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2904,
		name: 'Unforgotten',
		iconId: 15382,
		description: 'The next phenomenon to occur will be recorded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2906,
		name: '●偽神獣の猛毒',
		iconId: 15841,
		description: '●グレイプニルの攻撃によって付与された毒。特定の攻撃を受ける度に毒が進化し、様々な弱体効果へと変化する。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2907,
		name: 'Tizona\'s Bastion',
		iconId: 12512,
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2908,
		name: 'Tizona\'s Bastion',
		iconId: 12513,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2909,
		name: 'Umbral Rays',
		iconId: 15407,
		description: 'Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2910,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2911,
		name: 'Damage Down',
		iconId: 15520,
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2912,
		name: 'Vulnerability Up',
		iconId: 17101,
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2913,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2914,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2915,
		name: 'Concussion',
		iconId: 15523,
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2916,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2917,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2918,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2919,
		name: 'Sludge',
		iconId: 15527,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2920,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2921,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2922,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2932,
		name: 'Fleet-footed',
		iconId: 16520,
		description: 'Effect duration of Sprint is increased in large settlements.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2933,
		name: 'In Event',
		iconId: 15765,
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2934,
		name: '●強制稼働',
		iconId: 15910,
		description: '●未完成の状態だが強制的に短時間稼働している状態。効果時間中は破壊されない。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2936,
		name: 'Temporary Misdirection',
		iconId: 15809,
		description: 'Overcome with confusion and can only move in the direction indicated.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2938,
		name: 'Kerakeia',
		iconId: 12970,
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2939,
		name: 'Prey',
		iconId: 15026,
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2940,
		name: 'Physical Vulnerability Up',
		iconId: 15053,
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2941,
		name: 'Magic Vulnerability Up',
		iconId: 15057,
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2942,
		name: 'Flesh Wound',
		iconId: 15521,
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2943,
		name: 'Stab Wound',
		iconId: 15522,
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2944,
		name: 'Concussion',
		iconId: 15523,
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2945,
		name: 'Burns',
		iconId: 15524,
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2946,
		name: 'Frostbite',
		iconId: 15525,
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2947,
		name: 'Windburn',
		iconId: 15526,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2948,
		name: 'Sludge',
		iconId: 15527,
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2949,
		name: 'Electrocution',
		iconId: 15528,
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2950,
		name: 'Dropsy',
		iconId: 15529,
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2951,
		name: 'Bleeding',
		iconId: 15530,
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2952,
		name: 'True Finish',
		iconId: 13709,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2953,
		name: 'Stun',
		iconId: 15004,
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2954,
		name: 'Willful',
		iconId: 17591,
		description: 'Burning for battle. Sustaining most damage that would normally result in KO will instead ignite the Will to Live.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 70
	},
	{
		id: 2955,
		name: 'Will to Live',
		iconId: 15411,
		description: 'Standing tall despite damage that would normally result in incapacitation. Most damage is nullified. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2956,
		name: '精霊の加護',
		iconId: 15021,
		description: '被ダメージを軽減するシールドを発生させている状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2957,
		name: 'Swift Deception',
		iconId: 15404,
		description: 'Unable to be detected by sight, and movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2958,
		name: 'Forward Whimsy',
		iconId: 15424,
		description: 'Seized with the urge to face forward.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2959,
		name: 'Ogi Namikiri Ready',
		iconId: 13313,
		description: 'Able to execute Ogi Namikiri.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2960,
		name: 'Enhanced Flare',
		iconId: 12659,
		description: 'Flare will deal increased damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2961,
		name: 'Down for the Count',
		iconId: 15044,
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2962,
		name: 'Twisting Viper',
		iconId: 10352,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2963,
		name: 'Gnashing Wolf',
		iconId: 10360,
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2964,
		name: 'Radiant Finale',
		iconId: 12622,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2965,
		name: 'Necrosis',
		iconId: 15388,
		description: 'Flesh is dying. When this effect expires, decay will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2966,
		name: 'Craven Companionship',
		iconId: 15428,
		description: 'Will suffer Fear if no allies are in range when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2967,
		name: 'Sustained Damage',
		iconId: 15067,
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2968,
		name: 'Craniotomy',
		iconId: 15843,
		description: 'Rendered confused and agitated. Attacking allies and sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2969,
		name: 'Sage\'s Wisdom',
		iconId: 15897,
		description: 'Shielded from the effects of Craniotomy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2971,
		name: 'HP Penalty',
		iconId: 15076,
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2972,
		name: 'Bloodsown Circle',
		iconId: 12938,
		description: 'Able to gain stacks of Immortal Sacrifice from party members under the effect of your Circle of Sacrifice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2999,
		name: 'In Event',
		iconId: 15765,
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 3000,
		name: 'Toxicosis',
		iconId: 15517,
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 3001,
		name: 'Disciplined Fist',
		iconId: 12538,
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 3002,
		name: 'Shadowbite Ready',
		iconId: 12623,
		description: 'Able to execute Shadowbite.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 3003,
		name: 'Holos',
		iconId: 12971,
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	}
];