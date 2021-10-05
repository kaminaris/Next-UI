import extend                   from 'just-extend';
import { defaultPlayerConfig }  from 'src/app/Data/Config/defaultPlayerConfig';
import { RecursivePartial }     from 'src/app/Interface/RecursivePartial';
import { AggroListFrameConfig } from 'src/app/Model/Config/AggroListFrameConfig';

const playerClone = extend(true, {}, defaultPlayerConfig);
const aggroListConfig: RecursivePartial<AggroListFrameConfig> = {
	basic: {
		position: { x: 1180, y: 200 },
		size: { width: 250, height: 300 },
	},
	manaBar: {
		show: false
	},
	status: {
		show: true,
		position: { x: 270, y: 0 },
		anchor: 'left',
		onlyOwn: true,
	},
	sign: {
		show: false
	},
	distance: {
		enabled: true,
	},
	unitFrameHeight: '30px',
	unitFrameMargin: 1,
	sorter: 'default',
	castBar: {
		show: false,
	},
	widgets: {
		job: {
			show: false,
		},
		hp: {
			anchor: 'topRight',
			position: { x: 2, y: 5 },
		},
		mana: {
			show: false,
		},
		level: {
			show: false,
		},
		name: {
			fontSize: '12px',
			position: { x: 2, y: 5 },
		},
	}
};


export const defaultAggroList: RecursivePartial<AggroListFrameConfig> = extend(true, playerClone, aggroListConfig);