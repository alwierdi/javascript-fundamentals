// let time = 16
// let greeting = time < 12 ? "Good Morning!" : "Good Aftenoon!"
// console.log(greeting)

// let isStudent = true
// let message = isStudent ? "You are a student" : "You are a student"
// console.log(message)

let purchaseAmount = 24000
let discount = purchaseAmount >= 10000 ? 10 : 0
console.log(
  `Your total is Rp.${purchaseAmount - purchaseAmount * (discount/100)}`
)