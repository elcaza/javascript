'use strict'
// In this kata you should simply determine, whether a given year is a leap year or not.
function isLeapYear(year) {
	if ( year%4 === 0 ) {
		if ( ((year%100 === 0)) ^ (year%400 === 0) ) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

//console.log(isLeapYear(2000));

// *****************************************************************
// *****************************************************************
// *****************************************************************
// *****************************************************************

// Write a function cmp(section1, section2) that returns -1, 0, or 1 
// depending on whether section1 is before, same as, or after section2 respectively.

const cmp = (section1, section2) => {
	// Convertimos los argumentos a un array: [ '1', '0', '000', '20' ]
	let array1 = section1.split(".");
	let array2 = section2.split(".");
	let allNumber1, allNumber2;

	// Retorna: 
	// 1 si _a > _b
	// 0 si _a == _b
	//-1 si _a < _b
	const compareValues = (_a, _b) => {
		console.log("_a", _a);
		console.log("_b", _b);
		if (_a > _b) {
			return 1;
		}
		if ( _a === _b) {
			return 0;
		} 
		if ( _a < _b ) {
			return -1;
		}
	}


	// Convertimos nuestro array de strings a un array de ints: [ 1, 0, 0, 20 ]
	array1 = array1.map( sNumber => parseInt(sNumber, 10) );
	array2 = array2.map( sNumber => parseInt(sNumber, 10) );
	// console.log(`array1: ${array1} \nArray2: ${array2}`);

	// Igualamos los arrays rellenando los espacios vacíos con ceros:
	if ( array1.length < array2.length ) {
		for (let i = array1.length; i < array2.length; i++ ){
			array1.push(0);
		}
	}
	if ( array1.length > array2.length ) {
		for (let i = array2.length; i < array1.length; i++ ){
			array2.push(0);
		}
	}
	// Convertimos los arrays a un string
	// Quitamos las comas que hay en nuestro string
	// Convertimos nuestro array a un number
	allNumber1 = array1.toString();
	allNumber1 = allNumber1.replace(/,/gi, "");
	allNumber1 = parseInt(allNumber1);

	allNumber2 = array2.toString();
	allNumber2 = allNumber2.replace(/,/gi, "");
	allNumber2 = parseInt(allNumber2);

	return compareValues(allNumber1, allNumber2);

};

console.log("-1", cmp( "2.0.1.2", "2" ));//

// console.log("-1", cmp( "1.1", "1.2" ));
// console.log(" 1", cmp( "1.1", "1" )); // ============== add 0
// console.log("-0", cmp( "1.2.3.4", "1.2.3.4" ));
// console.log("-0", cmp( "3", "3.0" )); // =============== add 0
// console.log("-0", cmp( "3", "3.0.0.0" )); // ============= add 0
// console.log(" 1", cmp( "1.2.1", "1.2.0" )); // ===========
// console.log("-1", cmp( "3.0.0", "3.1.1" )); // ===========
// console.log("-1", cmp( "3.0.1", "3.1" )); // ================ not add 0
// console.log(" 0", cmp( "1.2.3", "1.02.003" ));
// console.log(" 1", cmp( "1.20", "1.5" )); // ==============

// Suppose you have 4 numbers: '0', '9', '6', '4' and 3 strings composed with them:
// Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.
