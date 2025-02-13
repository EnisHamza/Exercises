//CreateElement and append method
const container = document.querySelector(".clickMe");
const butoni = document.createElement("button");
console.log(butoni);
const shkruaj = document.createElement("input");

container.append(butoni, shkruaj);

//Styling with Javascript
const ndrysho = document.querySelector("h1");
ndrysho.classList.add("red-color");

function toggle() {
  ndrysho.classList.toggle("green-color");
}
document.addEventListener("click", toggle);

const body = document.querySelector("body");
body.style.backgroundColor = "bisque";
ndrysho.style.textAlign = "center";
