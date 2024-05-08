// 4 En funktion som talar om ifall det regnar eller inte. "moistureLevel" ska vara ett tal mellan 0 och 1. Om talet är minst 0.8 ska funktionen räkna det som regn.
function isItRaining(moistureLevel) {
	if( moistureLevel < 0 ) throw Error('Moisture level must be between 0 and 1.')
	else if( moistureLevel < 0.8 ) return false
	else if( moistureLevel >= 0.8 ) return true
}

export { isItRaining }
