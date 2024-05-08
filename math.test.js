import { test, it, expect, describe } from 'vitest'
import { add, isZero, subtract, triple } from './math.js'

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

describe('subtract(x, y)', () => {
	// it returns 15 for subtract(20, 5)
	// it returns -12 for subtract(0, 12)
	// it returns 3 for subtract(-1, -4)
	// it returns 0 for subtract(0, 0)
	it('returns 15 for subtract(20, 5)', () => {
		expect( subtract(20, 5) ).toBe(15)
	})
	it('returns -12 for subtract(0, 12)', () => {
		expect( subtract(0, 12) ).toBe( -12 )
	})
	it('returns 3 for subtract(-1, -4)', () => {
		expect( subtract(-1, -4) ).toBe(3)
	})
	it('returns 0 for subtract(0, 0)', () => {
		expect( subtract(0, 0) ).toBe(0)
	})
	it('returns NaN for subtract(Infinity, Infinity)', () => {
		expect( subtract(Infinity, Infinity) ).toBe(NaN)
	})
})

describe('triple(x)  <- 3*x', () => {
	// it returns 9 for triple(3)
	// it returns -9 for triple(-3)
	// it returns 0 for triple(0)
	// it return NaN for triple('sträng')
	it('returns 9 for triple(3)', () => {
		expect( triple(3) ).toBe(9)
	})
	it('returns -9 for triple(-3)', () => {
		expect( triple(-3) ).toBe(-9)
	})
	it('returns 0 for triple(0)', () => {
		expect( triple(0) ).toBe(0)
	})
	it('returns NaN for triple("string")', () => {
		expect( triple('string') ).toBe(NaN)
	})
})
