import { defaultAggroList }            from 'src/app/Data/Config/defaultAggroList';
import { defaultFocusConfig }          from 'src/app/Data/Config/defaultFocusConfig';
import { defaultPartyConfig }          from 'src/app/Data/Config/defaultPartyConfig';
import { defaultTargetOfTargetConfig } from 'src/app/Data/Config/defaultTargetOfTargetConfig';
import { RecursivePartial }            from 'src/app/Interface/RecursivePartial';
import { MainConfig }                  from 'src/app/Model/Config/MainConfig';
import { defaultPlayerConfig }         from './defaultPlayerConfig';
import { defaultTargetConfig }         from './defaultTargetConfig';

export const defaultConfig: RecursivePartial<MainConfig> = {
	fontFamily: 'Noto Sans Condensed',
	customCss: '',
	numberFormat: 'full',
	hpTemplate: '[hp] / [hpMax] ([hpPct]%)',
	manaTemplate: '[mana] / [manaMax] ([manaPct]%)',
	castDelay: 400,

	ttsConfig: {
		enabled: false,
		maleRate: 1,
		malePitch: 1,
		maleVolume: 0.8,
		femaleRate: 1,
		femalePitch: 1,
		femaleVolume: 0.8
	},
	colorConfig: {
		enabled: true
		// default values are in class itself
	},
	tooltipConfig: {
		enabled: true,
		width: '300px',
		padding: '5px',
		backgroundColor: 'rgba(33,32,33,0.8)',
		borderColor: 'rgba(16,16,16,1)',
		borderWidth: 1,
		fontColor: '#ffffff',
		fontSize: '12px',
		outline: false
	},
	frames: {
		control: {
			position: { x: 600, y: 600 },
			size: { width: 200, height: 60 }
		},
		config: {
			position: { x: 0, y: 0 },
			size: { width: 800, height: 600 }
		},
		customElements: {
			position: { x: 0, y: 0 },
			size: { width: 800, height: 600 }
		},
		auraBar: {
			iconSize: '30px',
			cooldownPrecision: 1,
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			widgets: {
				duration: {
					show: true,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				stacks: {
					show: true,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: -3, y: -8 },
					outline: true
				}
			}
		},
		player: defaultPlayerConfig,
		target: defaultTargetConfig,
		focus: defaultFocusConfig,
		targetOfTarget: defaultTargetOfTargetConfig,
		party: defaultPartyConfig,
		aggroList: defaultAggroList
	}
};