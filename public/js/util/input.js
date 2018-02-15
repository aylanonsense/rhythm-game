const INPUT_PROPS = {
	KeyW:       { player: 0, button: 0, x:  0, y: -1 },
	KeyA:       { player: 0, button: 1, x: -1, y:  0 },
	KeyS:       { player: 0, button: 2, x:  0, y:  1 },
	KeyD:       { player: 0, button: 3, x:  1, y:  0 },
	ArrowUp:    { player: 1, button: 0, x:  0, y: -1 },
	ArrowLeft:  { player: 1, button: 1, x: -1, y:  0 },
	ArrowDown:  { player: 1, button: 2, x:  0, y:  1 },
	ArrowRight: { player: 1, button: 3, x:  1, y:  0 }
};

let hasBoundListeners = false;
let state = {};
let listeners = [];

function handleEvent(e) {
	if (INPUT_PROPS[e.code]) {
		if (state[e.code] !== e.type) {
			state[e.code] = e.type;
			let input = { type: e.type, time: Date.now(), ...INPUT_PROPS[e.code] };
			// fire anything listening for inputs
			for (let listener of listeners) {
				listener(input);
			}
		}
	}
}

export function onInput(filters, callback) {
	// can be called without filters
	if (arguments.length === 1) {
		callback = filters;
		filters = null;
	}
	// add a new listener
	listeners.push(input => {
		// if there are filters, make sure they match
		if (filters) {
			for (let [ key, expectedValue ] of Object.entries(filters)) {
				if (input[key] !== expectedValue) {
					return;
				}
			}
		}
		// fire the callback
		callback(input);
	});
};

export function bindListeners() {
	if (!hasBoundListeners) {
		hasBoundListeners = true;
		document.addEventListener('keydown', handleEvent);
		document.addEventListener('keyup', handleEvent);
	}
};
