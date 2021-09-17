import { FramePositionInterface } from 'src/app/Interface/FramePositionInterface';
import { FrameSizeInterface }     from 'src/app/Interface/FrameSizeInterface';
import { LogParser }              from 'src/app/Service/LogParser/LogParser';
import { CustomElement }          from './CustomElement';

export class CustomElementGroup {
	name = '';

	position: FramePositionInterface = { x: 200, y: 200 };
	size: FrameSizeInterface = { width: 100, height: 100 };

	dynamic = false;
	vertical = false;

	children: CustomElement[] = [];

	uiActive = false;

	update() {
		for (const child of this.children) {
			child.update.next(true);
		}
	}

	serialize() {
		return {
			name: this.name,
			dynamic: this.dynamic,
			vertical: this.vertical,
			position: Object.assign({}, this.position),
			size: Object.assign({}, this.size),
			children: [...this.children.map(c => c.serialize())]
		};
	}

	unserialize(data: Partial<CustomElementGroup>, parser: LogParser) {
		this.name = data.name;
		this.position = Object.assign({}, data.position);
		this.size = Object.assign({}, data.size);
		this.dynamic = data.dynamic;
		this.vertical = data.vertical;

		const newChildren = [];
		for (const childData of data.children) {
			const newChild = new CustomElement();
			newChild.unserialize(childData, parser);
			newChildren.push(newChild);
		}
		this.children = newChildren;
	}
}