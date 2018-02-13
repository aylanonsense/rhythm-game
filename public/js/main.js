import six from './six.js';

console.log(six(4));

window.addEventListener('load', () => {
	let time = Date.now();
	let prevTimes = [ time ];
	let frameRate = 60;

	function loop() {
		// figure out how much time has passed
		let prevTime = time;
		time = Date.now();
		let dt = (time - prevTime) / 1000;

		// calculate frame rate
		prevTimes.push(time);
		if (prevTimes.length > 15) {
			prevTimes.shift();
			let ms = prevTimes[prevTimes.length - 1] - prevTimes[0];
			if (ms > 0) {
				frameRate = Math.round((prevTimes.length - 1) / (ms / 1000));
			}
		}

		// update the game simulation
		// game.update(dt);

		// clear the canvas
		// ...

		// render the game simulation
		// game.render();

		// schedule the next loop
		window.requestAnimationFrame(loop);
	}
	window.requestAnimationFrame(loop);
});

