/*
    -> constructor adalah sebuah fungsi yang dijalankan secara otomatis
       ketika sebuah object dibuat
    
*/

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function(){
    console.log(`You drive the ${this.make} ${this.model}`);
  }
}

const car1 = new Car("Toyota", "Civic", 2020, "grey");
const car2 = new Car("BMW", "X5", 2021, "black");
const car3 = new Car("Mercedes", "GLE", 2022, "white");

console.log(car1.make);
console.log(car1.model)
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model)
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model)
console.log(car3.year);
console.log(car3.color);

car1.drive()
car2.drive()
car3.drive()
