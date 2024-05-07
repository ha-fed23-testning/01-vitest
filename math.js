
function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number' ) {
		return NaN
	}
	return x + y
}

export { add }

