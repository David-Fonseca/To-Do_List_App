const newTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const task = document.createElement("li");
  task.innerText = newTask.value;
  task.addEventListener("click", () => {
    task.classList.toggle("completed");
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    task.remove();
  });
  task.appendChild(deleteButton);
  taskList.appendChild(task);
  newTask.value = "";
});
