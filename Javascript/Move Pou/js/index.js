const pou = document.querySelector(".pou");
const eyes = document.querySelector(".eye-container");

let left = 100;

function moveRight() {
  left += 100;
  pou.style.left = left + "px";
  //console.log(pou.style.left);
  eyes.style.transform = "rotate(0deg)";
  eyes.style.left = "4.5rem";
}

function moveLeft() {
  left -= 100;
  pou.style.left = left + "px";
  //console.log(pou.style.left);
  eyes.style.transform = "rotate(180deg)";
  eyes.style.left = "-4.5rem";
}

function movePou(e) {
  //console.log("Pressing key", e.key);
  if (e.key === "ArrowLeft") {
    moveLeft();
  }
  if (e.key === "ArrowRight") {
    moveRight();
  }
}
document.addEventListener("keydown", (e) => movePou(e));
