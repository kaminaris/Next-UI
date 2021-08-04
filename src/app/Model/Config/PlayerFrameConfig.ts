import { Subject }                 from 'rxjs';
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

	get showMana(): boolean { return this.showManaSub.value; }
	set showMana(v: boolean) { this.showManaSub.next(v); }
	// @formatter:on

	enabledSub = new DistinctBehaviorSubject<boolean>(true);
	backgroundColorSub = new DistinctBehaviorSubject<string>('');
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

	getSubjects(): Subject<any>[] {
		return [
			...super.getSubjects(),
			this.enabledSub,
			this.backgroundColorSub,
			this.barColorSub,
			this.manaColorSub,
			this.manaHeightSub,
			this.showManaSub
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
		super.unserialize(value);
		this.enabled = value.enabled;
		this.backgroundColor = value.backgroundColor;
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