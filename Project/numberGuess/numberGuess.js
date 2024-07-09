const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minimum} - ${maximum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number!");
  } else if (guess < minimum || guess > maximum) {
    window.alert("Please enter a valid number!");
  } else {
    attempts++
    if (guess < answer) {
      window.alert("Too Low! Try Again!")
    } else if (guess > answer) {
      window.alert("Too High! Try Again!")
    }
    else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
      running = false;
    }
  }
  
}
