import extend                  from 'just-extend';
import { defaultPlayerConfig } from 'src/app/Data/Config/defaultPlayerConfig';
import { RecursivePartial }    from 'src/app/Interface/RecursivePartial';
import { TargetFrameConfig }   from 'src/app/Model/Config/TargetFrameConfig';

const playerClone = extend(true, {}, defaultPlayerConfig);
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

export const defaultTargetConfig: RecursivePartial<TargetFrameConfig> = extend(true, playerClone, targetConfig);