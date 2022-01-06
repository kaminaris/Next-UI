import { RecursivePartial }            from 'src/app/Interface/RecursivePartial';
import { MainConfig }                  from 'src/app/Model/Config/MainConfig';
import { classicPlayerConfig }         from './classicPlayerConfig';
import { classicTargetConfig }         from './classicTargetConfig';
import { classicFocusConfig }          from './classicFocusConfig';
import { classicTargetOfTargetConfig } from './classicTargetOfTargetConfig';
import { classicAggroListConfig }      from './classicAggroListConfig';
import { classicPartyConfig }          from './classicPartyConfig';

export const classicConfig: RecursivePartial<MainConfig> = {
	version: 2,
	fontFamily: 'Segoe UI',
	customCss: '',
	hpTemplate: '[hp:f] / [hp:max:f] ([hp:pct:f]%)',
	manaTemplate: '[mana:f] / [mana:max:f] ([mana:pct:f]%)',
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
		player: classicPlayerConfig,
		target: classicTargetConfig,
		focus: classicFocusConfig,
		targetOfTarget: classicTargetOfTargetConfig,
		party: classicPartyConfig,
		aggroList: classicAggroListConfig
	}
};