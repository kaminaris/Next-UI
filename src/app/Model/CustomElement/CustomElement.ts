import { Subject }                from 'rxjs';
import { triggerMap }             from 'src/app/Data/triggerMap';
import { BarDirection }           from 'src/app/Interface/BarDirection';
import { BarStyle }               from 'src/app/Interface/BarStyle';
import { FramePositionInterface } from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }     from 'src/app/Interface/FrameSizeInterface';
import { CustomElementText }      from 'src/app/Model/CustomElement/CustomElementText';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { Trigger }                from './Trigger';

export interface CustomElementProgressBarConfig {
	show: boolean;
	circular: boolean,
	smooth: boolean,
	radius: number,
	bgColor: string,
	fillColor: string,
	barStyle: BarStyle,
	barDirection: BarDirection,
}

export class CustomElement {
	name = '';
	trigger: Trigger;

	position: FramePositionInterface = { x: 200, y: 200 };
	size: FrameSizeInterface = { width: 100, height: 100 };

	// visual specific values
	opacity = 1;

	// background image
	image = '';

	// texts
	texts: CustomElementText[] = [];

	progress = 0;
	progressBar: CustomElementProgressBarConfig = {
		show: false,
		circular: false,
		smooth: true,
		radius: 90,
		bgColor: 'rgba(33,32,33,0.8)',
		fillColor: 'rgba(200, 50, 50, 0.7)',
		barStyle: 'horizontal',
		barDirection: 'start'
	};

	// just for config mode
	uiActive = false;
	update = new Subject<boolean>();
	triggerChange = new Subject<boolean>();

	serialize() {
		const texts: any[] = [];
		for (const t of this.texts) {
			const serializedT = t.serialize();
			delete serializedT.anyChangedCache;
			texts.push(serializedT);
		}

		return {
			name: this.name,
			position: Object.assign({}, this.position),
			size: Object.assign({}, this.size),
			opacity: this.opacity,
			image: this.image,
			texts: texts,

			progressBar: Object.assign({}, this.progressBar),

			trigger: this.trigger.serialize()
		};
	}

	unserialize(data: Partial<CustomElement>, parser: LogParser) {
		this.name = data.name;
		this.position = Object.assign({}, data.position);
		this.size = Object.assign({}, data.size);
		this.opacity = data.opacity;
		this.image = data.image;

		Object.assign(this.progressBar, data.progressBar);

		const texts = [];
		for (const t of data.texts) {
			const newText = new CustomElementText();
			newText.unserialize(t);
			texts.push(newText);
		}
		this.texts = texts;

		const triggerType = data.trigger.type;
		const TriggerClass = triggerMap.find(tm => tm.name === triggerType)?.trigger;
		if (this.trigger) {
			this.trigger.detach();
		}

		if (TriggerClass) {
			this.trigger = new TriggerClass(parser);
			this.trigger.unserialize(data.trigger);
			this.trigger.attach();
			this.triggerChange.next(true);
		}
	}
}