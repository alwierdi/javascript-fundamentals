/*
    -> Inheritance adalah konsep yang digunakan untuk membuat sebuah class
       yang mewarisi properti dan method dari class parent nya
*/

class Animal {
  isAlive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming when he was ${this.age} years old`);
  }
}

class Hawk extends Animal {
  name = "Hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// kita dapat menambahkan properti baru yang tidak harus dimiliki oleh parent
// dengan cara this.properti = value, namun lebih baik ditaro di dalam object
fish.age = 5;

fish.isAlive = false;

console.log(rabbit.isAlive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.isAlive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.isAlive);
hawk.eat();
hawk.sleep();
hawk.fly();
