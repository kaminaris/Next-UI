import extend                        from 'just-extend';
import { RecursivePartial }          from 'src/app/Interface/RecursivePartial';
import { TargetOfTargetFrameConfig } from 'src/app/Model/Config/TargetOfTargetFrameConfig';
import { classicPlayerConfig }       from './classicPlayerConfig';

const playerClone = extend(true, {}, classicPlayerConfig);
const targetOfTargetConfig: RecursivePartial<TargetOfTargetFrameConfig> = {
	basic: {
		position: { x: 1180, y: 500 },
		size: { width: 200, height: 20 }
	},
	manaBar: {
		show: false
	},
	status: {
		position: { x: 0, y: -30 }
	},
	sign: {
		show: false
	},
	castBar: {
		show: false
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

export const classicTargetOfTargetConfig: RecursivePartial<TargetOfTargetFrameConfig> =
	extend(true, playerClone, targetOfTargetConfig);