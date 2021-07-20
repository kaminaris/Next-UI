import { BehaviorSubject, merge }                     from 'rxjs';
import { debounceTime }                               from 'rxjs/operators';
import { FramePositionInterface, FrameSizeInterface } from 'src/app/Interface/ConfigInterface';
import { SerializableConfig }                         from 'src/app/Interface/SerializableConfig';
import { TextWidgetConfig }                           from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject }                    from 'src/app/Model/DistinctBehaviorSubject';
import { BaseFrameConfig }                            from './BaseFrameConfig';

export class PlayerFrameConfig extends BaseFrameConfig implements SerializableConfig {
	// @formatter:off
	get barColor(): string { return this.barColorSub.value; }
	set barColor(v: string) { this.barColorSub.next(v); }

	get manaColor(): string { return this.manaColorSub.value; }
	set manaColor(v: string) { this.manaColorSub.next(v); }

	get manaHeight(): string { return this.manaHeightSub.value; }
	set manaHeight(v: string) { this.manaHeightSub.next(v); }

	get showMana(): boolean { return this.showManaSub.value; }
	set showMana(v: boolean) { this.showManaSub.next(v); }
	// @formatter:on

	barColorSub = new DistinctBehaviorSubject<string>('');
	manaColorSub = new DistinctBehaviorSubject<string>('');
	manaHeightSub = new DistinctBehaviorSubject<string>('');
	showManaSub = new DistinctBehaviorSubject<boolean>(true);

	widgets = {
		name: new TextWidgetConfig(),
		job: new TextWidgetConfig(),
		hp: new TextWidgetConfig(),
		mana: new TextWidgetConfig(),
		level: new TextWidgetConfig()
	};

	anyChanged = new BehaviorSubject<PlayerFrameConfig>(this);

	constructor() {
		super();
		this.init();
	}

	init() {
		merge(
			this.positionSub,
			this.sizeSub,
			this.barColorSub,
			this.manaColorSub,
			this.manaHeightSub,
			this.showManaSub
		)
			.pipe(debounceTime(10))
			.subscribe((v) => {
				this.anyChanged.next(this);
			});
	}

	serialize(): any {
		return {
			barColor: this.barColor,
			manaColor: this.manaColor,
			manaHeight: this.manaHeight,
			showMana: this.showMana,
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
		this.position = Object.assign({}, value.position);
		this.size = Object.assign({}, value.size);
		this.barColor = value.barColor;
		this.manaColor = value.manaColor;
		this.manaHeight = value.manaHeight;
		this.showMana = value.showMana;

		this.widgets.name.unserialize(value.widgets.name);
		this.widgets.job.unserialize(value.widgets.job);
		this.widgets.hp.unserialize(value.widgets.hp);
		this.widgets.mana.unserialize(value.widgets.mana);
		this.widgets.level.unserialize(value.widgets.level);
	}

}