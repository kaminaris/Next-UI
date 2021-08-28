import { Subject }                 from 'rxjs';
import { Anchor }                  from 'src/app/Interface/Anchor';
import { FramePositionInterface }  from 'src/app/Interface/FramePositionInterface';
import { SerializableConfig }      from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }        from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';
import { BaseFrameConfig }         from './BaseFrameConfig';

export class PlayerFrameConfig extends BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	get enabled(): boolean { return this.enabledSub.value; }
	set enabled(v: boolean) { this.enabledSub.next(v); }

	get backgroundColor(): string { return this.backgroundColorSub.value; }
	set backgroundColor(v: string) { this.backgroundColorSub.next(v); }

	get barColor(): string { return this.barColorSub.value; }
	set barColor(v: string) { this.barColorSub.next(v); }

	get manaColor(): string { return this.manaColorSub.value; }
	set manaColor(v: string) { this.manaColorSub.next(v); }

	get manaHeight(): string { return this.manaHeightSub.value; }
	set manaHeight(v: string) { this.manaHeightSub.next(v); }

	get useClassColor(): boolean { return this.useClassColorSub.value; }
	set useClassColor(v: boolean) { this.useClassColorSub.next(v); }

	get showMana(): boolean { return this.showManaSub.value; }
	set showMana(v: boolean) { this.showManaSub.next(v); }

	get borderWidth(): number { return this.borderWidthSub.value; }
	set borderWidth(v: number) { this.borderWidthSub.next(v); }

	get borderColor(): string { return this.borderColorSub.value; }
	set borderColor(v: string) { this.borderColorSub.next(v); }

	get auraAnchor(): Anchor { return this.auraAnchorSub.value; }
	set auraAnchor(v: Anchor) { this.auraAnchorSub.next(v); }

	get auraPosition(): FramePositionInterface { return this.auraPositionSub.value; }
	set auraPosition(v: FramePositionInterface) { this.auraPositionSub.next(v); }
	// @formatter:on

	enabledSub = new DistinctBehaviorSubject<boolean>(true);
	backgroundColorSub = new DistinctBehaviorSubject<string>('');
	barColorSub = new DistinctBehaviorSubject<string>('');
	manaColorSub = new DistinctBehaviorSubject<string>('');
	manaHeightSub = new DistinctBehaviorSubject<string>('');
	useClassColorSub = new DistinctBehaviorSubject<boolean>(true);
	showManaSub = new DistinctBehaviorSubject<boolean>(true);

	borderWidthSub = new DistinctBehaviorSubject<number>(1);
	borderColorSub = new DistinctBehaviorSubject<string>('');

	auraAnchorSub = new DistinctBehaviorSubject<Anchor>('bottomLeft');
	auraPositionSub = new DistinctBehaviorSubject<FramePositionInterface>({ x: 0, y: 0 });

	widgets = {
		name: new TextWidgetConfig(),
		job: new TextWidgetConfig(),
		hp: new TextWidgetConfig(),
		mana: new TextWidgetConfig(),
		level: new TextWidgetConfig()
	};

	getSubjects(): Subject<any>[] {
		return [
			...super.getSubjects(),
			this.enabledSub,
			this.backgroundColorSub,
			this.barColorSub,
			this.manaColorSub,
			this.manaHeightSub,
			this.useClassColorSub,
			this.showManaSub,
			this.borderWidthSub,
			this.borderColorSub,
			this.auraAnchorSub,
		];
	}

	serialize(): any {
		return {
			enabled: this.enabled,
			position: Object.assign({}, this.position),
			size: Object.assign({}, this.size),
			backgroundColor: this.backgroundColor,
			barColor: this.barColor,
			manaColor: this.manaColor,
			manaHeight: this.manaHeight,
			useClassColor: this.useClassColor,
			showMana: this.showMana,
			borderWidth: this.borderWidth,
			borderColor: this.borderColor,
			auraAnchor: this.auraAnchor,
			auraPosition: Object.assign({}, this.auraPosition),
			widgets: {
				name: this.widgets.name.serialize(),
				job: this.widgets.job.serialize(),
				hp: this.widgets.hp.serialize(),
				mana: this.widgets.mana.serialize(),
				level: this.widgets.level.serialize()
			}
		};
	}

	unserialize(value: Partial<PlayerFrameConfig>): void {
		super.unserialize(value);
		this.enabled = value.enabled;
		this.backgroundColor = value.backgroundColor;
		this.barColor = value.barColor;
		this.manaColor = value.manaColor;
		this.manaHeight = value.manaHeight;
		this.useClassColor = value.useClassColor;
		this.showMana = value.showMana;
		this.borderWidth = value.borderWidth;
		this.borderColor = value.borderColor;
		this.auraAnchor = value.auraAnchor;
		this.auraPosition = Object.assign({}, value.auraPosition);

		this.widgets.name.unserialize(value.widgets.name);
		this.widgets.job.unserialize(value.widgets.job);
		this.widgets.hp.unserialize(value.widgets.hp);
		this.widgets.mana.unserialize(value.widgets.mana);
		this.widgets.level.unserialize(value.widgets.level);
	}

}