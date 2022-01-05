import extend               from 'just-extend';
import { miniPlayerConfig } from './miniPlayerConfig';
import { RecursivePartial } from 'src/app/Interface/RecursivePartial';
import { PartyFrameConfig } from 'src/app/Model/Config/PartyFrameConfig';

const playerClone = extend(true, {}, miniPlayerConfig);
const partyConfig: RecursivePartial<PartyFrameConfig> = {

	// "sign": {
	// 	"show": false,
	// 	"anchor": "left",
	// 	"position": {
	// 		"x": 0,
	// 		"y": 0
	// 	},
	// 	size: 40
	// },
	basic: {
		position: { x: 100, y: 200 },
		size: { width: 250, height: 300 }
	},
	manaBar: {
		show: true,
		height: "2px",
	},
	direction: 'vertical',
	unitFrameHeight: '20px',
	unitFrameWidth: '100%',
	unitFrameMargin: 20,
	wrap: false,
	sorter: 'default',

	status: {
		position: { x: 255, y: 0 },
		anchor: 'left',
	},
	role: {
		show: true,
	},
	distance: {
		enabled: true
	},
	castBar: {
		show: false
	},

	widgets: {
		hp: {
			show: false,
			anchor: 'topRight'
		},
		mana: {
			show: false
		},
		level: {
			show: false
		},
		job: { show: false },
		name: {
			show: true,
			position: { x: 0, y: -22 }
		}
	}
};

export const miniPartyConfig: RecursivePartial<PartyFrameConfig> = extend(true, playerClone, partyConfig);