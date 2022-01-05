const units = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

export function formatNumber(number: number, precision: number = 1) {
	let sign = Math.sign(number);
	let n = Math.abs(number);
	let unit = 0;
	while (n > 1000) {
		unit++;
		n = n / 1000;
	}

	return (sign * n).toFixed(precision) + units[unit];
}