import newTask from "./newTask";

function showTaskForm() {
  newTask();
  const addTaskButton = document.getElementById('add-project-button');
  addTaskButton.disabled = true;
}
function addTask() {
  const addTaskButton = document.getElementById('add-task-button');
  const taskItem = document.getElementById('task-item');
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value;
  const tasksBody = document.getElementById('tasks-body');
  const tasksList = document.getElementById('tasks-list');
  tasksList.removeChild(taskItem);
  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectTitle = document.getElementById('projects-title');
  const name = projectTitle.textContent;
  const project = projects.find((project) => project.name === name);
  project.tasks.push({ title: task, description: 'New Description', dueDate: '2020-12-12', priority: 'High'});
  localStorage.setItem('projects', JSON.stringify(projects));
  addTaskButton.disabled = false;
  return task;
}

export { showTaskForm, addTask }