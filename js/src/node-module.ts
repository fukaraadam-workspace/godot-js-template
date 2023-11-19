import { randomInteger } from './index.js';
import { node } from './decorators';

export default class ModuleWrapper extends godot.Node {
	@node
	label: godot.Label;

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		this.generateRandom();
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {}

	generateRandom() {
		const num = randomInteger(0, 100);
		console.log('Module wrapper is ready: ', num);
		this.label.text = '' + num;
	}

	_on_button_pressed() {
		this.generateRandom();
	}
}
