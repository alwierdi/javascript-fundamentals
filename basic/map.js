/*
    -> map berguna untuk membuat array baru yang panjang array nya
       sama dengan panjang array aslinya, namun elemennya dapat berbeda
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

const doubled = numbers.map((number) => number * 2);

console.log(squares);
console.log(cubes);

// =====================================================================

const studnets = ["Spongebob", "Patrick", "Sandy"];
const resultLower = studnets.map(lowerCase);
const resultUpper = studnets.map(upperCase);

console.log(resultLower);
console.log(resultUpper);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

// =====================================================================

const dates = ["2020-01-17", "2020-05-26", "2020-09-22"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}