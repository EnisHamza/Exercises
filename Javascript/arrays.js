const girls = ["Saranda", "Doarsa", "Ariana", "Blerta"];
const boys = ["Albin", "Glauk", "Faton", "Ejup"];
console.log(boys);

//Array object
const mix = Array("Albin", "Saranda", "Glauk", "Blerta");
console.log(mix);

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
