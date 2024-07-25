const player = {
  fullName: "Alwi Erdi Musthafa",
  age: 20,
  isStudent: true,
  hobbies: ["Gaming", "Coding", "Badminton"],
  address : {
    street : "Jl. Jendral Sudirman",
    city : "Jakarta",
    country : "Indonesia",
  }
};

console.log(player.fullName);
console.log(player.age);
console.log(player.isStudent);
console.log(player.hobbies);
console.log(player.address);
console.log(player.address.street);

for (const property in player.address) {
  console.log(player.address[property]);
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new Person("Wikz", 20, "Jl. Jendral Sudirman", "Jakarta", "Indonesia");
const person2 = new Person("Star", 34, "Jl. Matraman", "Jakarta", "Indonesia");
const person3 = new Person("Paul", 24, "Jl. Kemang", "Jakarta", "Indonesia");

console.log(person1.age);
console.log(person2.address.street);
console.log(person3.age + " " + person3.address.country);