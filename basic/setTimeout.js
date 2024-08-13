/*

  -> setTimeout = menunda eksekusi sebuah function dalam jangka waktu tertentu

*/

function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 2000);

// ======================================================================

let timeoutId;

function started() {
  timeoutId = setTimeout(() => console.log("Started"), 3000);
  console.log("Started");
}

function clearTime() {
  clearTimeout(timeoutId);
  console.log("Cleared");
}