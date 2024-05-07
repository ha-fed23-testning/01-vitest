import { test, expect } from 'vitest'
import { add } from './math.js'

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

// test, expect, toBe
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
