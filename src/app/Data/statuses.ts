export const statuses = [
	{
		id: 1,
		name: 'Petrification',
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 3,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 4,
		name: 'Daze',
		description: 'Scattered senses are preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 5,
		name: 'Amnesia',
		description: 'Unable to use abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 6,
		name: 'Pacification',
		description: 'Unable to use weaponskills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 7,
		name: 'Silence',
		description: 'A stifling magic is preventing casts.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 8,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 9,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 10,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 11,
		name: 'Confused',
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 12,
		name: 'Levitation',
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 13,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 14,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 15,
		name: 'Blind',
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 17,
		name: 'Paralysis',
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 18,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 19,
		name: 'Pollen',
		description: 'Deadly pollen has filled the lungs, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 20,
		name: 'TP Bleed',
		description: 'Bleeding TP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 21,
		name: 'HP Boost',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 22,
		name: 'HP Penalty',
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 23,
		name: 'MP Boost',
		description: 'Maximum MP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 24,
		name: 'MP Penalty',
		description: 'Maximum MP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 25,
		name: 'Attack Up',
		description: 'Attack power is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 26,
		name: 'Attack Down',
		description: 'Attack power is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 27,
		name: 'Accuracy Up',
		description: 'Accuracy is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 28,
		name: 'Accuracy Down',
		description: 'Accuracy is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 29,
		name: 'Defense Up',
		description: 'Defense is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 30,
		name: 'Defense Down',
		description: 'Defense is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 31,
		name: 'Evasion Up',
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 32,
		name: 'Evasion Down',
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 33,
		name: 'Attack Magic Potency Up',
		description: 'Attack magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 34,
		name: 'Attack Magic Potency Down',
		description: 'Attack magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 35,
		name: 'Healing Potency Up',
		description: 'Healing magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 36,
		name: 'Healing Potency Down',
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 37,
		name: 'Magic Defense Up',
		description: 'Magic defense is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 38,
		name: 'Magic Defense Down',
		description: 'Magic defense is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 39,
		name: 'Stun Resistance',
		description: 'Immune to stun effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 40,
		name: 'Silence Resistance',
		description: 'Immune to silence effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 41,
		name: 'Crafting Facility',
		description: 'Maximum CP is increased for crafters level 80 or below.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 42,
		name: 'The Echo',
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 43,
		name: 'Weakness',
		description: 'Strength, dexterity, intelligence, and mind are reduced by 25%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 44,
		name: 'Brink of Death',
		description: 'Strength, dexterity, intelligence, and mind are reduced by 50%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 45,
		name: 'Crafter\'s Grace',
		description: 'Increased experience point gains as a Disciple of the Hand.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 46,
		name: 'Gatherer\'s Grace',
		description: 'Increased experience point gains as a Disciple of the Land.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 47,
		name: 'Sneak',
		description: 'You tread carefully, making nary a sound. Enemies up to 4 levels higher than you are oblivious to your presence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 48,
		name: 'Well Fed',
		description: 'Enjoying the benefits of a full belly.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 49,
		name: 'Medicated',
		description: 'Performance is being enhanced by a medicinal item.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 50,
		name: 'Sprint',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 51,
		name: 'Strength Down',
		description: 'Strength is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 52,
		name: 'Vitality Down',
		description: 'Vitality is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 53,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 54,
		name: 'Physical Damage Down',
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 55,
		name: 'Physical Vulnerability Down',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 56,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 57,
		name: 'Magic Damage Up',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 58,
		name: 'Magic Damage Down',
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 59,
		name: 'Magic Vulnerability Down',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 60,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 61,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 62,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 63,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 64,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 65,
		name: 'Critical Skill',
		description: 'All weaponskills are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 66,
		name: 'Terror',
		description: 'Frozen with fear and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 67,
		name: 'Leaden',
		description: 'Movement speed is reduced, and cannot be restored by normal means.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 68,
		name: 'Drainstrikes',
		description: 'Auto-attacks are generating an Absorb HP effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 69,
		name: 'Aspirstrikes',
		description: 'Auto-attacks are generating an Absorb MP effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 70,
		name: 'Stunstrikes',
		description: 'Auto-attacks may stun target.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 71,
		name: 'Rampart',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 72,
		name: 'Convalescence',
		description: 'HP recovery via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 73,
		name: 'Awareness',
		description: 'Cannot suffer critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 74,
		name: 'Sentinel',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 75,
		name: 'Tempered Will',
		description: 'Immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 76,
		name: 'Fight or Flight',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 77,
		name: 'Bulwark',
		description: 'Block rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 78,
		name: 'Sword Oath',
		description: 'Auto-attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 79,
		name: 'Iron Will',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 80,
		name: 'Cover',
		description: 'Protecting a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 81,
		name: 'Covered',
		description: 'Under the protection of a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 82,
		name: 'Hallowed Ground',
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 83,
		name: 'Foresight',
		description: 'Defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 84,
		name: 'Bloodbath',
		description: 'Physical attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 85,
		name: 'Maim',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 86,
		name: 'Berserk',
		description: 'All weaponskill attacks are both critical and direct hits.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 87,
		name: 'Thrill of Battle',
		description: 'Maximum HP is increased.Enhanced Thrill of Battle Effect: HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 88,
		name: 'Holmgang',
		description: 'Unable to move until effect fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 89,
		name: 'Vengeance',
		description: 'Inflicting a portion of sustained damage back to its source.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 90,
		name: 'Storm\'s Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 91,
		name: 'Defiance',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 92,
		name: 'Unchained',
		description: 'Damage penalty inflicted by Defiance is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 93,
		name: 'Wrath',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 94,
		name: 'Wrath II',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 95,
		name: 'Wrath III',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 96,
		name: 'Wrath IV',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 97,
		name: 'Infuriated',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 98,
		name: 'Dragon Kick',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 99,
		name: 'Featherfoot',
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 100,
		name: 'Internal Release',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 101,
		name: 'Twin Snakes',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 102,
		name: 'Mantra',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 103,
		name: 'Fists of Fire',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 104,
		name: 'Fists of Earth',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 105,
		name: 'Fists of Wind',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 106,
		name: 'Touch of Death',
		description: 'Organs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 107,
		name: 'Opo-opo Form',
		description: 'Employing the opo-opo fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 108,
		name: 'Raptor Form',
		description: 'Employing the raptor fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 109,
		name: 'Coeurl Form',
		description: 'Employing the coeurl fighting stance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 110,
		name: 'Perfect Balance',
		description: 'Employing all three pugilistic fighting stances─opo-opo, raptor, and coeurl.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 111,
		name: 'Greased Lightning',
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 112,
		name: 'Greased Lightning II',
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 113,
		name: 'Greased Lightning III',
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 114,
		name: 'Keen Flurry',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 115,
		name: 'Heavy Thrust',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 116,
		name: 'Life Surge',
		description: 'Next weaponskill will result in a critical hit with a portion of the resulting damage being absorbed as HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 117,
		name: 'Blood for Blood',
		description: 'Damage dealt and damage taken are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 118,
		name: 'Chaos Thrust',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 119,
		name: 'Phlebotomize',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 120,
		name: 'Power Surge',
		description: 'Damage is increased for next Jump or Spineshatter Dive.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 121,
		name: 'Disembowel',
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 122,
		name: 'Straight Shot Ready',
		description: 'Able to execute Straight Shot.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 123,
		name: 'Hawk\'s Eye',
		description: 'Dexterity is increased and all attacks are guaranteed to land.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 124,
		name: 'Venomous Bite',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 125,
		name: 'Raging Strikes',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 126,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 127,
		name: 'Diversion',
		description: 'Enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 128,
		name: 'Barrage',
		description: 'Striking multiple times per weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 129,
		name: 'Windbite',
		description: 'Wounds are exposed to the elements, causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 130,
		name: 'Straight Shot',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 131,
		name: 'Downpour of Death',
		description: 'Next Rain of Death will not require any TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 132,
		name: 'Quicker Nock',
		description: 'Next Quick Nock will not require any TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 133,
		name: 'Swiftsong',
		description: 'Movement speed of self and nearby party members is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 134,
		name: 'Swiftsong',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 135,
		name: 'Mage\'s Ballad',
		description: 'Using MP to gradually restore the MP of nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 136,
		name: 'Mage\'s Ballad',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 137,
		name: 'Army\'s Paeon',
		description: 'Using MP to gradually refresh the TP of self and nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 138,
		name: 'Army\'s Paeon',
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 139,
		name: 'Foe Requiem',
		description: 'Using MP to increase the damage taken by nearby enemies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 140,
		name: 'Foe Requiem',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 141,
		name: 'Battle Voice',
		description: 'Direct hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 142,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 143,
		name: 'Aero',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 144,
		name: 'Aero II',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 145,
		name: 'Cleric Stance',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 146,
		name: 'Protect',
		description: 'Both physical and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 147,
		name: 'Protect',
		description: 'Both physical and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 148,
		name: 'Raise',
		description: 'Teetering on the brink of consciousness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 149,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 150,
		name: 'Medica II',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 151,
		name: 'Stoneskin',
		description: 'Lithified flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 152,
		name: 'Stoneskin (Physical)',
		description: 'Lithified flesh is absorbing physical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 153,
		name: 'Stoneskin (Magical)',
		description: 'Lithified flesh is absorbing magic damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 154,
		name: 'Shroud of Saints',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 155,
		name: 'Freecure',
		description: 'Next Cure II will not require any MP to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 156,
		name: 'Overcure',
		description: 'Next Cure III will cost half MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 157,
		name: 'Presence of Mind',
		description: 'Spell cast times, recast times, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 158,
		name: 'Regen',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 159,
		name: 'Divine Seal',
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 160,
		name: 'Surecast',
		description: 'Spells cannot be interrupted by taking damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 161,
		name: 'Thunder',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 162,
		name: 'Thunder II',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 163,
		name: 'Thunder III',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 164,
		name: 'Thundercloud',
		description: 'Next Thunder spell will add its full damage over time amount to its initial damage, require no time to cast, and cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 165,
		name: 'Firestarter',
		description: 'Next Fire III will require no time to cast and cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 166,
		name: 'Succor',
		description: 'Next Succor will cost no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 167,
		name: 'Swiftcast',
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 168,
		name: 'Manaward',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 169,
		name: 'Manawall',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 170,
		name: 'Apocatastasis',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 171,
		name: 'Ekpyrosis',
		description: 'Unable to receive Apocatastasis.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 172,
		name: 'Infirmity',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 173,
		name: 'Astral Fire',
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 174,
		name: 'Astral Fire II',
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 175,
		name: 'Astral Fire III',
		description: 'Aetherial balance of mind and spirit is leaning astrally. Fire-aspected spells require more MP, but do more damage. Ice-aspected spells require less MP, but do less damage, and casting times are halved. MP regeneration has stopped.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 176,
		name: 'Umbral Ice',
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 177,
		name: 'Umbral Ice II',
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 178,
		name: 'Umbral Ice III',
		description: 'Aetherial balance of mind and spirit is leaning umbrally. Fire-aspected spells require less MP, but do less damage, and their casting times are halved. MP regeneration has quickened.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 179,
		name: 'Bio',
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 180,
		name: 'Miasma',
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 181,
		name: 'Disease',
		description: 'Movement speed and HP recovered via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 182,
		name: 'Virus',
		description: 'Motor skills are hampered, causing reduced strength and dexterity.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 183,
		name: 'Fever',
		description: 'Head is burning, causing reduced mind and intelligence.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 184,
		name: 'Sustain',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 185,
		name: 'Eye for an Eye',
		description: 'Chance that next hit suffered will lower the attacker\'s damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 186,
		name: 'Eye for an Eye',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 187,
		name: 'Rouse',
		description: 'Damage and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 188,
		name: 'Miasma II',
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 189,
		name: 'Bio II',
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 190,
		name: 'Shadow Flare',
		description: 'Burning shadows dance across the ground, dealing unaspected damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 191,
		name: 'Malady',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 192,
		name: 'Spur',
		description: 'Attack power and attack magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 193,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 194,
		name: 'Shield Wall',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 195,
		name: 'Stronghold',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 196,
		name: 'Last Bastion',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 197,
		name: 'Blaze Spikes',
		description: 'Elemental spikes are dealing fire damage to attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 198,
		name: 'Ice Spikes',
		description: 'Elemental spikes are dealing ice damage to and sometimes slowing down attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 199,
		name: 'Shock Spikes',
		description: 'Elemental spikes are dealing lightning damage to and sometimes stunning attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 200,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 201,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 202,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 203,
		name: 'Boost',
		description: 'Attack power on next special technique is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 204,
		name: 'Enfire',
		description: 'Fire damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 205,
		name: 'Enblizzard',
		description: 'Ice damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 206,
		name: 'Enaero',
		description: 'Wind damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 207,
		name: 'Enstone',
		description: 'Earth damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 208,
		name: 'Enthunder',
		description: 'Lightning damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 209,
		name: 'Enwater',
		description: 'Water damage added to auto-attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 210,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 211,
		name: 'Sharpened Knife',
		description: 'Next Lateral Slash is changed to Sharpened Knife, increasing damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 212,
		name: 'True Sight',
		description: 'Able to see through the levequest target\'s glamour.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 213,
		name: 'Pacification',
		description: 'The target is pacified and will no longer attack.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 214,
		name: 'Agitation',
		description: 'Excited by failed pacification. Attack power and attack magic potency are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 215,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 216,
		name: 'Paralysis',
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 217,
		name: 'Triangulate',
		description: 'Able to locate mature trees and lush vegetation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 218,
		name: 'Gathering Rate Up',
		description: 'Chance of obtaining an item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 219,
		name: 'Gathering Yield Up',
		description: 'Number of items obtained while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 220,
		name: 'Gathering Fortune Up',
		description: 'Chance of obtaining an HQ item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 221,
		name: 'Truth of Forests',
		description: 'Able to locate unspoiled, legendary, and clouded mature trees and lush vegetation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 222,
		name: 'Truth of Mountains',
		description: 'Able to locate unspoiled, legendary, and clouded mineral deposits and rocky outcrops.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 223,
		name: 'Byregot\'s Ward',
		description: 'Affinity to the element lightning is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 224,
		name: 'Nophica\'s Ward',
		description: 'Affinity to the element earth is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 225,
		name: 'Prospect',
		description: 'Able to locate mineral deposits and rocky outcrops.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 226,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 227,
		name: 'Seduced',
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 228,
		name: 'Menphina\'s Ward',
		description: 'Affinity to the element ice is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 229,
		name: 'Nald\'thal\'s Ward',
		description: 'Affinity to the element fire is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 230,
		name: 'Llymlaen\'s Ward',
		description: 'Affinity to the element wind is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 231,
		name: 'Thaliak\'s Ward',
		description: 'Affinity to the element water is increased while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 232,
		name: 'Preparation',
		description: 'Able to recognize the conditions for obtaining HQ items while gathering.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 233,
		name: 'Arbor Call',
		description: 'Surveying the land for the nearest mature tree or lush vegetation.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 234,
		name: 'Lay of the Land',
		description: 'Surveying the land for the nearest mineral deposit or rocky outcrop.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 235,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 236,
		name: 'Choco Beak',
		description: 'Bleeding HP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 237,
		name: 'Choco Regen',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 238,
		name: 'Choco Surge',
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 239,
		name: 'The Echo',
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 240,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 241,
		name: 'Blessing of Light',
		description: 'Bathed in the light of the Mothercrystal.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 242,
		name: 'Arbor Call II',
		description: 'Surveying the land for the highest-level mature tree or lush vegetation.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 243,
		name: 'Lay of the Land II',
		description: 'Surveying the land for the highest-level mineral deposit or rocky outcrop.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 244,
		name: 'Fracture',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 245,
		name: 'Sanction',
		description: 'Receiving the gear-enhancing benefits of a Grand Company sanction.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 246,
		name: 'Demolish',
		description: 'Internal bleeding is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 247,
		name: 'Rain of Death',
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 248,
		name: 'Circle of Scorn',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 249,
		name: 'Flaming Arrow',
		description: 'The ground is ablaze, dealing fire damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 250,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 251,
		name: 'Inner Quiet',
		description: 'Receiving a bonus to Touch action efficiency with every increase in quality.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 252,
		name: 'Waste Not',
		description: 'Durability loss is reduced by half.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 253,
		name: 'Steady Hand',
		description: 'Action success rate is increased by 20%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 254,
		name: 'Great Strides',
		description: 'Efficiency of next Touch action is significantly increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 255,
		name: 'Ingenuity',
		description: 'Effectiveness of Touch and Synthesis actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 256,
		name: 'Ingenuity II',
		description: 'Recipe level is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 257,
		name: 'Waste Not II',
		description: 'Durability loss is reduced by half.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 258,
		name: 'Manipulation',
		description: 'Receiving 10 points of durability after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 259,
		name: 'Innovation',
		description: 'Control is increased by 50%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 260,
		name: 'Reclaim',
		description: '90% chance that materials will not be lost in the event of botched synthesis.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 261,
		name: 'Comfort Zone',
		description: 'Regaining 8 CP after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 262,
		name: 'Steady Hand II',
		description: 'Action success rate is increased by 30%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 263,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 264,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 265,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 266,
		name: 'Concussion',
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 267,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 268,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 269,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 270,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 271,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 272,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 273,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 274,
		name: 'Recuperation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 275,
		name: 'Poison +1',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 10
	},
	{
		id: 276,
		name: 'Voice of Valor',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 277,
		name: 'Voice of Fortitude',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 278,
		name: 'Relentless March',
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 279,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 280,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 281,
		name: 'Physical Damage Down',
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 282,
		name: 'Mana Modulation',
		description: 'Damage dealt by attack spells and HP restored via healing magic are reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 283,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 284,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 285,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 286,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 287,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 288,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 289,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 290,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 291,
		name: 'Hundred Fists',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 292,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 293,
		name: 'Skill Speed Up',
		description: 'Weaponskill cast and recast times are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 294,
		name: 'Spell Speed Up',
		description: 'Spell cast and recast times are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 295,
		name: 'Goldbile',
		description: 'Sulphuric sludge is eating away at the skin, causing extreme discomfort and gradual HP loss.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 296,
		name: 'Hysteria',
		description: 'Unable to act on your own free will.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 297,
		name: 'Galvanize',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 298,
		name: 'Sacred Soil',
		description: 'An area of land has been sanctified, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 299,
		name: 'Sacred Soil',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 300,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 301,
		name: 'Critical Strikes',
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 302,
		name: 'Gold Lung',
		description: 'A layer of sulphuric sludge has built up on the body.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 303,
		name: 'Burrs',
		description: 'Hooked burrs have dug into your flesh.',
		category: 2,
		isPermanent: false,
		maxStacks: 9,
		partyListPriority: 50
	},
	{
		id: 304,
		name: 'Aetherflow',
		description: 'Aether is gathering in the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 305,
		name: 'The Dragon\'s Curse',
		description: 'Under the power of the dragon\'s eye.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 306,
		name: 'Inner Dragon',
		description: 'Under control of the dragon\'s eye.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 307,
		name: 'Voice of Valor',
		description: 'Gradually restoring the HP of nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 308,
		name: 'Voice of Fortitude',
		description: 'Reducing damage taken by nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 309,
		name: 'Relentless March',
		description: 'Increasing frequency of actions executed by nearby party members. Damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 310,
		name: 'Curl',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 311,
		name: 'Earthen Ward',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 312,
		name: 'Razed Earth',
		description: 'Jagged shards protrude from the ground, dealing earth damage to any who tread upon them.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 313,
		name: 'Radiant Shield',
		description: 'Increasing physical damage taken by attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 314,
		name: 'Inferno',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 315,
		name: 'Whispering Dawn',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 316,
		name: 'Fey Covenant',
		description: 'Magic defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 317,
		name: 'Fey Illumination',
		description: 'Magic defense and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 318,
		name: 'Fey Glow',
		description: 'Spell speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 319,
		name: 'Fey Light',
		description: 'Skill speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 320,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 321,
		name: 'Gungnir',
		description: 'The power slumbering within the legendary lance has awoken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 322,
		name: 'Crystal Veil',
		description: 'Damage taken is significantly reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 323,
		name: 'Reduced Immunity',
		description: 'HP recovery via healing magic is reduced. Can be cured with Esuna.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 324,
		name: 'Greenwrath',
		description: 'The anger of the elementals tears at your very sanity, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 325,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 326,
		name: 'Lightning Charge',
		description: 'Lightning-aspected actions are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 327,
		name: 'Ice Charge',
		description: 'Ice-aspected actions are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 328,
		name: 'Heart of the Mountain',
		description: 'Armored by impenetrable stone. Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 329,
		name: 'Modification',
		description: 'Applying parts from another bot to enhance and repair systems.',
		category: 1,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 330,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 331,
		name: 'Magic Vulnerability Down',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 332,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 333,
		name: 'Allagan Rot',
		description: 'An ancient pestilence corrupts your humours. Mortal pathogen is released when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 334,
		name: 'Allagan Immunity',
		description: 'Your body is showing resistance to the Allagan Rot.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 335,
		name: 'Firestream',
		description: 'The flesh melts from your bones, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 336,
		name: 'Sequence AB1',
		description: 'Blunt resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 337,
		name: 'Sequence AP1',
		description: 'Piercing resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 338,
		name: 'Sequence AS1',
		description: 'Slashing resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 339,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 340,
		name: 'Physical Field',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 341,
		name: 'Aetherial Field',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 342,
		name: 'Repelling Spray',
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 343,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 344,
		name: 'Neurolink',
		description: 'Movement is slowed, damage dealt and HP recovery via actions is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 345,
		name: 'Recharge',
		description: 'Damage dealt is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 346,
		name: 'Waxen Flesh',
		description: 'The rate at which Firestorm burns your flesh is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 347,
		name: 'Pox',
		description: 'An ancient pestilence corrupts your humours, reducing maximum HP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 348,
		name: 'Disseminate',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 349,
		name: 'Steel Scales',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 350,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 351,
		name: 'Rancor',
		description: 'The rage of fallen brethren is enhancing the potency of certain attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 352,
		name: 'Spjot',
		description: 'Magicks of eld permeate your body, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 353,
		name: 'Brave New World',
		description: 'Attributes are increased when a low-level Disciple of War or Magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 354,
		name: 'Live off the Land',
		description: 'Gathering is increased when a Disciple of the Land.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 355,
		name: 'What You See',
		description: 'Perception is increased when a Disciple of the Land.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 356,
		name: 'Eat from the Hand',
		description: 'Craftsmanship is increased when a Disciple of the Hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 357,
		name: 'In Control',
		description: 'Control is increased when a Disciple of the Hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 358,
		name: 'Snowman',
		description: 'Covered in snow and able to deal damage to targets under the Fey Fire effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 359,
		name: 'Fey Fire',
		description: 'A fey fire envelops you, nullifying all damage received.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 360,
		name: 'Meat and Mead',
		description: 'Food effect duration is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 361,
		name: 'That Which Binds Us',
		description: 'Spiritbonding speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 362,
		name: 'Proper Care',
		description: 'Gear wear is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 364,
		name: 'Reduced Rates',
		description: 'Teleportation fees are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 365,
		name: 'The Heat of Battle',
		description: 'EXP earned through battle is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 366,
		name: 'A Man\'s Best Friend',
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 367,
		name: 'Earth and Water',
		description: 'EXP earned through gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 368,
		name: 'Helping Hand',
		description: 'EXP earned through crafting is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 369,
		name: 'Viscous Aetheroplasm',
		description: 'Aetheroplasm is attached to your body. A stack of 5 will result in severe damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 370,
		name: 'Siren Song',
		description: 'The siren\'s song is gradually invading your mind. Must be at maximum HP when effect ends to avoid becoming charmed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 371,
		name: 'Zombification',
		description: 'Turned into a mindless zombie under enemy control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 372,
		name: 'Brood Rage',
		description: 'The mother zu is maddened by the death of her brood. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 373,
		name: 'Blight',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 374,
		name: 'Corrupted Crystal',
		description: 'Shards of corrupted crystals are attached to your body. A stack of three will trigger an explosion.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 375,
		name: 'Suppuration',
		description: 'Maximum HP is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 376,
		name: 'Searing Wind',
		description: 'Ignited by white-hot embers and scorching those nearby. Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 377,
		name: 'Infernal Fetters',
		description: 'A prison of fire is reducing damage dealt and inflicting fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 378,
		name: 'Death Throes',
		description: 'Held firmly by the leg and unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 379,
		name: 'Thermal Low',
		description: 'The wind is high. Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 100
	},
	{
		id: 380,
		name: 'Thermal High',
		description: 'The wind has died. Resistance to wind damage is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 381,
		name: 'Sword Oath',
		description: 'Auto-attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 383,
		name: 'Growing',
		description: 'Absorbed nutrients are spurring rapid development.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 199
	},
	{
		id: 384,
		name: 'Full-grown',
		description: 'Fully matured.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 385,
		name: 'Fool\'s Tightrope',
		description: 'Weaving the illusion of a precarious path.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 386,
		name: 'Unfooled',
		description: 'Aware that the fool\'s tightrope is a mere illusion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 387,
		name: 'Fool\'s Tumble',
		description: 'Convinced that you have taken a fall and are unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 388,
		name: 'Fool\'s Figure',
		description: 'Weaving the illusion of an altered self.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 389,
		name: 'Skewer',
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 390,
		name: 'Growing',
		description: 'Absorbed nutrients are spurring rapid development.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 391,
		name: 'Full-grown',
		description: 'Fully matured.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 392,
		name: 'Royal Guard',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 393,
		name: 'Iron Will',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 394,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 395,
		name: 'Physical Damage Down',
		description: 'Physical damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 396,
		name: 'Concentration',
		description: 'Next enfeeblement received is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 397,
		name: 'Safeguard',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 398,
		name: 'Astral Realignment',
		description: 'Existentially aligned to the astral realm. Damage dealt is reduced, but can attack ghostly beings.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 399,
		name: 'Corporeal Return',
		description: 'Weakened by the time in astral realignment. Damage taken is doubled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 400,
		name: 'Charge',
		description: 'Storing lightning energy. Resistance to lightning damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 401,
		name: 'Seized',
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 402,
		name: 'Thrown for a Loop',
		description: 'Provoked beyond all mortal limits and heedless of danger. Can only pursue the target.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 403,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 404,
		name: 'Transporting',
		description: 'Carrying an object in your arms, growing wearier with each passing second.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 405,
		name: 'Bewildered',
		description: 'Confused and unable to control your actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 406,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 30
	},
	{
		id: 407,
		name: 'Dust Poisoning',
		description: 'Poisoned by the crystal dust you inhaled. A stack of 4 will render you unable to act.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 408,
		name: 'Storm\'s Path',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 409,
		name: 'Holmgang',
		description: 'Most attacks cannot reduce your HP to less than 1.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 410,
		name: 'Antibody',
		description: 'Immune to the effects of virus and fever.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 411,
		name: 'Inner Beast',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 412,
		name: 'Hover',
		description: 'Floating above ground.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 413,
		name: 'Mark Up',
		description: 'Wolf Marks earned are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 414,
		name: 'Seal Sweetener',
		description: 'Company seals earned are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 415,
		name: 'Regain',
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 416,
		name: 'Transparent',
		description: 'Body is allowing light to pass, rendering you invisible to the enemy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 417,
		name: 'Protect',
		description: 'Defense and magic defense are enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 418,
		name: 'Transcendent',
		description: 'Recently resurrected and temporarily invulnerable to most damage. Status ends upon execution of an action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 419,
		name: 'Misty Veil',
		description: 'Attack range is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 420,
		name: 'Prey',
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 421,
		name: 'Devoured',
		description: 'Being devoured is preventing the execution of actions and causing damage over time. ',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 422,
		name: 'Healing Magic Down',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 423,
		name: 'Nightmare',
		description: 'Troubled sleep is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 424,
		name: 'Diabolic Curse',
		description: 'Placed under a diabolic curse. Damage taken is increased. ',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 425,
		name: 'Eerie Air',
		description: 'A sense of dread is heightening your alertness, granting resistance to sleep.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 426,
		name: 'Noctoshield',
		description: 'A magicked barrier is granting resistance to stun.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 427,
		name: 'Slow+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased. Effect cannot be nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 428,
		name: 'Haste+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 429,
		name: 'Scale Flakes',
		description: 'Dusted with wamoura scales and giving off a scent which attracts Arioch. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 430,
		name: 'Misery',
		description: 'Plunged into the depths of misery. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 431,
		name: 'Water Resistance Down',
		description: 'Water resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 432,
		name: 'Briny Mirror',
		description: 'Covered in a watery membrane. Any party member who uses a healing spell or action on you receives the Briny Veil status.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 433,
		name: 'Briny Veil',
		description: 'Covered in a watery membrane which impairs vision, reducing your attack range. A stack of 16 will render you unable to act. ',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 434,
		name: 'Absolute Bind',
		description: 'Bound by advanced thaumaturgy and rendered unable to act.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 435,
		name: 'Demon Eye',
		description: 'Petrified by a demonic gaze. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 436,
		name: 'Briar',
		description: 'Thick briar is reducing movement speed and causing damage over time. Prevents draw-in and knockback effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 437,
		name: 'Stone Curse',
		description: 'Turned into stone. Taking damage results in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 438,
		name: 'Minimum',
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 439,
		name: 'Toad',
		description: 'Transformed into a toad and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 440,
		name: 'Minimum',
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 441,
		name: 'Toad',
		description: 'Transformed into a toad and unable to execute actions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 442,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 443,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 444,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 445,
		name: 'Thorny Vine',
		description: 'Thorny vines are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 446,
		name: 'Honey-glazed',
		description: 'Covered in honey and attracting hornets.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 447,
		name: 'Potent Acid',
		description: 'Doused in potent acid, resulting in increased damage taken from Acid Cloud. Strength of effect is determined by stack number.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 448,
		name: 'Swarmed',
		description: 'A swarm of bees will soon sting you.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 449,
		name: 'Stung',
		description: 'Bee venom is coursing through your body. Damage received from bee swarms is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 450,
		name: 'Petrification Resistance',
		description: 'Immune to petrification effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 451,
		name: 'Cursed Voice',
		description: 'Your body is being taken over, and will soon be used to unleash a petrifying curse.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 452,
		name: 'Cursed Shriek',
		description: 'Your body is being taken over, and will soon be used to unleash a petrifying curse.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 453,
		name: 'Allagan Venom',
		description: 'Involuntarily spreading Allagan snake venom and causing damage over time to all party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 454,
		name: 'Allagan Field',
		description: 'A magicked field is converting damage taken into an explosion which will trigger when the effect ends or you are KO\'d.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 455,
		name: 'Languishing',
		description: 'Life force is weakened, resulting in increased damage taken from Life Drain.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 150
	},
	{
		id: 456,
		name: 'HP Penalty',
		description: 'Maximum HP is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 457,
		name: 'Bind+',
		description: 'Unable to move. Effect cannot be nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 458,
		name: 'Raven Blight',
		description: 'Afflicted by the White Raven\'s miasma, which will soon cause you to explode.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 459,
		name: 'Normal Stance',
		description: 'Being commanded to execute standard battle maneuvers.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 460,
		name: 'Aggressive Stance',
		description: 'Being commanded to execute actions that deal area damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 461,
		name: 'Subversive Stance',
		description: 'Being commanded to execute actions that disrupt the enemy.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 462,
		name: 'Garrote Twist',
		description: 'Garrote is stacking at an increased rate.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 463,
		name: 'Garrote',
		description: 'A death grip is tightening around you. A stack of 9 will result in instant death.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 464,
		name: 'Firescorched',
		description: 'Resistance to attacks by Firehorn is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 465,
		name: 'Icebitten',
		description: 'Resistance to attacks by Iceclaw is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 466,
		name: 'Thunderstruck',
		description: 'Your body is accumulating a lightning charge. Will inflict lightning damage to those nearby when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 467,
		name: 'Briny Veil',
		description: 'Covered in a watery membrane which impairs vision, reducing your attack range. A stack of 16 will render you unable to act. ',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 468,
		name: 'Voidbound',
		description: 'Trapped in the void and unable to interact with the physical realm.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 469,
		name: 'High and Mighty',
		description: 'Invulnerable to all damage. Long live the king, kupo!',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 470,
		name: 'Pombination',
		description: 'In the midst of a combination attack. Immune to stun and silence effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 471,
		name: 'Moglight Resistance Down',
		description: 'Massive damage is taken from Stifling Mogdark.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 472,
		name: 'Mogdark Resistance Down',
		description: 'Massive damage is taken from Searing Moglight.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 473,
		name: 'Bemoggled',
		description: 'Massive damage is taken from Moogle-Go-Round.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 474,
		name: 'Royal Rouse',
		description: 'Damage dealt and HP recovery is increased. Long live the king, kupo!',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 150
	},
	{
		id: 475,
		name: 'Slippery Prey',
		description: 'Unable to be marked as prey by would-be predators.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 476,
		name: 'Gloam',
		description: 'A shroud of darkness is impairing your accuracy while rendering you immune to Demon Eye. Can be cured with Esuna.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 477,
		name: 'Mantle of the Whorl',
		description: 'Reflecting damage dealt by magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 478,
		name: 'Veil of the Whorl',
		description: 'Reflecting damage dealt by ranged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 479,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 480,
		name: 'Haste+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 481,
		name: 'Sprint',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 482,
		name: 'Paralysis',
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 483,
		name: 'HP Boost',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 484,
		name: 'Ink',
		description: 'Your body is dripping with thick toxic ink, slowing movement speed and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 485,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 486,
		name: 'Watery Grave',
		description: 'You are trapped in a magicked prison of water and are unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 487,
		name: 'Deep Freeze',
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 488,
		name: 'Shade Shift',
		description: 'Shadows are nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 489,
		name: 'Kiss of the Wasp',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 490,
		name: 'Kiss of the Viper',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 491,
		name: 'Dancing Edge',
		description: 'Slashing resistance and HP recovery via healing magic and actions are reduced.※HP recovery unaffected in PvP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 492,
		name: 'Mutilation',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 493,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 494,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 495,
		name: 'Goad',
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 496,
		name: 'Mudra',
		description: 'Readying ninjutsu by combining ritual hand gestures.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 497,
		name: 'Kassatsu',
		description: 'Able to execute a ninjutsu with increased potency.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 498,
		name: 'Infirmity',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 500,
		name: 'Huton',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 501,
		name: 'Doton',
		description: 'Foul magicks corrupt the ground, dealing earth damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 502,
		name: 'Doton Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 503,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 504,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 505,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 506,
		name: 'Vertigo',
		description: 'Balance is compromised, resulting in a loss of motor skills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 507,
		name: 'Suiton',
		description: 'Body is enveloped in a light-bending veil of water, allowing use of actions normally requiring the Hidden status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 508,
		name: 'Shadow Fang',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 509,
		name: 'Aetherochemical Bomb',
		description: 'An aetherochemical bomb is attached to your body, dealing damage each time it explodes.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 510,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 511,
		name: 'Fire Toad',
		description: 'Transformed into a fire toad and only able to execute the action Toad Breath.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 512,
		name: 'Electroconductivity',
		description: 'Conductive matter clings to your person. A stack of 3 will grant you the effect of Surge Protection.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 100
	},
	{
		id: 513,
		name: 'Static Condensation',
		description: 'Excess electric charge is stored within your body. The greater the stack, the fewer the HP recovered via healing magic.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 100
	},
	{
		id: 514,
		name: 'Causality',
		description: 'Damage is taken each time an action is used.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 515,
		name: 'Thunderclap',
		description: 'Sustaining damage over time. If the effect is not removed, it will continue to stack, increasing the amount of damage inflicted.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 98
	},
	{
		id: 516,
		name: 'Chaos',
		description: 'Experiencing mental breakdown resulting in a stunned state, followed by the desire to draw near the Lord of Levin.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 517,
		name: 'Surge Protection',
		description: 'Your body is covered in conductive matter, helping to redirect and nullify the electrical charge of lightning attacks.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 518,
		name: 'Reflect',
		description: 'All magic attacks are reflected back at the caster.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 519,
		name: 'Counter',
		description: 'All physical attacks are reflected back at the dealer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 520,
		name: 'Fire Resistance Up',
		description: 'Fire resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 521,
		name: 'Water Resistance Up',
		description: 'Water resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 522,
		name: 'Wind Resistance Up',
		description: 'Wind resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 523,
		name: 'Lightning Resistance Up',
		description: 'Lightning resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 524,
		name: 'Earth Resistance Up',
		description: 'Earth resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 525,
		name: 'Ice Resistance Up',
		description: 'Ice resistance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 526,
		name: 'Frost Blade',
		description: 'Regenerating HP over time. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 527,
		name: 'Frost Brand',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 528,
		name: 'Frost Bow',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 529,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 530,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 531,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 532,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 533,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 534,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 535,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 536,
		name: 'Companion EXP Up',
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 537,
		name: 'Companion EXP Up II',
		description: 'EXP earned by companions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 538,
		name: 'Companion Attack Up',
		description: 'Companion attack power is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 539,
		name: 'Companion Attack Up II',
		description: 'Companion attack power is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 540,
		name: 'Companion Healing Potency Up',
		description: 'Companion healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 541,
		name: 'Companion Healing Potency Up II',
		description: 'Companion healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 542,
		name: 'Companion Maximum HP Up',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 543,
		name: 'Companion Maximum HP Up II',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 544,
		name: 'Companion Enmity Up',
		description: 'Companion enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 545,
		name: 'Companion Enmity Up II',
		description: 'Companion enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 546,
		name: 'Enervation',
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 547,
		name: 'Facility Access: Production',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 548,
		name: 'Facility Access: Finishing',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 549,
		name: 'Facility Access: Detailing',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 550,
		name: 'Facility Access: Production II',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 551,
		name: 'Facility Access: Specialization',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 552,
		name: 'Facility Access: Specialization II',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 553,
		name: 'Facility Access: Detailing II',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 554,
		name: 'Facility Access: Finishing II',
		description: 'Making use of local crafting facilities to synthesize special items. Recipe level is lowered to current level.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 555,
		name: 'Repelling Spray',
		description: 'Countering any physical attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 556,
		name: 'Repelling Spray',
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 557,
		name: 'Repelling Spray',
		description: 'Countering any physical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 558,
		name: 'Repelling Spray',
		description: 'Countering any magic attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 559,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 560,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 561,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 562,
		name: 'Prey',
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 563,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 564,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 565,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered, inhibiting use of actions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 566,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 567,
		name: 'Six Fulms Under',
		description: 'You are slowly slipping down, your movement speed dropping as you descend deeper. Burial will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 568,
		name: 'Fisher\'s Intuition',
		description: 'Heightened senses are improving chances of discovering rare fish only obtainable under special conditions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 569,
		name: 'Slime',
		description: 'Viscous discharge is hampering movement and inflicting damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 570,
		name: 'In the Line of Fire',
		description: 'Damage dealt by firearms is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 51
	},
	{
		id: 571,
		name: 'Blind',
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 572,
		name: 'Slashing Resistance Down',
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 573,
		name: 'Blunt Resistance Down',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 574,
		name: 'Erratic Blaster',
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 575,
		name: 'Static Charge',
		description: 'Damage dealt by Electric Burst is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 576,
		name: 'Lightning Resistance Down',
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 577,
		name: 'Barofield',
		description: 'Damage taken when Kaliya is nearby.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 578,
		name: 'In the Headlights',
		description: 'Damage taken by main head increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 579,
		name: 'Critical Strikes',
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 580,
		name: 'Aetherochemical Nanospores α',
		description: 'An Allagan-engineered malady is corrupting your humours.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 581,
		name: 'Aetherochemical Nanospores β',
		description: 'An Allagan-engineered malady is corrupting your humours.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 582,
		name: 'Magic Vulnerability Down',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 583,
		name: 'Physical Vulnerability Down',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 584,
		name: 'Energy Field',
		description: 'Invulnerable to ranged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 585,
		name: 'Energy Field Down',
		description: 'Energy field is no longer deflecting ranged attacks. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 586,
		name: 'HP Boost',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 587,
		name: 'Forked Lightning',
		description: 'Storing an electric charge which, when released, will deal lightning damage to nearby allies.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 588,
		name: 'Revelation Resistance Down',
		description: 'Damage taken by Revelation is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 589,
		name: 'Chain of Purgatory',
		description: 'Marked by the Brand of Purgatory. Damage taken by the Flames of Unforgiveness is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 590,
		name: 'Arm of Purgatory',
		description: 'Marked by the Brand of Purgatory. Damage taken by the Flames of Unforgiveness is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 591,
		name: 'Bluefire',
		description: 'Cold blue flames are severely reducing damage dealt and HP restored via actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 592,
		name: 'Ring of Fire',
		description: 'Enveloped in protective flames. Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 593,
		name: 'Rise of the Phoenix',
		description: 'The holy flames of Phoenix burn bright, increasing potency of the Flames of Rebirth with each additional stack.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 594,
		name: 'Harvest',
		description: 'Redirecting the remaining life energies of incapacitated victims in order to gain the effect of Rise of the Phoenix.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 595,
		name: 'Cloak of Death',
		description: 'Damage taken by the Fountain of Death is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 596,
		name: 'Suffocated Will',
		description: 'Overwhelmed by the sheer spiritual might of the dreadwyrm. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 597,
		name: 'Flare Dampening',
		description: 'Damage taken by Bahamut\'s Teraflare is reduced, and damage dealt is significantly reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 598,
		name: '(仮)物理シールド(ストンスキン)',
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 599,
		name: '(仮)魔法シールド(ストンスキン)',
		description: '',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 600,
		name: 'Magic Vulnerability Down',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 601,
		name: 'Physical Vulnerability Down',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 602,
		name: 'Curse of the Mummy',
		description: 'Suffering an ancient curse. A stack of 4 will result in mummification.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 603,
		name: 'Mummification',
		description: 'Serving the Sunken Temple of Qarn as a mindless thrall.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 604,
		name: 'Thin Ice',
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 605,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 606,
		name: 'Frozen',
		description: 'Ice has begun forming on gear. A stack of 4 will result in Deep Freeze.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 607,
		name: 'Snowball',
		description: 'Trapped inside a giant ball of packed snow.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 608,
		name: 'Death Throes',
		description: 'Held firmly by the leg and unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 609,
		name: 'Seized',
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 610,
		name: 'Petrification',
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 611,
		name: 'Invigoration',
		description: 'Experiencing increased pep in one\'s step. Wet Plate status is removed upon executing Imp Punch.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 612,
		name: 'Wet Plate',
		description: 'Sufficient water remains on the imp plate. Status removed if Imp Punch is executed while Typhon is invigorated.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 613,
		name: 'Imp',
		description: 'Transformed into an imp and only able to execute the action Imp Punch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 614,
		name: 'Hidden',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 615,
		name: 'Hidden',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 616,
		name: 'Invisible',
		description: 'Unable to be detected by sight.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 617,
		name: 'Irradiated',
		description: 'Luminescence is being stored within the body and will result in an emission of Banishing Light once the effect ends.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 618,
		name: 'Area of Influence Up',
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 619,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 620,
		name: 'Pacification',
		description: 'Unable to use weaponskills.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 621,
		name: 'Fire Resistance Down',
		description: 'Fire resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 622,
		name: 'Rotting Lungs',
		description: 'Lungs are filled with noxious fumes and will emit the toxic vapors if subjected to further Rot Gas.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 623,
		name: 'Disease',
		description: 'Movement speed and HP recovered via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 624,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 625,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 626,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 627,
		name: 'Neurolink',
		description: 'A powerful Allagan device is limiting strength.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 628,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 629,
		name: 'Infirmity',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 630,
		name: 'Heavy',
		description: 'Chocobo speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 631,
		name: 'Tireless',
		description: 'Chocobo has limitless stamina.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 632,
		name: 'Frenzied',
		description: 'Chocobo is panicked and accelerating out of control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 633,
		name: 'Lamed',
		description: 'Chocobo is injured and cannot accelerate.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 634,
		name: 'Silenced',
		description: 'Chocobo has lost its wark and cannot use race abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 635,
		name: 'Distracted',
		description: 'Chocobo is discomposed and refuses to use race items.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 636,
		name: 'Brand of the Sullen',
		description: 'Damage taken by Sullen Gaze is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 637,
		name: 'Brand of the Ireful',
		description: 'Damage taken by Ireful Gaze is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 638,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 639,
		name: 'Pyretic',
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 640,
		name: 'Poison Resistance Up',
		description: 'Poison resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 641,
		name: 'Choco Reflect',
		description: 'All non-area of effect enfeeblements are being repelled back to their point of origin.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 642,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 643,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 644,
		name: 'Chicken',
		description: 'Transformed into a chicken and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 645,
		name: 'Digesting',
		description: 'Taking damage over time as body tissue is slowly broken down by gastric fluid. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 646,
		name: 'Abandonment',
		description: 'Will suffer Fear when straying too far from party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 647,
		name: 'Atrophy',
		description: 'All attributes are reduced by 30%.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 648,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 649,
		name: 'Attack Up',
		description: 'Attack power is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 650,
		name: 'Attack Magic Potency Up',
		description: 'Attack magic potency is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 651,
		name: 'Haste',
		description: 'Weaponskill cast/recast time, spell cast/recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 652,
		name: 'HP & MP Boost',
		description: 'Maximum HP and MP are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 653,
		name: 'Battle High',
		description: 'Damage dealt is increased and adrenaline builds faster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 654,
		name: 'Battle Fever',
		description: 'Damage dealt is increased further and adrenaline builds faster than when experiencing a Battle High.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 655,
		name: 'Aegis Boon',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 656,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 657,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 658,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 659,
		name: 'Blight',
		description: 'Sustaining damage over time as lungs are filled with corruption. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 660,
		name: 'Extend',
		description: 'Temporal flow is disrupted.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 661,
		name: 'Double',
		description: 'The next action initiated will be executed twice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 662,
		name: 'Triple',
		description: 'The next action initiated will be executed thrice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 663,
		name: 'Red Light',
		description: 'You are no longer allowed to move. All that\'s left is to pray the snort misses its mark.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 664,
		name: 'Prey',
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 665,
		name: 'Slippery Prey',
		description: 'Unable to be marked as prey by would-be predators.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 666,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 667,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 668,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 669,
		name: 'Movement Speed Up',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 670,
		name: 'Fire Resistance Down',
		description: 'Fire resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 50
	},
	{
		id: 671,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 672,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 673,
		name: 'Nanoparticles',
		description: 'Nanoparticles have invaded the body. If buildup continues, severe biomass atrophy may occur.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 674,
		name: 'Resin',
		description: 'A sticky substance covers the body, reducing movement speed.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 676,
		name: 'Concealed',
		description: 'Unable to be detected from a distance.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 677,
		name: 'Concentrated Poison',
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 678,
		name: 'Tailwind',
		description: 'Wind is buffeting the body, increasing evasion.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 679,
		name: 'Windwall',
		description: 'A wall of wind surrounds the body, allowing for evasion of all attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 680,
		name: 'Directional Parry',
		description: 'Parry rate is increased for all attacks from a certain direction.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 681,
		name: 'Offensive Optimization',
		description: 'Battle tactics optimized for offense. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 682,
		name: 'Defensive Optimization',
		description: 'Battle tactics optimized for defense. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 683,
		name: 'Blessing of Earth',
		description: 'An earthen barrier is nullifying damage. If the barrier retains power when the effect ends, the Blessing of Fire will be granted.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 684,
		name: 'Blessing of Fire',
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 685,
		name: 'Wind Resistance Down',
		description: 'Resistance to wind damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 686,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 687,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 688,
		name: 'Hypercharge',
		description: 'Battle turret is overcharged.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 689,
		name: 'Mana Capacitor',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 690,
		name: 'Muscle Activator',
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 691,
		name: 'Marked for Vulnerability Up',
		description: 'Physical damage taken is increased following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 692,
		name: 'Marked for Damage Down',
		description: 'Damage dealt is reduced following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 693,
		name: 'Marked for Healing Magic Down',
		description: 'HP recovery via healing magic is reduced following execution of Digititis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 694,
		name: 'Hard Marked',
		description: 'The marked status cannot be moved to another ally.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 695,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 696,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 697,
		name: 'Healing Magic Down',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 698,
		name: 'Positive Charge',
		description: 'Exhibiting a positive magnetic charge.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 699,
		name: 'Negative Charge',
		description: 'Exhibiting a negative magnetic charge.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 700,
		name: 'Throttle',
		description: 'Windpipe is crushed. KO is imminent.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 701,
		name: 'Battle Efficiency Down',
		description: '',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 702,
		name: 'Bloated',
		description: 'The bomb\'s body is filled to bursting with deadly gas.',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 703,
		name: 'Draconian Gaze',
		description: 'The Dragon\'s Eye is limiting Nidhogg\'s strength.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 704,
		name: 'Draconian Light',
		description: 'The Dragon\'s Eye is significantly reducing damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 705,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 706,
		name: 'Luminous Aetheroplasm',
		description: 'Luminous aetheroplasm buildup has occurred. If it continues, exhaust will be released to relieve pressure.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 707,
		name: 'Decree Nisi A',
		description: 'If Decree Nisi B is also issued, steam regulator ruling becomes Decree Absolute and death sentence is carried out.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 200
	},
	{
		id: 708,
		name: 'Decree Nisi B',
		description: 'If Decree Nisi A is also issued, steam regulator ruling becomes Decree Absolute and death sentence is carried out.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 709,
		name: 'Heavy Feet',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 710,
		name: 'Charge',
		description: 'The order to charge has been given.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 711,
		name: 'Temporary Insanity',
		description: 'Overcome with temporary insanity. Unable to execute actions. Enmity is reset when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 712,
		name: 'Tempered Will',
		description: 'Immune to knockback and draw-in effects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 713,
		name: 'Severe Damage',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 714,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 715,
		name: 'Staggered',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 80
	},
	{
		id: 716,
		name: 'Turbulence',
		description: 'Violent atmospheric disruption is causing damage over time. Increased turbulence results in increased vulnerability to Bismarck\'s magicks.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 50
	},
	{
		id: 717,
		name: 'Will of the Wind',
		description: 'Under the influence of the wind magicks of the so\'sanuwa.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 718,
		name: 'Will of the Water',
		description: 'Under the influence of the water magicks of the ul\'sanuwa.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 719,
		name: 'Whaleback',
		description: 'Able to deal damage to Bismarck, but susceptible to the primal\'s magicks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 720,
		name: 'Slashing Resistance Up',
		description: 'Slashing resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 721,
		name: 'Piercing Resistance Up',
		description: 'Piercing resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 722,
		name: 'Blunt Resistance Up',
		description: 'Blunt resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 723,
		name: 'Aetherochemical Bomb',
		description: 'An aetherochemical bomb is affixed to your person, and it is only a matter of time before it detonates.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 724,
		name: 'Strength Down',
		description: 'Strength is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 725,
		name: 'Goring Blade',
		description: 'Wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 726,
		name: 'Divine Veil',
		description: 'Upon HP recovery via healing magic, a damage-reducing barrier is created.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 727,
		name: 'Divine Veil',
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 728,
		name: 'Sheltron',
		description: 'Next attack will be blocked.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 729,
		name: 'Deliverance',
		description: 'Damage dealt is increased. Using certain actions will increase your Beast Gauge.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 730,
		name: 'Abandon',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 731,
		name: 'Abandon II',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 732,
		name: 'Abandon III',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 733,
		name: 'Abandon IV',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 734,
		name: 'Uncontrollable',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 735,
		name: 'Raw Intuition',
		description: 'Damage taken is reduced and HP is restored with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 736,
		name: 'Blood of the Dragon',
		description: 'Potency of Jump and Spineshatter Dive are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 737,
		name: 'Ley Lines',
		description: 'Naturally occurring ley lines have been connected into a circle of power.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 738,
		name: 'Circle of Power',
		description: 'Spell cast times, recast times, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 739,
		name: 'Asylum',
		description: 'A veil of succor is healing party members in the area.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 740,
		name: 'Shadowskin',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 741,
		name: 'Scourge',
		description: 'Sanity is slipping, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 742,
		name: 'Blood Weapon',
		description: 'Absorbing MP upon landing weaponskills or spells.Enhanced Blackblood Effect: Increasing Blood Gauge upon landing weaponskills or spells.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 743,
		name: 'Grit',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 744,
		name: 'Dark Dance',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 745,
		name: 'Blood Price',
		description: 'Partial MP restored when damage is taken.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 746,
		name: 'Dark Mind',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 747,
		name: 'Shadow Wall',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 748,
		name: 'Delirium',
		description: 'Intelligence is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 749,
		name: 'Salted Earth',
		description: 'The ground is rendered void of all life, dealing unaspected damage to any who tread upon it.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 750,
		name: 'Another Victim',
		description: 'When target is KO\'d or effect expires, the dark knight who marked target will recover HP and MP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 751,
		name: 'Darkside',
		description: 'Damage dealt is increased while MP regeneration is stopped.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 752,
		name: 'Dark Arts',
		description: 'Potency of certain dark knight actions is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 753,
		name: 'Reprisal',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 754,
		name: 'Gathering Rate Up (Limited)',
		description: 'Chance of obtaining an item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 755,
		name: 'Gathering Fortune Up (Limited)',
		description: 'Chance of obtaining an HQ item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 756,
		name: 'Gathering Yield Up (Limited)',
		description: 'Number of items obtained on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 757,
		name: 'Scrutiny',
		description: 'Collectability increase is improved.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 758,
		name: 'Utmost Caution',
		description: 'Item wear increase reduced on next appraisal.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 759,
		name: 'Gift of the Land II',
		description: 'Increased chance of triggering Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 760,
		name: 'Single Mind',
		description: 'The next appraisal will not use a gathering attempt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 761,
		name: 'Snagging',
		description: 'Able to land fish and items inaccessible with normal bait or lures.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 762,
		name: 'Fish Eyes',
		description: 'Able to locate fish usually hidden regardless of their normal hours of activity.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 763,
		name: 'Chum',
		description: 'The amount of time waiting for a bite is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 764,
		name: 'Inefficient Hooking',
		description: 'Hook efficiency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 765,
		name: 'Catch and Release',
		description: 'Chance of landing fish of greater size is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 766,
		name: 'Anthropomorph',
		description: 'The fluid has assumed the form of a man.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 767,
		name: 'Chiromorph',
		description: 'The fluid has assumed the form of a hand.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 768,
		name: 'Anemomorph',
		description: 'The fluid has assumed the form of a vortex.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 769,
		name: 'Burning Chains',
		description: 'Red-hot chains sear the flesh on your body, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 770,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 773,
		name: 'Enliven',
		description: 'All action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 774,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 775,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 776,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 777,
		name: 'Blessing of the Void',
		description: 'A voidal barrier is nullifying damage and granting critical damage for all attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 778,
		name: 'Earthen Accord',
		description: 'The land is under unwavering rule.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 779,
		name: 'Out of Body',
		description: 'Spirit and body are temporarily disjoined.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 780,
		name: 'Resonant',
		description: 'Strength is transcending that of mere mortals.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 781,
		name: 'Aether Sickness',
		description: 'Overexposure to concentrated aether is preventing resonation.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 782,
		name: 'Unbridled',
		description: 'The true power of Ame-no-Habakiri is unleashed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 783,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 784,
		name: 'Voidblood',
		description: 'Covered in voidsent blood. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 785,
		name: 'Nymian Plague',
		description: 'Infected with the Nymian Plague. If not cured, you will transform into a tonberry.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 786,
		name: 'Battle Litany',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 787,
		name: 'Silhouette',
		description: 'A portion of enmity generated by a ninja is being directed to you.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 788,
		name: 'Shadewalker',
		description: 'A portion of enmity generated is being directed to a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 789,
		name: 'Smoke Screen',
		description: 'Enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 790,
		name: 'Duality',
		description: 'Next weaponskill will be executed multiple times.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 791,
		name: 'Dissipation',
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 792,
		name: 'Emergency Tactics',
		description: 'The next Galvanize and Catalyze statuses are transformed into HP recovery equaling the amount of damage reduction intended for their barriers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 793,
		name: 'First Chakra',
		description: 'The first chakra is open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 794,
		name: 'Second Chakra',
		description: 'The first and second chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 795,
		name: 'Third Chakra',
		description: 'The first, second, and third chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 796,
		name: 'Fourth Chakra',
		description: 'The first, second, third, and fourth chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 797,
		name: 'Fifth Chakra',
		description: 'The first, second, third, fourth, and fifth chakra are open.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 798,
		name: 'Aero III',
		description: 'Swift air currents are tearing at the flesh causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 799,
		name: 'Fey Wind',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 800,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 801,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 802,
		name: 'Sharper Fang and Claw',
		description: 'Able to execute Fang and Claw.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 803,
		name: 'Enhanced Wheeling Thrust',
		description: 'Able to execute Wheeling Thrust.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 804,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 805,
		name: 'Collector\'s Glove',
		description: 'Able to discern the location of collectables.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 806,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 807,
		name: 'Aethertrail Attunement',
		description: 'Aether within the body is attuned to the aethertrails left by the dreadwyrm Bahamut.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 808,
		name: 'Dreadwyrm Trance',
		description: 'Drawing on the power of Bahamut, increasing magic damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 809,
		name: 'Slime',
		description: 'Viscous discharge is hampering movement and inflicting damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 810,
		name: 'Living Dead',
		description: 'Unable to be KO\'d by most attacks. Status changed to Walking Dead in most cases when HP is reduced to 0.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 811,
		name: 'Walking Dead',
		description: 'Most attacks will not reduce HP below 1. The inability to restore 100% of HP before timer runs out will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 812,
		name: 'Magic Vulnerability Down',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 813,
		name: 'Dark Dance',
		description: 'Parry and evasion rates are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 814,
		name: 'Enhanced Unleash',
		description: 'Next Unleash will not require any MP to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 815,
		name: 'Enhanced Benefic II',
		description: 'Next Benefic II will restore critical HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 816,
		name: 'Enhanced Royal Road',
		description: 'Potency of the card played is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 817,
		name: 'Expanded Royal Road',
		description: 'Adds area of effect to next card played.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 818,
		name: 'Extended Royal Road',
		description: 'Duration of the card played is extended.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 819,
		name: 'Slashing Resistance Down',
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 820,
		name: 'Piercing Resistance Down',
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 821,
		name: 'Blunt Resistance Down',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 822,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 823,
		name: 'Seduced',
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 825,
		name: 'The Twelve\'s Bounty',
		description: 'Elemental shard\u0003�\u0001\u0003 increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 826,
		name: 'Card Drawn',
		description: 'An arcanum is drawn from the deck.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 827,
		name: 'Royal Road',
		description: 'Effect of the next card drawn will be altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 828,
		name: 'Card Held',
		description: 'An arcanum is being held in the spread.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 829,
		name: 'The Balance',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 830,
		name: 'The Bole',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 831,
		name: 'The Arrow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 832,
		name: 'The Spear',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 833,
		name: 'The Ewer',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 834,
		name: 'The Spire',
		description: 'Restoring TP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 835,
		name: 'Aspected Benefic',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 836,
		name: 'Aspected Helios',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 837,
		name: 'Nocturnal Field',
		description: 'An astromantic field is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 838,
		name: 'Combust',
		description: 'Proximity of a theoretical sun is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 839,
		name: 'Diurnal Sect',
		description: 'A Regen effect is added to certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 840,
		name: 'Nocturnal Sect',
		description: 'A damage-nullifying barrier effect is added to certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 841,
		name: 'Lightspeed',
		description: 'Spell casting time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 842,
		name: 'Luminiferous Aether',
		description: 'Restoring MP over time while enmity generation is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 843,
		name: 'Combust II',
		description: 'Proximity of a theoretical sun is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 844,
		name: 'Disabled',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 845,
		name: 'Synastry',
		description: 'An aetheric bond is created with a party member. Each time a single-target healing spell is cast, that member will recover partial HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 846,
		name: 'Synastry',
		description: 'An aetheric bond is created with a party astrologian. Each time a single-target healing spell is cast by the astrologian, you will recover partial HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 847,
		name: 'Collective Unconscious',
		description: 'An area of mind attunement is healing party members.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 848,
		name: 'Collective Unconscious',
		description: 'An area of mind attunement is created, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 849,
		name: 'Collective Unconscious',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 850,
		name: 'Angler\'s Fortune',
		description: 'Chance of landing a large-sized catch while fishing is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 851,
		name: 'Reassembled',
		description: 'Next weaponskill will result in a critical direct hit.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 852,
		name: 'Promotion',
		description: 'Autoturret auto-attack mode is disabled.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 853,
		name: 'Rapid Fire',
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 854,
		name: 'Lead Shot',
		description: 'Poisonous lead slowly spreads through the bloodstream, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 855,
		name: 'Hot Shot',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 856,
		name: 'Enhanced Slug Shot',
		description: 'Potency of next Slug Shot is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 857,
		name: 'Cleaner Shot',
		description: 'Potency of next Clean Shot is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 858,
		name: 'Gauss Barrel',
		description: 'A gauss barrel is attached to the firearm, increasing attack power but adding cast times to machinist weaponskills.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 859,
		name: 'Rent Mind',
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 860,
		name: 'Dismantled',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 861,
		name: 'Wildfire',
		description: 'Damage is being accumulated with each weaponskill landed by the machinist who applied the effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 862,
		name: 'Ammunition Loaded',
		description: 'Firearm is loaded with special ammunition.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 863,
		name: 'Land Waker',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 864,
		name: 'Dark Force',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 865,
		name: 'The Wanderer\'s Minuet',
		description: 'Damage dealt is increased while cast time is added to all archer and bard weaponskills.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 866,
		name: 'The Warden\'s Paean',
		description: 'Impervious to the next enfeeblement.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 867,
		name: 'Sharpcast',
		description: 'Next Scathe, Fire, or Thunder spell cast will trigger enhanced status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 868,
		name: 'Enochian',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 869,
		name: 'Carnal Chill',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 870,
		name: 'Push Back',
		description: 'Countering any physical attacks and reflecting next knockback effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 871,
		name: 'Name of the Elements',
		description: 'Efficiency of Brand of the Elements is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 877,
		name: 'Nameless',
		description: 'Unable to recite the Name of the Elements.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 878,
		name: 'Maker\'s Mark',
		description: 'Flawless Synthesis CP cost and durability loss is reduced to zero.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 879,
		name: 'Crafter\'s Soul',
		description: 'Chances of material condition becoming good are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 880,
		name: 'Whistle',
		description: 'Synthesis-related effects granted based on stack size.',
		category: 1,
		isPermanent: false,
		maxStacks: 11,
		partyListPriority: 0
	},
	{
		id: 893,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 894,
		name: 'Wind Resistance Down',
		description: 'Resistance to wind damage is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 50
	},
	{
		id: 895,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 896,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 897,
		name: 'Regen',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 898,
		name: 'Lightning Resistance Down',
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 50
	},
	{
		id: 899,
		name: 'Physical Vulnerability Down',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 900,
		name: 'Temporal Displacement',
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 901,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 902,
		name: 'Jackpot',
		description: 'MGP earned at Gold Saucer attractions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 903,
		name: 'Collectable Synthesis',
		description: 'Creating collectables.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 904,
		name: 'Prey',
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 905,
		name: 'Thin Ice',
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 906,
		name: 'Darkness',
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 907,
		name: 'Arcanum Blessing',
		description: 'HP restored via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 908,
		name: 'Aethertrail Attunement',
		description: 'Aether within the body is near completely attuned to the aethertrails left by the dreadwyrm Bahamut. When attunement reaches 6, you will enter the Dreadwyrm Trance.',
		category: 1,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 909,
		name: 'Refresh',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 910,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 911,
		name: 'Thin Ice',
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 912,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 913,
		name: 'Balance Drawn',
		description: 'The Balance card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 914,
		name: 'Bole Drawn',
		description: 'The Bole card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 915,
		name: 'Arrow Drawn',
		description: 'The Arrow card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 916,
		name: 'Spear Drawn',
		description: 'The Spear card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 917,
		name: 'Ewer Drawn',
		description: 'The Ewer card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 918,
		name: 'Spire Drawn',
		description: 'The Spire card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 919,
		name: 'Heightened Visibility',
		description: 'Able to see and attack concealed targets.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 920,
		name: 'Balance Held',
		description: 'The Balance card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 921,
		name: 'Bole Held',
		description: 'The Bole card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 922,
		name: 'Arrow Held',
		description: 'The Arrow card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 923,
		name: 'Spear Held',
		description: 'The Spear card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 924,
		name: 'Ewer Held',
		description: 'The Ewer card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 925,
		name: 'Spire Held',
		description: 'The Spire card is drawn and held in your spread.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 926,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 927,
		name: 'Nectar',
		description: 'Your entire body is covered in sweet-smelling nectar.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 928,
		name: 'Black Menace',
		description: 'The beast is overtaken with madness.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 929,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 930,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 931,
		name: 'Blunt Resistance Down',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 932,
		name: 'Quarantine',
		description: 'You are separated from your allies.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 933,
		name: 'Healing Potency Down',
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 934,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 937,
		name: 'Unwilling Host',
		description: 'A parasite has entered the body and taken control of all motor skills. Parasite is passed via direct contact with other players.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 938,
		name: 'Throttle',
		description: 'Windpipe is crushed. KO is imminent.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 939,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 940,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 941,
		name: 'Ranged Resistance',
		description: 'Invulnerable to ranged attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 942,
		name: 'Magic Resistance',
		description: 'Invulnerable to magic attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 943,
		name: 'Light of Ascalon',
		description: 'Strengthened by the power of the dragon\'s eye imbued within the holy blade.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 944,
		name: 'Sword of the Heavens',
		description: 'Damage dealt by self and nearby allies is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 945,
		name: 'Shield of the Heavens',
		description: 'Damage taken by self and all nearby allies is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 946,
		name: 'Legs of the Spider',
		description: 'Physical form is changed to that of a spider.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 947,
		name: 'Wings of the Raptor',
		description: 'Physical form is changed to that of a bird of prey.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 948,
		name: 'Shocking Counter',
		description: 'Countering all attacks with lightning damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 949,
		name: 'Burning Counter',
		description: 'Countering all attacks with fire damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 950,
		name: 'Freezing Counter',
		description: 'Countering all attacks with ice damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 951,
		name: 'Cutting Counter',
		description: 'Countering all attacks with wind damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 952,
		name: 'Burying Counter',
		description: 'Countering all attacks with earth damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 953,
		name: 'Drowning Counter',
		description: 'Countering all attacks with water damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 954,
		name: 'Unrelenting Counter',
		description: 'Countering all attacks with unaspected damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 955,
		name: 'Healing Potency Up',
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 956,
		name: 'Wheel of Fortune',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 957,
		name: 'Digestive Enzymes',
		description: 'Corrosive enzymes cover your body, increasing damage sustained by Devoured status.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 958,
		name: 'Prey',
		description: 'Marked as prey. Any enemy you wander near will become marked in your stead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 959,
		name: 'Strings of the Marionette',
		description: 'Physical form is changed to that of a doll.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 960,
		name: 'Pyretic',
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 961,
		name: 'Seized',
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 962,
		name: 'ATK Up',
		description: 'ATK is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 963,
		name: 'ATK Down',
		description: 'ATK is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 964,
		name: 'DEF Up',
		description: 'DEF is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 965,
		name: 'DEF Down',
		description: 'DEF is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 966,
		name: 'SPD Up',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 967,
		name: 'SPD Down',
		description: 'Movement speed is decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 968,
		name: 'Arcana Breaker',
		description: 'Dealing extra damage to Arcana Stones.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 969,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 970,
		name: 'Critter Resistance',
		description: 'Invulnerable to damage dealt by critter-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 971,
		name: 'Monster Resistance',
		description: 'Invulnerable to damage dealt by monster-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 972,
		name: 'Poppet Resistance',
		description: 'Invulnerable to damage dealt by poppet-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 973,
		name: 'Gadget Resistance',
		description: 'Invulnerable to damage dealt by gadget-type minions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 974,
		name: 'Critter Vulnerability',
		description: 'Suffering extra damage from critter-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 975,
		name: 'Monster Vulnerability',
		description: 'Suffering extra damage from monster-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 976,
		name: 'Poppet Vulnerability',
		description: 'Suffering extra damage from poppet-type minions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 977,
		name: 'Forced Withdrawal',
		description: 'Readying withdrawal from the playing field.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 978,
		name: 'ATK & DEF Up',
		description: 'ATK and DEF are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 979,
		name: 'Damage Over Time',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 980,
		name: 'Expanded Attack',
		description: 'Auto-attacks reach all nearby enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 981,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 982,
		name: 'Critter Resistance',
		description: 'Invulnerable to damage dealt by critter-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 983,
		name: 'Monster Resistance',
		description: 'Invulnerable to damage dealt by monster-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 984,
		name: 'Poppet Resistance',
		description: 'Invulnerable to damage dealt by poppet-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 985,
		name: 'Gadget Resistance',
		description: 'Invulnerable to damage dealt by gadget-type minions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 986,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 987,
		name: 'Trapper',
		description: 'Readying trap.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 988,
		name: 'Paralysis',
		description: 'Deadened nerves are sometimes preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 989,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 990,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 991,
		name: 'Seduced',
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 992,
		name: 'Offense Kit',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 993,
		name: 'Defense Kit',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 98
	},
	{
		id: 994,
		name: 'Marked for Culling',
		description: 'Damage taken is increased. The greater the stack, the higher the increase.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 995,
		name: 'Headache',
		description: 'Suffering mild head trauma. Damage dealt is reduced. Increased trauma results in a Concussion.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 996,
		name: 'Concussion',
		description: 'Suffering severe head trauma. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 997,
		name: 'Concussion',
		description: 'Suffering severe head trauma. Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 998,
		name: 'Bigbulge Goblixer',
		description: 'Transformed into a sasquatch and only able to execute the action Browbeat.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 999,
		name: 'Swiftkicks Goblixer',
		description: 'Transformed into a vulture and only able to execute the action Wing Cutter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1000,
		name: 'Blankface Goblixer',
		description: 'Unable to be readily detected by sight.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1001,
		name: 'Goblixer Overgulp',
		description: 'Overdosed on goblixers. Side effects will emerge if stack increases.',
		category: 2,
		isPermanent: false,
		maxStacks: 12,
		partyListPriority: 100
	},
	{
		id: 1002,
		name: 'Goblixer Grumblygut',
		description: 'Experiencing side effects from overconsumption of goblixers.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1003,
		name: 'Bigbulge Biggerbrain',
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1004,
		name: 'Anti-coagulant',
		description: 'Wounds are bleeding, causing damage over time. Overexposure to anti-coagulant will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1005,
		name: 'Force Against Might',
		description: 'Physical damage taken is significantly reduced while magic damage taken is significantly increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1006,
		name: 'Force Against Magic',
		description: 'Magic damage taken is significantly reduced while physical damage taken is significantly increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1007,
		name: 'Invisible',
		description: 'Unable to be detected by sight.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1008,
		name: 'Nohurts Goblixer',
		description: 'Removing anti-coagulant from blood while regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1009,
		name: 'Road to Toad',
		description: 'Slowly transforming into a toad. Process accelerates as stack increases.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 1010,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1011,
		name: 'Concentrated Poison',
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic and actions is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 1012,
		name: 'High Wire',
		description: 'Heightened excitement is causing actions to become erratic.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1013,
		name: 'Reverse',
		description: 'The effects of white magicks have been reversed from beneficial to corrupting.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1014,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1015,
		name: 'Seed of Life',
		description: 'Each stacked seed staves off the hands of death.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1016,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1017,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1018,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1019,
		name: 'Magic Damage Up',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1020,
		name: 'Allied Arithmeticks',
		description: 'Increasing attributes by an amount calculated using the number of nearby allies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1021,
		name: 'Low Arithmeticks',
		description: 'Vulnerable to damage while on low ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1022,
		name: 'High Arithmeticks',
		description: 'Vulnerable to damage while on high ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1023,
		name: 'Compressed Water',
		description: 'Highly compressed aetherial energy covers the body. Water-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1024,
		name: 'Compressed Lightning',
		description: 'Highly compressed aetherial energy covers the body. Lightning-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1025,
		name: 'Water Resistance Down II',
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1026,
		name: 'Lightning Resistance Down II',
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1027,
		name: 'Final Punishment',
		description: 'Sentenced to public flogging. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 199
	},
	{
		id: 1028,
		name: 'Direct Attack',
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1029,
		name: 'Final Decree Nisi A',
		description: 'Decree Nisi A is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 1030,
		name: 'Final Decree Nisi B',
		description: 'Decree Nisi B is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 1031,
		name: 'Final Judgment: Max HP',
		description: 'Sentenced to receive increased HP. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1032,
		name: 'Final Judgment: Min HP',
		description: 'Sentenced to receive reduced HP. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1033,
		name: 'Final Judgment: Penalty I',
		description: 'Sentenced to receive enfeeblement I. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1034,
		name: 'Final Judgment: Penalty II',
		description: 'Sentenced to receive enfeeblement II. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1035,
		name: 'Final Judgment: Penalty III',
		description: 'Sentenced to receive enfeeblement III. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1036,
		name: 'Final Judgment: Decree Nisi A',
		description: 'Sentenced to receive Decree Nisi A. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1037,
		name: 'Final Judgment: Decree Nisi B',
		description: 'Sentenced to receive Decree Nisi B. Refusal to serve sentence will result in additional punishment.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1038,
		name: 'Final Flight',
		description: 'Damage taken from J Storm is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 1039,
		name: 'Brilliant Conviction',
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1040,
		name: 'Brilliant Conviction',
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1041,
		name: 'Brilliant Conviction',
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1042,
		name: 'Direct Attack',
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1043,
		name: 'Direct Attack',
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1044,
		name: 'Magnetic Levitation',
		description: 'Hovering above the ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1045,
		name: 'Gradual Zombification',
		description: 'Slowly transforming into a brain-craving zombie.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 1046,
		name: 'Concentrated Poison',
		description: 'Powerful poison is slowly draining HP while HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 1047,
		name: 'Confused',
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1048,
		name: 'Direct Attack',
		description: 'Able to directly attack the target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 40
	},
	{
		id: 1049,
		name: 'Pyretic',
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1050,
		name: 'EXP Bonus',
		description: 'Receiving a mentor/new adventurer/returner party bonus.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1051,
		name: 'Prey',
		description: 'Marked as prey.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1052,
		name: 'Wind Resistance Down II',
		description: 'Wind resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1053,
		name: 'Earth Resistance Down II',
		description: 'Earth resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1054,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1055,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1056,
		name: 'Mimic',
		description: 'Repeating any ability or item used by forerunning chocobos.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1057,
		name: 'Feather Field',
		description: 'Effects inflicted by other chocobos\' fields are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1058,
		name: 'Super Sprint',
		description: 'Sprinting until all stamina is spent.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1059,
		name: 'Enervation',
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1060,
		name: 'Silence',
		description: 'A stifling magic is preventing casts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1061,
		name: 'Priority Aetheryte Pass',
		description: 'Aetheryte teleportation fees are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1062,
		name: 'Heavy Medal',
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 200
	},
	{
		id: 1063,
		name: 'Healing Potency Down',
		description: 'Healing magic potency is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1064,
		name: 'Off-balance',
		description: 'The next attack suffered will result in knockback.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1065,
		name: 'Brand of the Fallen',
		description: 'Damage taken is increased the further those branded are from each other.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1066,
		name: 'Bitter Hate',
		description: 'Suffering the mind-rending effects of Nidhogg\'s raw fury. A stack of 8 will result in extreme damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 1067,
		name: 'Dirty Venom',
		description: 'Dark poisons course through your veins, reducing damage dealt and maximum HP.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 100
	},
	{
		id: 1068,
		name: 'Assimilation',
		description: 'Eye contact with the enemy is resulting in gradual assimilation of body and mind.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 1069,
		name: 'Assimilated',
		description: 'Completely assimilated with the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1070,
		name: 'Cube',
		description: 'Damage taken is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1071,
		name: 'Pyramid',
		description: 'Evasion is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1072,
		name: 'Acceleration Bomb',
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1073,
		name: 'Digestive Fluid',
		description: 'Highly corrosive acid is reducing movement speed while causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1074,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 10
	},
	{
		id: 1075,
		name: 'Heart of Man',
		description: 'Nidhogg has taken the form of a man.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1076,
		name: 'Heart of Dragon',
		description: 'Nidhogg has taken his true form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1077,
		name: 'Lightning Chain',
		description: 'Bound by searing chains causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1078,
		name: 'Priority Seal Allowance',
		description: 'Company seals earned are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1079,
		name: 'Gold Saucer VIP Card',
		description: 'MGP earned at Gold Saucer attractions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1080,
		name: 'Squadron Battle Manual',
		description: 'EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1081,
		name: 'Squadron Survival Manual',
		description: 'EXP earned through gathering is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1082,
		name: 'Squadron Engineering Manual',
		description: 'EXP earned through crafting is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1083,
		name: 'Squadron Spiritbonding Manual',
		description: 'Spiritbonding speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1084,
		name: 'Squadron Rationing Manual',
		description: 'Food effect duration is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1085,
		name: 'Squadron Gear Maintenance Manual',
		description: 'Gear wear is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1086,
		name: 'Squadron Enlistment Manual',
		description: 'Squadron recruit enlistment chance is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1087,
		name: 'Accursed Pox',
		description: 'Humours are corrupted, causing damage over time. HP regeneration has also stopped and damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1088,
		name: 'Blind',
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1089,
		name: 'HP Penalty',
		description: 'Maximum HP is decreased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1090,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1091,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1092,
		name: 'Amnesia',
		description: 'Unable to use abilities.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1093,
		name: 'HP & MP Boost',
		description: 'Maximum HP and MP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1094,
		name: 'Item Penalty',
		description: 'Unable to use items or pomanders.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1095,
		name: 'Sprint Penalty',
		description: 'Unable to sprint.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1096,
		name: 'Knockback Penalty',
		description: 'Unable to use knockback and draw-in effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1097,
		name: 'Auto-heal Penalty',
		description: 'HP regeneration has stopped.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1098,
		name: 'Aetherial Surge',
		description: 'Releasing excess aether.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1099,
		name: 'Healing Potency Up',
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1100,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1101,
		name: 'Toad',
		description: 'Transformed into a toad.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1102,
		name: 'Chicken',
		description: 'Transformed into a chicken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1103,
		name: 'Imp',
		description: 'Transformed into an imp.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1104,
		name: 'Obfuscated',
		description: 'An obfuscation charm is hiding you from enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1105,
		name: 'Pumpkin',
		description: 'Transformed into a pumpkin.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1106,
		name: 'Obfuscated',
		description: 'Hidden from enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1107,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1108,
		name: 'Hidden',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1109,
		name: 'Impervious',
		description: 'Impervious to all but select attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1110,
		name: 'Clawbound',
		description: 'Your body is bound to Nidhogg\'s claw. Any damage taken also results in damage to the claw.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1111,
		name: 'Fangbound',
		description: 'Your body is bound to Nidhogg\'s fang. Any damage taken heals the fang.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1112,
		name: 'Movement Speed Up',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1113,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1114,
		name: 'Disease',
		description: 'Movement speed and HP recovery via healing magic are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1115,
		name: 'Eternal Doom',
		description: 'Zombification when counter reaches zero or upon KO. KO does not remove zombification.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1116,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1117,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1118,
		name: 'Passenger',
		description: 'Riding a moving object.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1119,
		name: 'Temporal Displacement',
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1120,
		name: 'Defamation',
		description: 'You are convicted with defamation.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1121,
		name: 'Aggravated Assault',
		description: 'You are convicted with aggravated assault.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1122,
		name: 'Shared Sentence',
		description: 'You are convicted for a crime committed by you and your peers.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1123,
		name: 'House Arrest',
		description: 'You are ordered to remain bound to another party.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1124,
		name: 'Restraining Order',
		description: 'You are ordered to remain separated from another party.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1125,
		name: 'Directional Invincibility',
		description: 'Invulnerable to all damage taken from a certain direction.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1126,
		name: 'Main Hull Reassembly',
		description: 'Repairing main hull.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1127,
		name: 'Right Arm Reassembly',
		description: 'Repairing right arm.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1128,
		name: 'Left Arm Reassembly',
		description: 'Repairing left arm.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 199
	},
	{
		id: 1129,
		name: 'Main Hull Operational',
		description: 'Main hull repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1130,
		name: 'Right Arm Operational',
		description: 'Right arm repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1131,
		name: 'Left Arm Operational',
		description: 'Left arm repaired and operational.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1132,
		name: 'Extreme Caution',
		description: 'A penalty will be assessed for any action, auto-attack, or movement taken after status ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1133,
		name: 'Pyretic',
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1134,
		name: 'Imp',
		description: 'Transformed into an imp and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1135,
		name: 'Sunseal',
		description: 'Marked with the sunseal.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1136,
		name: 'Moonseal',
		description: 'Marked with the moonseal.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1137,
		name: 'Fire Resistance Down II',
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1138,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1139,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1140,
		name: 'Raise',
		description: 'Teetering on the brink of consciousness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1141,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1142,
		name: 'Aetherial Surge',
		description: 'Releasing excess aether.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1143,
		name: 'Infinite Fire',
		description: 'Marked with fire.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1144,
		name: 'Infinite Ice',
		description: 'Marked with ice.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1145,
		name: 'Keen Edge',
		description: 'Sustaining damage over time in exchange for dealing increased damage to targets.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1146,
		name: 'Riled',
		description: 'Damage dealt is increased and restoring HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1147,
		name: 'Shadow Links',
		description: 'Sustaining damage over time. Movement speed is also decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1148,
		name: 'Shadow Limb',
		description: 'A shadowy appendage has sprouted from Scathach\'s body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1149,
		name: 'Wolf\'s Heart Kit',
		description: 'Movement speed is increased while restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1150,
		name: 'Deep Freeze',
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1151,
		name: 'Fae Cloak',
		description: 'An enchantment is preventing detection by fae creatures.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1152,
		name: 'Darksight',
		description: 'Able to see with little illumination.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1153,
		name: 'Fetters',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1154,
		name: 'Beastking\'s Boon',
		description: 'Receiving the boon of the Beastking, Buer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1155,
		name: 'Aetherial Enhancement',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1156,
		name: 'Magic Damage Up',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 1157,
		name: 'Water Resistance Down II',
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1158,
		name: 'Nose for Battle',
		description: 'Detecting a skirmish nearby.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1159,
		name: 'Infinite Anguish',
		description: 'Sustaining damage over time and damage taken from attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1160,
		name: 'Enfeebled',
		description: 'Enfeebling elixir has corrupted the humours, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1161,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1162,
		name: 'Infinite Anguish',
		description: 'Sustaining damage over time and damage taken from attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1163,
		name: 'Stroke of Genius',
		description: 'Maximum CP is increased by 15.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1164,
		name: 'Manipulation',
		description: 'Receiving 5 points of durability after each step.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1165,
		name: 'Initial Preparations',
		description: 'CP consumption may be reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1166,
		name: 'Fathom',
		description: 'Able to locate teeming waters suitable for spearfishing.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1167,
		name: 'Shark Eye',
		description: 'Surveying the waters for the nearest teeming waters.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1168,
		name: 'Shark Eye II',
		description: 'Surveying the waters for the highest-level teeming waters.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1169,
		name: 'Veteran Trade',
		description: 'Fish of a certain type are now aware of your presence and have left the area.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1170,
		name: 'Bountiful Catch',
		description: 'Number of items obtained on your next gigging attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1171,
		name: 'Nature\'s Bounty',
		description: 'Chance of landing large-sized fish is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1172,
		name: 'Salvage',
		description: 'Able to discover treasure maps.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1173,
		name: 'Truth of Oceans',
		description: 'Able to locate swimming shadows.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1174,
		name: 'Intervention',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1175,
		name: 'Passage of Arms',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1176,
		name: 'Arms Up',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1177,
		name: 'Inner Release',
		description: 'Beast Gauge consumption is reduced to 0. All weaponskill attacks are both critical and direct hits. All Stun, Sleep, Bind, Heavy, and most knockback and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1178,
		name: 'Blackest Night',
		description: 'An all-encompassing darkness is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1179,
		name: 'Riddle of Earth',
		description: 'Contemplating the riddle of earth. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1180,
		name: 'Earth\'s Reply',
		description: 'Damage taken is reduced and all action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1181,
		name: 'Riddle of Fire',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1182,
		name: 'Meditative Brotherhood',
		description: 'Grants chance to open a chakra to the monk who applied the effect when a weaponskill is used or a spell is cast by any affected party member or self.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1183,
		name: 'Right Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1184,
		name: 'Left Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1185,
		name: 'Brotherhood',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1186,
		name: 'Ten Chi Jin',
		description: 'Able to execute ninjutsu in succession.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1187,
		name: 'Troubadour\'s Ballad',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1188,
		name: 'Critical Up',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1189,
		name: 'Troubadour\'s Paeon',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1190,
		name: 'Troubadour\'s Minuet',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1191,
		name: 'Rampart',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1192,
		name: 'Convalescence',
		description: 'HP recovery via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1193,
		name: 'Reprisal',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1194,
		name: 'Anticipation',
		description: 'Chance to parry is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1195,
		name: 'Feint',
		description: 'Physical and magic damage are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1196,
		name: 'Palisade',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1197,
		name: 'Tactician',
		description: 'Gradually regenerating TP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1198,
		name: 'Refresh',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1199,
		name: 'Peloton',
		description: 'Movement speed is increased. Effect ends upon entering battle.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1200,
		name: 'Caustic Bite',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1201,
		name: 'Stormbite',
		description: 'Wounds are exposed to the elements, causing wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1202,
		name: 'Nature\'s Minne',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1203,
		name: 'Addle',
		description: 'Physical and magic damage are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1204,
		name: 'Lucid Dreaming',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1205,
		name: 'Flamethrower',
		description: 'Emitting a gout of searing flames in a cone before you, dealing damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1206,
		name: 'Wheel of Fortune',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1207,
		name: 'Largesse',
		description: 'HP restoration via healing magic is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1208,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1209,
		name: 'Arm\'s Length',
		description: 'Slowing enemies when attacked. Immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1210,
		name: 'Thunder IV',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1211,
		name: 'Triplecast',
		description: 'Spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1212,
		name: 'Further Ruin',
		description: 'Able to cast Ruin IV.',
		category: 1,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 1213,
		name: 'Devotion',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1214,
		name: 'Bio III',
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1215,
		name: 'Miasma III',
		description: 'Lungs are failing, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1216,
		name: 'Load-bearing',
		description: 'Carrying a weighty burden and growing wearier with each passing second.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1217,
		name: 'Thin Air',
		description: 'Next spell cast consumes no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1218,
		name: 'Divine Benison',
		description: 'A holy blessing from the gods is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1219,
		name: 'Confession',
		description: 'Sins are confessed. Ready for Plenary Indulgence.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1220,
		name: 'Excogitation',
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1221,
		name: 'Chain Stratagem',
		description: 'Rate at which critical hits are taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1222,
		name: 'Fey Union',
		description: 'Allowing regeneration of HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1223,
		name: 'Fey Union',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1224,
		name: 'Earthly Dominance',
		description: 'An earthly star is in your control.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1225,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1226,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1227,
		name: 'Yukikaze',
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1228,
		name: 'Higanbana',
		description: 'Open wounds are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1229,
		name: 'Kaiten',
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1230,
		name: 'Recuperation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1231,
		name: 'Meditate',
		description: 'Storing Kenki.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1232,
		name: 'Third Eye',
		description: 'Next damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1233,
		name: 'Meikyo Shisui',
		description: 'Combo prerequisites are met.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1234,
		name: 'Verfire Ready',
		description: 'Able to cast Verfire.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1235,
		name: 'Verstone Ready',
		description: 'Able to cast Verstone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1236,
		name: 'Enhanced Enpi',
		description: 'Next Enpi will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1237,
		name: 'Enhanced Scatter',
		description: 'Next Scatter will store increased black and white mana.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1238,
		name: 'Acceleration',
		description: 'Next Verthunder III, Veraero III�DVerthunder, Veraero\u0003�DVerthunder, Veraero\u0003, or Impact� Scatter\u0003� Scatter\u0003 can be cast immediately.Potency of Impact� Scatter\u0003� Scatter\u0003 is increased, and Verthunder III and Veraero III�GVerthunder and Veraero\u0003�GVerthunder and Veraero\u0003 trigger Verfire Ready or Verstone Ready respectively.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1239,
		name: 'Embolden',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1240,
		name: 'Chiten',
		description: 'Damage taken is reduced while countering any physical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1241,
		name: 'Monomachy',
		description: 'Damage dealt to target is increased while damage taken from target is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1242,
		name: 'Monomachy',
		description: 'Damage dealt to target red mage is decreased while damage taken from target red mage is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1243,
		name: 'Dive Ready',
		description: 'Able to execute Mirage Dive.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1244,
		name: 'Riddle of Wind',
		description: 'Able to execute Riddle of Wind.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1247,
		name: 'Diurnal Balance',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1248,
		name: 'Giant Dominance',
		description: 'An earthly star is in your control.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1249,
		name: 'Dualcast',
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1250,
		name: 'True North',
		description: 'All action direction requirements are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1251,
		name: 'Turret Reset',
		description: 'Unable to deploy turrets.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1252,
		name: 'Eyes Open',
		description: 'Succeeded at opening the Third Eye.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1253,
		name: 'Prey',
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1254,
		name: 'Deep Freeze',
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1255,
		name: 'Fire Resistance Down II',
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1256,
		name: 'Wounded',
		description: 'Severe wounds are reducing damage dealt while increasing damage taken by certain attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1257,
		name: 'Forced March',
		description: 'Advancing in the ordered direction.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1258,
		name: 'Fetters',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1259,
		name: 'Old',
		description: 'You have aged considerably. Movement speed is severely reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1260,
		name: 'Lightning Resistance Down II',
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1262,
		name: 'Gathering Fortune Up II (Limited)',
		description: 'Chance of obtaining an HQ item on your next gathering attempt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1263,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1264,
		name: 'Brilliant Conviction',
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1265,
		name: 'Brilliant Conviction',
		description: 'Breaking limits as only a true Warrior of Light could.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1266,
		name: 'Transparent II',
		description: 'Body is allowing light to pass, rendering you invisible to the enemy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 2
	},
	{
		id: 1267,
		name: 'Affixed',
		description: 'Affixed to another object.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1268,
		name: 'In Event',
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1269,
		name: 'Extreme Caution',
		description: 'A penalty will be assessed for any action, auto-attack, or movement taken after status ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1270,
		name: 'Churning',
		description: 'Churning waters are upon you. Severe damage will be suffered if moving when the effect wears off.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1271,
		name: 'Clashing',
		description: 'Pushing back at another weapon with your own.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1272,
		name: 'Slashing Resistance Down II',
		description: 'Slashing resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1273,
		name: 'Sinking',
		description: 'Your body is slowly sinking. Burial will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1274,
		name: 'Bardam\'s Price',
		description: 'You are being punished for failing Bardam\'s trial. A stack of 2 will render you unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1275,
		name: 'Fire Convergence',
		description: 'Reflecting back all ice- and lightning-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1276,
		name: 'Ice Convergence',
		description: 'Reflecting back all fire- and lightning-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1277,
		name: 'Lightning Convergence',
		description: 'Reflecting back all ice- and fire-aspected attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1278,
		name: 'Aspected to Fire',
		description: 'Harboring a dangerous amount of fire-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1279,
		name: 'Aspected to Ice',
		description: 'Harboring a dangerous amount of ice-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1280,
		name: 'Aspected to Lightning',
		description: 'Harboring a dangerous amount of lightning-aspected aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1281,
		name: 'Empowered Rahu',
		description: 'Rahu\'s strength is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1282,
		name: 'Empowered Ketu',
		description: 'Ketu\'s strength is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1283,
		name: 'Confused',
		description: 'Attacking allies instead of the enemy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1284,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1285,
		name: 'Gathering Fortune Up II',
		description: 'Chance of obtaining an HQ item while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1286,
		name: 'Gathering Yield Up II',
		description: 'Number of items obtained while gathering is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1287,
		name: 'Seized',
		description: 'Held in a vicelike grip and cannot act. Taking damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1288,
		name: 'Twist of Fate',
		description: 'Experience earned on FATEs is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1289,
		name: 'Twist of Fate',
		description: 'Experience earned on FATEs is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1290,
		name: 'Vril',
		description: 'Damage taken by certain attacks is reduced or converted in to HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1291,
		name: 'Ruination',
		description: 'Damage taken from Outburst and Ruin spells cast by arcanists and summoners is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1292,
		name: 'Piggy',
		description: 'Transformed into a pig and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1293,
		name: 'Forward March',
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1294,
		name: 'About Face',
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1295,
		name: 'Left Face',
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1296,
		name: 'Right Face',
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1297,
		name: 'Embolden',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1298,
		name: 'Fugetsu',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1299,
		name: 'Fuka',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1300,
		name: 'Cover',
		description: 'Protecting a party member. Damage taken is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1301,
		name: 'Covered',
		description: 'Under the protection of a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1302,
		name: 'Hallowed Ground',
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1303,
		name: 'Inner Release',
		description: 'Beast Gauge consumption is reduced to 0. All Stun, Sleep, Bind, Heavy, Silence, knockback, and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1304,
		name: 'Holmgang',
		description: 'Unable to move until effect fades. Most attacks cannot reduce your HP to less than 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1305,
		name: 'Holmgang',
		description: 'Unable to move until effect fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1306,
		name: 'Sole Survivor',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1307,
		name: 'Ice Spikes',
		description: 'Upon taking physical damage, sharpened spikes deal ice damage to the attacking opponent, potentially slowing them.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1308,
		name: 'Blackest Night',
		description: 'An all-encompassing darkness is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1309,
		name: 'Demolish',
		description: 'Sustaining damage over time, as well as increased damage from target who executed Demolish.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1310,
		name: 'Riddle of Earth',
		description: 'Contemplating the riddle of earth. Taking a certain amount of damage triggers Earth\'s Reply.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1311,
		name: 'Earth\'s Reply',
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1312,
		name: 'Chaos Thrust',
		description: 'Sustaining damage over time, as well as increased damage from target who executed Chaos Thrust.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1313,
		name: 'Shadow Fang',
		description: 'Sustaining damage over time, as well as increased damage from target who executed Shadow Fang.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1314,
		name: 'Assassinated',
		description: 'Sustaining damage over time, as well as increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1315,
		name: 'Kakuremi',
		description: 'Slowly blending in with the environment. If not attacked, you will eventually become hidden.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1316,
		name: 'Hidden',
		description: 'Unable to be detected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1317,
		name: 'Three Mudra',
		description: 'Able to execute any ninjutsu action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1318,
		name: 'Yukikaze',
		description: 'Sustaining increased damage from target who executed Yukikaze.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1319,
		name: 'Higanbana',
		description: 'Open wounds are bleeding, causing damage over time. HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1320,
		name: 'Meikyo Shisui',
		description: 'Final combo prerequisite is met.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1321,
		name: 'Caustic Bite',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1322,
		name: 'Stormbite',
		description: 'Wounds are exposed to the elements, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1323,
		name: 'Wildfire',
		description: 'A portion of damage dealt is being stored.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1324,
		name: 'Thunder',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1325,
		name: 'Swiftcast',
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1326,
		name: 'Bio III',
		description: 'Contagions are spreading, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1327,
		name: 'Miasma III',
		description: 'Lungs are failing, causing damage over time and reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1328,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1329,
		name: 'Withering',
		description: 'HP recovery via healing actions is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1330,
		name: 'Regen',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1331,
		name: 'Galvanize',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1332,
		name: 'Chanchala',
		description: 'Lakshmi\'s divine nature vacillates unsteadily.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1333,
		name: 'Eye for an Eye',
		description: 'Chance that next hit suffered will lower the attacker\'s damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1334,
		name: 'Eye for an Eye',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1335,
		name: 'Abridged',
		description: 'Next spell will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1336,
		name: 'Synastry',
		description: 'An aetheric bond is created with a party member. Each time a single-target healing spell is cast, that member will recover partial HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1337,
		name: 'Synastry',
		description: 'An aetheric bond is created with a party astrologian. Each time a single-target healing spell is cast by the astrologian, you will recover partial HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1338,
		name: 'The Balance',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1339,
		name: 'The Bole',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1340,
		name: 'The Ewer',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1341,
		name: 'The Spire',
		description: 'Restoring TP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1342,
		name: 'Bolt',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1343,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1344,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1345,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1346,
		name: 'Slow',
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1347,
		name: 'Silence',
		description: 'A stifling magic is preventing the use of any actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1348,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1349,
		name: 'Stun Resistance',
		description: 'Immune to stun effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1350,
		name: 'Heavy Resistance',
		description: 'Immune to heavy effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1351,
		name: 'Bind Resistance',
		description: 'Immune to bind effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1352,
		name: 'Slow Resistance',
		description: 'Immune to slow effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1353,
		name: 'Silence Resistance',
		description: 'Immune to silence effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1354,
		name: 'Sleep Resistance',
		description: 'Immune to sleep effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1355,
		name: 'Knockback Penalty',
		description: 'Immune to knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1356,
		name: 'Imp',
		description: 'Transformed into an imp and only able to execute the action Imp Punch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1357,
		name: 'Gravity Flip',
		description: 'Gravity is inverted, slowly lifting you further from the ground.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1358,
		name: 'Elevated',
		description: 'Bound to current elevation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1359,
		name: 'Gradual Petrification',
		description: 'Flesh once soft is slowly turning to stone.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 1360,
		name: 'Unstable Gravity',
		description: 'The gravity about you is highly unstable and will soon rupture, dealing unaspected damage to all allies within range.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1361,
		name: 'Magitek Levitation',
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1363,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1364,
		name: 'Riddle of Wind',
		description: 'Able to execute Riddle of Wind.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1365,
		name: 'Thundercloud',
		description: 'Able to cast Thunder III or Thunder IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1366,
		name: 'Levitation',
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1367,
		name: 'Impactful',
		description: 'Able to execute Impact.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1368,
		name: 'Requiescat',
		description: 'Potency of Holy Spirit and Holy Circle is increased and spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1369,
		name: 'Requiescat',
		description: 'Spells require no time to cast and consume no MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1370,
		name: 'Rage of Halone',
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1371,
		name: 'Butcher\'s Block',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1372,
		name: 'Power Slash',
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1373,
		name: 'Immaterialized',
		description: 'Not yet fully materialized to a complete form.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1374,
		name: 'Target Right',
		description: 'Focusing attack on target to the right.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1375,
		name: 'Target Left',
		description: 'Focusing attack on target to the left.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1376,
		name: 'Kyoshin',
		description: 'Body is enlarged, increasing damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1377,
		name: 'Life Drain',
		description: 'Life force is being drained, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1378,
		name: 'Dualcast',
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1379,
		name: 'Almagest',
		description: 'Celestial magicks are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1380,
		name: 'White Wound',
		description: 'Taking extra damage from White Antilight.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1381,
		name: 'Black Wound',
		description: 'Taking extra damage from Black Antilight.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1382,
		name: 'Beyond Death',
		description: 'Only beyond death\'s boundaries can life be achieved.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1383,
		name: 'HP Penalty',
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1384,
		name: 'Acceleration Bomb',
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1385,
		name: 'Off-balance',
		description: 'Attacks suffered will result in knockback.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1386,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1387,
		name: 'Altered States',
		description: 'Action area of effect has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1388,
		name: 'Ashen',
		description: 'Covered in stygian ash.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1389,
		name: 'Seduced',
		description: 'Enthralled by an irresistible force and unable to act of your own volition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1390,
		name: 'Levitation',
		description: 'Floating several ilms off the ground, defying the universal laws of gravity.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1391,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1392,
		name: 'Shining Moonstone',
		description: 'Empowered by the light of the moonstone, increasing damage dealt while reducing damage taken.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1393,
		name: 'Dualcast',
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1394,
		name: 'Limp',
		description: 'Your mount has been lamed by an attack. Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1395,
		name: 'Shield Oath',
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1396,
		name: 'Defiance',
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1397,
		name: 'Grit',
		description: 'Damage dealt and taken are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1398,
		name: 'Inner Beast',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1399,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1400,
		name: 'Terror',
		description: 'Frozen with fear and unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1401,
		name: 'Enervation',
		description: 'Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1402,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1403,
		name: 'Lightspeed',
		description: 'Spell casting time and MP cost are reduced by 100% and 50% respectively.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1404,
		name: 'Divine Benison',
		description: 'A holy blessing from the gods is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1405,
		name: 'Disabled',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1406,
		name: 'Chain Stratagem',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1407,
		name: 'Barrage',
		description: 'Striking multiple times per weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1408,
		name: 'Cometeor',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1409,
		name: 'Terminal Velocity',
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1410,
		name: 'Chanchala',
		description: 'Lakshmi\'s divine nature vacillates unsteadily.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1411,
		name: 'The Road to 80',
		description: 'Experience earned while below level 80 is dramatically increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1412,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1413,
		name: 'Riddle of Fire',
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1414,
		name: 'Battle Litany',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1415,
		name: 'Protect',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1416,
		name: 'Grounded',
		description: 'Bound to current elevation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1417,
		name: 'Stone Curse',
		description: 'Turned into stone. Taking damage results in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1418,
		name: 'Abandonment',
		description: 'Will suffer Fear when straying too far from party members.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1419,
		name: 'The Worm\'s Curse',
		description: 'HP regeneration is nullified and damage is taken slowly over time. Attacking, however, will periodically restore HP.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1420,
		name: 'Mounted',
		description: 'Mounted in warmachina. HP recovery and beneficial effects conferred by actions are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1421,
		name: 'Craven',
		description: 'Courage is fully tapped, increasing damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1422,
		name: 'Temporary Misdirection',
		description: 'Overcome with temporary insanity. Can only move in the direction indicated.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1423,
		name: 'Transfiguration',
		description: 'Spiritual and corporeal forms are drastically altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1424,
		name: 'Divine Commandment: Flee',
		description: 'Affected by the word of a god.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1425,
		name: 'Divine Commandment: Turn',
		description: 'Affected by the word of a god.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1426,
		name: 'Unnerved',
		description: 'Courage is tapped, increasing damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 250
	},
	{
		id: 1427,
		name: 'Drenched',
		description: 'Body is covered in water and susceptible to freezing.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1428,
		name: '削除予定',
		description: '削除予定',
		category: 0,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1429,
		name: 'Breathless',
		description: 'Toxins in the water are causing difficulty breathing. A stack of 10 will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 250
	},
	{
		id: 1430,
		name: 'Legendary Resolve',
		description: 'Convinced of your mettle, Shinryu has unleashed its true power.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1431,
		name: 'Tower Defense',
		description: 'The tower\'s field invigorates those who enter its sphere of influence, halving damage taken and regenerating HP over time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1432,
		name: 'Tower Defense',
		description: 'The tower\'s protective field is active.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1433,
		name: 'Transfiguration',
		description: 'Corporeal form is altered.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1434,
		name: 'Mana Hypersensitivity',
		description: 'Additional damage taken from Hatch.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1435,
		name: 'Piercing Resistance Down II',
		description: 'Piercing resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1436,
		name: 'Phoenix\'s Blessing',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1437,
		name: 'Lohs Daih',
		description: 'Bahamut Prime\'s insanity has peaked. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1438,
		name: 'Resonant',
		description: 'Strength is transcending that of mere mortals.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1439,
		name: 'Independent Tactics',
		description: 'Maximum HP and damage dealt are increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1440,
		name: 'Offensive Tactics',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1441,
		name: 'Defensive Tactics',
		description: 'Maximum HP is increased while damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1442,
		name: 'Balanced Tactics',
		description: 'Maximum HP and damage dealt are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1443,
		name: 'Clockwork',
		description: 'When the gears run down, functionality will cease. HP restoration is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1444,
		name: 'Magitek Field',
		description: 'Impervious to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1445,
		name: 'The Deceiver',
		description: 'Wearing the face of the god of lies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1446,
		name: 'The Upholder',
		description: 'Wearing the face of the god of truth.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1447,
		name: 'Elemental EXP Up',
		description: 'Elemental EXP earned through battle while at an elemental level lower than 50 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1448,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1449,
		name: 'Troubadour\'s Minuet',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1450,
		name: 'Troubadour\'s Paeon',
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1451,
		name: 'Lord of Crowns',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1452,
		name: 'Lady of Crowns',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1453,
		name: 'Right Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1454,
		name: 'Left Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1455,
		name: 'Flamethrower',
		description: 'Emitting a gout of searing flames in a cone, dealing damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1456,
		name: 'Thrill of War',
		description: 'Refreshing HP of party members within range while draining own MP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1457,
		name: 'Shake It Off',
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 1458,
		name: 'Flamethrower Flames',
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1459,
		name: 'Transfiguration',
		description: 'Spiritual and corporeal forms are drastically altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1460,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1461,
		name: 'Elemental Blessing: EXP',
		description: 'Receiving the blessing of Eureka\'s elementals. Elemental EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1462,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1463,
		name: 'Elemental Blessing: Damage',
		description: 'Receiving the blessing of Eureka\'s elementals. Damage dealt is increased and restoring HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1464,
		name: 'Time\'s Up',
		description: 'Nearing the end of allotted exploration time in Eureka. ',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1465,
		name: 'Soaring',
		description: 'Overcome with the battle high, increasing damage dealt and potency of HP restoration actions. Effect is nullified when piloting warmachina.',
		category: 1,
		isPermanent: true,
		maxStacks: 19,
		partyListPriority: 0
	},
	{
		id: 1466,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1467,
		name: 'Yellow Paint',
		description: 'Carrying a pot of yellow paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1468,
		name: 'Blue Paint',
		description: 'Carrying a pot of light blue paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1469,
		name: 'Black Paint',
		description: 'Carrying a pot of black paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1470,
		name: 'Red Paint',
		description: 'Carrying a pot of red paint.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1471,
		name: 'Last Kiss',
		description: 'Cursed by a kiss. Unaspected damage dealt to all nearby allies when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1472,
		name: 'Apathetic',
		description: 'Unable to use HP restoration abilities while MP slowly drains. Not that you care.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1473,
		name: 'Cemented',
		description: 'Cement is slowly covering your body. Petrification sets in when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1474,
		name: 'Filthy',
		description: 'Earthen residue is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1475,
		name: 'Aether Rot',
		description: 'Infected with an unknown pestilience. Mortal pathogen is released when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1476,
		name: 'Aether Rot Immunity',
		description: 'Unable to be an Aether Rot carrier.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1477,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1478,
		name: 'Connectivity',
		description: 'The Phantom Train is slowly leeching your life essence. Damage taken is also increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 100
	},
	{
		id: 1479,
		name: 'Falling',
		description: 'Decided absence of terra firma is causing an inability to execute certain actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1480,
		name: 'Unrelenting Anguish',
		description: 'Continuously launching Aratama from your body.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1481,
		name: 'Ominous Wind',
		description: 'Touched by an ominous wind. Coming in contact with another cursed by the selfsame wind causes the omen to spread.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1482,
		name: 'Mana Charge',
		description: 'Charging mana for a forthcoming spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1483,
		name: 'Fire Charged',
		description: 'Mana sufficient to cast Fire III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1484,
		name: 'Blizzard Charged',
		description: 'Mana sufficient to cast Blizzard III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1485,
		name: 'Thunder Charged',
		description: 'Mana sufficient to cast Thunder III or equivalent.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1486,
		name: 'Jester\'s Antics',
		description: 'Effect radius and characteristics for Fire, Ice, and Lightning spells are severely altered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1487,
		name: 'Jester\'s Truths',
		description: 'Effect radius and characteristics for Fire, Ice, and Lightning spells are unaltered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1488,
		name: 'Incurable',
		description: 'All HP restoration is nullified.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1489,
		name: 'Ultros Simulation',
		description: 'The Ultros simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1490,
		name: 'Air Force Simulation',
		description: 'The Air Force simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1491,
		name: 'Dadaluma Simulation',
		description: 'The Dadaluma simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1492,
		name: 'Bibliotaph Simulation',
		description: 'The Bibliotaph simulation program is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1493,
		name: 'Virus',
		description: 'A virus is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1494,
		name: 'Face in the Crowd',
		description: 'Participating in a live performance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1495,
		name: 'Scalebound',
		description: 'You have entered the sacred domain of the Rathalos and are somehow unable to heal wounds via any method save mega potions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1496,
		name: 'Vanished',
		description: 'Invisible to enemies and traps.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1497,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1498,
		name: 'Shocked',
		description: 'Experiencing periodic immobility while bleeding HP over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1499,
		name: 'Heavy Medal',
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1500,
		name: 'Heavy Medal',
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1501,
		name: 'Heavy Medal',
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1502,
		name: 'Heavy Medal',
		description: 'The weight of medals collected is hampering faculty to fend off attacks. The higher the stack, the more damage taken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1503,
		name: 'Light Medal',
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1504,
		name: 'Light Medal',
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1505,
		name: 'Light Medal',
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1506,
		name: 'Light Medal',
		description: 'The lack of medals collected is increasing faculty to fend off attacks. The higher the stack, the less damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1507,
		name: 'Pollen',
		description: 'Deadly pollen has filled the lungs, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1508,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1509,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1510,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1511,
		name: 'Petrification',
		description: 'Stone-like rigidity is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1512,
		name: 'Knockback Penalty',
		description: 'Unable to use knockback and draw-in effects.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1513,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1514,
		name: 'スリル・オブ・ウォー：効果',
		description: '連続してＨＰが回復している状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1515,
		name: 'Hover',
		description: 'Floating above ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1516,
		name: 'Cemented',
		description: 'Cement is slowly covering your body. Petrification sets in when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1517,
		name: 'Fire Resistance Up',
		description: 'Fire resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1518,
		name: 'King of the Skies',
		description: 'The Rathalos has unleashed its true might.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1519,
		name: 'Drubbed',
		description: 'Taking blunt damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1520,
		name: 'Mounted',
		description: 'Riding atop a Rathalos.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1521,
		name: 'Stun',
		description: 'Unable to act and taking increased damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1522,
		name: 'Stun',
		description: 'Unable to act.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1523,
		name: 'Haste+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced. Effect cannot be nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 100
	},
	{
		id: 1524,
		name: 'Blind',
		description: 'Encroaching darkness is lowering accuracy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1525,
		name: 'Thermal Low',
		description: 'The wind is high.',
		category: 2,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 1526,
		name: 'Thermal High',
		description: 'The wind has died. Resistance to wind damage is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1527,
		name: 'Accursed Flame',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1528,
		name: 'Aetherially Charged',
		description: 'Charged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 1529,
		name: 'Woken',
		description: 'Overcharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1530,
		name: 'Beyond Limits',
		description: 'Hypercharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 1531,
		name: 'Down the Rabbit Hole',
		description: 'Being guided to buried treasure.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1532,
		name: 'Viscous Aetheroplasm',
		description: 'Aetheroplasm is attached to your body. A stack of 5 will result in instant death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1533,
		name: 'Airbound',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1534,
		name: 'Role-playing',
		description: 'Experiencing what it is to be someone else.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1535,
		name: 'Full Moon',
		description: 'Unleashing the power of the full moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1536,
		name: 'New Moon',
		description: 'Unleashing the power of the new moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1537,
		name: 'Blood Moon',
		description: 'Bringing to bear the full might of the dark and bright blades.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1538,
		name: 'Moonlit',
		description: 'Under the influence of the full moon.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1539,
		name: 'Moonshadowed',
		description: 'Under the influence of the new moon.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1540,
		name: 'Veil of Shadow',
		description: 'Darkness shields you from the full moon\'s influence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1541,
		name: 'Veil of Light',
		description: 'Light shields you from the new moon\'s influence.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1542,
		name: 'Haunt',
		description: 'Memory is taking corporeal form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1543,
		name: 'Haunt',
		description: 'Memory is taking corporeal form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1544,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 2
	},
	{
		id: 1545,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 1
	},
	{
		id: 1546,
		name: 'Odder',
		description: 'Transformed into an otter and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1547,
		name: 'Indomitable Spirit',
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1548,
		name: 'Sprint',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1549,
		name: 'Unmagicked',
		description: 'Unable to use magicite.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1550,
		name: 'Magnetic Lysis +',
		description: 'Body is exhibiting a positive magnetic charge.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1551,
		name: 'Magnetic Lysis -',
		description: 'Body is exhibiting a negative magnetic charge.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1552,
		name: 'Magnetic Levitation',
		description: 'Suspended in midair.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1553,
		name: 'The One Dragon',
		description: 'Yiazmat\'s body is pulsing with power.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1554,
		name: 'Borne Heart',
		description: 'Yiazmat\'s heart is exposed and can be broken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1555,
		name: 'Heartless',
		description: 'Yiazmat\'s heart is destroyed. Maximum HP is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1556,
		name: 'Threatened',
		description: 'Maximum HP is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1557,
		name: 'HP Penalty',
		description: 'Maximum HP is severely decreased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1558,
		name: 'HP Boost +1',
		description: 'Maximum HP is increased by 1.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1559,
		name: 'HP Boost +2',
		description: 'Maximum HP is increased by 2.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1560,
		name: 'HP Boost +3',
		description: 'Maximum HP is increased by 3.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1561,
		name: 'HP Boost +4',
		description: 'Maximum HP is increased by 4.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1562,
		name: 'Computation Mode',
		description: 'Basic computation protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1563,
		name: 'Tartarus Mode',
		description: 'Tartarean protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1564,
		name: 'Annihilation Mode',
		description: 'Annihilation protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1565,
		name: 'Computation Boost',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 100
	},
	{
		id: 1566,
		name: 'Computation Error',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 6,
		partyListPriority: 50
	},
	{
		id: 1567,
		name: 'Primal Rage',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1568,
		name: 'Slow+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased. Effect cannot be nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 1569,
		name: 'Auspicious',
		description: 'Temporarily granted the power of an auspice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1570,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1571,
		name: 'Temporal Barrier',
		description: 'The effect of Temporal Stasis is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1572,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1573,
		name: 'Grudge',
		description: 'Damage taken is turning to resentment.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1575,
		name: 'Brotherly Love',
		description: 'Bound by fraternal bonds.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1576,
		name: '石化の呪い',
		description: '石化した状態。攻撃を受けると戦闘不能になる。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1577,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 1578,
		name: 'Searing Wind',
		description: 'Ignited by white-hot embers and scorching those nearby. Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1579,
		name: 'Thin Ice',
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1580,
		name: 'Thin Ice',
		description: 'Having trouble maintaining a solid foothold upon ice-covered ground.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1581,
		name: 'Adaptation',
		description: 'Adapted to an aetherially unstable environment.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1582,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1583,
		name: 'Elemental EXP Up',
		description: 'Elemental EXP earned through battle while at an elemental level lower than 20 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1584,
		name: 'Komainu\'s Favor',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1585,
		name: 'Inugami\'s Favor',
		description: 'Damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1586,
		name: 'Senri\'s Favor',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1587,
		name: 'Elemental Harmony',
		description: 'Elemental EXP earned through battle is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1588,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1589,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1590,
		name: 'Light in the Dark',
		description: 'Absorbing the light of a deepvoid torch and transforming it into mana.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1591,
		name: 'Woken',
		description: 'Overcharged with aether.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1592,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1593,
		name: 'Adaptation',
		description: 'Adapted to an aetherially unstable environment.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1594,
		name: 'Hundred Fists',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1595,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1596,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1597,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1598,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1599,
		name: 'Pyretic',
		description: 'Fire-aspected damage is taken with every action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 99
	},
	{
		id: 1600,
		name: 'Entropy',
		description: 'Plagued by chaotic flames that will deal damage to nearby party members when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1601,
		name: 'Dynamic Fluid',
		description: 'Plagued by a chaotic body of water that will deal damage when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1602,
		name: 'Headwind',
		description: 'Plagued by chaotic frontal winds that will deal damage when the effect ends. Effect dissipates upon exposure to directional winds. Knockback effects from winds faced head-on are doubled, while those of rear winds are reduced by half.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1603,
		name: 'Tailwind',
		description: 'Plagued by chaotic rear winds that will deal damage when the effect ends. Effect dissipates upon exposure to directional winds. Knockback effects from winds faced head-on are reduced by half, while those of rear winds are doubled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1604,
		name: 'Accretion',
		description: 'Plagued by rapidly hardening mud. All HP recovery is reduced. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1605,
		name: 'Primordial Crust',
		description: 'Plagued by rapidly hardening mud. Damage taken is reduced, but all HP recovery is nullified. Effect dissipates when damage that would cause HP to drop below 0 is taken, leaving HP at 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1606,
		name: 'Muddy',
		description: 'In need of a good rinsing. Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1607,
		name: '●弱点：雷属性',
		description: '●強烈な雷属性が有効。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1608,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1609,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1610,
		name: 'Landborne',
		description: 'Drawing power from the land itself.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1611,
		name: 'Arcane Bulwark',
		description: 'Protected by a magicked barrier.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1612,
		name: 'Defenseless',
		description: 'Unable to call upon the arcane bulwark for protection.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1613,
		name: 'Burning Soul',
		description: 'The immortal spirit blazes bright within.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 1614,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1615,
		name: 'Crumbling Bulwark',
		description: 'Magicked barrier is gradually disintegrating.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1616,
		name: 'Death from Above',
		description: 'Any auto-attack from a skyborne opponent will apply Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1617,
		name: 'Death from Below',
		description: 'Any auto-attack from a landborne opponent will apply Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1618,
		name: 'Logos-minded',
		description: 'Ruminating on extracted mnemes. Ready to use select logos actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1619,
		name: 'Preoccupied',
		description: 'Engaged in complex maneuvers.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1620,
		name: 'Unveiled',
		description: 'Gilgamesh\'s true form is revealed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1621,
		name: 'Concealed',
		description: 'Unable to be detected from a distance.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1622,
		name: 'Critical Strikes',
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1623,
		name: 'Live Wire',
		description: 'Crackling like a levinbolt. Damage dealt against opponents vulnerable to electricity is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1624,
		name: 'Looper',
		description: 'Corrupted by Omega\'s program loop.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1625,
		name: 'Memory Degredation',
		description: 'Gradually forgetting important details. A stack of 6 will result in full memory loss.',
		category: 2,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 1626,
		name: 'Memory Loss',
		description: 'Bereft of sense of self and purpose.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1627,
		name: 'Chains of Memory',
		description: 'Under siege by what you can no longer remember.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1628,
		name: 'Gradual Petrification',
		description: 'Flesh once soft is slowly turning to stone. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1629,
		name: 'Kill Command',
		description: 'Deleting variables from the Interdimensional Rift.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1630,
		name: 'Love\'s True Form',
		description: 'Suzaku\'s heretofore unknown visage is revealed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1631,
		name: 'Wisdom of the Aetherweaver',
		description: 'Magic damage is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1632,
		name: 'Wisdom of the Martialist',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1633,
		name: 'Wisdom of the Platebearer',
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1634,
		name: 'Wisdom of the Guardian',
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1635,
		name: 'Wisdom of the Ordained',
		description: 'Maximum MP and healing magic potency are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1636,
		name: 'Wisdom of the Skirmisher',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1637,
		name: 'Wisdom of the Watcher',
		description: 'Evasion is enhanced, while damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1638,
		name: 'Wisdom of the Templar',
		description: 'Maximum HP and healing magic potency are increased, while damage dealt is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1639,
		name: 'Wisdom of the Irregular',
		description: 'Damage dealt is increased, while magic defense is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1640,
		name: 'Wisdom of the Breathtaker',
		description: 'Movement speed, evasion, and poison resistance are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1641,
		name: 'Spirit of the Remembered',
		description: 'Maximum HP and accuracy are increased. Chance of automatic revival upon KO.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1642,
		name: 'Protect L',
		description: 'Physical defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1643,
		name: 'Shell L',
		description: 'Magic defense is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1644,
		name: 'Swift L',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1645,
		name: 'Rapid Recast',
		description: 'Recast time of next ability is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1646,
		name: 'Bravery L',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1647,
		name: 'Solid Shield',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1648,
		name: 'Spell Shield',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1649,
		name: 'Reflect L',
		description: 'Reflecting magic back on its caster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1650,
		name: 'Poison L',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1651,
		name: 'Refresh L',
		description: 'Magia aether regeneration is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1652,
		name: 'Magic Burst',
		description: 'Damage dealt by spells and MP cost of spells is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1653,
		name: 'Double Edge L',
		description: 'Physical damage dealt is increasing, while you are sustaining damage over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 70
	},
	{
		id: 1654,
		name: 'Spirit Dart L',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1655,
		name: 'Banish L',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1656,
		name: 'Boost',
		description: 'Attack power of next weaponskill is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1657,
		name: 'Incense L',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1658,
		name: 'Omega',
		description: 'Inscrutable.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1659,
		name: 'Infinite Limit',
		description: 'Actions transcending standard limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1660,
		name: 'Packet Filter M',
		description: 'Firewall is preventing the dealing of damage to Omega-M.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1661,
		name: 'Packet Filter F',
		description: 'Firewall is preventing the dealing of damage to Omega-F.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1662,
		name: 'Local Resonance',
		description: 'Combat capabilities increase with proximity to counterpart.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1663,
		name: 'Remote Resonance',
		description: 'Combat capabilities increase with distance from counterpart.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1664,
		name: 'Critical Synchronization Bug',
		description: 'Affected by a critical error. Data corruption will cause damage and spread when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1665,
		name: 'Critical Overflow Bug',
		description: 'Affected by a critical error. Data corruption will cause damage and spread when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1666,
		name: 'Critical Underflow Bug',
		description: 'Affected by a critical error. Coming in contact with allies will cause data corruption to spread. Corruption will cause damage when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1667,
		name: 'Synchronization Debugger',
		description: 'Invulnerable to synchronization bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1668,
		name: 'Overflow Debugger',
		description: 'Invulnerable to overflow bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1669,
		name: 'Underflow Debugger',
		description: 'Invulnerable to underflow bugs.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1670,
		name: 'Latent Defect',
		description: 'Affected by a hidden error that will cause damage when the effect ends. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1671,
		name: 'Cascading Latent Defect',
		description: 'Affected by a hidden error that will cause damage when the effect ends. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1672,
		name: 'Local Regression',
		description: 'Affected by a patch error. Data corruption will cause damage when in close proximity to others affected by the same error, or when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1673,
		name: 'Remote Regression',
		description: 'Affected by a patch error. Data corruption will cause damage when out of range of others affected by the same error, or when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1674,
		name: 'Omega-M',
		description: 'Mimicking the male form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1675,
		name: 'Omega-F',
		description: 'Mimicking the female form.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1676,
		name: 'Superfluid',
		description: 'In a transitional liquid state.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1677,
		name: 'Bloodbath L',
		description: 'Attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1679,
		name: 'Spell-in-Waiting: Return IV',
		description: 'Designated target of Return IV, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1680,
		name: 'Spell-in-Waiting: Flare',
		description: 'Designated target of Flare, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1681,
		name: 'Paying the Piper',
		description: 'Advancing in the direction to which you are called.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1682,
		name: 'Sleeping Dark',
		description: 'Ying is fast asleep.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1683,
		name: 'Sleeping Light',
		description: 'Yang is fast asleep.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1684,
		name: 'Break III Edict',
		description: 'Following orders to perform Little Break III.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1685,
		name: 'Rush Edict',
		description: 'Following orders to perform Little Rush.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1686,
		name: 'Tornado Edict',
		description: 'Following orders to perform Little Tornado.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1687,
		name: 'Rehabilitation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1688,
		name: 'Group Oriented',
		description: 'Cooperatively attacking the primary target.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1689,
		name: 'Primary Target',
		description: 'Identified as the focus of a coordinated attack.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1690,
		name: 'Skyborne',
		description: 'Drawing power from the firmament.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1691,
		name: 'Landborne',
		description: 'Drawing power from the land itself.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1692,
		name: 'Guardian Spirit',
		description: 'Soul ablaze with the will to protect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1693,
		name: 'Slashing Resistance Down',
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1694,
		name: 'Piercing Resistance Down',
		description: 'Piercing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1695,
		name: 'Apathetic',
		description: 'Unable to use HP restoration abilities while MP slowly drains. Not that you care.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1696,
		name: 'Drowning',
		description: 'Being dragged under by the current. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1697,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1698,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1699,
		name: 'Looming Crescendo',
		description: 'The melody of the pyre calls. Will be compelled in the designated direction when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1700,
		name: 'Mutation',
		description: 'Aetherial instability is triggering mutations.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1701,
		name: 'Electromagnetic Field',
		description: 'Encased by a highly charged protective barrier.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1702,
		name: 'Ice Resistance Down',
		description: 'Ice resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1703,
		name: 'Biohacked',
		description: 'Mind is being infiltrated. Will be temporarily stunned when the effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1704,
		name: 'Looper',
		description: 'Corrupted by Omega\'s program loop.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1705,
		name: 'Hidden',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1706,
		name: 'Evasion Up',
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1707,
		name: 'Right Unseen',
		description: 'Only vulnerabilities on the right side of the body remain undetected. Hits to the front, back, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1708,
		name: 'Left Unseen',
		description: 'Only vulnerabilities on the left side of the body remain undetected. Hits to the front, back, and right sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1709,
		name: 'Back Unseen',
		description: 'Only vulnerabilities on the back of the body remain undetected. Hits to the front, right, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1710,
		name: 'Astral Essence',
		description: 'Astrally charged attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1711,
		name: 'Umbral Essence',
		description: 'Umbrally charged attacks are enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1712,
		name: 'Astral Cloak',
		description: 'Enshrouded in light and resistant to certain umbrally charged attacks. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1713,
		name: 'Umbral Cloak',
		description: 'Enshrouded in shadow and resistant to certain astrally charged attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1714,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1715,
		name: 'Malodorous',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1716,
		name: 'Boost',
		description: 'Potency of next offensive spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1717,
		name: 'Off-guard',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1718,
		name: 'Waxing Nocturne',
		description: 'Damage dealt and movement speed are increased. Waning Nocturne will take hold when the effect ends.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1719,
		name: 'Mighty Guard',
		description: 'Damage taken and dealt are reduced, while enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1720,
		name: 'Ice Spikes',
		description: 'Upon taking physical damage, sharpened spikes deal ice damage to the attacking opponent, potentially slowing them.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1721,
		name: 'Peculiar Light',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1722,
		name: 'Diamondback',
		description: 'Though unable to move, damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1723,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1724,
		name: 'Veil of the Whorl',
		description: 'Dealing water damage to attackers upon taking damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1725,
		name: 'Cursekeeper',
		description: 'Afflicted by a karmic curse carried within a paper doll. Damage taken will be channeled into an explosion when the effect ends or you are KO\'d.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1726,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1727,
		name: 'Waning Nocturne',
		description: 'Unable to auto-attack or use spells, weaponskills, and abilities.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1728,
		name: 'Contractual Obligation',
		description: 'Mercenaries are allied to a team. Contract will expire when the counter reaches zero. HP restored by healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1729,
		name: 'Sheer Will',
		description: 'Remaining standing through pure determination. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1730,
		name: 'Flying High',
		description: 'Nearly giddy with the thrill of battle, increasing damage dealt, potency of HP restoration actions, and the rate at which the adrenaline gauge fills. Effect is nullified when piloting warmachina.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1731,
		name: 'Deep Freeze',
		description: 'Frozen solid and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1732,
		name: 'Elemental EXP Up',
		description: 'Elemental EXP earned through battle while at an elemental level lower than 35 is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1733,
		name: 'Shieldbearer',
		description: 'Equipped with an ethereal shield and able to use the duty action Heavenly Shield.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1734,
		name: 'Swordbearer',
		description: 'Equipped with an ethereal sword and able to use the duty action Heavenly Sword.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1735,
		name: 'Heavenly Shield',
		description: 'Protected by an ethereal shield. Damage taken from certain attacks is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1736,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1737,
		name: 'Toad Oil',
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1738,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1739,
		name: 'Wisdom of the Elder',
		description: 'Magic damage dealt and magic defense are increased. Spell MP cost is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1740,
		name: 'Wisdom of the Duelist',
		description: 'Physical damage dealt and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1741,
		name: 'Wisdom of the Fiendhunter',
		description: 'Physical damage dealt and evasion are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1742,
		name: 'Wisdom of the Indomitable',
		description: 'Defense is increased. Maximum HP is boosted each time you take damage equivalent to at least 50% of your maximum HP from a single-target attack.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1743,
		name: 'Sacrifice',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1744,
		name: 'Stellation',
		description: 'Transformed into a many-pointed star. Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1745,
		name: 'Black Hole Buffer',
		description: 'Invulnerable to the pull of the black hole.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 1746,
		name: 'Blown Away',
		description: 'Carried away by an updraft.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1747,
		name: 'Fearless',
		description: 'Empowered by courage, increasing damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1748,
		name: 'Guardians\' Aegis',
		description: 'Shielded by a protective barrier.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1749,
		name: 'Area of Influence Up',
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1750,
		name: 'Twin Fates',
		description: 'Orlasrach and Munderg are in resonance with one another, each protecting its twin.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1751,
		name: 'Soul of Fire',
		description: 'Aetherial aspect is leaning primarily to fire.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1752,
		name: 'Soul of Ice',
		description: 'Aetherial aspect is leaning primarily to ice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1753,
		name: 'Blood Sacrifice',
		description: 'Damage taken is increased if those bonded by the blood ritual are separated.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1754,
		name: 'Aetherially Primed',
		description: 'Awash in aether attuned for traveling via unstable currents.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1755,
		name: 'Resurrection Restricted',
		description: 'The influence of Eureka-forged weapons is making resurrection by certain means impossible.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1756,
		name: 'Elemental Blessing',
		description: 'An area of land has been granted the elementals\' protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1757,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1758,
		name: 'Deep Freeze',
		description: 'Your body is encased in ice, preventing action and dealing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 100
	},
	{
		id: 1759,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1760,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1761,
		name: 'Ice Resistance Up',
		description: 'Ice resistance is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1762,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1763,
		name: 'HP Boost',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1764,
		name: 'Artificially Enhanced',
		description: 'Magitek plate armor has been enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1765,
		name: 'Artificially Enhanced',
		description: 'Magitek plate armor has been enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1766,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 0
	},
	{
		id: 1767,
		name: 'Weak Magitek Field',
		description: 'Protection provided by towers has lessened, but damage taken is still reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1768,
		name: 'Watery Grave',
		description: 'You are trapped in a magicked prison of water and are unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1769,
		name: 'Doom',
		description: 'Certain death when counter reaches zero. Effect dissipates once fully healed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1770,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1771,
		name: 'True Virtue',
		description: 'As an ideal made manifest, strength surpasses mortal imagination.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1772,
		name: 'Aggressive Posture',
		description: 'Prepared to carry out an assault.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1773,
		name: 'Defensive Posture',
		description: 'Prepared to stand fast.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1774,
		name: 'Blazing Aramitama',
		description: 'The aramitama has been stoked, and both body and soul surrendered to it.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1775,
		name: 'Reforged',
		description: 'Aetherial composition has been altered, changing elemental aspect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1776,
		name: 'Blunt Resistance Down',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1777,
		name: 'Reforged',
		description: 'Aetherial composition has been altered, changing elemental aspect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1778,
		name: 'Hoofing It',
		description: 'Unable to summon or ride mounts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1779,
		name: 'Ajisai',
		description: 'Fine cuts are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1780,
		name: '魔力汚染',
		description: '害意ある魔力によって汚染された状態。特定の攻撃によって、戦闘不能状態に陥る。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1781,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1782,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1783,
		name: 'Soul of Fire',
		description: 'Aetherial aspect is leaning primarily to fire.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1784,
		name: 'Soul of Ice',
		description: 'Aetherial aspect is leaning primarily to ice.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1785,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1786,
		name: 'Pure Muscle',
		description: 'Muscles are rippling with power. Potency and range of certain actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1787,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1788,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1789,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 1790,
		name: 'Shadow Links',
		description: 'Sustaining damage over time. Movement speed is also decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1791,
		name: 'Magic Infusion',
		description: 'Imbued with enough potent aether to execute a certain action.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1792,
		name: 'Artificial Boost',
		description: 'Magitek plate armor has been enhanced beyond standard limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1793,
		name: 'Mark of Mortality',
		description: 'Branded with a mark of mortality. Damage dealt is reduced. Too many stacks will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 1794,
		name: 'Heated Up',
		description: 'Burning vast quantities of energy and emitting steam from a portion of the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1795,
		name: 'Heated Up',
		description: 'Burning vast quantities of energy and emitting steam from a portion of the body.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1796,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1797,
		name: 'Critical Strikes',
		description: 'All attacks are dealing critical damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1798,
		name: 'Dualcast',
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1799,
		name: 'Fae Light',
		description: 'Cane is aglow with the ethereal light of ancient magicks. Damage dealt is greatly increased. All auto-attacks become area of effect attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1800,
		name: 'Bloated',
		description: 'Damage taken is increased. The greater the stack, the higher the increase.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 1801,
		name: 'Pick Clean',
		description: 'Reduces the chance of obtaining HQ items to 0% but increases item yield. Amount of increase is determined by your perception rating.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1802,
		name: 'The Giving Land',
		description: 'Increases the number of shards, crystals, or clusters that are obtained by a random amount.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1803,
		name: 'Surface Slap',
		description: 'Fish of the same type as the last one caught are now aware of your presence and will not bite.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1804,
		name: 'Identical Cast',
		description: 'You\'re feeling lucky about catching a fish of the same type as the last one you caught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1805,
		name: 'Identical Gig',
		description: 'You\'re feeling lucky about catching a fish of the same type as the last one you caught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1806,
		name: 'Reusing',
		description: 'A portion of materials are being returned to your inventory.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1807,
		name: 'Cocoon of the Penitent',
		description: 'Metamorphosing into a sin eater.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1808,
		name: 'Spell-in-Waiting',
		description: 'The next spell cast will activate after a delay.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1809,
		name: 'Spell-in-Waiting: Unholy Darkness',
		description: 'Designated target of Unholy Darkness, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1810,
		name: 'Spell-in-Waiting: Dark Fire III',
		description: 'Designated target of Dark Fire III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1811,
		name: 'Spell-in-Waiting: Hell Wind',
		description: 'Designated target of Hell Wind, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1812,
		name: 'Spell-in-Waiting: Shadoweye',
		description: 'Designated target of Shadoweye, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1813,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1814,
		name: 'Flourishing Cascade',
		description: 'Able to execute Reverse Cascade.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1815,
		name: 'Flourishing Fountain',
		description: 'Able to execute Fountainfall.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1816,
		name: 'Flourishing Windmill',
		description: 'Able to execute Rising Windmill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1817,
		name: 'Flourishing Shower',
		description: 'Able to execute Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1818,
		name: 'Standard Step',
		description: 'Caught up in the dance and only able to execute step actions, role actions, Sprint, Limit Break, Standard Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1819,
		name: 'Technical Step',
		description: 'Caught up in the dance and only able to execute step actions, role actions, Sprint, Limit Break, Technical Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1820,
		name: 'Threefold Fan Dance',
		description: 'Able to execute Fan Dance III.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1821,
		name: 'Standard Finish',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1822,
		name: 'Technical Finish',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1823,
		name: 'Closed Position',
		description: 'Sharing the effects of certain actions with target party member.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1824,
		name: 'Dance Partner',
		description: 'Sharing the effects of certain actions executed by your dancer companion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1825,
		name: 'Devilment',
		description: 'Critical hit rate and direct hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1826,
		name: 'Shield Samba',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1827,
		name: 'Improvisation',
		description: 'Dancing to the beat of your own drum.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1828,
		name: 'Improvisation',
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1829,
		name: 'Invincibility',
		description: 'Invulnerable to all damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1830,
		name: 'Monstrous',
		description: 'Vile magicks have wrought a terrible transformation to body and mind.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1831,
		name: 'No Mercy',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1832,
		name: 'Camouflage',
		description: 'Parry rate is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1833,
		name: 'Royal Guard',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1834,
		name: 'Nebula',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1835,
		name: 'Aurora',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1836,
		name: 'Superbolide',
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 1837,
		name: 'Sonic Break',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1838,
		name: 'Bow Shock',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1839,
		name: 'Heart of Light',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1840,
		name: 'Heart of Stone',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1842,
		name: 'Ready to Rip',
		description: 'Able to execute Jugular Rip.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1843,
		name: 'Ready to Tear',
		description: 'Able to execute Abdomen Tear.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1844,
		name: 'Ready to Gouge',
		description: 'Able to execute Eye Gouge.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1845,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1846,
		name: 'Curse of the Ronka',
		description: 'A plague of ancient anathema clutters your thoughts, spurring you to deny your very existence. Increased exposure will eventually lead to madness and death.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 1847,
		name: 'Esprit',
		description: 'The Esprit Gauge is increasing when you or the party member designated as your Dance Partner executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1848,
		name: 'Esprit',
		description: 'The Esprit Gauge is increasing when you or a party member executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1849,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1850,
		name: 'Surging Waters',
		description: 'Overflowing with water-aspected aether. A Surging Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1851,
		name: 'Splashing Waters',
		description: 'Overflowing with water-aspected aether. A Splashing Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1852,
		name: 'Swirling Waters',
		description: 'Overflowing with water-aspected aether. A Swirling Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1853,
		name: 'Smothering Waters',
		description: 'Overflowing with water-aspected aether. A Smothering Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1854,
		name: 'Sundering Waters',
		description: 'Overflowing with water-aspected aether. A Sundering Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1855,
		name: 'Sweeping Waters',
		description: 'Overflowing with water-aspected aether. A Sweeping Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1856,
		name: 'Sheltron',
		description: 'Blocking incoming attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1857,
		name: 'Nascent Flash',
		description: 'Restoring HP with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 1858,
		name: 'Nascent Glint',
		description: 'Receiving 100% of all HP recovered by the warrior who granted this status via Nascent Flash. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 1859,
		name: 'Fading Fast',
		description: 'Reduction of life-sustaining aether by concealment techniques is placing strain on the body. Failure to remove this effect will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1860,
		name: 'Vital Sign',
		description: 'Severing the flow of life-sustaining aether in order to avoid detection has damaged the body\'s vital functions. Movement speed is severely decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1861,
		name: 'Leaden Fist',
		description: 'Next Bootshine will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1862,
		name: 'Anatman',
		description: 'Form and Disciplined Fist timers are suspended due to a transcendent inner calm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1863,
		name: 'Draconian Fire',
		description: 'Able to execute Raiden ThrustDraconian Fury�\u0001\u0003�\u0001\u0003.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1864,
		name: 'Lance Charge',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1865,
		name: 'Meditation',
		description: 'Deep in contemplation.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1866,
		name: 'Bioblaster',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1867,
		name: 'Hellish Conduit',
		description: 'Able to execute Brand of Purgatory.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1868,
		name: 'Everlasting Flight',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1869,
		name: 'Gale Enforcer',
		description: 'Maintaining a localized windstorm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1871,
		name: 'Dia',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1872,
		name: 'Temperance',
		description: 'Healing magic potency is increased while damage taken by nearby party members is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1873,
		name: 'Temperance',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1874,
		name: 'Angel\'s Whisper',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1875,
		name: 'Seraphic Illumination',
		description: 'Magic defense and healing magic potency are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1876,
		name: 'Lord of Crowns',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1877,
		name: 'Lady of Crowns',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1878,
		name: 'Divination',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1879,
		name: 'Opposition',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1880,
		name: 'Nocturnal Opposition',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1881,
		name: 'Combust III',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1882,
		name: 'The Balance',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1883,
		name: 'The Bole',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1884,
		name: 'The Arrow',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1885,
		name: 'The Spear',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1886,
		name: 'The Ewer',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1887,
		name: 'The Spire',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1888,
		name: 'Diurnal Intersection',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1889,
		name: 'Intersection',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1890,
		name: 'Horoscope',
		description: 'Primed to receive the healing effects of Horoscope.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1891,
		name: 'Horoscope Helios',
		description: 'Primed to receive the healing effects of Horoscope.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1892,
		name: 'Neutral Sect',
		description: 'Healing magic potency is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1893,
		name: 'Scouring Waters',
		description: 'Overflowing with water-aspected aether. A Scouring Tsunami will occur when effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1894,
		name: 'Dark Missionary',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1895,
		name: 'Biolysis',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1896,
		name: 'Recitation',
		description: 'The next Adloquium, Succor, Indomitability, or Excogitation executed will cost no MP or Aetherflow stacks and will restore critical HP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1897,
		name: 'Nascent Chaos',
		description: 'Decimate is upgraded to Chaotic Cyclone.Nascent Chaos Effect: Fell Cleave is upgraded to Inner Chaos.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1898,
		name: 'Brutal Shell',
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1899,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 1900,
		name: 'Winged Shield',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1901,
		name: 'Enshielded',
		description: 'Winged shield is reducing damage taken.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1902,
		name: 'Sword Oath',
		description: 'Able to execute Atonement.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1903,
		name: 'Phantasmal',
		description: 'Without corporeal form.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1904,
		name: 'Light in the Dark',
		description: 'Unleashing the Light trapped within you in defiance of the Darkness. Damage dealt and HP recovery are increased. ',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1905,
		name: 'Veil of Gukumatz',
		description: 'Combat capabilities are sharply enhanced by Gukumatz\'s power.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1906,
		name: 'Perfect Deception',
		description: 'Having severely restricted the flow of life-sustaining aether, your presence is concealed but you are subject to the effect of Fading Fast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1907,
		name: 'Faded Out',
		description: 'Overburdened body is unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1908,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1909,
		name: 'Area of Influence Up',
		description: 'Area of effect for actions is expanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 1910,
		name: 'Right Eye',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1911,
		name: 'Asylum',
		description: 'A veil of succor is healing party members in the area.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1912,
		name: 'Asylum',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1913,
		name: 'Vauthry\'s Blessing',
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1914,
		name: 'Disembowel',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1915,
		name: 'Summon Order',
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1916,
		name: 'Name of the Elements',
		description: 'Efficiency of Brand of the Elements is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1917,
		name: 'Seraphic Veil',
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1918,
		name: 'Catalyze',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1919,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1920,
		name: 'Diurnal Balance',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 1921,
		name: 'Neutral Sect',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1922,
		name: 'Vauthry\'s Blessing',
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1923,
		name: 'Vauthry\'s Blessing',
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1924,
		name: 'Vauthry\'s Blessing',
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1925,
		name: 'Vauthry\'s Blessing',
		description: 'Blessed by Vauthry and experiencing heightened senses.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1926,
		name: 'Sleeve Draw',
		description: 'Draws a new arcanum after executing Play, Minor Arcana, or Undraw.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1927,
		name: 'Trusty Shield',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1928,
		name: 'Levinskin',
		description: 'A subtle field of levin crackles about the body, increasing defense.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1929,
		name: 'Light Beyond Darkness',
		description: 'Unleashing the Light trapped within you in defiance of the Darkness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1931,
		name: 'Gunmetal Soul',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1932,
		name: 'Army\'s Muse',
		description: 'Auto-attack delay as well as weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1933,
		name: 'Army\'s Ethos',
		description: 'Singing Mage\'s Ballad or the Wanderer\'s Minuet will grant the effect of Army\'s Muse.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 1934,
		name: 'Troubadour',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1935,
		name: 'Soaking Wet',
		description: 'Waterlogged gear is reducing movement speed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 250
	},
	{
		id: 1936,
		name: 'Stone Wall',
		description: 'An invisible-yet-rock-solid barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 1937,
		name: 'In Event',
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1939,
		name: 'Beckoned',
		description: 'Fae magicks have taken hold, and your will is not entirely your own.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1940,
		name: 'Chilled to the Bone',
		description: 'Drenched in ice-cold water, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1941,
		name: 'Accursed Poison',
		description: 'An ancient corruption is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1942,
		name: 'Ranging',
		description: 'Scouting territory. Will halt if engaged in combat. If not engaged while scouting, will end foray and return home.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1943,
		name: 'Hastilude',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1944,
		name: 'Sacred Soil',
		description: 'A circle of sanctified earth is healing party members and reducing damage taken within its bounds.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1945,
		name: 'Hoofing It',
		description: 'Unable to summon or ride mounts.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1946,
		name: 'Wildfire',
		description: 'Currently afflicting an enemy with Wildfire.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1947,
		name: 'Sleep',
		description: 'Overwhelming drowsiness is preventing the execution of actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1948,
		name: 'Magic Damage Down',
		description: 'Magic damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 1949,
		name: 'Splashing Waters',
		description: 'Overflowing with water-aspected aether. A Splashing Tsunami will occur when effect expires. Effect canceled upon being hit by a certain action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1950,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1951,
		name: 'Tactician',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1952,
		name: 'Hide',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1953,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1954,
		name: 'Bunshin',
		description: 'Your corporeal shadow is performing an attack each time you execute a weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 1955,
		name: 'Assassinate Ready',
		description: 'Able to execute Assassinate.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1956,
		name: 'Souldeep Invisibility',
		description: 'Having severed the flow of life-sustaining aether, your presence is completely concealed but you are subject to the effects of Fading Fast and Vital Sign.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1958,
		name: 'Forward March',
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1959,
		name: 'About Face',
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1960,
		name: 'Left Face',
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1961,
		name: 'Right Face',
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1962,
		name: 'Haste',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1963,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 1964,
		name: 'Summon Order II',
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1965,
		name: 'Summon Order III',
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1966,
		name: 'Summon Order IV',
		description: 'Pet has been issued an action command.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 1967,
		name: 'Sleep Resistance',
		description: 'Far too invigorated to fall easily to slumber\'s temptation.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1968,
		name: 'Behelmed',
		description: 'Head is crammed awkwardly into a dwarven helmet, granting resistance to sleep.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1969,
		name: 'Behelmed',
		description: 'Dwarven helmet is preventing the use of certain restorative actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1970,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1971,
		name: 'Manafication',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 1972,
		name: 'Delirium',
		description: 'Blackblood cost for Bloodspiller and Quietus is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1973,
		name: 'Lightning Resistance Down II',
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1974,
		name: 'Paradise Regained',
		description: 'Magical power is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1975,
		name: 'Enlarged',
		description: 'Body has grown to a massive size.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 1976,
		name: 'Fully Enlarged',
		description: 'Body has grown to maximum size.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 1977,
		name: 'Full Swing',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1978,
		name: 'Rampart',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1979,
		name: 'アルティメイタム',
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1980,
		name: 'アルティメイタム[被]',
		description: '与ダメージが低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1981,
		name: 'Blood for Blood',
		description: 'Damage dealt and damage taken are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1982,
		name: 'Bloodbath',
		description: 'Attacks generate HP equal to the amount of physical damage dealt.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1983,
		name: 'Fetter Ward',
		description: 'All Stun, Sleep, Bind, Heavy, Silence, knockback, and draw-in effects are nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1984,
		name: 'Arm\'s Length',
		description: 'Damage taken is reduced. Impervious to the next stun, sleep, bind, heavy, silence, knockback, or draw-in effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1985,
		name: 'Peloton',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1986,
		name: 'Phantom Dart',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1987,
		name: 'Swiftcast',
		description: 'The next spell will be cast immediately.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1988,
		name: 'Addle',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1989,
		name: 'Manaward',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1990,
		name: 'Attunement',
		description: 'Damage taken is significantly reduced. Unable to act.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1991,
		name: 'Sword Oath',
		description: 'Able to execute Atonement and Glory Slash.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 1992,
		name: 'Nascent Chaos',
		description: 'Fell Cleave is upgraded to Inner Chaos, while Decimate is upgraded to Chaotic Cyclone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1993,
		name: 'Shake It Off',
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1994,
		name: 'ブラッドスピラー',
		description: '自身に対するＨＰ回復効果が低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1995,
		name: 'クワイタス',
		description: '自身に対するＨＰ回復効果が低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1996,
		name: 'Delirium',
		description: 'Blackblood cost is nullified.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1997,
		name: 'Brutal Shell',
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1998,
		name: 'バーストストライク',
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 1999,
		name: 'フェイテッドサークル',
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2000,
		name: 'Heart of Light',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2001,
		name: '無敵',
		description: 'すべての攻撃に対してＨＰが1より減ることがない状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2002,
		name: 'Ready to Rip',
		description: 'Able to execute Jugular Rip.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2003,
		name: 'Ready to Tear',
		description: 'Able to execute Abdomen Tear.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2004,
		name: 'Ready to Gouge',
		description: 'Able to execute Eye Gouge.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2005,
		name: 'Fists of Fire',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2006,
		name: 'Fists of Earth',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2007,
		name: 'Fists of Wind',
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2008,
		name: 'Riddle of Earth',
		description: 'A barrier created through profound comprehension of the earth is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2009,
		name: 'Wanderer\'s Minuet',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2010,
		name: 'Bunshin',
		description: 'Your corporeal shadow is performing an attack each time you execute a weaponskill.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2011,
		name: 'Shade Shift',
		description: 'Shadows are nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2012,
		name: 'Corps-a-corps',
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2013,
		name: 'Displacement',
		description: 'Next spell cast will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2014,
		name: 'Trick Attack',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2015,
		name: '陣風',
		description: '与ダメージが向上した状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2016,
		name: '士風',
		description: 'ウェポンスキルおよび魔法のキャストタイムとリキャストタイムが短縮された状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2017,
		name: 'Repelling Shot',
		description: 'Damage dealt by weaponskills is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2018,
		name: 'ワイルドファイア',
		description: 'ワイルドファイアを付与した状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2019,
		name: 'Bioblaster',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2020,
		name: 'Intervention',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2021,
		name: 'Flourishing Fan Dance',
		description: 'Able to execute Fan Dance III.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2022,
		name: 'Saber Dance',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2023,
		name: 'Standard Step',
		description: 'Caught up in the dance and only able to execute step actions, additional actions, Head Graze, Bolt, Medical Kit, Standard Finish, and En Avant.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2024,
		name: 'Standard Finish',
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2025,
		name: 'Esprit',
		description: 'The Esprit Gauge is increasing when you or the party member designated as your Dance Partner executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2026,
		name: 'Closed Position',
		description: 'Sharing the effects of certain actions with target party member.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2027,
		name: 'Dance Partner',
		description: 'Sharing the effects of certain actions executed by your dancer companion.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2028,
		name: '三連魔',
		description: '魔法が詠唱時間無しで唱えられる状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2029,
		name: 'Fountain of Fire',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2030,
		name: 'Everlasting Flight',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2031,
		name: 'ヴァルエアロ',
		description: '継続ダメージを受ける状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2032,
		name: 'ヴァルサンダー',
		description: '継続ダメージを受ける状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2033,
		name: 'Engagement',
		description: 'A barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2034,
		name: 'Divination',
		description: 'Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2035,
		name: 'Dia',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2036,
		name: 'Afflatus Solace',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2037,
		name: 'Temperance',
		description: 'Damage dealt and potency of all HP restoration actions are increased while damage taken by nearby party members is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2038,
		name: 'Temperance',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2039,
		name: 'Biolysis',
		description: 'Rapid decomposition of the flesh is reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2040,
		name: 'Seraphic Veil',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2041,
		name: 'Combust III',
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2042,
		name: 'Diurnal Balance',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2043,
		name: 'Nocturnal Balance',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2044,
		name: 'Neutral Sect',
		description: 'Spell cast and recast times are reduced.Helios is upgraded to Aspected Helios, while Benefic is upgraded to Aspected Benefic.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2045,
		name: 'シャーク',
		description: '受けるダメージが増加する状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2046,
		name: 'シャーク[被]',
		description: '受けるダメージが軽減される状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2047,
		name: 'Wide Awake',
		description: 'Resistance to the effects of dream powder has been granted by an unpleasant-yet-effective serum.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2048,
		name: 'En Avant',
		description: 'Cascade is upgraded to Reverse Cascade, Fountain is upgraded to Fountainfall, Windmill is upgraded to Rising Windmill, and Bladeshower is upgraded to Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2049,
		name: 'Technical Step',
		description: 'Caught up in the dance and only able to execute step actions, additional actions, Technical Finish, En Avant, Head Graze, Bolt, and Medical Kit.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2050,
		name: 'Technical Finish',
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2051,
		name: 'Esprit',
		description: 'The Esprit Gauge is increasing when you or a party member executes a weaponskill or casts a spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2052,
		name: 'Fan Dance III',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2053,
		name: 'Protect',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2054,
		name: 'Lord of Crowns Drawn',
		description: 'The Lord of Crowns card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2055,
		name: 'Lady of Crowns Drawn',
		description: 'The Lady of Crowns card is drawn.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2061,
		name: 'Nascent Flash',
		description: 'Absorbing HP with each physical attack delivered. Damage taken is also reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2062,
		name: 'Nascent Glint',
		description: 'Damage taken is reduced, and receiving 100% of all HP absorbed by the warrior who granted this status via Nascent Flash.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2063,
		name: 'Draw Power',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2064,
		name: 'Draw Fortitude',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2065,
		name: 'Aurora',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2066,
		name: 'Drained Power',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2067,
		name: 'Drained Fortitude',
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2068,
		name: 'Smackdown',
		description: 'Accuracy and damage dealt are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2069,
		name: 'Dissipation',
		description: 'Damage dealt and potency of all HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2070,
		name: 'Diurnal Opposition',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2071,
		name: 'Nocturnal Opposition',
		description: 'An aetherial barrier is preventing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2072,
		name: 'Focalization',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2073,
		name: 'Acidic Bite',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2074,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2075,
		name: 'Thunder II',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2076,
		name: 'Confiteor',
		description: 'Damage dealt and potency of all HP restoration actions are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2077,
		name: 'Inner Chaos',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2078,
		name: 'Chaotic Cyclone',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2079,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2080,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2081,
		name: 'Concussion',
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2082,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2083,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2084,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2085,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2086,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2087,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2088,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2089,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2090,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2091,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2092,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2093,
		name: 'Healing Magic Down',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2094,
		name: 'Water Resistance Down II',
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2095,
		name: 'Lightning Resistance Down II',
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2096,
		name: 'Wind Resistance Down II',
		description: 'Wind resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2097,
		name: 'Earth Resistance Down II',
		description: 'Earth resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2098,
		name: 'Fire Resistance Down II',
		description: 'Fire resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2099,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2100,
		name: 'Unstable Gravity',
		description: 'The gravity about you is highly unstable and will rupture upon expiration of this effect, dealing unaspected damage to those within range.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2101,
		name: 'Reprisal',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2102,
		name: 'Edge of Shadow',
		description: 'HP recovery is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2103,
		name: 'Concussion',
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2104,
		name: 'Poison',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2105,
		name: 'Standard Finish',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2106,
		name: 'Spell-in-Waiting: Flare',
		description: 'Designated target of Flare, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2109,
		name: 'Out of the Action',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2110,
		name: 'Ancient Circle',
		description: 'Fell darkness spreads out from where you stand. The Ancient Circle will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2111,
		name: 'Prey',
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2112,
		name: 'Prey',
		description: 'Marked as prey. Any party members you wander near will become marked in your stead.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2113,
		name: 'Standard Finish',
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2114,
		name: 'Gobskin',
		description: 'Hardened flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2115,
		name: 'Conked',
		description: 'Intelligence and mind are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2116,
		name: 'Meatily Shielded',
		description: 'A designated party member is protecting you.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2117,
		name: 'Meat Shield',
		description: 'You are protecting a party member.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2118,
		name: 'Harmonized',
		description: 'Potency of next physical damage spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2119,
		name: 'Cactguard',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2120,
		name: 'HP Boost',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2121,
		name: 'Astral Attenuation',
		description: 'Fire-, wind-, and lightning-aspected damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2122,
		name: 'Umbral Attenuation',
		description: 'Water-, earth-, and ice-aspected damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2123,
		name: 'Physical Attenuation',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2124,
		name: 'Aetherial Mimicry: Tank',
		description: 'Copying the aetherial properties of a tank.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2125,
		name: 'Aetherial Mimicry: DPS',
		description: 'Copying the aetherial properties of a DPS.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2126,
		name: 'Aetherial Mimicry: Healer',
		description: 'Copying the aetherial properties of a healer.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 101
	},
	{
		id: 2127,
		name: 'Brush with Death',
		description: 'Your resolve has deserted you. You are unable to perform actions that would result in your death.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2128,
		name: 'Burning Brand',
		description: 'Branded with a mark of flame and unable to deal damage to Lahabrea\'s shade. Fire damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2129,
		name: 'Freezing Brand',
		description: 'Branded with a mark of ice and unable to deal damage to Igeyorhm\'s shade. Ice damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2130,
		name: 'Surpanakha\'s Fury',
		description: 'Potency of Surpanakha is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2131,
		name: 'Battle High I',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2132,
		name: 'Battle High II',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2133,
		name: 'Battle High III',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2134,
		name: 'Battle High IV',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2135,
		name: 'Battle High V',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2136,
		name: 'Mortal Flame',
		description: 'Enveloped by hungry flames that will not be quenched until they have burnt something to ash.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2137,
		name: 'Final Decree Nisi γ',
		description: 'Decree Nisi γ is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2138,
		name: 'Final Decree Nisi δ',
		description: 'Decree Nisi δ is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2139,
		name: 'Final Judgment: Decree Nisi γ',
		description: 'Sentenced to receive Decree Nisi γ. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2140,
		name: 'Final Judgment: Decree Nisi δ',
		description: 'Sentenced to receive Decree Nisi δ. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2141,
		name: 'Final Judgment: Penalty IV',
		description: 'Sentenced to receive enfeeblement IV. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2142,
		name: 'Compressed Water',
		description: 'Highly compressed aetherial energy covers the body. Water-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2143,
		name: 'Compressed Lightning',
		description: 'Highly compressed aetherial energy covers the body. Lightning-aspected damage dealt when effect ends.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2144,
		name: 'Water Resistance Down II',
		description: 'Water resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2145,
		name: 'Lightning Resistance Down II',
		description: 'Lightning resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2146,
		name: 'Enigma Codex',
		description: 'The codex is granting you the power to manipulate time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2147,
		name: 'Enigma Codex',
		description: 'The codex is granting you the power to manipulate time.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2148,
		name: 'Contact Prohibition Ordained',
		description: 'You have received an order prohibiting contact.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2149,
		name: 'Contact Regulation Ordained',
		description: 'You have received an order to regulate contact.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2150,
		name: 'Escape Prohibition Ordained',
		description: 'You have received an order prohibiting escape.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2151,
		name: 'Escape Detection Ordained',
		description: 'You have received an order to detect escape.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2152,
		name: 'Final Word: Contact Prohibition',
		description: 'You have been issued a writ of contact prohibition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2153,
		name: 'Final Word: Contact Regulation',
		description: 'You have been issued a writ of contact regulation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2154,
		name: 'Final Word: Escape Prohibition',
		description: 'You have been issued a writ of escape prohibition.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2155,
		name: 'Final Word: Escape Detection',
		description: 'You have been issued a writ of escape detection.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2156,
		name: 'Suppuration',
		description: 'Maximum HP is reduced and damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 100
	},
	{
		id: 2157,
		name: 'Oil',
		description: 'Covered in a sticky oil. Both movement speed and fire resistance are reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2158,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2159,
		name: 'Red Light',
		description: 'Movement has been halted.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2161,
		name: 'Forward March',
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2162,
		name: 'About Face',
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2163,
		name: 'Left Face',
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2164,
		name: 'Right Face',
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2165,
		name: 'Temporal Displacement',
		description: 'Time is stopped.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2166,
		name: 'Magitek Field',
		description: 'Magic attacks are being absorbed and reflected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2168,
		name: 'Divine Veil',
		description: 'A holy barrier is nullifying damage. When barrier is completely absorbed, creates a barrier around all nearby party members.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2169,
		name: 'Divine Veil',
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2170,
		name: 'Flood of Shadow',
		description: 'HP recovery via healing actions is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2171,
		name: 'Dark Missionary',
		description: 'Damage taken is reduced while HP recovered via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2172,
		name: 'Arm\'s Length',
		description: 'Weakening enemies when attacked. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2173,
		name: 'Meditative Brotherhood',
		description: 'Grants chance to open a chakra to the monk who applied the effect when a weaponskill is used or a spell is cast by any affected party member or self.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2174,
		name: 'Brotherhood',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2175,
		name: 'Life Surge',
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2176,
		name: 'Meditation',
		description: 'Deep in contemplation.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2177,
		name: 'Tactician',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2178,
		name: 'Nature\'s Minne',
		description: 'Damage taken is reduced while HP recovered via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2179,
		name: 'Testudo',
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2180,
		name: 'Fast Draw',
		description: 'Weaponskill recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2181,
		name: 'Arm\'s Length',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2182,
		name: 'Excogitation',
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2183,
		name: 'Nocturnal Field',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2184,
		name: 'Retaliation',
		description: 'Delivering counter damage every time an attack is suffered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2185,
		name: 'Feint',
		description: 'Sustaining increased damage from target who executed Feint.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2186,
		name: 'Concentrate',
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2187,
		name: 'Aetheric Burst',
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2188,
		name: 'Largesse',
		description: 'Potency of all HP restoration actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2189,
		name: 'Innovation',
		description: 'Efficiency of Touch actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2190,
		name: 'Final Appraisal',
		description: 'Ready to stop short of completing synthesis.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2191,
		name: 'Muscle Memory',
		description: 'Efficiency of the next Synthesis action is significantly increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2192,
		name: 'Blight',
		description: 'Sustaining damage over time as lungs are filled with corruption. Damage taken from other attacks is also increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2194,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2196,
		name: 'Light in the Dark',
		description: 'Unleashing the Light trapped within you in defiance of the Darkness. Damage dealt and HP recovery are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2197,
		name: 'Death Becomes You',
		description: 'Shambling the line between dead and undead.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2198,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2199,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 2200,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 10
	},
	{
		id: 2201,
		name: 'Ancient Double',
		description: 'Each action executed will be immediately repeated.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2203,
		name: 'Mortal Powder Mark',
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2204,
		name: 'Normal',
		description: 'Maintaining an average body temperature.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2205,
		name: 'Running Hot: +1',
		description: 'Body temperature has risen to 1 level above normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2206,
		name: 'Atlas',
		description: 'Resisting the weight of a falling star. When this effect expires, impact will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2207,
		name: 'Unwavering Will',
		description: 'Protected by an unseen aegis, rendering all attacks ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2208,
		name: 'Blind to Rage',
		description: 'So consumed by inner rage that the feelings of others pale by comparison. Attacks of players under a Pall of Rage are ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2209,
		name: 'Blind to Grief',
		description: 'So consumed by inner grief that the feelings of others pale by comparison. Attacks of players under a Pall of Grief are ineffective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2210,
		name: 'Pall of Rage',
		description: 'Afflicted with an unaccountable feeling of anger. Attacks are ineffective against targets Blind to Rage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2211,
		name: 'Pall of Grief',
		description: 'Afflicted with an unaccountable feeling of loss. Attacks are ineffective against targets Blind to Grief.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2212,
		name: 'Running Hot: +2',
		description: 'Body temperature has risen to 2 levels above normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2213,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2214,
		name: 'Army\'s Paeon',
		description: 'Weaponskill and spell cast and recast time are reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2215,
		name: 'The Wanderer\'s Minuet',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2216,
		name: 'The Wanderer\'s Minuet',
		description: 'Critical hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2217,
		name: 'Mage\'s Ballad',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2218,
		name: 'Army\'s Paeon',
		description: 'Direct hit rate is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2219,
		name: 'Shadow of the Dragon',
		description: 'Drawing on power inherited from Nidhogg.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2220,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2221,
		name: 'Final Judgment: Penalty III',
		description: 'Sentenced to receive enfeeblement III. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 195
	},
	{
		id: 2222,
		name: 'Final Decree Nisi α',
		description: 'Decree Nisi α is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2223,
		name: 'Final Decree Nisi β',
		description: 'Decree Nisi β is issued.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2224,
		name: 'Final Judgment: Decree Nisi α',
		description: 'Sentenced to receive Decree Nisi α. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2225,
		name: 'Final Judgment: Decree Nisi β',
		description: 'Sentenced to receive Decree Nisi β. Disobedience will result in divine retribution.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2226,
		name: 'Veneration',
		description: 'Efficiency of Synthesis actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2227,
		name: 'Nascent Flash',
		description: 'Absorbing HP with each physical attack delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 65
	},
	{
		id: 2228,
		name: 'Surge Protection',
		description: 'Your body is covered in conductive matter, reducing the damage of certain attacks.',
		category: 2,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 199
	},
	{
		id: 2229,
		name: 'Static Condensation',
		description: 'Excess electricity is stored within your body, reducing HP recovery.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2230,
		name: 'パニック',
		description: 'パニックに陥った状態。ラムウから遠ざかるように移動してしまう。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2231,
		name: 'Fury\'s Bolt',
		description: 'Overcharged with electricity. Next attack will deal increased damage or differ in range.',
		category: 1,
		isPermanent: true,
		maxStacks: 14,
		partyListPriority: 200
	},
	{
		id: 2232,
		name: 'System Shock',
		description: 'Being electrified has weakened your heart. Further electrification will prove fatal, resulting in KO. ',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2233,
		name: 'Electrified',
		description: 'Wracked by electricity. Nearby players will also be Electrified when the effect ends and the charge disperses.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2235,
		name: 'Hated of the Vortex',
		description: 'The accursed taunt of the winds spurs you to fight only Garuda. Damage against all other targets is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2236,
		name: 'Hated of Embers',
		description: 'The accursed spitting of the flames spurs you to fight only Ifrit. Damage against all other targets is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2237,
		name: 'Irons of Purgatory',
		description: 'Manacled to burning chains. Will suffer damage if separated from similarly enchained party members.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2238,
		name: 'Astral Effect',
		description: 'Due to a severe disruption in aetherial balance, damage taken from astrally charged attacks is increased. Damage taken from umbrally charged attacks is decreased, and will result in the Umbral Effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2239,
		name: 'Umbral Effect',
		description: 'Due to a severe disruption in aetherial balance, damage taken from umbrally charged attacks is increased. Damage taken from astrally charged attacks is decreased, and will result in the Astral Effect.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2240,
		name: 'Forward with Thee',
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved forward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2241,
		name: 'Back with Thee',
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved backward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2242,
		name: 'Left with Thee',
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved leftward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2243,
		name: 'Right with Thee',
		description: 'Affected by displacement magicks. When this effect ends, you will be stunned, then forcibly moved rightward.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2244,
		name: 'Anemomorph',
		description: 'The flock of sin eaters have assumed the form of a cyclone.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2245,
		name: 'Hated of Levin',
		description: 'Ramuh has cursed you to discharge a burst of lightning-aspected damage at regular intervals. When this effect expires, you will Panic.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2246,
		name: 'Slow',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2247,
		name: 'Waymark',
		description: 'A lodestone by which the flock of sin eaters will chart their course. When this effect expires, you will be stunned.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2248,
		name: 'Blunt Resistance Down',
		description: 'Blunt resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2249,
		name: 'Unstable',
		description: 'Unable to keep your balance. Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2250,
		name: 'Lightheaded',
		description: 'Experiencing dizziness. Certain attacks will cause Concussion.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2251,
		name: 'Freezing',
		description: 'Your body is slowly turning to ice. When this effect expires, you will experience a Deep Freeze.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2252,
		name: 'Deep Freeze',
		description: 'Your body is encased in ice, preventing action.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2253,
		name: 'Refulgent Chain',
		description: 'Bound with chains of light. Your Refulgent Fate will be sealed when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2254,
		name: 'Refulgent Chain',
		description: 'Bound with chains of light. Your Refulgent Fate will be sealed when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2255,
		name: 'Refulgent Fate',
		description: 'Cursed by binding light. If the distance between you and the player to whom you are bound becomes too great or too small, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2256,
		name: 'Refulgent Fate',
		description: 'Cursed by binding light. If the distance between you and the player to whom you are bound becomes too great or too small, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2257,
		name: 'Lightsteeped',
		description: 'Overflowing with astral energy. Upon accumulating 5 stacks, you will deal unaspected damage to those nearby.',
		category: 2,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 199
	},
	{
		id: 2258,
		name: 'Wyrmclaw',
		description: 'Shredded by draconic talons. KO will occur when countdown reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2259,
		name: 'Wyrmfang',
		description: 'Torn by draconic teeth. KO will occur when countdown reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2260,
		name: 'Hated of Frost',
		description: 'Cursed by the lady herself. Damage from Hraesvelgr is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2261,
		name: 'Hated of the Wyrm',
		description: 'Cursed by the great wyrm himself. Damage from Shiva is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2262,
		name: 'Grace of Light',
		description: 'Blessed by Light. Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2263,
		name: 'Shock Spikes',
		description: 'Elemental spikes are dealing lightning damage to attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2264,
		name: 'Braced',
		description: 'Ready and able to Stand Firm.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2265,
		name: 'Standing Firm',
		description: 'Unbowed even by relentless onslaught.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2267,
		name: 'Meat Shield',
		description: 'Subjects are serving as defense. All damage is nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2268,
		name: 'Running Cold: -1',
		description: 'Body temperature has dropped to 1 level below normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2269,
		name: 'FATE Participant',
		description: 'Actively participating in a FATE. Actions restricted to FATEs are available, though certain standard actions are unavailable. ',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2271,
		name: 'Panic',
		description: 'Excessively afeared. Overcome with the urge to flee from particular foes.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2274,
		name: 'Running Cold: -2',
		description: 'Body temperature has dropped to 2 levels below normal.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2275,
		name: 'Intemperate',
		description: 'Easily affected by changes in body temperature. When effect expires, running hot or cold will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2276,
		name: 'In Costume',
		description: 'Unusually attired.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2277,
		name: 'Hot Brand: +1',
		description: 'Bearing a fever-inducing brand. Body temperature will increase by 1 level when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2278,
		name: 'Light Resistance Down',
		description: 'Light resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2280,
		name: 'Enlarged',
		description: 'Body has grown to a massive size.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 199
	},
	{
		id: 2281,
		name: 'Fully Enlarged',
		description: 'Body has grown to maximum size.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2282,
		name: 'Embolden',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2283,
		name: 'Collective Unconscious',
		description: 'An area of mind attunement is created, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2284,
		name: 'Running Wild',
		description: 'Unleashing full strength, as commanded.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2285,
		name: 'Fetters',
		description: 'Unable to execute actions and sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2286,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2287,
		name: 'True Hallowed Ground',
		description: 'Impervious to all damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2288,
		name: 'Shield Protocol A',
		description: 'Shield protocol A is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2289,
		name: 'Shield Protocol B',
		description: 'Shield protocol B is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2290,
		name: 'Shield Protocol C',
		description: 'Shield protocol C is active. Attacks against certain targets are ineffective.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2291,
		name: 'Hot Brand: +2',
		description: 'Bearing a fever-inducing brand. Body temperature will increase by 2 levels when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2292,
		name: 'Cold Brand: -1',
		description: 'Bearing a chill-inducing brand. Body temperature will decrease by 1 level when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2293,
		name: 'Dash',
		description: 'Movement speed is greatly increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2294,
		name: 'Pyretic Booster',
		description: 'The G-Warrior\'s capabilities are enhanced, decreasing weaponskill cast and recast time and increasing movement speed. Use of this mode gradually drains HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2295,
		name: 'Aetherial Aegis',
		description: 'The G-Warrior is protected by an aetherial barrier, reducing damage taken. Use of this mode gradually drains EP.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2296,
		name: 'Cold Brand: -2',
		description: 'Bearing a chill-inducing brand. Body temperature will decrease by 2 levels when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2297,
		name: 'Hot Blade: +1',
		description: 'Temperature of the entropic blade has risen 1 level.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2298,
		name: 'Hot Blade: +2',
		description: 'Temperature of the entropic blade has risen 2 levels.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2299,
		name: 'Cold Blade: -1',
		description: 'Temperature of the entropic blade has dropped 1 level.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2300,
		name: 'Cold Blade: -2',
		description: 'Temperature of the entropic blade has dropped 2 levels.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2301,
		name: 'Tender Anaphylaxis',
		description: 'Smothered with affection. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2302,
		name: 'Jealous Anaphylaxis',
		description: 'Smothered with possessive bitterness. Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2303,
		name: 'True Walking Dead',
		description: 'Certain death when counter reaches zero. Effect dissipates upon being healed by an amount that totals your maximum HP.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2304,
		name: 'Floating Fetters',
		description: 'Bound in midair and unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2305,
		name: 'Zombification',
		description: 'Turned into a mindless zombie under enemy control.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2306,
		name: 'Boot Camp Mode',
		description: 'Boot Camp protocol is loaded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2307,
		name: 'Safety Lock: Pyretic Booster',
		description: 'Safety lock is on, preventing use of the Pyretic Booster.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2308,
		name: 'Safety Lock: Aetherial Aegis',
		description: 'Safety lock is on, preventing use of the Aetherial Aegis.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2309,
		name: 'A Bit Berserk',
		description: 'Getting a taste for violence. Will go Truly Berserk upon reaching maximum stacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2310,
		name: 'Truly Berserk',
		description: 'Thoughtlessly raining auto-attacks upon main target while inflicting great damage to self with each one.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2311,
		name: 'Spirit of the Aetherweaver',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2312,
		name: 'Spirit of the Martialist',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2313,
		name: 'Spirit of the Savior',
		description: 'Potency of all HP restoration actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2314,
		name: 'Spirit of the Veteran',
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2315,
		name: 'Spirit of the Platebearer',
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2316,
		name: 'Spirit of the Guardian',
		description: 'Maximum HP and defense are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2317,
		name: 'Spirit of the Ordained',
		description: 'Maximum MP, damage dealt, and potency of all HP restoration actions are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2318,
		name: 'Spirit of the Skirmisher',
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2319,
		name: 'Spirit of the Watcher',
		description: 'Evasion is increased while maximum HP is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2320,
		name: 'Spirit of the Profane',
		description: 'Damage dealt is increased while potency of all HP restoration actions is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2321,
		name: 'Spirit of the Irregular',
		description: 'Damage dealt and taken is increased while maximum HP is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2322,
		name: 'Spirit of the Breathtaker',
		description: 'Evasion, movement speed, and poison resistance are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2323,
		name: 'Spirit of the Bloodsucker',
		description: 'Damage dealt is increased, and attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2324,
		name: 'Spirit of the Beast',
		description: 'Maximum HP and defense are increased, and attacks generate HP equal to a portion of damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2325,
		name: 'Spirit of the Templar',
		description: 'Maximum HP, defense, and damage dealt are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2326,
		name: 'Banner of Noble Ends',
		description: 'HP recovered via most healing actions is nullified, but damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2327,
		name: 'Banner of Honored Sacrifice',
		description: 'Sustaining damage over time in exchange for dealing increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2328,
		name: 'Banner of Tireless Conviction',
		description: 'Damage taken is increased, but your conviction is strengthened with each attack received. At maximum stacks, take up the Banner of Unyielding Defense.Banner of Unyielding Defense Effect: Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 2329,
		name: 'Banner of Firm Resolve',
		description: 'Damage dealt is reduced, but your resolve is strengthened with each attack received. At maximum stacks, take up the Banner of Unyielding Defense.Banner of Unyielding Defense Effect: Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 1
	},
	{
		id: 2330,
		name: 'Banner of Solemn Clarity',
		description: 'You take a moment to still your mind, gaining clarity as time passes. At maximum stacks, take up the Banner of Limitless Grace.Banner of Limitless Grace Effect: Potency of HP restoration actions is increased while MP cost is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 1
	},
	{
		id: 2331,
		name: 'Banner of Honed Acuity',
		description: 'Damage taken is increased, but your senses sharpen with each attack evaded. At maximum stacks, take up the Banner of Transcendent Finesse.Banner of Transcendent Finesse Effect: Critical hit rate is increased while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 1
	},
	{
		id: 2332,
		name: 'Lost Font of Magic',
		description: 'Increasing damage dealt while draining own MP.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2333,
		name: 'Lost Protect',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 36
	},
	{
		id: 2334,
		name: 'Lost Shell',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 35
	},
	{
		id: 2335,
		name: 'Lost Swift',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2336,
		name: 'Lost Stealth',
		description: 'Unable to be detected. Movement speed is severely reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2337,
		name: 'Lost Reflect',
		description: 'Reflecting magic back on its caster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2338,
		name: 'Lost Spellforge',
		description: 'All attacks deal magic damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2339,
		name: 'Lost Steelsting',
		description: 'All attacks deal physical damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2340,
		name: 'Lost Banish',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2341,
		name: 'Lost Bravery',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2342,
		name: 'Auto-potion',
		description: 'Recover HP automatically when HP falls below 50%. When triggered, there is a 50% chance the effect will end. While enlivened by the Spirit of the Breathtaker, this chance is reduced to 10%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2343,
		name: 'Auto-ether',
		description: 'Recover MP automatically when MP falls below 20%. When triggered, there is a 50% chance the effect will end. While enlivened by the Spirit of the Breathtaker, this chance is reduced to 10%.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2344,
		name: 'Auto-remedy',
		description: 'The next status ailment suffered will be cured automatically.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 25
	},
	{
		id: 2345,
		name: 'Lost Manawall',
		description: 'Damage taken is reduced and immune to most knockback and draw-in effects.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2346,
		name: 'Lost Font of Power',
		description: 'Damage dealt and critical hit rate are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2347,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2348,
		name: 'Reminiscence',
		description: 'Ruminating on the memories of the fallen. Ready to use select lost actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2349,
		name: 'Deep Essence of the Victor',
		description: 'Critical hit rate is increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2350,
		name: 'Hastilude',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2351,
		name: 'Hastilude Heartened',
		description: 'Damage taken is significantly reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2352,
		name: 'Banner of Unyielding Defense',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2353,
		name: 'Banner of Limitless Grace',
		description: 'Potency of all HP restoration actions is increased while MP cost is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2354,
		name: 'Banner of Transcendent Finesse',
		description: 'Critical hit rate is increased while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2355,
		name: 'Reraise',
		description: 'Chance of automatic revival upon KO.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2356,
		name: 'Lost Incense',
		description: 'Enmity is increased and damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2357,
		name: 'Fully Analyzed',
		description: 'All vulnerabilities have been detected. Any damage taken will be severe.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2358,
		name: 'Marching Orders',
		description: 'Officially selected for priority deployment in critical engagements per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2359,
		name: 'Marching Orders: Vigil for the Lost',
		description: 'Officially selected for priority deployment in the Vigil for the Lost engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2360,
		name: 'Marching Orders: Kill It with Fire',
		description: 'Officially selected for priority deployment in the Kill It with Fire engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2361,
		name: 'Marching Orders: The Hunt for Red Choctober',
		description: 'Officially selected for priority deployment in the Hunt for Red Choctober engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2362,
		name: 'Marching Orders: The Final Furlong',
		description: 'Officially selected for priority deployment in the Final Furlong engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2363,
		name: 'Marching Orders: Rise of the Robots',
		description: 'Officially selected for priority deployment in the Rise of the Robots engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2364,
		name: 'Marching Orders: Metal Fox Chaos',
		description: 'Officially selected for priority deployment in the Metal Fox Chaos engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2365,
		name: 'High Morale',
		description: 'A dauntless spirit guides you to victory. Mettle earned is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2367,
		name: 'Pall of Darkness',
		description: 'Encroaching gloom is impairing your accuracy while rendering you immune to Demon Eye.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2368,
		name: 'Warmonger',
		description: 'The thrill of battle leads you to crave only more. Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2369,
		name: 'Physical Aversion',
		description: 'Vulnerable to physical attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2370,
		name: 'Magical Aversion',
		description: 'Vulnerable to magic attacks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2371,
		name: 'Lightning Resistance Down',
		description: 'Lightning resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2372,
		name: 'Absolute Protect',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2373,
		name: 'Mark of Mortality',
		description: 'Branded with a mark of mortality. Damage dealt is reduced. Too many stacks will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2374,
		name: 'EP Penalty',
		description: 'EP regeneration has stopped.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2375,
		name: 'Feelin\' Hot',
		description: 'Flammability is increased due to the effects of the flame dance.',
		category: 1,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2376,
		name: 'Quintuplecast',
		description: 'Able to cast up to 5 consecutive spells with no recast time.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 200
	},
	{
		id: 2377,
		name: 'Imbued Saber',
		description: 'Saber is imbued with magicks.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2378,
		name: 'Haste+',
		description: 'Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2379,
		name: 'Fresh Perspective',
		description: 'Operating outside the usual conditions of combat.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2380,
		name: 'Warmonger',
		description: 'The thrill of battle leads you to crave only more. Damage dealt is increased while damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2381,
		name: 'Forward March',
		description: 'Have received the order to advance. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2382,
		name: 'About Face',
		description: 'Have received the order to retreat. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2383,
		name: 'Left Face',
		description: 'Have received the order to move left. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2384,
		name: 'Right Face',
		description: 'Have received the order to move right. Order will be executed when status fades.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2385,
		name: 'Hypercharged Condensation',
		description: 'Inexorably drawing in the hypercharged clouds.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2386,
		name: 'Stygian Tendrils',
		description: 'Sustaining damage over time from grasping tendrils.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2387,
		name: 'Curse of Darkness',
		description: 'Cursed to become a fell minion, unleashing Particle Beam when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2388,
		name: 'Nausea',
		description: 'Feeling as if you might vomit at any moment. Damage dealt and maximum HP are decreased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2389,
		name: 'Pain',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2390,
		name: 'Hover',
		description: 'Floating above ground.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2391,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2392,
		name: 'Lightning Shot',
		description: 'Next weaponskill will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2394,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2395,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2396,
		name: 'At the Limit',
		description: 'Unable to execute limit breaks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2398,
		name: 'Incurable',
		description: 'All HP restoration is nullified.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2399,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2400,
		name: '孤独感',
		description: '仲間から離れると恐慌状態になる。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2401,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2402,
		name: 'Evasion Up',
		description: 'Evasion is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2403,
		name: 'Evasion Down',
		description: 'Evasion is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2404,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2405,
		name: 'Out of Control',
		description: 'Separated from master and becoming increasingly agitated. The higher the stack, the more damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2406,
		name: 'Shock Spikes',
		description: 'Elemental spikes are dealing lightning damage to and sometimes stunning attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2407,
		name: 'Fetters',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2408,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2409,
		name: 'Process of Elimination A',
		description: 'Optimized for engaging with alliance A. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2410,
		name: 'Process of Elimination B',
		description: 'Optimized for engaging with alliance B. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2411,
		name: 'Process of Elimination C',
		description: 'Optimized for engaging with alliance C. Attacks by members of other alliances are nullified.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2412,
		name: 'Cover',
		description: 'Protecting an ally.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2413,
		name: 'Covered',
		description: 'Under the protection of an ally.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2415,
		name: 'Duties as Assigned',
		description: 'Unable to change to another class or job.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2416,
		name: 'Light Beyond Darkness',
		description: 'Unleashing the Light trapped within you in defiance of the Darkness.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2418,
		name: 'Collector\'s Standard',
		description: 'Effectiveness of brazen and meticulous actions is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2419,
		name: 'Servant of Shadow',
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2420,
		name: 'Servant of Shadow',
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2421,
		name: 'Servant of Shadow',
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2422,
		name: 'Servant of Shadow',
		description: 'Indentured to the Shadowkeeper and soon to spawn a Shadow Servant at your feet.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2423,
		name: 'Shadowed',
		description: 'Your shadow has been claimed by the Shadowkeeper. Damage taken by your shadow will also be taken by you.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2424,
		name: 'Shackled Apart',
		description: 'Drawing too near the ally to whom you are chained will result in increased damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2425,
		name: 'Shackled Together',
		description: 'Drawing too far away from the ally to whom you are chained will result in increased damage taken.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2430,
		name: 'Wanderer\'s Fate',
		description: 'Victim of a labyrinthine fate, resulting in knockback when the Fateful Words are spoken.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2431,
		name: 'Sacrifice\'s Fate',
		description: 'Victim of a labyrinthine fate, to be drawn in by Fateful Words.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2432,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2433,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2434,
		name: 'Spirit of the Gambler',
		description: 'Evasion, critical hit rate, and direct hit rate are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2435,
		name: 'Spirit of the Elder',
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2436,
		name: 'Spirit of the Duelist',
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2437,
		name: 'Spirit of the Fiendhunter',
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2438,
		name: 'Spirit of the Indomitable',
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2439,
		name: 'Spirit of the Divine',
		description: 'Defense, damage dealt, and maximum HP are increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2440,
		name: 'Lost Flare Star',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2441,
		name: 'Lost Rend Armor',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2442,
		name: 'ロスト・ウェポンブレイク',
		description: '与ダメージが低下した状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2443,
		name: 'Lost Aethershield',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2444,
		name: 'Lost Dervish',
		description: 'Critical hit rate and damage dealt are increased, while weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2445,
		name: 'Sword-bearer',
		description: 'Wielding a sword.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2446,
		name: 'Shield-bearer',
		description: 'Wielding a shield.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2447,
		name: 'Reversal of Forces',
		description: 'Gravitational principles are inverted. The heavy has become light, and the light, heavy.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2448,
		name: 'Boosted',
		description: 'Storing power. Potency of next action is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2449,
		name: 'Resurrection Restricted',
		description: 'Resurrection by certain means is impossible.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2450,
		name: 'Mimicry',
		description: 'Mimicking the actions of opponents. Physical attacks are answered with physical attacks, magical attacks with magical attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2451,
		name: 'Powder Mark',
		description: 'Emblazoned with a mark that will cause you to explode when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2452,
		name: 'Return',
		description: 'Aetherially entwined with the temporal manifold. You will be stunned and drawn back to your aetherial trace when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2453,
		name: 'Return IV',
		description: 'Aetherially entwined with the temporal manifold. Return will be applied when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2454,
		name: 'Spell-in-Waiting: Unholy Darkness',
		description: 'Designated target of Unholy Darkness, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2455,
		name: 'Spell-in-Waiting: Dark Fire III',
		description: 'Designated target of Dark Fire III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2456,
		name: 'Spell-in-Waiting: Shadoweye',
		description: 'Designated target of Shadoweye, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2460,
		name: 'Spell-in-Waiting: Dark Eruption',
		description: 'Designated target of Dark Eruption, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2461,
		name: 'Spell-in-Waiting: Dark Water III',
		description: 'Designated target of Dark Water III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2462,
		name: 'Spell-in-Waiting: Dark Blizzard III',
		description: 'Designated target of Dark Blizzard III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2463,
		name: 'Spell-in-Waiting: Dark Aero III',
		description: 'Designated target of Dark Aero III, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2464,
		name: 'Spell-in-Waiting: Return',
		description: 'Designated target of Return, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2465,
		name: 'Ice Resistance Down II',
		description: 'Ice resistance is significantly reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2466,
		name: 'Stock Holder',
		description: 'Holding recollections of Eden\'s primals ready.',
		category: 1,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2467,
		name: 'Pride of the Lioness',
		description: 'Blessed by the spirit of the lioness. Physical ability is enhanced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 150
	},
	{
		id: 2468,
		name: 'Junction Shiva',
		description: 'Drawing strength from the memory of Shiva.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2469,
		name: 'Junction Titan',
		description: 'Drawing strength from the memory of Titan.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2470,
		name: 'Junction Loghrif',
		description: 'Awakened as the Oracle of Darkness.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2471,
		name: 'Head in the Clouds',
		description: 'Perched atop a cloud and unable to be hit by attacks from below.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2472,
		name: 'Head in the Clouds',
		description: 'Perched on a cloud and able to attack cloudtop enemies.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2473,
		name: 'Aetherial Depletion',
		description: 'Aether is waning, decreasing physical ability.',
		category: 2,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 199
	},
	{
		id: 2474,
		name: 'Movement Edict: 2 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 2 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2475,
		name: 'Movement Edict: 3 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 3 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2476,
		name: 'Movement Edict: 4 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 4 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2477,
		name: 'Movement Edict: 2 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 2 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2478,
		name: 'Movement Edict: 3 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 3 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2479,
		name: 'Movement Edict: 4 Squares',
		description: 'Temporarily in service to the Queen. Your Move: 4 Squares will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2480,
		name: 'Your Move: 2 Squares',
		description: 'Ordered to move a total of 2 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2481,
		name: 'Your Move: 3 Squares',
		description: 'Bound to execute the Queen\'s edict by moving a total of 3 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2482,
		name: 'Your Move: 4 Squares',
		description: 'Bound to execute the Queen\'s edict by moving a total of 4 squares from the point where this effect activated. Disobedience will result in heavy damage.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2483,
		name: 'Twice-come Ruin',
		description: 'Bearing signs that the end may be nigh, decreasing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2484,
		name: 'Cleric Stance',
		description: 'Healing potency is reduced while damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2485,
		name: 'Twice-come Ruin',
		description: 'Bearing signs that the end may be nigh, decreasing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2486,
		name: 'Sucked In',
		description: 'Inexorably pulled in one direction. Unable to jump or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2487,
		name: 'Mortal Powder Mark',
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2488,
		name: 'Phantom Edge',
		description: 'Wielding aetherial blades. Damage dealt is decreased, but its cuts are not impeded by physical objects.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2489,
		name: 'Merciful Air',
		description: 'Wielding elegant katana in a manner reminiscent of Blaz.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2490,
		name: 'Baleful Air',
		description: 'Wielding intimidating greatswords in a manner reminiscent of Velibor.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2491,
		name: 'Iron Air',
		description: 'Wielding relentless fists in a manner reminiscent of Aggie.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2492,
		name: 'Tingling',
		description: 'Potency of next physical damage spell is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2493,
		name: 'Cold Fog',
		description: 'Enveloped in a cold fog. Any damage taken will grant the effect of Touch of Frost.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2494,
		name: 'Touch of Frost',
		description: 'Enveloped in an icy fog. Able to execute the blue magic spell White Death.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2495,
		name: 'Angel\'s Snack',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2496,
		name: 'Chelonian Gate',
		description: 'Damage taken is reduced. Taking a certain amount of damage grants the effect of Auspicious Trance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2497,
		name: 'Auspicious Trance',
		description: 'Able to execute the blue magic spell Divine Cataract.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2498,
		name: 'Basic Instinct',
		description: 'Movement speed, damage dealt, and healing magic potency are increased. Mighty Guard will not reduce damage dealt while Basic Instinct is in effect.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2499,
		name: 'Incendiary Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2500,
		name: 'Dragon Force',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2501,
		name: 'Lightheaded',
		description: 'Experiencing dizziness. Certain attacks will cause additional effects.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2502,
		name: 'Phantom Flurry',
		description: 'Executing Phantom Flurry.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2503,
		name: 'Aetherial Ward',
		description: 'Protected by a magicked barrier. Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2504,
		name: 'Minimum',
		description: 'Shrunk to a fraction of your normal size. Damage dealt is reduced and damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2505,
		name: 'Herbsona',
		description: 'Transformed into a leafman. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2506,
		name: 'Vulnerability Down',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 30
	},
	{
		id: 2507,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2508,
		name: 'Slashing Resistance Down',
		description: 'Slashing resistance is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 50
	},
	{
		id: 2509,
		name: 'Bloody Ruin',
		description: 'Carapace has taken on a red cast, indicating an increase in strength at the cost of speed.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2510,
		name: 'Torrential Ruin',
		description: 'Carapace has taken on a blue cast, indicating a tendency toward indiscriminate violence.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2511,
		name: 'Avaricious Ruin',
		description: 'Carapace has taken on a green cast, indicating an inclination to consume other golems.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2512,
		name: 'Subtle Ruin',
		description: 'Carapace has taken on a white cast, indicating the activation of regenerative capabilities.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2513,
		name: 'Formless Fist',
		description: 'Employing all three pugilistic fighting stances─opo-opo, raptor, and coeurl. Additional effects of actions used in these forms will also be triggered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2514,
		name: 'Six-sided Star',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2516,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2517,
		name: 'Back from the Brink',
		description: 'Nullifies the damage dealt by certain areas of ground. Effect lasts until Transcendent expires or you move to a safe area.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2518,
		name: 'Bind',
		description: 'Unable to move.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2519,
		name: 'Doom',
		description: 'Certain death when counter reaches zero.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2520,
		name: 'Infirmity',
		description: 'HP recovery via healing magic is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 196
	},
	{
		id: 2521,
		name: 'HP Penalty',
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 197
	},
	{
		id: 2522,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 198
	},
	{
		id: 2523,
		name: 'Restricted Access',
		description: 'Unable to move or execute certain actions due to duty restrictions.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2524,
		name: 'Royal Favor',
		description: 'Battle prowess is maximized.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2527,
		name: 'Mortal Powder Mark',
		description: 'Emblazoned with a smoldering mark that will cause you to explode with a vengeance when the effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2528,
		name: 'Ice Spikes',
		description: 'Elemental spikes are dealing ice damage to and slowing down attackers.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2529,
		name: 'Sucked In',
		description: 'Inexorably pulled in one direction. Unable to jump or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2530,
		name: 'Thrice-come Ruin',
		description: 'Bearing signs that the end may be nigh. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2531,
		name: 'Spell-in-Waiting: Quietus',
		description: 'Designated target of Quietus, which will activate when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2532,
		name: 'Cloying Condensation',
		description: 'Unable to jump due to the Cloud of Darkness\'s airborne magicks.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2533,
		name: 'Thrice-come Ruin',
		description: 'Bearing signs that the end may be nigh, reducing damage dealt. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: true,
		maxStacks: 3,
		partyListPriority: 200
	},
	{
		id: 2534,
		name: 'Twice-come Ruin',
		description: 'Bearing signs that the end may be nigh. Too many stacks will result in Doom.',
		category: 2,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 200
	},
	{
		id: 2535,
		name: 'Distorted',
		description: 'Black wavelengths pulse in front of you, and white wavelengths behind, causing massive damage if hit by attacks of the opposite color.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2537,
		name: 'Strong of Spear',
		description: 'Weapon is enhanced.Will grant the effect of Stronger Together if Hansel and Gretel move close together.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2538,
		name: 'Strong of Shield',
		description: 'Shield is enhanced, decreasing damage taken. Attacks from the sides and rear are turned back on the attacker.Will grant the effect of Stronger Together if Hansel and Gretel move close together.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2539,
		name: 'Stronger Together',
		description: 'Hansel and Gretel\'s proximity enhances their weapons and shields, decreasing damage taken. Attacks from the sides and rear are turned back on the attacker.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2541,
		name: '不浄の侵食',
		description: '不浄に侵食されつつある状態。カウント0で不浄の恐怖状態に陥り、対象から離れようとしてしまう。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2542,
		name: '不浄の恐怖',
		description: '不浄の恐怖で行動できなくなり、対象から離れようとしてしまう状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2543,
		name: 'Gelatinous',
		description: 'Rendered a boneless ooze unable to jump or execute actions. Movement speed is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2545,
		name: 'Duel or Die',
		description: 'Singled out for combat. Damage from opponent\'s first blow will be reduced; however, failing to receive a blow from said opponent before this effect expires will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2547,
		name: 'On Fire',
		description: 'Armed with a flaming axe. Additional effects are applied to auto-attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2548,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2549,
		name: 'Nasty Surprise',
		description: 'Gunberd is loaded with special ammo.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2550,
		name: 'Damage Up',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2551,
		name: 'Heavy',
		description: 'Movement speed is reduced.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2553,
		name: 'One Mind',
		description: 'Giving and receiving support. Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2554,
		name: 'Lunar Defensive',
		description: 'Battle tactics optimized for defense.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2555,
		name: 'Physical Damage Up',
		description: 'Physical damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2556,
		name: 'Magic Damage Up',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2557,
		name: 'Enthunder',
		description: 'Lightning damage added to auto-attacks.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2558,
		name: 'Lost Burst',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2559,
		name: 'Lost Rampage',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2560,
		name: 'Lost Chainspell',
		description: 'Spells require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2561,
		name: 'Lost Protect II',
		description: 'Physical damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 36
	},
	{
		id: 2562,
		name: 'Lost Shell II',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 35
	},
	{
		id: 2563,
		name: 'Lost Bubble',
		description: 'Maximum HP is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 34
	},
	{
		id: 2564,
		name: 'Lost Excellence',
		description: 'Impervious to most attacks. Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2565,
		name: 'Memorable',
		description: 'Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2566,
		name: 'Lost Blood Rage',
		description: 'Damage dealt is increased, while damage taken is decreased.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 1
	},
	{
		id: 2567,
		name: 'Blood Rush',
		description: 'Gradually recovering HP and MP. Damage dealt is increased and ability recast time is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2568,
		name: 'Gullstorm',
		description: 'Chance of landing a large-sized fish while fishing is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2569,
		name: 'Cetaceous Speed',
		description: 'GP regeneration rate is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2570,
		name: 'Auroral Flipper',
		description: 'Chance of triggering a spectral current is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2571,
		name: 'Destiny Drawn',
		description: 'An arcanum is drawn from the deck per the vicissitudes of fortune.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2572,
		name: 'The Scroll',
		description: 'Damage dealt is increased. Auto-attack delay, as well as weaponskill and spell cast time and recast time are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2573,
		name: 'Break',
		description: 'Activity is severely impeded.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2574,
		name: 'Lightning Rod',
		description: 'Highly conductive and likely to be targeted by lightning.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2575,
		name: 'Right Arm Primed',
		description: 'Right arm is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2576,
		name: 'Left Arm Primed',
		description: 'Left arm is enhanced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2577,
		name: 'FATE Participant',
		description: 'Actively participating in a FATE. ',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2578,
		name: 'Immobile Suit',
		description: 'Unable to teleport due to system overload.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2579,
		name: 'Guise',
		description: 'Dressed for the occasion.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2580,
		name: 'Marching Orders: Feeling the Burn',
		description: 'Officially selected for priority deployment in the Feeling the Burn engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2581,
		name: 'Marching Orders: On Serpents\' Wings',
		description: 'Officially selected for priority deployment in the On Serpents\' Wings engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2582,
		name: 'Marching Orders: Never Cry Wolf',
		description: 'Officially selected for priority deployment in the Never Cry Wolf engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2583,
		name: 'Marching Orders: Here Comes the Cavalry',
		description: 'Officially selected for priority deployment in the Here Comes the Cavalry engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2584,
		name: 'Marching Orders: Worn to a Shadow',
		description: 'Officially selected for priority deployment in the Worn to a Shadow engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2585,
		name: 'Marching Orders: A Familiar Face',
		description: 'Officially selected for priority deployment in the A Familiar Face engagement per Resistance leadership.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2586,
		name: 'Death\'s Design',
		description: 'Damage taken from the reaper who applied this effect is increased. Increases said reaper\'s Soul Gauge if defeated before effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2587,
		name: 'Soul Reaver',
		description: 'Able to execute Gibbet, Gallows, and Guillotine.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2588,
		name: 'Enhanced Gibbet',
		description: 'Next Gibbet will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2589,
		name: 'Enhanced Gallows',
		description: 'Next Gallows will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2590,
		name: 'Enhanced Void Reaping',
		description: 'Next Void Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2591,
		name: 'Enhanced Cross Reaping',
		description: 'Next Cross Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2592,
		name: 'Immortal Sacrifice',
		description: 'Able to execute Plentiful Harvest.',
		category: 1,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2593,
		name: 'Enshrouded',
		description: 'Playing host to an avatar.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2594,
		name: 'Soulsow',
		description: 'Able to execute Harvest Moon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2595,
		name: 'Threshold',
		description: 'Able to execute Regress.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2596,
		name: 'Crest of Time Borrowed',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2597,
		name: 'Crest of Time Borrowed',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2598,
		name: 'Crest of Time Returned',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2599,
		name: 'Arcane Circle',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2600,
		name: 'Circle of Sacrifice',
		description: 'Grants Immortal Sacrifice to the reaper who applied this effect after successfully landing a weaponskill or spell.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2601,
		name: 'Bloodsown Circle',
		description: 'Grants Immortal Sacrifice to the reaper who applied this effect when duration expires.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2602,
		name: 'Just Chilling',
		description: 'Lowering temperature in a show of righteous fury.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2603,
		name: 'Hubris',
		description: 'Overconfident and careless in the face of a small opposing force. Damage taken is increased.',
		category: 2,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 50
	},
	{
		id: 2604,
		name: 'Kardia',
		description: 'Triggers a healing effect on a player under the effect of Kardion granted by you when casting attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 45
	},
	{
		id: 2605,
		name: 'Kardion',
		description: 'Triggers a healing effect when the sage who applied this status casts attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 45
	},
	{
		id: 2606,
		name: 'Eukrasia',
		description: 'Certain actions are being augmented.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2607,
		name: 'Eukrasian Diagnosis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2608,
		name: 'Differential Diagnosis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2609,
		name: 'Eukrasian Prognosis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2610,
		name: 'Soteria',
		description: 'The healing potency of Kardia is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2611,
		name: 'Zoe',
		description: 'Healing magic potency of next spell cast is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2612,
		name: 'Haima',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2613,
		name: 'Panhaima',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2614,
		name: 'Eukrasian Dosis',
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2615,
		name: 'Eukrasian Dosis II',
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2616,
		name: 'Eukrasian Dosis III',
		description: 'Sustaining unaspected damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2617,
		name: 'Physis',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2618,
		name: 'Kerachole',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2619,
		name: 'Taurochole',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2620,
		name: 'Physis II',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2621,
		name: 'Autophysis',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 20
	},
	{
		id: 2622,
		name: 'Krasis',
		description: 'HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 20
	},
	{
		id: 2623,
		name: 'Pneuma',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2624,
		name: 'Primal Rend Ready',
		description: 'Able to execute Primal Rend.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2625,
		name: 'Ray of Fortitude',
		description: 'Resistance honors are granting an increase to maximum HP.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2626,
		name: 'Ray of Valor',
		description: 'Resistance honors are granting increased damage dealt.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2627,
		name: 'Ray of Succor',
		description: 'Resistance honors are granting increased healing potency.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2628,
		name: 'Adamant Purged',
		description: 'Armor is removed.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2631,
		name: 'Down and Out',
		description: 'Quite dead, and prevented from reviving by all usual means.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2632,
		name: 'Program: #FFFFFFF',
		description: 'Operating as a “white” program in the ego collective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2633,
		name: 'Program: #000000',
		description: 'Operating as a “black” program in the ego collective.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2634,
		name: 'Null White',
		description: 'Invulnerable to attacks from Program: #FFFFFF.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2635,
		name: 'Null Black',
		description: 'Invulnerable to attacks from Program: #000000.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2636,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2637,
		name: 'Sacred Soil',
		description: 'A circle of sanctified earth is healing party members and reducing damage taken within its bounds.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2638,
		name: 'Sacred Soil',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2639,
		name: 'Fixed Sign',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2640,
		name: 'Fixed Sign',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2641,
		name: 'Fixed Sign',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2642,
		name: 'Haimatinon',
		description: 'Stacks are consumed to restore the Haima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2643,
		name: 'Panhaimatinon',
		description: 'Stacks are consumed to restore the Panhaima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2644,
		name: 'Front Unseen',
		description: 'Only vulnerabilities on the front of the body remain undetected. Hits to the back, right, and left sides of the body will result in severe damage.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2645,
		name: 'Prey',
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2646,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2647,
		name: 'Shadow of the Dragon',
		description: 'Drawing on power inherited from Nidhogg.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2648,
		name: 'Transcendent',
		description: 'Recently resurrected.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2649,
		name: 'Empowered Beast',
		description: 'Permitted by master to fight to the fullest extent of capabilities.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2650,
		name: 'Leveilleur Dosis III',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2651,
		name: 'Manusya Berserk',
		description: 'Unable to think clearly and continuously auto-attacking target.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2652,
		name: 'Manusya Confuse',
		description: 'Confused and unable to accurately perceive surroundings.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2653,
		name: 'Manusya Stop',
		description: 'Will be frozen in time when count reaches 0.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2654,
		name: 'Who Is She',
		description: 'Outwardly appears to be Sanduruva.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2655,
		name: 'Who Is She',
		description: 'Outwardly appears to be Sanduruva.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2656,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2657,
		name: 'Acceleration Bomb',
		description: 'An acceleration-trigger explosive is affixed to the body. Any movement when effect wears off will result in detonation.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2658,
		name: 'Deep Freeze',
		description: 'Frozen solid and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2665,
		name: 'Heart and Soul',
		description: 'Able to execute Precise Touch, Intensive Synthesis, and Tricks of the Trade.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2666,
		name: 'Gift of the Land',
		description: 'Increased chance of triggering Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2667,
		name: 'Gatherer\'s Bounty',
		description: 'Increasing the item yield of Gatherer\'s Boon.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2668,
		name: 'Collector\'s Focus',
		description: 'Increased chance of triggering Collector\'s Intuition.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2669,
		name: 'Klymenos',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2670,
		name: 'Katabasis',
		description: 'Most attacks cannot reduce own HP to less than 1.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2671,
		name: 'Toad',
		description: 'Transformed into a toad and unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2672,
		name: 'Breathless',
		description: 'Toxins in the water are causing difficulty breathing. A stack of 8 will result in KO.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 250
	},
	{
		id: 2674,
		name: 'Holy Sheltron',
		description: 'Blocking incoming attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2675,
		name: 'Knight\'s Resolve',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2676,
		name: 'Knight\'s Benediction',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2677,
		name: 'Surging Tempest',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2678,
		name: 'Bloodwhetting',
		description: 'Damage taken is reduced and HP is restored with each weaponskill successfully delivered.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2679,
		name: 'Stem the Flow',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2680,
		name: 'Stem the Tide',
		description: 'A highly effective defensive maneuver is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2681,
		name: 'Equilibrium',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2682,
		name: 'Oblation',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2683,
		name: 'Heart of Corundum',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2684,
		name: 'Clarity of Corundum',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2685,
		name: 'Catharsis of Corundum',
		description: 'HP will be restored automatically upon falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2686,
		name: 'Ready to Blast',
		description: 'Able to execute Hypervelocity.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2687,
		name: 'Riddle of Wind',
		description: 'Auto-attack delay is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2688,
		name: '竜眼蒼穹実行可',
		description: '竜眼蒼穹を実行できる状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2689,
		name: 'Meisui',
		description: 'Next Bhavacakra will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2690,
		name: 'Forked Raiju Ready',
		description: 'Able to execute Forked Raiju.',
		category: 1,
		isPermanent: false,
		maxStacks: 3,
		partyListPriority: 0
	},
	{
		id: 2691,
		name: 'Fleeting Raiju Ready',
		description: 'Able to execute Fleeting Raiju.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2692,
		name: 'Blast Arrow Ready',
		description: 'Able to execute Blast Arrow.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2693,
		name: 'Flourishing Symmetry',
		description: 'Able to execute Reverse Cascade or Rising Windmill.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2694,
		name: 'Flourishing Flow',
		description: 'Able to execute Fountainfall or Bloodshower.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2695,
		name: 'Improvisation',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2696,
		name: 'Rising Rhythm',
		description: 'Potency of Improvised Finish is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 4,
		partyListPriority: 0
	},
	{
		id: 2697,
		name: 'Improvised Finish',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2698,
		name: 'Flourishing Finish',
		description: 'Able to execute Tillana.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2699,
		name: 'Fourfold Fan Dance',
		description: 'Able to execute Fan Dance IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2700,
		name: 'Flourishing Starfall',
		description: 'Able to execute Starfall Dance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2701,
		name: 'Further Ruin',
		description: 'Able to execute Ruin IV.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2702,
		name: 'Radiant Aegis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2703,
		name: 'Searing Light',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2704,
		name: 'Rekindle',
		description: 'Undying Flame will be triggered upon HP falling below a certain level or expiration of effect duration.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2705,
		name: 'Undying Flame',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2706,
		name: 'Slipstream',
		description: 'Maintaining a localized windstorm.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2707,
		name: 'Magick Barrier',
		description: 'Magic damage taken is reduced and HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2708,
		name: 'Aquaveil',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2709,
		name: 'Liturgy of the Bell',
		description: 'Triggers a healing effect upon taking damage or when duration expires.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2710,
		name: 'Protraction',
		description: 'Maximum HP is increased and HP recovery via healing actions is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2711,
		name: 'Desperate Measures',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2712,
		name: 'Expedience',
		description: 'Movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2713,
		name: 'Clarifying Draw',
		description: 'Able to execute Redraw.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2714,
		name: 'Harmony of Spirit',
		description: 'Restoring MP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2715,
		name: 'Harmony of Body',
		description: 'Spell cast time and recast time, and auto-attack delay are reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2716,
		name: 'Harmony of Mind',
		description: 'Damage dealt and potency of HP restoration actions are increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2717,
		name: 'Exaltation',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2718,
		name: 'Macrocosmos',
		description: 'Restores HP when effect duration expires or the astrologian who granted this effect executes Microcosmos. Healing potency is based on damage taken and compiled over the duration of the effect.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2719,
		name: 'Chaotic Spring',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2720,
		name: 'Power Surge',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2721,
		name: 'Blade of Valor',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2722,
		name: 'Radiant Finale',
		description: 'Playing a most radiant finale.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2723,
		name: 'Phantom Kamaitachi Ready',
		description: 'Able to execute Phantom Kamaitachi.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2724,
		name: 'Ifrit\'s Favor',
		description: 'Able to execute Crimson Cyclone.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2725,
		name: 'Garuda\'s Favor',
		description: 'Able to execute Slipstream.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2726,
		name: 'Anguish',
		description: 'Pure suffering is causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2727,
		name: 'Transfiguration',
		description: 'Corporeal form has been altered, inhibiting use of actions while allowing you to go undetected by certain enemies.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2729,
		name: 'Incorporeal',
		description: 'Transcending the boundary between existence and nihility.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2730,
		name: 'Endwalker',
		description: 'Walking alone unto journey\'s end, the burden weighing heavy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2731,
		name: 'Aether Sickness',
		description: 'Severe nausea is reducing movement speed.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2732,
		name: 'Quadruple',
		description: 'The next action initiated will be executed four times.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2734,
		name: 'Epic Echo',
		description: 'Maximum HP, damage dealt, and potency of HP restoration actions are increased beyond what even you thought possible.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2735,
		name: 'Toxicosis',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2736,
		name: 'Requisitioned Magitek',
		description: 'Mounted in warmachina. Thick armor reduces damage taken, but the inoperable leg renders you immobile.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2737,
		name: 'Fading Consciousness',
		description: 'Struggling to maintain consciousness after being gravely wounded.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2738,
		name: 'At Death\'s Door',
		description: 'Gravely wounded and unable to stand, but still clinging to consciousness.',
		category: 2,
		isPermanent: false,
		maxStacks: 6,
		partyListPriority: 0
	},
	{
		id: 2751,
		name: 'Fire Alchemy',
		description: 'Producing and manipulating an orb of fire aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2752,
		name: 'Ice Alchemy',
		description: 'Producing and manipulating an orb of ice aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2753,
		name: 'Thunder Alchemy',
		description: 'Producing and manipulating an orb of lightning aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2754,
		name: 'Toxic Alchemy',
		description: 'Producing and manipulating an orb of toxic aether.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2760,
		name: 'Borrowed Flesh',
		description: 'Forced to inhabit the body of another.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2763,
		name: 'Smiley Face',
		description: 'Face hurts from smiling. Will take increased damage if hit by Smiley Face again.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2764,
		name: 'Frowny Face',
		description: 'Face hurts from frowning. Will take increased damage if hit by Frowny Face again.',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 200
	},
	{
		id: 2765,
		name: 'Eureka Moment',
		description: 'Able to execute Wise to the World.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2778,
		name: 'Angler\'s Art',
		description: 'Able to execute certain actions.',
		category: 1,
		isPermanent: true,
		maxStacks: 10,
		partyListPriority: 0
	},
	{
		id: 2779,
		name: 'Makeshift Bait',
		description: 'Able to execute Mooch using average-sized fish.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2780,
		name: 'Prize Catch',
		description: 'Next catch is guaranteed to be a large-sized fish.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2781,
		name: 'Unlimited',
		description: 'Confronting physical limits and choosing to defy them.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 199
	},
	{
		id: 2783,
		name: 'Vital Sight',
		description: 'Fish are easier to target while spearfishing.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2784,
		name: 'ホールドブレス',
		description: '警戒度の自動上昇が停止している状態。',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2786,
		name: 'Spark of Hope',
		description: 'Burning with dynamis shaped by the memory of your journey, and exceeding your own limits.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 200
	},
	{
		id: 2787,
		name: 'Ploutonos',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2788,
		name: 'Eubuleus',
		description: 'Magic damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2789,
		name: 'True Bravery',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2790,
		name: 'True Step',
		description: 'Caught up in the dance.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2791,
		name: 'True Benison',
		description: 'A holy barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2792,
		name: 'True Medica II',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2793,
		name: 'True Stoneskin',
		description: 'Lithified flesh is absorbing damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 30
	},
	{
		id: 2794,
		name: 'True Hallowed Ground',
		description: 'Impervious to most attacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 2795,
		name: 'Circle of Clarity',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2796,
		name: 'True Sentinel',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2797,
		name: 'True Rampart',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2798,
		name: 'True Reprisal',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2805,
		name: 'Carrot of Happiness',
		description: 'You find yourself in an unusually good mood, with a sudden craving to eat more carrots.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2806,
		name: 'Philosopher\'s Carrot',
		description: 'You find your mind is suddenly much sharper than usual.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2807,
		name: 'Lucky Carrot',
		description: 'You suddenly feel as though Nymeia\'s wheel is spinning in your favor.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2808,
		name: 'Iron Carrot',
		description: 'You suddenly find yourself full of vim and vigor.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2809,
		name: 'Magic Damage Up',
		description: 'Magic damage dealt is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 16,
		partyListPriority: 1
	},
	{
		id: 2810,
		name: 'Chorus Aligned',
		description: 'Dancing to someone else\'s tune.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2811,
		name: '反転プログラム',
		description: 'プログラムが逆の順番で実行される状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2817,
		name: 'Partygoer',
		description: 'Attending the Phantoms\' Feast.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2818,
		name: 'Earth-aspected',
		description: 'Body\'s aetherial balance is leaning toward the earthen.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2819,
		name: 'Lightning-aspected',
		description: 'Body\'s aetherial balance is leaning toward levin.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2820,
		name: 'Wind-aspected',
		description: 'Body\'s aetherial balance is leaning toward wind.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2821,
		name: 'To the Dungeons',
		description: 'Being punished for disobedience. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2822,
		name: 'Wicked Whim',
		description: 'Feeling whimsically contrarious. Those who obey orders will be punished.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2824,
		name: 'Incapacitated',
		description: 'Unable to perform any actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2825,
		name: 'Deactivated',
		description: 'All autonomous movement is temporarily disabled.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2826,
		name: 'Creeping Poison',
		description: 'Poison courses through your veins, causing you to periodically become unable to move or execute actions.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2827,
		name: 'Irmin Hedge',
		description: 'The Hedge\'s protection makes you immune to poison.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2828,
		name: 'Prayers of Hope',
		description: 'Drawing strength from the prayers of your comrades. Damage dealt is significantly increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 7,
		partyListPriority: 200
	},
	{
		id: 2829,
		name: 'Last Vigil',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2830,
		name: 'Last Vigil',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2831,
		name: 'Shield of the Fury',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2832,
		name: 'Tenebrous Grasp',
		description: 'Unable to move.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2839,
		name: 'Suiton',
		description: 'Body is enveloped in a light-bending veil of water, allowing use of actions normally requiring the Hidden status.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2840,
		name: 'Rightward Whimsy',
		description: 'Seized with the urge to face right.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2841,
		name: 'Leftward Whimsy',
		description: 'Seized with the urge to face left.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2842,
		name: 'Backward Whimsy',
		description: 'Seized with the urge to face backward.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2843,
		name: 'Iron Will',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2844,
		name: 'Somanoutic Barrier',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 60
	},
	{
		id: 2845,
		name: 'Enhanced Harpe',
		description: 'Next Harpe will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2846,
		name: 'Whispered Incantation',
		description: 'The next offensive spell cast will be committed to memory.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2847,
		name: 'Whispers Manifest',
		description: 'The spell cast during Whispered Incantation has been committed to memory and can be cast immediately.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2848,
		name: 'Mirrored Incantation',
		description: 'The next attack\'s area of effect will be inverted. ',
		category: 2,
		isPermanent: true,
		maxStacks: 4,
		partyListPriority: 200
	},
	{
		id: 2851,
		name: 'In Event',
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2853,
		name: 'Titan\'s Favor',
		description: 'Able to execute Mountain Buster.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2854,
		name: 'Soul Reaver',
		description: 'Able to execute Gibbet, Gallows, and Guillotine.',
		category: 1,
		isPermanent: false,
		maxStacks: 2,
		partyListPriority: 0
	},
	{
		id: 2855,
		name: 'Enhanced Gibbet',
		description: 'Next Gibbet will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2856,
		name: 'Enhanced Gallows',
		description: 'Next Gallows will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2857,
		name: 'Enhanced Void Reaping',
		description: 'Next Void Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2858,
		name: 'Enhanced Cross Reaping',
		description: 'Next Cross Reaping will deal increased damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2859,
		name: 'Enhanced Harpe',
		description: 'Next Harpe will require no time to cast.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2860,
		name: 'Threshold',
		description: 'Able to execute Regress.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2861,
		name: 'Crest of Time Borrowed',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2862,
		name: 'Crest of Time Returned',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2863,
		name: 'Enshrouded',
		description: 'Playing host to an avatar.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2864,
		name: 'Eukrasian Dosis III',
		description: 'Weaponskill and spell cast time and recast time are increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2865,
		name: 'Eukrasian Diagnosis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2866,
		name: 'Eukrasian Prognosis',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2867,
		name: 'Eukrasia',
		description: 'Certain actions are being augmented.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2868,
		name: 'Pneuma',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2869,
		name: 'Haima',
		description: 'A magicked barrier is nullifying damage.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2870,
		name: 'Haimatinon',
		description: 'Stacks are consumed to restore the Haima barrier each time it is absorbed. Grants a healing effect when duration expires, its potency based on the number of remaining stacks.',
		category: 1,
		isPermanent: false,
		maxStacks: 5,
		partyListPriority: 0
	},
	{
		id: 2871,
		name: 'Kardia',
		description: 'Triggers a healing effect on a player under the effect of Kardion granted by you when casting attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2872,
		name: 'Kardion',
		description: 'Triggers a healing effect when the sage who applied this status casts attack magic.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2873,
		name: 'Limit Breaker',
		description: 'Executing limit break.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2874,
		name: '時限の魔鎖',
		description: '光属性と火属性のエーテルを宿した魔法の鎖が縛り付けられた状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2875,
		name: '時限の魔鎖',
		description: '光属性と火属性のエーテルを宿した魔法の鎖が縛り付けられた状態。',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2876,
		name: 'Heros\'s Mantle',
		description: 'Armed with a hero\'s blade.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2877,
		name: 'Magos\'s Mantle',
		description: 'Armed with a magus\'s staff.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2878,
		name: 'Mousa\'s Mantle',
		description: 'Armed with a muse\'s war quoits.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2879,
		name: 'Adamantinon Thelema',
		description: 'Enmity is increased.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2880,
		name: '毒',
		description: '毒に冒された状態。ＨＰが徐々に失われる。',
		category: 2,
		isPermanent: true,
		maxStacks: 8,
		partyListPriority: 0
	},
	{
		id: 2882,
		name: '被物理ダメージ増加',
		description: '受ける物理ダメージが増加する状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2883,
		name: 'スロウ',
		description: 'オートアタックの攻撃間隔と、ウェポンスキルおよび魔法のキャストタイムとリキャストタイムが延長された状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2884,
		name: 'ＨＰ自然回復無効',
		description: 'ＨＰ自然回復が無効化された状態。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2891,
		name: 'Spearfisher\'s Intuition',
		description: 'Heightened senses are improving chances of discovering rare fish only obtainable under special conditions.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2893,
		name: 'Plagued',
		description: 'Toxic miasma is warping the flesh.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2904,
		name: 'Unforgotten',
		description: 'The next phenomenon to occur will be recorded.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2906,
		name: '●偽神獣の猛毒',
		description: '●グレイプニルの攻撃によって付与された毒。特定の攻撃を受ける度に毒が進化し、様々な弱体効果へと変化する。',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2907,
		name: 'Tizona\'s Bastion',
		description: 'An area of land has been granted protection, reducing damage taken for all who enter.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2908,
		name: 'Tizona\'s Bastion',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2909,
		name: 'Umbral Rays',
		description: 'Damage taken by certain attacks is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2910,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2911,
		name: 'Damage Down',
		description: 'Damage dealt is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2912,
		name: 'Vulnerability Up',
		description: 'Damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 8,
		partyListPriority: 100
	},
	{
		id: 2913,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2914,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2915,
		name: 'Concussion',
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2916,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2917,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2918,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2919,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2920,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2921,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2922,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2932,
		name: 'Fleet-footed',
		description: 'Effect duration of Sprint is increased in large settlements.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2933,
		name: 'In Event',
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2934,
		name: '●強制稼働',
		description: '●未完成の状態だが強制的に短時間稼働している状態。効果時間中は破壊されない。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2936,
		name: 'Temporary Misdirection',
		description: 'Overcome with confusion and can only move in the direction indicated.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2938,
		name: 'Kerakeia',
		description: 'Regenerating HP over time.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 5
	},
	{
		id: 2939,
		name: 'Prey',
		description: 'Marked as prey.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2940,
		name: 'Physical Vulnerability Up',
		description: 'Physical damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2941,
		name: 'Magic Vulnerability Up',
		description: 'Magic damage taken is increased.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2942,
		name: 'Flesh Wound',
		description: 'Wounds dealt by a slashing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2943,
		name: 'Stab Wound',
		description: 'Wounds dealt by a piercing weapon are bleeding, causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2944,
		name: 'Concussion',
		description: 'Wounds dealt by a blunt weapon are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2945,
		name: 'Burns',
		description: 'Sustaining fire damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2946,
		name: 'Frostbite',
		description: 'Sustaining ice damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2947,
		name: 'Windburn',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2948,
		name: 'Sludge',
		description: 'Sustaining earth damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2949,
		name: 'Electrocution',
		description: 'Sustaining lightning damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2950,
		name: 'Dropsy',
		description: 'Sustaining water damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2951,
		name: 'Bleeding',
		description: 'Sustaining damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2952,
		name: 'True Finish',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 1
	},
	{
		id: 2953,
		name: 'Stun',
		description: 'Unable to execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2954,
		name: 'Willful',
		description: 'Burning for battle. Sustaining most damage that would normally result in KO will instead ignite the Will to Live.',
		category: 1,
		isPermanent: true,
		maxStacks: 5,
		partyListPriority: 70
	},
	{
		id: 2955,
		name: 'Will to Live',
		description: 'Standing tall despite damage that would normally result in incapacitation. Most damage is nullified. Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2956,
		name: '精霊の加護',
		description: '被ダメージを軽減するシールドを発生させている状態。',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2957,
		name: 'Swift Deception',
		description: 'Unable to be detected by sight, and movement speed is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2958,
		name: 'Forward Whimsy',
		description: 'Seized with the urge to face forward.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2959,
		name: 'Ogi Namikiri Ready',
		description: 'Able to execute Ogi Namikiri.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2960,
		name: 'Enhanced Flare',
		description: 'Flare will deal increased damage.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2961,
		name: 'Down for the Count',
		description: 'Unable to move or execute actions.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2962,
		name: 'Twisting Viper',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2963,
		name: 'Gnashing Wolf',
		description: 'Sustaining wind damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 2964,
		name: 'Radiant Finale',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2965,
		name: 'Necrosis',
		description: 'Flesh is dying. When this effect expires, decay will result in KO.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2966,
		name: 'Craven Companionship',
		description: 'Will suffer Fear if no allies are in range when this effect expires.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2967,
		name: 'Sustained Damage',
		description: 'Taking damage over time.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 2968,
		name: 'Craniotomy',
		description: 'Rendered confused and agitated. Attacking allies and sustaining damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2969,
		name: 'Sage\'s Wisdom',
		description: 'Shielded from the effects of Craniotomy.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 200
	},
	{
		id: 2971,
		name: 'HP Penalty',
		description: 'Maximum HP is reduced.',
		category: 2,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 50
	},
	{
		id: 2972,
		name: 'Bloodsown Circle',
		description: 'Able to gain stacks of Immortal Sacrifice from party members under the effect of your Circle of Sacrifice.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 2999,
		name: 'In Event',
		description: 'Participating in an in-game event.',
		category: 1,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 100
	},
	{
		id: 3000,
		name: 'Toxicosis',
		description: 'Toxins are causing damage over time.',
		category: 2,
		isPermanent: true,
		maxStacks: 0,
		partyListPriority: 10
	},
	{
		id: 3001,
		name: 'Disciplined Fist',
		description: 'Damage dealt is increased.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 70
	},
	{
		id: 3002,
		name: 'Shadowbite Ready',
		description: 'Able to execute Shadowbite.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	},
	{
		id: 3003,
		name: 'Holos',
		description: 'Damage taken is reduced.',
		category: 1,
		isPermanent: false,
		maxStacks: 0,
		partyListPriority: 0
	}
];