function combineWords(a, b) {
	if( (typeof a) !== 'string' || (typeof b) !== 'string' ) {
		throw new Error('Parameters must be strings.')
	}

	return a + ', ' + b
}

export { combineWords }
