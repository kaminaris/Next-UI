import { RecursivePartial }  from 'src/app/Interface/RecursivePartial';
import { PlayerFrameConfig } from 'src/app/Model/Config/PlayerFrameConfig';

export const classicPlayerConfig: RecursivePartial<PlayerFrameConfig> = {
	basic: {
		enabled: true,
		position: { x: 600, y: 500 },
		size: { width: 260, height: 60 },
		backgroundColor: 'rgba(33,32,33,0.8)',
		borderWidth: 1,
		borderColor: 'rgba(16,16,16,1)',
	},
	healthBar: {
		useJobColor: true,
		barStyle: 'horizontal',
		barDirection: 'start',
		barColor: '#02A502',
	},
	manaBar: {
		show: true,
		barStyle: 'horizontal',
		barDirection: 'start',
		barColor: '#02A597',
		height: '20px',
	},
	role: {
		show: false,
		color: 'rgba(255,255,255,1)',
		size: 20,
		anchor: 'topRight',
		position: { x: 30, y: 5 },
	},
	sign: {
		show: true,
		anchor: 'topRight',
		position: { x: 50, y: 0 },
		size: 48,
	},
	leader: {
		show: false,
		anchor: 'topLeft',
		position: { x: -18, y: 0 },
		size: 16
	},
	distance: {
		enabled: false,
		opacity: 60,
		threshold: 30,
	},
	status: {
		show: true,
		position: { x: 0, y: 0 },
		anchor: 'bottomLeft',
		onlyOwn: false,
		filters: [],
	},
	castBar: {
		show: true,
		showIcon: true,
		showSlideCast: true,
		backgroundColor: 'rgba(33,32,33,0.8)',
		barColor: '#6f02a5',
		anchor: 'top',
		position: { x: 0, y: -19 },
		size: { width: 260, height: 20 },
		barStyle: 'horizontal',
		barDirection: 'start',
		borderWidth: 1,
		borderColor: 'rgba(16,16,16,1)',

		widgets: {
			name: {
				show: true,
				anchor: 'left',
				fontColor: '#ffffff',
				fontSize: '12px',
				position: { x: 5, y: 2 },
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
};