/*
    -> this adalah keyword yang digunakan untuk mengakses properti dan method
    dari sebuah object
*/

const player1 = {
  name: "Alwi",
  age: 20,
  role: "CTO",
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old and I am ${this.role} on this corp`
    );
  },
};

const player2 = {
  name: "Zidan",
  age: 21,
  role: "Expert",
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old and I am ${this.role} on this corp`
    );
  },
};

player1.greet();
player2.greet();
