import { FramePositionInterface } from 'src/app/ConfigInterface';
import { Anchor }                 from 'src/app/Interface/Anchor';

export interface TextWidgetConfig {
	show: boolean;
	position: FramePositionInterface;
	fontSize: string;
	fontColor: string;
	anchor: Anchor;
}