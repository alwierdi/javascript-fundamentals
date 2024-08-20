/*

    1. document.getElementById()            // ELEMENT OR NULL
    2. document.getElementsByClassName()    // HTML COLLECTION
    3. document.getElementsByTagName()      // HTML COLLECTION
    4. document.getElementsByName()         // HTML COLLECTION
    5. document.querySelector()             // FIRST ELEMET OR NULL
    6. document.querySelectorAll()          // NODE LIST

*/

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";

// Menggunakan for
for (let fruit of fruits) {
  fruit.style.backgroundColor = "green";
}

// Menggunakan forEach dengan typeCasting array
Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "pink";
h4Elements[1].style.backgroundColor = "purple";

for (let liElement of liElements) {
  liElement.style.backgroundColor = "lightgreen";
}
