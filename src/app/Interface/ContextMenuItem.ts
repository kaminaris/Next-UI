export interface ContextMenuItem {
	label: string;
	action: (item: ContextMenuItem, $event: MouseEvent) => void;
	hidden?: (item: ContextMenuItem) => boolean;
}