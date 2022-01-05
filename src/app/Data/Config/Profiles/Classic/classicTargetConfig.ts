import extend                  from 'just-extend';
import { RecursivePartial }    from 'src/app/Interface/RecursivePartial';
import { TargetFrameConfig }   from 'src/app/Model/Config/TargetFrameConfig';
import { classicPlayerConfig } from './classicPlayerConfig';

const playerClone = extend(true, {}, classicPlayerConfig);
const targetConfig: RecursivePartial<TargetFrameConfig> = {
	basic: {
		position: { x: 900, y: 500 }
	},
	status: {
		onlyOwn: true
	},
	distance: {
		enabled: true
	}
};

export const classicTargetConfig: RecursivePartial<TargetFrameConfig> = extend(true, playerClone, targetConfig);