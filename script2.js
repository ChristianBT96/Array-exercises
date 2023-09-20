
// Exercises from "https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php"


// 1. Write a JavaScript function to check whether an `input` is an array or not.
console.log("EXERCISE 1")
const isArray = function (input) {
    return (toString.call(input) === "[object Array]")
};

console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

console.log("DONE")
//DONE

// 2. Write a JavaScript function to clone an array.
console.log("EXERCISE 2")
const cloneArray = function (input) {
  return input.slice(0)
};
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

//Alt
let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = [...x];
console.log("Clone of the said array:") //"..." makes a shallow copy, so that when changes are to one the other is not changed
console.log(y)

console.log("DONE")
//DONE

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
console.log("EXERCISE 3")

const first = function (arrayFirstElement, n) {
    if (n == null)
        return arrayFirstElement[0];
    if (n < 1) {
        return [];
    }

    return arrayFirstElement.slice(0, n);
}

// if (n < 1) then give an empty array in console
// otherwise return a "slice" of the array from index 0 to n. n is what is after the ",".

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Alt

// var first2 =  (array, n) => {
//     if (array == null)
//         return void 0;
//     if (n == null)
//         return array[0];
//     if (n < 0)
//         return [];
//     return array.slice(0, n);
// };
//
// console.log(first2([7, 9, 0, -2]));
// console.log(first2([],3));
// console.log(first2([7, 9, 0, -2],3));
// console.log(first2([7, 9, 0, -2],6));
// console.log(first2([7, 9, 0, -2],-3));

console.log("DONE")
//DONE

// Exercise 4
// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
console.log("EXERCISE 4")

const last = function (arrayLastElement, n) {
    if (n == null)
        return arrayLastElement[arrayLastElement.length - 1];
    if (n < 1) {
        return [];
    }

    return arrayLastElement.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// Alt

// const last2 = function (arrayLastElement, n) {
//     if (n == null)
//         return arrayLastElement[arrayLastElement.length - 1];
//     if (n < 1) {
//         return [];
//     }
//
//     return arrayLastElement.slice(Math.max(arrayLastElement.length - n, 0)); // Math.max no negative numbers
// }
//
// console.log(last2([7, 9, 0, -2]));
// console.log(last2([7, 9, 0, -2],3));
// console.log(last2([7, 9, 0, -2],6));
//

console.log("DONE")
//DONE

// Exercise 5
// 5. Write a simple JavaScript program to join all elements of the following array into a string.
console.log("EXERCISE 5")


const myColors = ["Red", "Green", "White", "Black"];

const joinString = function (unJoinedString) {
    return unJoinedString.join("-_-")
}

console.log(joinString(myColors))
// .toString(separator)
// .join(separator)
console.log(myColors.join())
console.log(myColors.toString())
console.log(myColors.join("+"))


console.log("DONE")
//DONE

// Exercise 6
// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
console.log("EXERCISE 6")

// const number = window.prompt("Enter numbers");
// const numberToString = number.toString()
// const result = [numberToString[0]]
//
//
// for (let i = 1; i < numberToString.length; i++)  {
//     if ((numberToString[i - 1] % 2 === 0) && (numberToString[i] % 2 === 0))
//     {
//         result.push("-", numberToString[i]);
//     }
//     else
//     {
//         result.push(numberToString[i]);
//     }
// }
// console.log(result.join(""))
// // if () checks if i-1 and 1 both are even numbers
// // is true insert "-" else just insert the number and then add 1 to i and checks the next position
// // ALT solution
// How to approach the problem:
// Input Conversion: Start by converting the input number to a string. This makes it easier to work with individual digits.
// Initialize Result: Initialize a result string with the first digit of the input number since you don't want a dash before the first digit.
// Loop Through Digits: Use a loop to iterate through the digits of the input number, starting from the second digit (index 1) because you've already included the first digit in the result.
// Check Even Digits: For each digit in the loop, convert it to an integer and check if it's even (i.e., divisible by 2).
// Insert Dash Between Evens: If the current digit is even and the previous digit (found by accessing numbersToString[i - 1]) is also even, then insert a dash in the result.
// Append Current Digit: Regardless of whether a dash was inserted, always append the current digit to the result.
// Return Result: After the loop is complete, the result string will have dashes inserted between even digits. Return the result as the output of the function.
function insertDashesBetweenEvens(inputNumber) {
    const numbersToString = inputNumber.toString();
    let result = numbersToString[0]
    for (let i = 0; i < numbersToString.length; i++) {
        const currentDigit = parseInt(numbersToString[i]);
        const previousDigit = parseInt(numbersToString[i - 1]);
        if (currentDigit % 2 === 0 && previousDigit % 2 === 0)  {
            result += "-";
        }
        result += currentDigit.toString();
    }

    return result;
}

console.log(insertDashesBetweenEvens(55428876912342))

console.log("DONE")
//DONE


// Exercise 7
// 7. Write a JavaScript program to sort the items of an array.
console.log("EXERCISE 7")
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const unsortedArray = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// Asc = Ascending
//Desc = Descending
const sortingFunctionAsc = function (a,b){return a - b}
const sortingFunctionDesc = function (a,b){return b - a}

const sortedArrayAsc = [...unsortedArray].sort(sortingFunctionAsc) //"..." used to make a shallow copy of the array (could also use ".slice")
const sortedArrayDesc = [...unsortedArray].sort(sortingFunctionDesc)
console.log(sortedArrayAsc)
console.log(sortedArrayDesc)

console.log("DONE")
//DONE

// Exercise 8
// 8. Write a JavaScript program to find the most frequent item in an array.
console.log("EXERCISE 8")
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// Exercise 9
console.log("EXERCISE 9")
// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const promptString = window.prompt("Enter massage");
// let stringResult = ""
//
// for (let i = 0; i < promptString.length; ++i) {
//     const currentChar = promptString[i];
//     if (currentChar === currentChar.toUpperCase()) {
//         stringResult += currentChar.toLowerCase(); // stringResult = stringResult + currentChar.toLowerCase()
//     } else if (currentChar === currentChar.toLowerCase()) {
//         stringResult += currentChar.toUpperCase(); // stringResult = stringResult + currentChar.toUpperCase()
//     } else {
//         stringResult += currentChar; // // stringResult = stringResult + currentChar
//     }
// }
// console.log(stringResult)

// Alt
// const str = 'c';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// const result = [];
//
// for(let i=0; i<str.length; i++)
// {
//     if(UPPER.indexOf(str[i]) !== -1)
//     {
//         result.push(str[i].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[i]) !== -1)
//     {
//         result.push(str[i].toUpperCase());
//     }
//     else
//     {
//         result.push(str[i]);
//     }
// }
// console.log(result.join(''));

console.log("DONE")
//DONE

// Exercise 10
console.log("EXERCISE 10");
// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const nestedArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
for (let i in nestedArray) { // "i" is the outer array where there is 5 elements
    console.log("row " + i);
    for (let q in nestedArray[i]) {
        console.log("Inner array " + nestedArray[i][q]); // Here we run through the outer array with "i" and then the inner arrays with "q"
    }
}
// The first (outer) "for" loop lists the outer arrays with "row" beforehand
// The second (inner) "for" loop lists the inner array with and space beforehand
// The resulting console.log is written as row plus the index of the outer array, then beneath that the elements in the inner array
// If [i] is removed in the second loop the whole inner array is displayed

console.log("DONE")
//DONE

// Exercise 11
console.log("EXERCISE 11");
// 11. Write a JavaScript program to find the sum of squares of a numerical vector.
const vectorArray = [0,1,2,3,4]

// Using "while" loop
function sumSquared1(array) {
    let sum= 0, i = array.length;
    while (i--) {
        sum += Math.pow(array[i],2);
    } return sum
}
console.log(sumSquared1(vectorArray))
// Using "for" loop
function sumSquared2(array) {
    let sum= 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i],2);
    } return sum
}
console.log(sumSquared2(vectorArray))
// Using "reduce" method
function sumSquared3(array) {
    return array.reduce((sum, element) => sum + Math.pow(element,2), 0)
}
console.log(sumSquared3(vectorArray))
// .reduce test
// let sumOfVector = vectorArray.reduce(
//     (accumulated, vectorValue) => {
//         return accumulated + vectorValue
//     },
//     0
// );
// console.log(sumOfVector)

console.log("DONE")
//DONE
