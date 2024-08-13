/*
    -> closure adalah sebuah fungsi yang bisa dipanggil
       secara otomatis ketika sebuah object dibuat
    -> konsep di mana sebuah fungsi dapat mengakses dan memanipulasi variabel-variabel dari lingkungan (environment) di luar fungsi itu sendiri
*/

function outer() {
  let message = "Hello World";
  function inner() {
    console.log(message);
  }

  inner();
}

outer();

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// counter.count = 0;
console.log(`Curent count = ${counter.getCount()}`);

// =======================================================================

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts, score = ${score}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts, score = ${score}pts`);
  }

  function getScore() {
    return `${score}pts`;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(10);
game.increaseScore(20);
game.decreaseScore(30);
game.increaseScore(40);
game.increaseScore(50);
game.decreaseScore(10);
game.increaseScore(60);
