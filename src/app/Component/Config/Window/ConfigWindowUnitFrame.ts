import { TabDef } from 'src/app/Component/TabsComponent';

export abstract class ConfigWindowUnitFrame {
	tabs: TabDef[] = [
		{ name: 'Basic', active: true },
		{ name: 'Health Bar' },
		{ name: 'Mana Bar' },
		{ name: 'Role Icon' },
		{ name: 'Sign' },
		{ name: 'Distance' },
		{ name: 'Status Bar' },
		{ name: 'Cast Bar' },
		{ name: 'Data Texts' },
	];

	currentTabIndex = 0;
	currentTab = this.tabs[this.currentTabIndex];

	tabChanged($event: TabDef) {
		this.currentTab = $event;
		this.currentTabIndex = this.tabs.indexOf($event);
	}
}