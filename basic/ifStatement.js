const input = document.getElementById("input")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
let age

submit.onclick = function(){

  age = input.value
  age = Number(age)
  if (age >= 100){
    console.log("You are to OLD to enter this site")
    result.textContent = `You are to OLD to enter this site`
  } else if (age == 0){
    console.log("You can't enter. You were just born")
    result.textContent = `You can't enter. You were just born`
  } else if (age < 0){
    console.log("You are can't be below 0")
    result.textContent = `You are can't be below 0`
  } else if (age >= 18){
    console.log("You are old enough to enter this site")
    result.textContent = `You are old enough to enter this site`
  } 
  else {
    console.log("You must be 18+ to enter this site")
    result.textContent = `You must be 18+ to enter this site`
  }
}