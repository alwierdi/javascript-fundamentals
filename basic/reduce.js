/*
    -> reduce berguna untuk menghitung nilai akhir dari isi array
    -> reduce berfungsi untuk mengiterasi setiap elemen dalam array
       dan mengembalikan nilai tunggalnya
*/

const prices = [1, 2 , 3, 4, 5]
const result = prices.reduce(sum)
const total = prices.reduce((sum, price) => sum + price, 0);

console.log(`$${total.toFixed(2)}`);
console.log(`$${result}`);

function sum(previous, next) {
  return previous + next
}

// =====================================================================

const grades = [75, 50, 90, 80, 100, 95]
const maximum = grades.reduce(getMax)
const minimum = grades.reduce(getMin)

console.log(maximum)
console.log(minimum)

function getMax(accumulator, value) {
  return Math.max(accumulator, value)
  // return accumulator > value ? accumulator : value
}

function getMin(accumulator, value) {
  // return Math.min(accumulator, value)
  return accumulator < value ? accumulator : value
}

// =====================================================================

const sentence = "The quick brown fox jumps over the lazy dog"
const charFreq =  sentence.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

console.log(charFreq)

// =====================================================================

