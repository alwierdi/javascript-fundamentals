// function declaration
function greet() {
  console.log("Hello!");
}

// function expression
const greet2 = function (name) {
  console.log(`Hello ${name}!`);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map(function square(element){
  return Math.pow(element, 2);
})

const cubes = numbers.map(function cube(element){
  return Math.pow(element, 3);
});

console.log(squares)
console.log(cubes)

// =====================================================================

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