/** @format */

function pertenceSequenciaFibonacci(numero) {
	let a = 0;
	let b = 1;
	let proximo = a + b;

	while (proximo <= numero) {
		if (proximo === numero) {
			return true;
		}
		a = b;
		b = proximo;
		proximo = a + b;
	}

	return false;
}

let numeroInformado = 21; // Você pode alterar esse valor para o número desejado

if (pertenceSequenciaFibonacci(numeroInformado)) {
	console.log(numeroInformado + ' pertence à sequência de Fibonacci.');
} else {
	console.log(numeroInformado + ' não pertence à sequência de Fibonacci.');
}
