let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
let evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNums);
console.log(oddNums);
console.log(evenNumbers);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

// =====================================================================

const ages = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}

// =====================================================================

const words = ["apple", "banana", "cherry", "date", "elderberry", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);
console.log(shortWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}
