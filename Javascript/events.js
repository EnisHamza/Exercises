document.addEventListener("click", function alertMe(e) {
  console.log(e);
});

function keydown(e) {
  console.log(e.key);
}
document.addEventListener("keydown", (e) => keydown(e));
