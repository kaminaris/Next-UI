import { Subject }                from 'rxjs';
import { triggerMap }             from 'src/app/Data/triggerMap';
import { FramePositionInterface } from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }     from 'src/app/Interface/FrameSizeInterface';
import { CustomElementText }      from 'src/app/Model/CustomElement/CustomElementText';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { Trigger }                from './Trigger';

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
	progressBar = false;

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
			progressBar: this.progressBar,
			trigger: this.trigger.serialize()
		};
	}

	unserialize(data: Partial<CustomElement>, parser: LogParser) {
		this.name = data.name;
		this.position = Object.assign({}, data.position);
		this.size = Object.assign({}, data.size);
		this.opacity = data.opacity;
		this.image = data.image;
		this.progressBar = data.progressBar;
		const texts = [];
		for (const t of data.texts) {
			const newText = new CustomElementText();
			newText.unserialize(t);
			texts.push(newText)
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