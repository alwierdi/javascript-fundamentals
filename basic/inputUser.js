let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("heading").textContent = `Hello, ${username}`;
};

// TypeCasting convert strings,number,boolean
let age = prompt("How old are you?")
age = Number(age);
age += 1
console.log(age, typeof age)
