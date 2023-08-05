const taskInput = document.querySelector(".task-input");
const btnTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

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
  tasks.appendChild(li);
  clearInput();
  createDeleteButton(li);
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
  }
});
