import { RecursivePartial } from 'src/app/Interface/RecursivePartial';
import { MainConfig }       from 'src/app/Model/Config/MainConfig';

export const defaultConfig: RecursivePartial<MainConfig> = {
	fontFamily: 'Noto Sans Condensed',
	numberFormat: 'full',
	ttsConfig: {
		enabled: false
	},
	colorConfig: {
		enabled: true
		// default values are in class itself
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
			position: { x: 600, y: 500 },
			size: { width: 260, height: 60 },
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,1)',
			useClassColor: true,
			showMana: true,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: 0 },
			auraAnchor: 'bottomLeft',

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
			position: { x: 900, y: 500 },
			size: { width: 260, height: 60 },
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,1)',
			useClassColor: true,
			showMana: true,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: 0 },
			auraAnchor: 'bottomLeft',

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
		targetOfTarget: {
			position: { x: 1180, y: 500 },
			size: { width: 200, height: 20 },
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,1)',
			useClassColor: true,
			showMana: false,
			manaHeight: '20px',
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 0, y: -30 },
			auraAnchor: 'bottomLeft',

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
			position: { x: 100, y: 200 },
			size: { width: 250, height: 300 },
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: 'rgba(33,32,33,1)',
			useClassColor: true,
			showMana: true,
			manaHeight: '2px',
			unitFrameHeight: '50px',
			unitFrameMargin: 1,
			borderWidth: 1,
			borderColor: 'rgba(16,16,16,1)',
			auraPosition: { x: 270, y: 0 },
			auraAnchor: 'left',

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
			position: { x: 600, y: 200 },
			size: { width: 250, height: 300 },
			barColor: '#02A502',
			manaColor: '#02a597',
			backgroundColor: '#000000',
			showMana: false,
			manaHeight: '20px',
			unitFrameHeight: '20px',
			unitFrameMargin: 1,

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
			fontSize: '14px',
			fontColor: '#FFFFFF',
			cooldownOutline: true,
			cooldownPrecision: 1
		}
	}
};