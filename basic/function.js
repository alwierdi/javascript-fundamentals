// ============== function declaration ==============
function isEven(number) {
  return number % 2 === 0 ? true : false
}

function validEmail(email) {
  return email.includes("@")  ? true : false
}
console.log(isEven(10))
console.log(validEmail("Wikz@gmail.com"))

function greet() {
  console.log("Hello!");
}
greet()

// ============== function expression ==============
const greet2 = function (name) {
  console.log(`Hello ${name}!`);
};
greet2("Wikz");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function square(element){
  return Math.pow(element, 2);
})

const cubes = numbers.map(function cube(element){
  return Math.pow(element, 3);
});

console.log(squares)
console.log(cubes)

const evenNumbers = numbers.filter(function isEven(element){
  return element % 2 === 0
})

const oddNumbers = numbers.filter(function isOdd(element){
  return element % 2 !== 0
})

const total = numbers.reduce(function(accumulator, element){
  return accumulator + element
})

console.log(evenNumbers);
console.log(oddNumbers)
console.log(total);

// ============== arrow function ==============
const hello2 = () => {
  console.log("Hallo!")
}
hello2()

const hello3 = () => console.log("Hallo!")
hello3()

const greeting = (nick) => console.log(`Hello ${nick}!`)
greeting("Wikz") 

// setTimeout(() => console.log("Woi!"), 2000)

const kotak = numbers.map((element) => Math.pow(element, 2))
console.log(kotak);

const evenNums = numbers.filter((element) => element % 2 === 0)
const oddNums = numbers.filter((element) => element % 2 !== 0)
const result = numbers.reduce((accumulator, element) => accumulator + element)

console.log(evenNums);
console.log(oddNums)
console.log(result);
