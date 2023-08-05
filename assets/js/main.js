const taskInput = document.querySelector(".task-input");
const btnTask = document.querySelector(".btn-task");
const taskList = document.querySelector(".tasks");

function createListElement() {
  const li = document.createElement("li");
  return li;
}

function createDeleteButton(li) {
  li.innerText += " ";
  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Apagar";
  btnDelete.setAttribute("class", "delete");
  btnDelete.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(btnDelete);
}

function createTask(inputText) {
  const li = createListElement();
  li.innerText = inputText;
  taskList.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTasks();
}

function clearInput() {
  taskInput.value = "";
  taskInput.focus();
}

btnTask.addEventListener("click", () => {
  if (!taskInput.value) return;
  createTask(taskInput.value);
});

taskInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!taskInput.value) return;
    createTask(taskInput.value);
  }
});

document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  const tasks = taskList.querySelectorAll("li");
  const taskArr = [];

  for (let task of tasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "").trim();
    taskArr.push(taskText);
  }

  const tasksJSON = JSON.stringify(taskArr);
  localStorage.setItem("tasks", tasksJSON);
}

function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  const taskArr = JSON.parse(tasks);

  for (let task of taskArr) {
    createTask(task);
  }
}

loadTasks();
