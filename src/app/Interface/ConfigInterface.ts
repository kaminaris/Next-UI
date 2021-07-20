import { TextWidgetConfigInterface } from 'src/app/Interface/TextWidgetConfigInterface';

export interface FramePositionInterface {
	x: number;
	y: number;
}

export interface FrameSizeInterface {
	width: number;
	height: number;
}

export interface FrameConfigInterface {
	position: FramePositionInterface;
	size: FrameSizeInterface;

	fontSize?: string;
	fontColor?: string;
	barColor?: string;

	[name: string]: any;
}

export interface PlayerConfigInterface extends FrameConfigInterface {
	barColor: string;
	manaColor: string;
	manaHeight: string;
	showMana: boolean,

	fontSize: string;
	fontColor: string;

	showName: boolean;
	namePosition: FramePositionInterface;

	showLevel: boolean;
	levelPosition: FramePositionInterface;

	showJob: boolean;
	jobPosition: FramePositionInterface;

	widgets: {
		job: TextWidgetConfigInterface
	}
}

export interface TargetConfigInterface extends PlayerConfigInterface {

}

export interface AuraBarInterface extends FrameConfigInterface {
	iconSize: string;
	cooldownPrecision: number;
	cooldownOutline: boolean;
}

export interface ConfigInterface {
	fontFamily: string;
	numberFormat: string;

	frames: {
		player: PlayerConfigInterface,
		target: TargetConfigInterface,
		aura: AuraBarInterface,

		[name: string]: FrameConfigInterface
	}
}