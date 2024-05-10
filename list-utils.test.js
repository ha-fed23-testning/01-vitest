import { describe, it, test, /* it och test är samma funktion */ expect } from 'vitest'
import { arrayLength, arrayMax, isArray } from './list-utils.js'

describe('isArray(x)', () => {
	it('returns true if parameter is an array', () => {
		expect( isArray(['p', 'uwuww']) ).toBe(true)
		expect( isArray([]) ).toBe(true)
	})
	it('returns false if parameter is not an array', () => {
		expect( isArray(null) ).toBe(false)
		expect( isArray(27) ).toBe(false)
	})
})

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

describe('arrayMax(array)', () => {
	// om inte array, throw Error
	// om arrayen är tom, returnera undefined
	// om arrayen har element, fast inga är tal, returnera NaN
	// annars returnera största talet
	it('throws an Error if parameter not an array', () => {
		expect( () => arrayMax(null) ).toThrow()
	})
	it('returns undefined if the array is empty', () => {
		expect( arrayMax([]) ).toBeUndefined()
	})
	it('returns NaN if array only has non-numbers', () => {
		expect( arrayMax(['pele', false]) ).toBeNaN()
		expect( arrayMax([null]) ).toBeNaN()
		expect( arrayMax([true, false, undefined]) ).toBeNaN()
	})
	it('returns the maximum number of the array', () => {
		expect( arrayMax([-10]) ).toBe(-10)
		expect( arrayMax([-1, 20, -5, 15]) ).toBe(20)
		expect( arrayMax([-10, -11, -12, -13]) ).toBe(-10)
	})
})
/*
6 En funktion som returnerar längden på en array. Om input inte är en array ska den returnera -1.

7 En funktion som returnerar det största talet i en array.

8a En funktion som returnerar summan av alla tal i en array.
8b En funktion som returnerar medelvärdet av alla tal i en array. (Summan delat med antalet tal.)

*/