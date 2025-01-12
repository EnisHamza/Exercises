console.log("Hello World");

//Data types
const name = "Enis Hamza";
const number = 23;
const gender = "male";
const male = true;
let date = new Date();

const full = name + " " + number;
console.log(full);
console.log(gender);
console.log(male);
console.log(date);

//Operators
const result = 5 + 3;
console.log(result);
const multiply = 5 + (3 * 2) / 3;
console.log(multiply);

const check = 6 < 3;
console.log(check);

var assign = 6;
assign++;
assign += 5;
console.log(assign);
assign--;
assign--;
console.log(assign);

console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "6");

//If-else Statements
if (6 !== "6") {
  console.log("Kosova");
}

let today = "Friday";
if (today == "Friday") {
  console.log("Nope, Today is Saturday");
} else {
  console.log("Yaaay, Its true today is Saturday");
}

let money = true;
if (money) {
  console.log("Lets go");
}

let age = null;
if (age) {
  console.log("Lets go");
}

//Logical operators
var shuma = 94;
var medicalTest = false;
var physicalTest = true;

const Pass = shuma > 90 && medicalTest && physicalTest;
console.log(Pass);

const Passed = shuma > 90 || (medicalTest && physicalTest);
console.log(Passed);
