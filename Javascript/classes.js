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
