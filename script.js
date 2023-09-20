

// exercise 1
const interests = [1,2,3,4,5,6,7,8,9,10]

console.log(`I have ${interests.length} interests`)

//exercise 2
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[5])
console.log(fruits[0])

//exercise 3
const names = ['Peter', 'Susan', 'Charlotte'];
// Use the names array
const firstNameInArray = names[0]
const lastNameInArray = names[names.length - 1]

console.log(firstNameInArray)
console.log(lastNameInArray)

//exercise 4
const favoriteSongs = ["1","2","3","4","5"]
console.log(favoriteSongs)
favoriteSongs.push("8")
console.log(favoriteSongs)
const indexOfThree = favoriteSongs.indexOf("3")
console.log(indexOfThree)


const names2 = ["Benjamin", "Mie", "Klara","Bo"];

for (const name of names2) {
    console.log(name);
}

const cars = ['fiat', 'volvo', 'peugeot'];

for (const car of cars) {
    console.log(car);
}


const cars2 = ['fiat', 'volvo', 'peugeot'];

cars2.forEach((car, index) =>
    console.log(car, index));

//exercise 6
//Bad
let arr = [34, -5, 3];
let smallest = arr[0];

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
//Good
let numbers = [34, -5, 3];
let firstNumber = numbers[0];

for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] < firstNumber) {
        firstNumber = numbers[i];
    }
}

console.log("The smallest number is: " + firstNumber);

/*//exercise 7
Ask the following questions
What does this code do?
    How would you improve it?
    Does it work?
    Do you like the variable names?
    Is the code easy to understand?*/

let numbersArray = [1, 2, 3, 4, 5];
let reverseNumbersArray = [];

numbersArray.forEach((element, index) => {
    reverseNumbersArray[index] = numbersArray[numbersArray.length - 1 - index];
});



console.log(reverseNumbersArray);


//exercise 8
const words = ["apple", "banana", "cherry", "date", "elderberry"];
for (let word of words) {
    console.log(`${word} ${word.length}`)
}

//exercise 9
// Write code that finds the index of 'bird' in the array and then replaces it with 'parrot'. Print the updated array.
const animals = ['cat', 'dog', 'bird', 'fish', 'elephant'];
const indexOfBird = animals.indexOf("bird");
const birdInArray = ~indexOfBird // ~ er det samme som !== -1
if (birdInArray) {
    animals[indexOfBird] = "parrot"
}
console.log(animals)





//exercise 12
const searchData = ['apple', 'banana  ', '  Cherry', 'apple ', 'APPLE', '  Banana'];
//1 Iterate through the array
//2 remove white space
//3 all elements to lowercase
//4 remove duplicates
for (const currentWord of searchData) {
/*
    console.log(currentWord);
*/
    const trimWords = currentWord.trim()
/*
    console.log(trimWords);
*/
    const lowerCaseWord = trimWords.toLowerCase()
    console.log(lowerCaseWord);
}



