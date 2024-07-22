/*
    Object adalah tipe data yang berisikan properti and/or method
    object = {
      key: value,
      function() {}
    }
*/

const person = {
  firstName : "Alwi",
  lastName : "Erdi",
  age : 20,
  isEmployed : true,
  sayHello : () => {
    console.log("Hello, I am CTO of this corp");
  }
}

const person2 = {
  firstName : "Zidan",
  lastName : "Devanda",
  age : 21,
  isEmployed : false,
  sayHello : function(){
    console.log("Hai!");
  }
}

