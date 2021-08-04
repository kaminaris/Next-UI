import { Component, Input } from '@angular/core';

@Component({ template: '' })
export abstract class BaseIcon {
	@Input() size = 16;
}