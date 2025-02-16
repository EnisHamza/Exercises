//CreateElement and append method
const container = document.querySelector(".clickMe");
const butoni = document.createElement("button");
console.log(butoni);
const shkruaj = document.createElement("input");

container.append(butoni, shkruaj);

//Styling with Javascript
const ndrysho = document.querySelector("h1");
ndrysho.classList.add("red-color");

function toggle() {
  ndrysho.classList.toggle("green-color");
}
document.addEventListener("click", toggle);

const body = document.querySelector("body");
body.style.backgroundColor = "bisque";
ndrysho.style.textAlign = "center";

//Working with numbers
console.log("123" === 123);
console.log(Number("123") === 123);

const revenue = 13456.7372;
const formated = revenue.toFixed(3);
console.log(formated);

const budget2024 = 432.232344;
const budget2025 = 485.261272;
function shuma() {
  const total = budget2024 + budget2025;
  return Number(total.toFixed(2));
}
console.log(shuma());

const drinks = 342.4523;
const meals = 765.2826;
function getTotal() {
  const sum = drinks + meals;
  const calculate = (sum / 100) * 12 + sum;
  return Number(calculate.toFixed(2));
}
console.log(getTotal());
