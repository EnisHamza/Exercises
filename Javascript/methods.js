console.log(Math.round(3.2));
console.log(Math.round(3.6));

console.log(Math.floor(2.9));

console.log(Math.ceil(3.2));

console.log(Math.random() * 10);

console.log(Math.sqrt(4));

console.log(Math.PI);

function randomNumber() {
  return Math.round(Math.random() * 100);
}
console.log(randomNumber());

console.log(new Date());

console.log(new Date("March 12, 2002").getDay());

const muaji = new Date("November 1, 2024");
console.log(muaji.getMonth());

const ora = new Date().getHours();
console.log(ora);

function daysPassed() {
  const today = new Date();
  const christmas = new Date("24 December, 2021");

  const miliseconds = today - christmas;

  const ditet = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
  return ditet;
}
console.log(daysPassed());

function isFriday() {
  const date = new Date("January 17, 2025").getDay();

  if (date === 5) {
    return "Yaaay. Its Friday!";
  }
  return "You gotta WORK";
}
console.log(isFriday());
