import { randomInteger } from './thirdpart';

export default class ModuleWrapper extends godot.Node {
	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log('Module wrapper is ready: ', randomInteger(0, 100));
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {}
}
