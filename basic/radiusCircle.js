const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("radiusInput").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("result").textContent = circumference + "cm";
};