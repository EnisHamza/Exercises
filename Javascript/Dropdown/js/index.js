const dropdownButton = document.querySelector("#dropdownButton");
const dropdownList = document.querySelector(".nav-links-container");

function toggle() {
  dropdownList.classList.toggle("hidden");
}

dropdownButton.addEventListener("click", toggle);
