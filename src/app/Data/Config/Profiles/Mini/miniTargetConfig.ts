import extend                from 'just-extend';
import { RecursivePartial }  from 'src/app/Interface/RecursivePartial';
import { TargetFrameConfig } from 'src/app/Model/Config/TargetFrameConfig';
import { miniPlayerConfig }  from './miniPlayerConfig';

const playerClone = extend(true, {}, miniPlayerConfig);
const targetConfig: RecursivePartial<TargetFrameConfig> = {
	basic: {
		position: { x: 900, y: 500 }
	},
	status: {
		onlyOwn: true
	},
	distance: {
		enabled: true
	},
	manaBar: {
		show: false
	},
	widgets: {
		name: {
			anchor: 'topRight',
			show: true,
		},
		mana: {
			show: false
		}
	}
};

export const miniTargetConfig: RecursivePartial<TargetFrameConfig> = extend(true, playerClone, targetConfig);