import { SerializableConfig }       from 'src/app/Interface/SerializableConfig';
import { BaseConfig }               from 'src/app/Model/Config/BaseConfig';
import { TextWidgetConfig }         from 'src/app/Model/Config/TextWidgetConfig';
import { UnitFrameBasicConfig }     from 'src/app/Model/Config/UnitFrame/UnitFrameBasicConfig';
import { UnitFrameCastBarConfig }   from 'src/app/Model/Config/UnitFrame/UnitFrameCastBarConfig';
import { UnitFrameDistanceConfig }  from 'src/app/Model/Config/UnitFrame/UnitFrameDistanceConfig';
import { UnitFrameHealthBarConfig } from 'src/app/Model/Config/UnitFrame/UnitFrameHealthBarConfig';
import { UnitFrameLeaderConfig }    from 'src/app/Model/Config/UnitFrame/UnitFrameLeaderConfig';
import { UnitFrameManaBarConfig }   from 'src/app/Model/Config/UnitFrame/UnitFrameManaBarConfig';
import { UnitFrameRoleConfig }      from 'src/app/Model/Config/UnitFrame/UnitFrameRoleConfig';
import { UnitFrameSignConfig }      from 'src/app/Model/Config/UnitFrame/UnitFrameSignConfig';
import { UnitFrameStatusConfig }    from 'src/app/Model/Config/UnitFrame/UnitFrameStatusConfig';

export class PlayerFrameConfig extends BaseConfig implements SerializableConfig {
	basic = new UnitFrameBasicConfig();
	healthBar = new UnitFrameHealthBarConfig();
	manaBar = new UnitFrameManaBarConfig();
	role = new UnitFrameRoleConfig();
	sign = new UnitFrameSignConfig();
	leader = new UnitFrameLeaderConfig();
	distance = new UnitFrameDistanceConfig();
	status = new UnitFrameStatusConfig();
	castBar = new UnitFrameCastBarConfig();

	widgets = {
		name: new TextWidgetConfig(),
		job: new TextWidgetConfig(),
		hp: new TextWidgetConfig(),
		mana: new TextWidgetConfig(),
		level: new TextWidgetConfig(),
	};
}