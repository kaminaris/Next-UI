import extend                   from 'just-extend';
import { RecursivePartial }     from 'src/app/Interface/RecursivePartial';
import { AggroListFrameConfig } from 'src/app/Model/Config/AggroListFrameConfig';
import { miniPlayerConfig }     from './miniPlayerConfig';

const playerClone = extend(true, {}, miniPlayerConfig);

const aggroListConfig: RecursivePartial<AggroListFrameConfig> = {
	basic: {
		position: { x: 1180, y: 200 },
		size: { width: 250, height: 300 }
	},
	manaBar: {
		show: false
	},
	status: {
		show: true,
		position: { x: 255, y: 0 },
		anchor: 'left',
		onlyOwn: true
	},
	sign: {
		show: false
	},
	distance: {
		enabled: true
	},
	unitFrameHeight: '20px',
	unitFrameMargin: 20,
	sorter: 'default',
	castBar: {
		show: false
	},
	widgets: {
		job: {
			show: false
		},
		hp: {
			anchor: 'topRight',
		},
		mana: {
			show: false
		},
		level: {
			show: false
		},
		name: {
			anchor: 'topLeft',
			show: true,
		},
	}
};

export const miniAggroListConfig: RecursivePartial<AggroListFrameConfig> = extend(true, playerClone, aggroListConfig);