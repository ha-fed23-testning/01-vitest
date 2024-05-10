function isArray(x) {
	if( x === null ) return false
	return (typeof x) === 'object' && (typeof x.length) === 'number'
}

function arrayLength(array) {
	if( isArray(array) ) {
		return array.length
	} else {
		return -1
	}
}

function arrayMax(array) {
	if( !isArray(array) ) {
		throw new Error('parameter must be an array')
	} else if( array.length === 0 ) {
		return undefined
	}
	const numbers = array.filter(x => (typeof x) === 'number')
	if( numbers.length === 0 ) {
		return NaN
	}
	let maximum = numbers[0]
	numbers.forEach(n => {
		if( n > maximum ) {
			maximum = n
		}
	})
	return maximum
}

export { arrayLength, arrayMax, isArray }
