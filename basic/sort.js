let numbers = [1, 10, 2, 12, 5, 76, 43, 21, 34];

numbers.sort((a, b) => a - b);

console.log(numbers);

const people = [
  {
    name: "alwi",
    age: 20,
    gpa: 3.5,
  },
  {
    name: "zidan",
    age: 31,
    gpa: 3.4,
  },
  {
    name: "devanda",
    age: 27,
    gpa: 3.7,
  },
];

people.sort((a, b) => b.age - a.age); // utk sorting angka
people.sort((a, b) => a.name.localeCompare(b.name)); // utk sorting string
console.log(people);
