const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orenge", calories: 50 },
  { name: "durian", color: "green", calories: 125 },
  { name: "banana", color: "yellow", calories: 105 },
];

fruits.forEach((fruit) => console.log(fruit)); // menampilkan semua object beserta properti
fruits.forEach((fruit) => console.log(fruit.name)); // menampilkan semua properti fruit.name

fruits.push({ name: "mango", color: "yellow", calories: 70 });

const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);

for (const fruit of fruits) {
  console.log(fruit.name);
}

// mencari buah berwarna yellow
const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
console.log(lowCalFruits);

// mencari kalori terbesar dengan metode sorting
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max)
console.log(maxFruit);

console.log(fruits[1].name);
console.log(fruits[2].calories);

fruits.pop();
fruits.forEach((fruit) => console.log(fruit.name));

fruits.splice(1, 2);
for (const fruit of fruits) {
  console.log(fruit.name);
}
