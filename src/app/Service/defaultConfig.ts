import { RecursivePartial } from 'src/app/Interface/RecursivePartial';
import { MainConfig }       from 'src/app/Model/Config/MainConfig';

export const defaultConfig: RecursivePartial<MainConfig> = {
	fontFamily: 'Noto Sans Condensed',
	customCss: '',
	numberFormat: 'full',
	hpTemplate: '[hp] / [hpMax] ([hpPct]%)',
	manaTemplate: '[mana] / [manaMax] ([manaPct]%)',
	ttsConfig: {
		enabled: false,
		maleRate: 1,
		malePitch: 1,
		maleVolume: 0.8,
		femaleRate: 1,
		femalePitch: 1,
		femaleVolume: 0.8,
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
		player: {
			enabled: true,
			aurasEnabled: true,
			position: { x: 600, y: 500 },
			size: { width: 260, height: 60 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			useClassColor: true,
			showMana: true,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: 0 },
			auraAnchor: 'bottomLeft',
			auraOnlyOwn: false,
			auraFilters: [],

			showRoleIcon: false,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},

			widgets: {
				job: {
					show: true,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: true,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: true,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: 0, y: -20 },
					outline: true
				}
			}
		},
		target: {
			enabled: true,
			aurasEnabled: true,
			position: { x: 900, y: 500 },
			size: { width: 260, height: 60 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			useClassColor: true,
			showMana: true,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: 0 },
			auraAnchor: 'bottomLeft',
			auraOnlyOwn: true,
			auraFilters: [],

			showRoleIcon: false,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},

			widgets: {
				job: {
					show: true,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: true,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: true,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: 0, y: -20 },
					outline: true
				}
			}
		},
		focus: {
			enabled: true,
			aurasEnabled: true,
			position: { x: 1180, y: 400 },
			size: { width: 200, height: 40 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02A597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			useClassColor: true,
			showMana: false,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: 0 },
			auraAnchor: 'bottomLeft',
			auraOnlyOwn: false,
			auraFilters: [],

			showRoleIcon: true,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},

			widgets: {
				job: {
					show: false,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: false,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: false,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: 0, y: -20 },
					outline: true
				}
			}
		},
		targetOfTarget: {
			enabled: true,
			aurasEnabled: true,
			position: { x: 1180, y: 500 },
			size: { width: 200, height: 20 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			useClassColor: true,
			showMana: false,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: -30 },
			auraAnchor: 'bottomLeft',
			auraOnlyOwn: false,
			auraFilters: [],

			showRoleIcon: false,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},

			widgets: {
				job: {
					show: false,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: false,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: false,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: 0, y: -20 },
					outline: true
				}
			}
		},
		party: {
			enabled: true,
			aurasEnabled: true,
			position: { x: 100, y: 200 },
			size: { width: 250, height: 300 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			useClassColor: true,
			showMana: true,
			manaHeight: '2px',
			unitFrameHeight: '50px',
			unitFrameMargin: 1,
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 270, y: 0 },
			auraAnchor: 'left',
			auraOnlyOwn: false,
			auraFilters: [],

			showRoleIcon: true,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},

			widgets: {
				job: {
					show: true,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'bottomLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: false,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: false,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '14px',
					position: { x: 5, y: 2 },
					outline: true
				}
			}
		},
		aggroList: {
			enabled: true,
			aurasEnabled: false,
			position: { x: 1180, y: 200 },
			size: { width: 250, height: 300 },
			barStyle: 'horizontal',
			barDirection: 'start',
			manaBarStyle: 'horizontal',
			manaBarDirection: 'start',
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,0.8)',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			showMana: false,
			manaHeight: '20px',
			unitFrameHeight: '30px',
			unitFrameMargin: 1,
			auraPosition: { x: 270, y: 0 },
			auraAnchor: 'left',
			auraOnlyOwn: true,
			auraFilters: [],

			showRoleIcon: false,
			roleIconColor: 'rgba(255,255,255,1)',
			roleIconSize: 20,
			roleIconAnchor: 'topRight',
			roleIconPosition: {x: 30, y: 5},
			widgets: {
				name: {
					show: true,
					anchor: 'topLeft',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 2, y: 2 },
					outline: true
				},
				hp: {
					show: true,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 2, y: 2 },
					outline: true
				},
				job: {
					show: false,
					anchor: 'topRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				},
				mana: {
					show: false,
					anchor: 'center',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 0, y: 0 },
					outline: true
				},
				level: {
					show: false,
					anchor: 'bottomRight',
					fontColor: '#ffffff',
					fontSize: '12px',
					position: { x: 5, y: 2 },
					outline: true
				}
			}
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
				},
			}
		}
	}
};