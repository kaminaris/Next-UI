import { Anchor }                 from 'src/app/Interface/Anchor';
import { FramePositionInterface } from 'src/app/Interface/ConfigInterface';

export interface TextWidgetConfigInterface {
	show: boolean;
	position: FramePositionInterface;
	fontSize: string;
	fontColor: string;
	anchor: Anchor;
}