import { node } from './decorators';

export default class SingleModule extends godot.Node {
	@node
	label: godot.Label;

	numb = 0;

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		this.increaseNumber();
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {}

	increaseNumber() {
		this.numb += 1;
		console.log('Single module is ready: ', this.numb);
		this.label.text = '' + this.numb;
	}

	_on_button_pressed() {
		this.increaseNumber();
	}
}
