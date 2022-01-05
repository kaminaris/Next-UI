import extend               from 'just-extend';
import { miniPlayerConfig } from './miniPlayerConfig';
import { RecursivePartial } from 'src/app/Interface/RecursivePartial';
import { FocusFrameConfig } from 'src/app/Model/Config/FocusFrameConfig';

const playerClone = extend(true, {}, miniPlayerConfig);
const focusConfig: RecursivePartial<FocusFrameConfig> = {
	basic: {
		position: { x: 900, y: 430 },
		size: { width: 260, height: 20 }
	},
	manaBar: {
		show: false
	},
	role: {
		show: false
	},
	distance: {
		enabled: true
	},
	widgets: {
		name: {
			anchor: 'topRight',
			show: true,
		},
		job: {
			show: false
		},
		mana: {
			show: false
		},
		level: {
			show: false
		}
	}
};

export const miniFocusConfig: RecursivePartial<FocusFrameConfig> = extend(true, playerClone, focusConfig);