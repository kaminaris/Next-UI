import { FramePositionInterface }    from './FramePositionInterface';
import { FrameSizeInterface }        from './FrameSizeInterface';
import { TextWidgetConfigInterface } from './TextWidgetConfigInterface';

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
