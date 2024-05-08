import { test, it, expect, describe } from 'vitest'
import { isItRaining } from './weather.js'

describe('isItRaining(moistureLevel)', () => {

	// under 0.8  -> false
	// minst 0.8  -> true
	// under 0, över 1  -> throw Error
	// inte ett number  -> throw Error

	it('returns false if moisture is less than 0.8, <', () => {
		expect( isItRaining(0.32) ).toBe(false)
		expect( isItRaining(0.7) ).toBe(false)
	})
	it('returns true if moisture is at least 0.8, >=', () => {
		expect( isItRaining(0.81) ).toBe(true)
		expect( isItRaining(0.8) ).toBe(true)
	})
	it('throws an Error if moisture is less than 0', () => {
		expect( () => isItRaining(-1) ).toThrow()
	})
	// TODO: gör klart testfall för ett värde större än 1 och ett värde som inte är en sträng.
})