/*
    -> Memanggil function setelah step 1 complete
    -> Akan menjalankan function setelah function sebelum nya terexecute
    "Hey, when you're done, call this next."
*/

hello(wait)

function hello(calllback) {
  console.log("Hello!");
  calllback()
}

function wait(){
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}

// =====================================================================

sum(displayConsole, 1, 2)

function sum(callback, x, y) {
  let result = x + y
  callback(result)
}

function displayConsole(result){
  console.log(result);
}