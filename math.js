
function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number' ) {
		return NaN
	}
	return x + y
}

/* 4 Utgå från följande kod, som testar en funktion manuellt. För att kunna testa funktionen måste vi veta vad den ska göra. Skriv acceptanskriterier, som tillsammans kan avgöra om funktionen uppfyller specen.*/
// Om parametern value är noll ska funktionen returnera true
// Om parametern value inte är noll ska funktionen returnera false

function isZero(value) {
	return value === 0
}

/*if( isZero(0) ) {
    console.log('Talet är noll')
}
if( isZero(27) ) {
    console.log('27 är inte noll')
}*/


// 1 En funktion som returnerar skillnaden mellan två tal.
function subtract(x, y) {
	return x - y
}

// 2 En funktion som returnerar tre gånger input.
function triple(x) {
	return x * 3
}



export { add, isZero, subtract, triple }

