function openFridge(...foods) {
  console.log(foods);
}

// Menyalik array
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


// Membuat function dengan parameter yang dinamis
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = sum(1, 2, 3, 4, 5);
const average = getAverage(75, 100, 85, 90, 50);

console.log(`Your total is ${total}`);
console.log(`The average is ${average}`);


// Menggabungkan string dalam array
function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr.", "Pattrick", "Slime");

console.log(fullName);
