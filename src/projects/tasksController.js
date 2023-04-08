import newTask from "./newTask";

function showTaskForm() {
  newTask();
  const addTaskButton = document.getElementById('add-project-button');
  addTaskButton.disabled = true;
}

export { showTaskForm }