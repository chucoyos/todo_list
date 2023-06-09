import { cancelAddTask } from './eventListeners';
import { addTask } from './tasksController';
function newTask() {
  const tasksBody  = document.createElement('div');
  tasksBody.setAttribute('id', 'tasks-body');
  const taskItem = document.createElement('div');
  taskItem.classList.add('project-item');
  taskItem.setAttribute('id', 'task-item');
  const taskInput = document.createElement('input');
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('placeholder', 'New Task');
  taskInput.classList.add('project-item');
  taskInput.setAttribute('id', 'task-input')
  taskInput.maxLength = 24;
  taskInput.minLength = 1;
  taskInput.setAttribute('required', 'required');
  const addTaskButton = document.createElement('button');
  addTaskButton.textContent = '✔️';
  addTaskButton.setAttribute('id', 'add-task-button');

  addTaskButton.addEventListener('click', addTask, false);
  
  const tasksList = document.getElementById('tasks-list');
  tasksList.appendChild(taskItem);

  const cancelTaskButton = document.createElement('button');
  cancelTaskButton.textContent = '❌';
  cancelTaskButton.setAttribute('id', 'cancel-task-button');
  cancelTaskButton.addEventListener('click', cancelAddTask, false);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(cancelTaskButton);
  taskItem.appendChild(addTaskButton);
  tasksList.prepend(taskItem);
  taskItem.classList.add('task-input-item');

  return tasksBody;
}
export default newTask;