import Player from './Player.js';
import { onInput } from '../util/input.js';

export default class Game {
	constructor() {
		this.players = [ new Player(), new Player() ];

		// beat vars
		this.beatStartTime = null;
		this.beatsPerMinute = null;
		// this.activePlayerIndex = 0;
		// this.offensivePlayerIndex = 0;
		// // bind input listeners
		onInput(input => {
			// this.players[input.player].onInput(input);
		});
	}
	update(dt, frameRate, time) {

	}
	render(ctx) {
		// fill the canvas with a blank color
		ctx.fillStyle = '#222';
		ctx.fillRect(0, 0, 128, 128);
	}

	startBeat(bpm) {
		this.beatStartTime = Date.now();
		this.beatsPerMinute = bpm;
	}
	initAttackPhase() {

	}
};
