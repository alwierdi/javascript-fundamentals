let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("heading").textContent = `Hello, ${username}`;
};

let age = prompt("How old are you?")
// TypeCasting convert strings,number,boolean
age = Number(age);
age += 1
console.log(age, typeof age)
