import { TextWidgetConfig }        from 'src/app/Model/Config/TextWidgetConfig';
import { DistinctBehaviorSubject } from 'src/app/Model/DistinctBehaviorSubject';

export class CustomElementText extends TextWidgetConfig {
	// @formatter:off
	get text(): string { return this.textSub.value; }
	set text(v: string) { this.textSub.next(v); }
	textSub = new DistinctBehaviorSubject<string>('');
	// @formatter:on

	formatTextCache: (data: any) => string;
	getFormattedText(data: any): string {
		if (!this.formatTextCache) {
			const template = this.text.replace(/\[(\w+)\]/g, (match: string, capture: string) => {
				return '${data.' + capture + '}';
			});
			this.formatTextCache = new Function('data', 'return `' + template + '`') as any;
		}

		return this.formatTextCache(data);
	}

}