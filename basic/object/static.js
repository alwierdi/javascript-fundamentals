/*
    -> Static adalah sebuah keyword yang digunakan untuk mengakses properti
       dan method dari sebuah object
*/

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius
  }
}

// tidak perlu menggunakan syntax berikut
// const MathUtil1 = new MathUtil();
// console.log(MathUtil1.PI);

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

// ==========================================================================

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username
    User.userCount++
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Alwi")
const user2 = new User("Zidan")
const user3 = new User("Bagus")
const user4 = new User("Azka")
const user5 = new User("Zahran")

console.log(user1.username);
user1.sayHello();

console.log(user1.userCount);  // user1 tidak memiliki properti userCount
console.log(User.userCount);
User.getUserCount()