function arrayLength(array) {
	if( (typeof array) === 'object' && (typeof array.length) === 'number' ) {
		return array.length
	} else {
		return -1
	}
}

export { arrayLength }
