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

function listTasks() {
  const projects = JSON.parse(localStorage.getItem('projects')); 
  const projectTitle = document.getElementById('projects-title');
  const name = projectTitle.textContent;
  const project = projects.find((project) => project.name === name);
  const tasks = project.tasks;
  const tasksList = document.getElementById('tasks-list');
  tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('project-item');
    taskItem.setAttribute('id', 'task-item');
    // build item header
    const itemHeader = document.createElement('div');
    itemHeader.classList.add('item-header');
    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = task.dueDate;
    taskDueDate.classList.add('item-due-date');
    


    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = '❌';
    taskDeleteBtn.classList.add('delete-task');
    const taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = '✏️';
    taskEditBtn.classList.add('edit-task');
    const cluster = document.createElement('div');
    cluster.appendChild(taskDeleteBtn);
    cluster.appendChild(taskEditBtn);


    itemHeader.appendChild(taskDueDate);
    itemHeader.appendChild(cluster);
    


    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;
    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;
    
    const taskPriority = document.createElement('p');
    taskPriority.textContent = task.priority;
    
    taskItem.appendChild(itemHeader);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    // taskItem.appendChild(taskDueDate);
    taskItem.appendChild(taskPriority);
    
    tasksList.appendChild(taskItem);
  });
}

export { showTaskForm, addTask, listTasks }