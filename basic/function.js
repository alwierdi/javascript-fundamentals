function isEven(number) {
  return number % 2 === 0 ? true : false
}

function validEmail(email) {
  return email.includes("@")  ? true : false
}

console.log(isEven(10))
console.log(validEmail("alwi@gmail.com"))