const colorsContainer = document.querySelector(".colors-container");
const buttonElement = document.querySelector("#color-button");

let colorBlocks = ["", "", "", ""];

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function color() {
  colorsContainer.innerHTML = "";

  const commonColor = getRandomNumber();

  colorBlocks.forEach((_color, index) => {
    colorBlocks[index] =
      "rgb(" +
      commonColor +
      "," +
      getRandomNumber() +
      "," +
      getRandomNumber() +
      ")";
  });

  colorBlocks.forEach((color) => {
    const divElements = document.createElement("div");
    divElements.style.backgroundColor = color;
    divElements.textContent = color;
    colorsContainer.append(divElements);
  });
}

buttonElement.addEventListener("click", color);
document.addEventListener("keydown", color);
