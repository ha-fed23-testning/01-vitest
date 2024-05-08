import { test, it, expect, describe } from 'vitest'
import { add, isZero } from './math.js'

function manualTest_add() {
	// kör funktionen som ska testas med lämpliga värden
	// jämför resultatet med det förväntade resultatet
	const expectedResult = 12
	let actualResult = add(10, 2)
	if( expectedResult === actualResult ) {
		console.log('Green (add works)');
	} else {
		console.log('Red (add does not work)');
	}
}
// manualTest_add()

describe('add(x, y)', () => {
	test('can add 10 and 2', () => {
		const expectedResult = 12
		const actualResult = add(10, 2)
		expect(actualResult).toBe(expectedResult)
	})

	test('can add 20 and 0', () => {
		const expectedResult = 20
		const actualResult = add(20, 0)
		expect(actualResult).toBe(expectedResult)
	})


	test('can add -10 and 5', () => {
		const expectedResult = -5
		const actualResult = add(-10, 5)
		expect(actualResult).toBe(expectedResult)
	})


	test('returns NaN when x is not a number', () => {
		const expected = NaN
		const actual = add('20', 2)
		expect(actual).toBe(expected)
	})
	test('returns NaN when y is not a number', () => {
		const expected = NaN
		const actual = add(42, '101')
		expect(actual).toBe(expected)
	})
})


describe('isZero(x)', () => {
	it('returns true if the parameter is zero', () => {
		expect( isZero(0) ).toBe( true )
	})

	it('returns false if the parameter is 27', () => {
		expect( isZero(27) ).toBe( false )
	})
	it('returns false if the parameter is "blå"', () => {
		expect( isZero('blå') ).toBe( false )
	})
})
// it('returns false if the parameter is not zero')