import { RecursivePartial }         from 'src/app/Interface/RecursivePartial';
import { MainConfig }               from 'src/app/Model/Config/MainConfig';
import { miniPlayerConfig }         from './miniPlayerConfig';
import { miniTargetConfig }         from './miniTargetConfig';
import { miniFocusConfig }          from './miniFocusConfig';
import { miniTargetOfTargetConfig } from './miniTargetOfTargetConfig';
import { miniAggroListConfig }      from './miniAggroListConfig';
import { miniPartyConfig }          from './miniPartyConfig';

export const miniConfig: RecursivePartial<MainConfig> = {
	version: 2,
	fontFamily: 'Inter',
	webFont: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
	customCss: '.progress-bar-fill {\nbackground-image: linear-gradient(rgba(50, 50, 50, 0.1), rgba(200, 200, 200, 0.3));\n}',
	hpTemplate: '[hp:pct:f]%',
	manaTemplate: '[mana:pct:f]%',
	castDelay: 400,
	blurNames: false,

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
		fontSize: '14px',
		outline: false
	},
	frames: {
		control: {
			position: { x: 0, y: 0 },
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
					show: false,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: -3, y: -8 },
					outline: true
				}
			}
		},
		player: miniPlayerConfig,
		target: miniTargetConfig,
		focus: miniFocusConfig,
		targetOfTarget: miniTargetOfTargetConfig,
		party: miniPartyConfig,
		aggroList: miniAggroListConfig
	}
};