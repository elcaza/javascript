"use strict";

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"

const reverseWords = (_string) => {
	let array = _string.split(" ");
	// console.log(array);
	let reverseString = "";

	for (let i=array.length-1; i>=0; i--){
		//console.log("i =", i);
		//console.log(array[i]);
		//reverseArray.push(array[i]);
		reverseString += array[i] +" ";
	}

	return reverseString.slice(0, -1);
}

// console.log(reverseWords("The greatest victory is that which requires no battle"));


// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

const finalGrade = (_exam, _projects) => {
	let finalGrade;

	if( _exam > 90 || _projects > 10 ) {
		finalGrade = 100;
	} else if( _exam > 75 && _projects >= 5 ) {
		finalGrade = 90;
	} else if ( _exam > 50 && _projects >= 2 ) {
		finalGrade = 75;
	} else {
		finalGrade=0;
	}

	return finalGrade;
}

// console.log("10", finalGrade(91, 0));
// console.log("10", finalGrade(0, 11));
// console.log("90", finalGrade(76, 5));
// console.log("75", finalGrade(50.5, 2));
// console.log("0", finalGrade(50, 2));


// Count the number of Duplicates
// Write a function that will return the count of alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// countDuplicates("abcde") // 0 duplicates

function countDuplicates(_string) {
	let array = _string.split("");
	//console.log(array);
	let count = {};

	array.forEach ( function(i){
		// console.log(count[i]);
		count[i] = (count[i]||0) + 1;
	} );

//['a','b' ...]
	// console.log(count);
	let sum = 0;
	for(let i in count) {
		sum += count[i];
	}
	return sum;
}

console.log(countDuplicates("aa")); // 0 duplicates


// How many arguments the function have ?
// argsCount(1, 2, 3) -> 3

const argsCount = (...args) => {
	return [...args].length;
};

// console.log( argsCount(1,2,3, "0", "0"));

// Write a function that receive an array = [1,2,3,4]; and return a new array like [1,2,2,3,3,3,4,4,4,4]
const repeatNumber = (_array) => {
	let newString = "";
	_array.forEach( (element) => {
		//console.log(element);
		newString += element.toString().repeat(element);
		//console.log(newString)
	});

	return newString.split("").join().split();
};

// console.log( repeatNumber([1,2,3,4]) );







