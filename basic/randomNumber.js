// const min = 50
// const max = 100

// let randomNum = Math.round(Math.random() * (max - min)) + min

// console.log(randomNum)

const rollBtn = document.getElementById("rollBtn")
const theLabel1 = document.getElementById("theLabel1")
const theLabel2 = document.getElementById("theLabel2")
const theLabel3 = document.getElementById("theLabel3")
const min = 1
const max = 6
let randomNum1
let randomNum2
let randomNum3

rollBtn.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min
  randomNum2 = Math.floor(Math.random() * max) + min
  randomNum3 = Math.floor(Math.random() * max) + min
  theLabel1.textContent = randomNum1
  theLabel2.textContent = randomNum2
  theLabel3.textContent = randomNum3
}