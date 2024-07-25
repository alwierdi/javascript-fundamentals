/*
  -> Destructing object = extract values from arrays and object
     then assign them to variables in a convenient way
     [] = to perform array destructing
     {} = to perform object destructing
*/

// ---------- Example 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 5;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------- Example 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["white", "green", "blue", "black", "red"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ---------- Example 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------- Example 4 ----------
// EXTRACT VALUES FROM OBJECT

const person1 = {
  fistName : "Alwi",
  lastName : "Erdi",
  age : 20,
  job : "CTO",
}

const person2 = {
  fistName : "Paul",
  lastName : "Star",
  age : 34,
}

const {fistName, lastName, age, job="Unemployed"} = person1;

console.log(fistName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------- Example 5 ----------
//  DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({fistName, lastName, age, job="Unemployed"}){
  console.log(`My name is ${fistName} ${lastName}. I am ${age} years old. I am a ${job}.`);
}

displayPerson(person1)