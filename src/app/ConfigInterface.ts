export interface FrameConfigInterface {
	position: { x: number, y: number };
	size: { width: number, height: number };

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