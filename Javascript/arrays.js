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

//splice()
const months = ["Jan", "Mar", "Apr", "May"];
months.splice(1, 1, "Feb");
console.log(months);

const viti = [2002, 2003, 2010, 2013, 2014, 2018, 2023];
viti.splice(2, 2, "2011");
console.log(viti);

//slice()
const kitKat = ["wasabi", "peanut", "strawberry", "matcha"];
const myFavorite = kitKat.slice(1, 3);
console.log(myFavorite);

const smartPhone = ["Iphone", "Samsung", "Nokia", "Huawei"];
const favorite = smartPhone.slice(0, 1);
console.log(favorite);
console.log(smartPhone);

//Array Exercises
//1. Join these two arrays together and then sort the words by longest to shortest
const primaryColors = ["red", "blue", "yellow"];
const pastelColors = ["lilac", "beige", "azure"];
const colors = primaryColors.concat(pastelColors);
colors.sort((a, b) => b.length - a.length);
console.log(colors);

//2. Put the numbers in order and then add the missing ones
const count = [1, 0, 8, 10, 7, 3, 9, 2];
const inOrder = count.sort((a, b) => a - b);
inOrder.splice(4, 0, 4, 5, 6);
console.log(inOrder);

//3. Make a sentence out of this array without last word
const words = ["The", "cat", "jumped", "over", "the", "moon", "if"];
words.pop();
const sentence = words.join(" ");
console.log(sentence);

//4. Sort these items in order and remove the odd one out
const years = ["bed", 1990, 1734, 2022, 1634];
years.shift();
years.sort((a, b) => a - b);
console.log(years);

//forEach()
const gameTotals = [23, 16, 34, 232];
//gameTotals.forEach((gameTotal) => console.log(gameTotal + 10));
gameTotals.forEach((qyshDush, index) => {
  const playerNumber = index + 1;
  const newTotal = qyshDush + 10;
  console.log("Player " + playerNumber + "'s total is" + newTotal);
});

//some()
const city = ["Mitrovica", "Prishtina", "Gjakova", "Peja"];
//const check = city.some((_city) => _city === "Rahovec"); returns false
const check = city.some((_city) => _city === "Mitrovica"); //returns true
console.log(check);

//map()
const house = ["kitchen", "kitchen", "kitchen"];
const housee = house.map((home) => (home = "kitchen with living room"));
console.log(housee);

const totalScore = [34, 42, 58, 71, 95];
const addScore = totalScore.map((addition) => addition + 10);
console.log(addScore);
