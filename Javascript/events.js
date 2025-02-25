document.addEventListener("click", function alertMe(e) {
  console.log(e);
});

function keydown(e) {
  console.log(e.key);
}
document.addEventListener("keydown", (e) => keydown(e));

//Drag events
const homeElement = document.querySelector("#home");
const chickElement = document.querySelector("#chick");

chickElement.addEventListener("drag", (e) => console.log("dragging"));
chickElement.addEventListener("dragstart", (e) => console.log("start"));
chickElement.addEventListener("dragend", (e) => console.log("end"));
homeElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("over");
});
homeElement.addEventListener("dragenter", (e) => console.log("enter"));
homeElement.addEventListener("dragleave", (e) => console.log("leave"));
homeElement.addEventListener("drop", (e) => {
  console.log("drop");
  homeElement.append(chickElement);
});
