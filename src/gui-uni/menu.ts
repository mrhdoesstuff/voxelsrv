import { scale, event } from '../gui/main';
import { FormTextBlock } from './formtextblock';
import * as GUI from '@babylonjs/gui';

export function createItem() {
	const item = new GUI.Rectangle();
	item.width = `${100 * scale}px`;
	item.height = `${18 * scale}px`;
	item.isPointerBlocker = true;
	item.horizontalAlignment = 2;
	item.thickness = 0;
	item.paddingBottom = '10px';
	item.zIndex = 10;

	const text = new FormTextBlock();
	text.text = [{ text: 'MenuItemText', color: 'white', font: 'Lato' }];
	text.fontSize = 10 * scale;
	text.textHorizontalAlignment = 2;
	item.addControl(text);

	item.onPointerEnterObservable.add((e) => {
		text.text.forEach((x) => (x.underline = true));
		text._markAsDirty();
	});

	item.onPointerOutObservable.add((e) => {
		text.text.forEach((x) => (x.underline = false));
		text._markAsDirty();
	});

	return { item: item, text: text };
}

export function createInput() {
	const main = new GUI.Rectangle();
	main.height = `${28 * scale}px`;
	main.adaptWidthToChildren = true;

	main.thickness = 0;
	const name = new GUI.TextBlock();
	name.fontFamily = 'Lato';
	name.fontSize = 9 * scale;
	name.textVerticalAlignment = 0;
	name.color = 'white';
	name.text = 'Input';
	name.top = scale;
	name.verticalAlignment = 0;

	main.addControl(name);

	const input = new GUI.InputText();
	input.thickness = 0;
	input.background = '#ffffffaa';
	input.focusedBackground = '#ffffffff';
	input.placeholderText = 'Placeholder';
	input.color = '#666666';
	input.verticalAlignment = 0;
	input.height = `${15 * scale}px`;
	input.width = `${100 * scale}px`;
	input.top = `${14 * scale}px`;

	main.addControl(input);

	const rescale = (x) => {
		main.height = `${28 * scale}px`;
		name.fontSize = 9 * scale;
		input.height = `${15 * scale}px`;
		input.width = `${100 * scale}px`;
		input.top = `${14 * scale}px`;
	};

	event.on('scale-change', rescale);

	main.onDisposeObservable.add(() => {
		event.off('scale-change', rescale);
	});

	return { main, name, input };
}

export function createSlider() {
	const main = new GUI.Rectangle();
	main.height = `${28 * scale}px`;
	main.adaptWidthToChildren = true;
	main.thickness = 0;

	const name = new GUI.TextBlock();
	name.fontFamily = 'Lato';
	name.fontSize = 9 * scale;
	name.textVerticalAlignment = 0;
	name.color = 'white';
	name.text = 'Slider';
	name.top = scale;
	name.verticalAlignment = 0;

	main.addControl(name);

	const slider = new GUI.Slider();
	slider.minimum = 0;
	slider.maximum = 100;
	slider.value = 0;
	slider.height = `${13 * scale}px`;
	slider.width = `${100 * scale}px`;
	slider.top = `${14 * scale}px`;
	slider.verticalAlignment = 0;
	slider.color = '#666666';
	slider.thumbColor = '#888888';
	slider.background = '#ffffffaa';
	slider.borderColor = '#00000000'
	slider.barOffset = 6

	main.addControl(slider);

	const rescale = (x) => {
		main.height = `${28 * scale}px`;
		name.fontSize = 9 * scale;
		slider.height = `${10 * scale}px`;
		slider.width = `${100 * scale}px`;
		slider.top = `${14 * scale}px`;
	};

	event.on('scale-change', rescale);

	main.onDisposeObservable.add(() => {
		event.off('scale-change', rescale);
	});

	return { main, name, slider };
}
