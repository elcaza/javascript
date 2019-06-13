const toPairs = (_string) => {
	let array = _string.split("");
	let collector = [];
	let result = [];
	// Creamos parejas de arrays en collector. collector = [ [a,b], [c,d], [e, undefined] ];
	for (let i = 0 ; i < array.length; i = i +2) {
		let pair = [];
		pair.push(array[i], array[i+1])
		collector.push(pair)

	}

	// Convertimos nuestros arrays internos a una cadena. result = [ 'ab', 'cd', 'e' ];
	for (let i = 0; i < collector.length; i++) {
		let pairString = ""
		pairString = collector[i].join("")
		result.push(pairString)
	}

	// Si estamos en el último elemento de nuestro array y es impar entonces añadimos un "_" a la cadena
	if (result[result.length-1].length%2 !== 0) {
		result[result.length-1]+= "_"
	}
	return result;
}


//console.log(toPairs('abc')); // should return ['ab', 'c_']
//console.log(toPairs('abcdef')); // should return ['ab', 'cd', 'ef']

multiple_split('Hi, how are you?', [' ']) // => # [Hi,', 'how', 'are', 'you?']
multiple_split('1+2-3', ['+', '-']) // => ['1', '2', '3']
