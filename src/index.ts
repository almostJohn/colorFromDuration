const MAX_TRUST_ACCOUNT_AGE = 1000 * 60 * 60 * 24 * 7 * 4;

export function colorFromDuration(duration: number) {
	const percent = Math.min(duration / (MAX_TRUST_ACCOUNT_AGE / 100), 100);
	let r: number;
	let g: number;
	let b = 0;

	if (percent < 50) {
		r = 255;
		g = Math.round(5.1 * percent);
	} else {
		g = 255;
		r = Math.round(510 - 5.1 * percent);
	}
									 
	const tintFactor = 0.3;
									 
	r += (255 - r) * tintFactor;
	g += (255 - g) * tintFactor;
	b += (255 - b) * tintFactor;
									 
	return (r << 16) + (g << 8) + b;
}
