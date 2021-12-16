export enum ActionEffectDisplayType {
	HideActionName = 0,
	ShowActionName = 1,
	ShowItemName = 2,
	MountName = 0x0d
}

export interface ActionEffectHeader {
	animationTargetId: number; // who the animation targets
	unknown: number;
	actionId: number; // what the casting player casts, shown in battle log / ui
	globalEffectCounter: number;
	animationLockTime: number;
	someTargetId: number;
	hiddenAnimation: number; // 0 = show animation, otherwise hide animation.
	rotation: number;
	actionAnimationId: number;
	variation: number; // animation
	effectDisplayType: ActionEffectDisplayType; // is this also item id / mount id?
	unknown20: number;
	effectCount: number;
	padding21: number;
}

export interface ActionEffect1 {
	header: ActionEffectHeader;
	padding1: number;
	padding2: number;

	effects: number[];
	padding3: number;
	padding4: number;
	targetIds: number[];
	padding5: number;
}

export interface ActionEffect8 {
	header: ActionEffectHeader;
	padding1: number;
	padding2: number;

	effects: number[];

	padding3: number;
	padding4: number;

	targetIds: number[];

	effectFlags1: number;
	effectFlags2: number;
	padding5: number;
	padding6: number;
}

export interface XivIpcActionEffect16 {
	header: ActionEffectHeader;
	padding1: number;
	padding2: number;

	effects: number[];
	padding3: number;
	padding4: number;

	targetIds: number[];

	effectFlags1: number;
	effectFlags2: number;
	padding5: number;
	padding6: number;
}

export interface XivIpcActionEffect24 {
	header: ActionEffectHeader;
	padding1: number;
	padding2: number;
	effects: number[];
	padding3: number;
	padding4: number;

	targetIds: number[];

	effectFlags1: number;
	effectFlags2: number;
	padding5: number;
	padding6: number;
}

export interface XivIpcActionEffect32 {
	header: ActionEffectHeader;
	padding1: number;
	padding2: number;
	effects: number[];
	padding3: number;
	padding4: number;

	targetIds: number[];

	effectFlags1: number;
	effectFlags2: number;
	padding5: number;
	padding6: number;
}
