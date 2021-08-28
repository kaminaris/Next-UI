import { Anchor } from 'src/app/Interface/Anchor';

export function calculateAnchor(anchor: Anchor, position: {x: number, y: number}) {
	let left = '';
	let right = '';
	let top = '';
	let bottom = '';
	let transform = '';

	switch (anchor) {
		case 'topLeft':
			top = position.y + 'px';
			left = position.x + 'px';
			break;
		case 'top':
			top = position.y + 'px';
			left = `calc(50% + ${position.x}px)`;
			transform = 'translate(-50%)';
			break;
		case 'topRight':
			top = position.y + 'px';
			right = position.x + 'px';
			break;
		case 'left':
			top = `calc(50% + ${position.y}px)`;
			left = position.x + 'px';
			transform = 'translate(0, -50%)';
			break;
		case 'center':
			top = `calc(50% + ${position.y}px)`;
			left = `calc(50% + ${position.x}px)`;
			transform = 'translate(-50%, -50%)';
			break;
		case 'right':
			top = `calc(50% + ${position.y}px)`;
			right = position.x + 'px';
			transform = 'translate(0, -50%)';
			break;
		case 'bottomLeft':
			bottom = position.y + 'px';
			left = position.x + 'px';
			break;
		case 'bottom':
			bottom = position.y + 'px';
			left = `calc(50% + ${position.x}px)`;
			transform = 'translate(-50%)';
			break;
		case 'bottomRight':
			bottom = position.y + 'px';
			right = position.x + 'px';
			break;
	}
	
	return {
		top, right, bottom, left, transform
	}
}