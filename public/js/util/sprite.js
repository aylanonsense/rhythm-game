let sprites = {};
let promises = {};

export function preloadSprite(key) {
	if (!promises[key]) {
		promises[key] = new Promise((resolve, reject) => {
			const sprite = new Image();
			sprite.addEventListener('load', () => {
				sprites[key] = sprite;
				resolve(sprite);
			});
			sprite.src = `./img/${key}.png`;
		});
	}
	return promises[key];
};

export function drawSprite(ctx, key, sx, sy, sw, sh, x, y) {
	if (!sprites[key]) {
		preloadSprite(key);
	}
	else {
		ctx.drawImage(sprites[key], sx, sy, sw, sh, x, y, sw, sh);
	}
};
