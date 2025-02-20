const girls = ["Saranda", "Doarsa", "Ariana", "Blerta"];
const boys = ["Albin", "Glauk", "Faton", "Ejup"];
console.log(boys);

//Array object
const mix = Array("Albin", "Saranda", "Glauk", "Blerta");
console.log(mix);

//length
//const number = [1, 2, 3, 4].length;
const number = [1, 2, 3, 4];
const takelength = number.length;
console.log(number, takelength);

const sheeps = document.querySelectorAll(".sheep");
function countSheeps() {
  const sheep = sheeps.length;
  console.log(sheep);
}
document.addEventListener("click", countSheeps);

//shift()
const shteti = ["Franca", "Gjermania", "Britania", "Amerika", "Kosova"];
const solo = shteti.shift();
shteti.shift();
console.log(shteti);
console.log(solo);

const fridge = document.querySelector(".fridge");
const topShelf = document.querySelector("#top-shelf");
const foodItems = ["🍇", "🍌", "🍩", "🍔", "🍕", "🍏", "🌶️", "🍡"];

topShelf.innerHTML = foodItems;
function throwAway() {
  foodItems.shift();
  topShelf.innerHTML = foodItems;
}
function addFood() {
  foodItems.unshift("🍇", "🍌", "🍩", "🍔", "🍕", "🍏", "🌶️", "🍡");
  topShelf.innerHTML = foodItems;
}
document.addEventListener("click", throwAway);
document.addEventListener("scroll", addFood);

//unshift()
const qyteti = ["Mitrovica", "Prishtina"];
qyteti.unshift("Gjilani");
console.log(qyteti);

//concat()
const perime = ["Karrota", "Kastravec", "Patlixhan"];
const fruta = ["Molla", "Rrush", "Banane"];
const miks = perime.concat(fruta);
console.log(miks);

//join
const filma = ["Shok", "Fc Latta", "Shpk Nazi"];
console.log(filma.join(" and "));

//sort
const emri = ["Enis", "Beqir", "Alvin", "Xeni"];
//emri.sort().reverse();
emri.sort((a, b) => a.length - b.length);
console.log(emri);

const numri = [97, 45, 12, 96];
numri.sort((a, b) => a - b);
console.log(numri);

//pop()
const numrat = [1, 2, 4, 6, 8, 9];
numrat.pop();
console.log(numrat);

//push()
const toDo = ["clean", "sleep", "fix"];
toDo.push("spare", "drink");
console.log(toDo);
