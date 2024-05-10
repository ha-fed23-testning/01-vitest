import { describe, it, test, expect } from 'vitest'
import { combineWords } from './words.js'
/*
3a En funktion som slår ihop två strängar.
// Exempel: combineWords('anka', 'kod') === 'anka, kod'
function combineWords(a, b) {}
Acceptanskriterier:
- om a inte är en sträng, kasta Error
- om b inte är en sträng, kasta Error
- ska returnera kombinationen av två strängar, med kommatecken emellan
*/
describe('combineWords(a, b)', () => {
	it('throws an Error if a is not a string', () => {
		expect( () => combineWords(null, 'hej') ).toThrow('Parameters must be strings.')
	})
	it('throws an Error if b is not a string', () => {
		expect( () => combineWords('Eiffel', -42) ).toThrow('Parameters must be strings.')
	})

	it('returns the strings with comma between', () => {
		expect( combineWords('kalkon', 'lego') ).toBe('kalkon, lego')
	})
})

/*
3b En funktion som tar bort inledande och avslutande mellanslag från en sträng. Tre exempel på hur den kan användas.
function trimma(str) {}
// trimma('abc') === 'abc'
// trimma('hello!   ') === 'hello!'
// trimma('  x  ') == 'x'

3c En funktion som konverterar en sträng till versaler (stora bokstäver).
*/
