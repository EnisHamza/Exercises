const taskContainers = document.querySelectorAll(".task-container");
const tasks = document.querySelectorAll(".task");
let taskDragged;

tasks.forEach((task) => task.addEventListener("dragstart", dragStart));

taskContainers.forEach((taskContainer) => {
  taskContainer.addEventListener("drop", dragDrop),
    taskContainer.addEventListener("dragover", dragOver);
});

function dragStart(e) {
  console.log(e.target);
  taskDragged = e.target;
}

function dragDrop(e) {
  console.log(e.target);
  e.target.append(taskDragged);
}

function dragOver(e) {
  e.preventDefault();
}
