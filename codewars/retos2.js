"use strict";

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"


// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases


// Count the number of Duplicates
// Write a function that will return the count of alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// countDuplicates("abcde") // 0 duplicates


// How many arguments the function have ?
// argsCount(1, 2, 3) -> 3

const argsCount = (...args) => {
	return [...args].length;
};

console.log( argsCount(1,2,3, "0", "0"));

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

console.log( repeatNumber([1,2,3,4]) );







