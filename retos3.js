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

	// Retorna: 
	// 1 si _a > _b
	// 0 si _a == _b
	//-1 si _a < _b
	const compareLastValue = (_a, _b) => {
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

	// Quitamos los valores 0 del Array: [ 1, 0, 0, 20 ] => [ 1, 20 ]
	//array1 = array1.filter( number => number > 0 );
	//array2 = array2.filter( number => number > 0 );
	// console.log(`array1: ${array1} \narray2: ${array2}`);

	if ( array1.length-1 === array2.length-1 && ){
		return compareLastValue( array1[array1.length-1], array2[array2.length-1] );
	}
	if
	
}

console.log("-1", cmp( "1", "2" ));//
console.log("-1", cmp( "1.1", "1.2" ));
console.log(" 1", cmp( "1.1", "1" )); // ============== add 0
console.log("-0", cmp( "1.2.3.4", "1.2.3.4" ));
console.log("-0", cmp( "3", "3.0" )); // =============== add 0
console.log("-0", cmp( "3", "3.0.0.0" )); // ============= add 0
console.log(" 1", cmp( "1.2.1", "1.2.0" )); // ===========
console.log("-1", cmp( "3.0.0", "3.1.1" )); // ===========
console.log("-1", cmp( "3.0.1", "3.1" )); // ================ not add 0
console.log(" 0", cmp( "1.2.3", "1.02.003" ));
console.log(" 1", cmp( "1.20", "1.5" )); // ==============


