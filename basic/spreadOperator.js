let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "alwiErdi";
let letters = [...username].join();

console.log(letters);

let fruits = ["apple", "banana", "mango"];
let vegetables = ["carrots", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
