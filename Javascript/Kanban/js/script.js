const taskLists = document.querySelectorAll(".task-list");
const backlogTasks = document.querySelector("#backlog .task-list");
const titleElement = document.querySelector("#title");
const descriptionElement = document.querySelector("#description");
const submitButton = document.querySelector("#submit-button");

let tasks = [
  {
    id: 0,
    title: "Fix submit button",
    description: "The submit button has stopped working since the last release",
  },
  {
    id: 1,
    title: "Change text on T's and C's",
    description:
      "The terms and conditions need updating as per the business meeting",
  },
  {
    id: 2,
    title: "Change banner picture",
    description:
      "Marketing has requested a new banner to be added to the website",
  },
];

taskLists.forEach((taskList) => {
  taskList.addEventListener("dragover", dragOver);
  taskList.addEventListener("drop", dragDrop);
});

function createTask(taskId, title, description) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-container");

  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");

  const taskTitle = document.createElement("p");
  taskTitle.textContent = title;

  const taskDescriptionContainer = document.createElement("div");
  taskDescriptionContainer.classList.add("task-description-container");

  const taskDescription = document.createElement("p");
  taskDescription.textContent = description;

  const deleteIcon = document.createElement("p");
  deleteIcon.textContent = "❌";

  taskCard.setAttribute("draggable", true);
  taskCard.setAttribute("task-id", taskId);

  taskCard.addEventListener("dragstart", dragStart);

  taskDescriptionContainer.append(taskDescription);

  taskHeader.append(taskTitle, deleteIcon);
  taskCard.append(taskHeader, taskDescriptionContainer);
  backlogTasks.append(taskCard);
}

function addTasks() {
  tasks.forEach((task) => createTask(task.id, task.title, task.description));
}

addTasks();

let elementBeingDragged;

function dragStart() {
  console.log(this);
  elementBeingDragged = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  console.log(this);
  this.append(elementBeingDragged);
}

function addTask(e) {
  e.preventDefault();

  const filteredTitles = tasks.filter((task) => {
    return task.title === titleElement.value;
  });

  if (!filteredTitles.length) {
    const newId = tasks.length;
    tasks.push({
      id: newId,
      title: titleElement.value,
      description: descriptionElement.value,
    });
    createTask(newId, titleElement.value, descriptionElement.value);
    titleElement.value = "";
    descriptionElement.value = "";
  } else {
    console.log("error");
  }

  console.log(tasks);
}

submitButton.addEventListener("click", addTask);
addTask();
