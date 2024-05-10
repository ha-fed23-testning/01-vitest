import { describe, it, test, /* it och test är samma funktion */ expect } from 'vitest'
import { arrayLength } from './list-utils.js'

describe('arrayLength(array)', () => {
	// returnera längden på listan
	// om parametern inte är en array, returnera -1
	it('returns the length of the list', () => {
		expect( arrayLength([]) ).toBe(0)
		expect( arrayLength([1, 2, 5]) ).toBe(3)
	})

	it('returns -1 if parameter is not an array', () => {
		expect( arrayLength(1337) ).toBe(-1)
		expect( arrayLength({}) ).toBe(-1)
	})
})

/*
6 En funktion som returnerar längden på en array. Om input inte är en array ska den returnera -1.

7 En funktion som returnerar det största talet i en array.

8a En funktion som returnerar summan av alla tal i en array.
8b En funktion som returnerar medelvärdet av alla tal i en array. (Summan delat med antalet tal.)

*/