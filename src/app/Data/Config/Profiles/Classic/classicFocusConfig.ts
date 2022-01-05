import extend                  from 'just-extend';
import { RecursivePartial }    from 'src/app/Interface/RecursivePartial';
import { FocusFrameConfig }    from 'src/app/Model/Config/FocusFrameConfig';
import { classicPlayerConfig } from './classicPlayerConfig';

const playerClone = extend(true, {}, classicPlayerConfig);
const focusConfig: RecursivePartial<FocusFrameConfig> = {
	basic: {
		position: { x: 1180, y: 400 },
		size: { width: 200, height: 40 }
	},
	manaBar: {
		show: false
	},
	role: {
		show: true
	},
	distance: {
		enabled: true
	},
	widgets: {
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

export const classicFocusConfig: RecursivePartial<FocusFrameConfig> = extend(true, playerClone, focusConfig);