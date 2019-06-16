"use strict";

//Write a function that receives an array of numbers (strings) and returns a new array with the numbers ordered:
// const array = [‘3’, ‘5’, ‘1’, ‘8’, ‘2’];
// myFunction(array); // [1, 2, 3, 5, 8];

const orderArray = (array) => {
    let intArray = array.map( (sNumber) => parseInt(sNumber, 10) );
    return intArray.sort();
};

console.log(orderArray( ["3", "5", "1", "8"] ));

// =====================================================================
// =====================================================================

// Generate a function that return the add of two numbers(strings):
// const number1 = ‘42’; const number2 = ‘18’;
// myFunction(number1, number2); // 60

const sum = (a, b) => {
    return parseInt(a) + parseInt(b);
};

console.log( sum("1", "2") );