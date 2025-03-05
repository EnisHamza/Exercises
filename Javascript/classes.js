class Shape {
  constructor(height, width, borderRadius, backgroundColor) {
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}
const greenShape = new Shape(200, 100, 0, "green");
const redShape = new Shape(80, 80, 40, "red");

console.log(greenShape);

const selectDropdown = document.querySelector("#flavor-select");
const submitButton = document.querySelector("input[type=submit]");

selectDropdown.value;

function handleClick(e) {
  e.preventDefault();
  console.log(selectDropdown.value);
}

submitButton.addEventListener("click", handleClick);

//Switch case
let points = 4;
let days;
switch (points) {
  case 1:
    days = "Monday";
    break;
  case 2:
    days = "Tuesday";
    break;
  case 3:
    days = "Wednesday;";
    break;
  case 4:
    days = "Thursday";
    break;
  case 5:
    days = "Friday";
    break;
  case 6:
    days = "Saturday";
    break;
  case 7:
    days = "Sunday";
    break;
  default:
    days = "Invalid Day";
}
console.log(`Your Day is: ${days}`);
