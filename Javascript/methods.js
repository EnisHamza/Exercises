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

function isSaturday(date) {
  if (date === "Saturday") {
    return "Finally, Its Saturday";
  }
  return "Its a workday";
}
console.log(isSaturday("Saturday"));

document.addEventListener("click", function alertMe() {
  alert("You clicked this site");
});

{
  /*document.addEventListener("mouseover", function mouseOver() {
  alert("You have the mouse over the site");
});

document.addEventListener("mouseout", function mouseOut() {
  alert("You have the mouse out");
});*/
}

document.querySelector(".submit-button");
console.log(document.querySelector(".submit-button"));

document.querySelector("#search-button");
console.log(document.querySelector("#search-button"));

//When there are two or more div, querySelector takes only the first one
document.querySelector("div");
console.log(document.querySelector("div"));
//Now it takes all the divs
document.querySelectorAll("div");
console.log(document.querySelectorAll("div"));

const secondDiv = document.querySelector(".second");
console.log(secondDiv.innerText);

console.log(document.getElementById("submit-btn"));
const teksti = document.getElementsByClassName("text");
console.log(teksti);
console.log(document.getElementsByTagName("input"));
