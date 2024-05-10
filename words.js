function combineWords(a, b) {
	if( (typeof a) !== 'string' || (typeof b) !== 'string' ) {
		throw new Error('Parameters must be strings.')
	}

	return a + ', ' + b
}

function trimma(str) {
	if( (typeof str) !== 'string' ) {
		throw new Error('Parameter must be a string')
	}
	return str.trim()
}

export { combineWords, trimma }
