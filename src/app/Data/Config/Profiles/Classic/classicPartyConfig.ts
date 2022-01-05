import extend                  from 'just-extend';
import { RecursivePartial }    from 'src/app/Interface/RecursivePartial';
import { PartyFrameConfig }    from 'src/app/Model/Config/PartyFrameConfig';
import { classicPlayerConfig } from './classicPlayerConfig';

const playerClone = extend(true, {}, classicPlayerConfig);
const partyConfig: RecursivePartial<PartyFrameConfig> = {
	basic: {
		position: { x: 100, y: 200 },
		size: { width: 250, height: 300 }
	},
	manaBar: {
		height: '2px'
	},
	direction: 'vertical',
	unitFrameHeight: '50px',
	unitFrameWidth: '100%',
	unitFrameMargin: 1,
	wrap: false,
	sorter: 'default',

	status: {
		position: { x: 270, y: 0 },
		anchor: 'left'
	},
	role: {
		show: true
	},
	distance: {
		enabled: true
	},
	castBar: {
		show: false
	},

	widgets: {
		hp: {
			anchor: 'bottomLeft'
		},
		mana: {
			show: false
		},
		level: {
			show: false
		},
		name: {
			position: { x: 5, y: 2 }
		}
	}
};

export const classicPartyConfig: RecursivePartial<PartyFrameConfig> = extend(true, playerClone, partyConfig);