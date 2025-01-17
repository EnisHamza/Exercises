function Kosova() {
  console.log("Republic of Kosovo");
}
Kosova();

//Functions with arguments and parameters
function Add(input1, input2) {
  const output = input1 + input2;
  return output;
}
console.log(Add(5, 2));

function FullName(firstName, lastName) {
  const emri = firstName + " " + lastName;
  return emri;
}
console.log(FullName("Enis", "Hamza"));

function drinkAlcohol(age) {
  if (age < 18) {
    return "You cant drink alcohol";
  }
  return "You can drink alcohol";
}
console.log(drinkAlcohol(16));

function getBirthYear(age, year) {
  return year - age;
}
console.log(getBirthYear(23, 2025));

function getCardLeft(friends) {
  return 52 % friends;
}
console.log(getCardLeft(5));

function printPhrase(phrase, amount) {
  for (let i = 0; i < amount; i++) {
    console.log(phrase);
  }
}
printPhrase("I will go to FSK", 5);

//function expression
const getSeconds = function (minutes) {
  return minutes * 60;
};
console.log(getSeconds(2));

const getSecondsInHours = function (hours) {
  return hours * 60 * 60;
};
console.log(getSecondsInHours(2));

const shuma = function (numri) {
  var rezultati = 0;
  for (var i = 1; i <= numri; i++) {
    rezultati = rezultati + i;
  }
  return rezultati;
};
console.log(shuma(4));

//Arrow functions
const getSekondat = (minutes) => {
  return minutes * 60;
};
console.log(getSekondat(2));

let minutat = 60;
const getSekondatNeOre = (hours) => hours * minutat * 60;
console.log(getSekondatNeOre(4));
