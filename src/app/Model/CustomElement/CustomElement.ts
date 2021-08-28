import { Subject }                from 'rxjs';
import { FramePositionInterface } from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }     from 'src/app/Interface/FrameSizeInterface';
import { TextWidgetConfig }       from 'src/app/Model/Config/TextWidgetConfig';
import { Trigger }                from './Trigger';

export type ElementType = 'image' | 'text' | 'progressbar';

export class CustomElement {
	name = '';
	type: ElementType;
	trigger: Trigger;

	position: FramePositionInterface = { x: 200, y: 200 };
	size: FrameSizeInterface = { width: 100, height: 100 };

	// visual specific values
	opacity = 1;

	// Specific options for element
	text = '';
	fontSize = 24;
	fontColor = '#ffffff';

	// background image
	image = '';

	// texts
	texts: TextWidgetConfig[] = [];

	// just for config mode
	uiActive = false;
	update = new Subject<boolean>();
}