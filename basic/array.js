let fruits = ["Apple", "Orange", "Banana"];

fruits.push("Coconut") //push to tail
fruits.pop() //pop tail
fruits.unshift("Mango") //push head
fruits.shift() //pop head

let numOfFruits = fruits.length
let index = fruits.indexOf("Apple")
fruits.sort().reverse()

console.log(index);
console.log(numOfFruits);
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Reverse
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Shortcut of display array
for (let fruit of fruits) {
  console.log(fruit);
}

const carrot = {
  color: "orange",
};

const apple = {
  color: "red",
  printcolor() {
    console.log(this.color);
  },
};

apple.printcolor.bind(carrot)();
