export interface FrameConfigInterface {
	position: { x: number, y: number };
	size: { width: number, height: number };

	[name: string]: any;
}

export interface ConfigInterface {
	showMana: boolean;
	displayCharName: boolean;
	hpHeight: string;
	manaHeight: string;
	fontSize: string;
	fontFamily: string;
	hpColor: string;
	manaColor: string;
	numberFormat: string;
	frames: {
		[name: string]: FrameConfigInterface
	}
}