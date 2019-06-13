// Retorna una array de parejas formada por el string que tú le envies
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


// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************

// Retorna un valor en hexadecimal cuando le envías un rgb
const toHex = (_r, _g, _b) => {
	let red = _r;
	let green = _g;
	let blue = _b;

	if (red === 0) {
		red = "0"+red;
	}

	if (green === 0) {
		green = "0"+green;
	}

	if (blue === 0) {
		blue = "0"+blue;
	}

	red = red.toString(16);
	green = green.toString(16);
	blue = blue.toString(16);

	if (red.length != 2) {
		red = "0"+red;
	}

	if (green.length != 2) {
		green = "0"+green;
	}

	if (blue.length != 2) {
		blue = "0"+blue;
	}

	//return ("#" +red.toString(16) + green.toString(16) + blue.toString(16)).toUpperCase();
	return ("#" + red + green + blue).toUpperCase();
}

// console.log(toHex(80,10,90));


const toRGB = (_hex) => {
	let hex = _hex.slice(1);
	let hexArr = [];
	let rgbNumbers = [3];

	hexArr = toPairs(hex);

	//console.log(hexArr);

	for (let i=0; i<hexArr.length; i++) {
		rgbNumbers[i] = parseInt(hexArr[i], 16);
		//console.log(rgbNumbers[i]);
	}

	return ("" +rgbNumbers[0]+ ", " +rgbNumbers[1]+ ", " +rgbNumbers[2]+ "");
}

// console.log(toRGB("#FF0000"));


// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************

const multiple_split = (_string, _patternsArray) => { // ["+". "-"]
	//let re = _patternsArray;
	// let array = _string.split(_patternsArray[0]);
	let finalArray = [];
	let newString = _string;

	// let re = (/\s/gi);
	// console.log(re);
	// let finalString = _string.replace(re, " ");

	// console.log(typeof(_patternsArray));
	// console.log(_patternsArray.length);

	for (let i=0; i<_patternsArray.length; i++){
		//console.log("_patternsArray[i], ", _patternsArray[i])
		finalArray = newString.split(_patternsArray[i]);

		console.log(newString.split(_patternsArray[i]))
	}


	console.log("array: ", finalArray);
}

multiple_split('Hi, how are you?', [' ']) // => # [Hi,', 'how', 'are', 'you?']
multiple_split('1+2-3+', ['+', '-']) // => ['1', '2', '3']

// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
