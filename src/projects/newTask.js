function newTask() {
  const projectContainer = document.getElementById('project-container');
  const tasksBody  = document.createElement('div');
  const taskItem = document.createElement('div');
  taskItem.classList.add('project-item');
  const taskInput = document.createElement('input');
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('placeholder', 'New Task');
  taskInput.setAttribute('id', 'task-input');
  taskInput.classList.add('project-item');
  const addTaskButton = document.createElement('button');
  addTaskButton.textContent = '✔️';
  addTaskButton.setAttribute('id', 'add-task-button');
  const cancelTaskButton = document.createElement('button');
  cancelTaskButton.textContent = '❌';
  cancelTaskButton.setAttribute('id', 'cancel-task-button');
  taskItem.appendChild(taskInput);
  taskItem.appendChild(cancelTaskButton);
  taskItem.appendChild(addTaskButton);
  tasksBody.appendChild(taskItem);
  projectContainer.appendChild(tasksBody);
  return tasksBody;
}
export default newTask;