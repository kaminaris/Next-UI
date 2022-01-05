import { RecursivePartial }  from 'src/app/Interface/RecursivePartial';
import { PlayerFrameConfig } from 'src/app/Model/Config/PlayerFrameConfig';

export const miniPlayerConfig: RecursivePartial<PlayerFrameConfig> = {
	basic: {
		enabled: true,
		position: { x: 600, y: 500 },
		size: { width: 260, height: 20 },
		backgroundColor: '#212121',
		borderWidth: 1,
		borderColor: '#0b0b0b'
	},
	healthBar: {
		useJobColor: true,
		barStyle: 'horizontal',
		barDirection: 'start',
		barColor: '#02A502'
	},
	manaBar: {
		show: true,
		barStyle: 'horizontal',
		barDirection: 'start',
		barColor: '#5295bf',
		height: '2px'
	},
	role: {
		show: false,
		color: 'rgba(255,255,255,1)',
		size: 16,
		anchor: 'left',
		position: { x: -16, y: 0 }
	},
	sign: {
		show: true,
		anchor: 'topRight',
		position: { x: 50, y: 0 },
		size: 20
	},
	distance: {
		enabled: false,
		opacity: 60,
		threshold: 30
	},
	status: {
		show: true,
		position: { x: 0, y: -30 },
		anchor: 'bottomLeft',
		onlyOwn: false,
		filters: []
	},
	castBar: {
		show: true,
		showIcon: true,
		showSlideCast: true,
		backgroundColor: '#212121',
		barColor: '#683bb5',
		anchor: 'top',
		position: { x: 0, y: -19 },
		size: { width: 260, height: 20 },
		barStyle: 'horizontal',
		barDirection: 'start',
		borderWidth: 1,
		borderColor: '#0b0b0b',

		widgets: {
			name: {
				show: true,
				anchor: 'left',
				fontColor: '#ffffff',
				fontSize: '14px',
				position: { x: 5, y: 0 },
				outline: true
			},
			elapsed: {
				show: true,
				anchor: 'right',
				fontColor: '#ffffff',
				fontSize: '16px',
				position: { x: 5, y: 0 },
				outline: true
			}
		}
	},

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
			fontSize: '16px',
			position: { x: 0, y: -22 },
			outline: true
		},
		mana: {
			show: true,
			anchor: 'center',
			fontColor: '#ffffff',
			fontSize: '14px',
			position: { x: 0, y: 0 },
			outline: true
		},
		level: {
			show: false,
			anchor: 'bottomRight',
			fontColor: '#ffffff',
			fontSize: '12px',
			position: { x: 5, y: 0 },
			outline: true
		},
		name: {
			show: false,
			anchor: 'topLeft',
			fontColor: '#ffffff',
			fontSize: '16px',
			position: { x: 0, y: -22 },
			outline: true
		}
	}
};