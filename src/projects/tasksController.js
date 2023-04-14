import newTask from "./newTask";

function showTaskForm() {
  newTask();
  const addTaskButton = document.getElementById('add-project-button');
  addTaskButton.disabled = true;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function addTask() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const addTaskButton = document.getElementById('add-project-button');
  const taskItem = document.getElementById('task-item');
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value;
  const tasksList = document.getElementById('tasks-list');
  tasksList.removeChild(taskItem);
  removeAllChildNodes(tasksList);
  const projectTitle = document.getElementById('projects-title');
  const name = projectTitle.textContent;
  const project = projects.find((project) => project.name === name);
  project.tasks.push({ title: task, description: 'New Description', dueDate: '2020-12-12', priority: 'High'});
  localStorage.setItem('projects', JSON.stringify(projects));
  removeAllChildNodes(tasksList);
  listTasks();
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

    // work on edit due date

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = task.dueDate;
    taskDueDate.classList.add('item-due-date');
    const datePick = document.createElement('input');
    datePick.setAttribute('type', 'date');
    datePick.setAttribute('value', task.dueDate);
    datePick.classList.add('date-input');
    taskDueDate.addEventListener('click', () => {
      taskDueDate.replaceWith(datePick);
      datePick.addEventListener('change', () => {
        task.dueDate = datePick.value;
        localStorage.setItem('projects', JSON.stringify(projects));
        datePick.replaceWith(taskDueDate);
        removeAllChildNodes(tasksList);
        listTasks();
      });
    });
    


    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = '🗑️';
    taskDeleteBtn.classList.add('delete-task');
    taskDeleteBtn.setAttribute('id', task.title);
    taskDeleteBtn.addEventListener('click', deleteTask, false);
    const taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = '✏️';
    taskEditBtn.classList.add('edit-task');
    const cluster = document.createElement('div');
    cluster.appendChild(taskDeleteBtn);
    cluster.appendChild(taskEditBtn);
    itemHeader.appendChild(taskDueDate);
    itemHeader.appendChild(cluster);
    // end item header
    
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;
    taskTitle.classList.add('task-title');
    //TRANSFORM THIS INTO AN INPUT FIELD AND SAVE THE VALUE TO THE TASK OBJECT
    taskTitle.addEventListener('click', () => {
      const titleInput = document.createElement('input');
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('value', task.title);
      titleInput.classList.add('task-title');
      taskTitle.replaceWith(titleInput);
      titleInput.addEventListener('change', () => {
        task.title = titleInput.value;
        localStorage.setItem('projects', JSON.stringify(projects));
        titleInput.replaceWith(taskTitle);
        removeAllChildNodes(tasksList);
        listTasks();
      });
    });

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = task.description;
    taskDescription.addEventListener('click', () => {
      const descriptionInput = document.createElement('input');
      descriptionInput.setAttribute('type', 'text');
      descriptionInput.setAttribute('value', task.description);
      descriptionInput.classList.add('task-description');
      taskDescription.replaceWith(descriptionInput);
      descriptionInput.addEventListener('change', () => {
        task.description = descriptionInput.value;
        localStorage.setItem('projects', JSON.stringify(projects));
        descriptionInput.replaceWith(taskDescription);
        removeAllChildNodes(tasksList);
        listTasks();
      });
    });
    
    const taskPriority = document.createElement('p');
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskPriority.classList.add('task-priority');
    taskPriority.addEventListener('click', () => {
      const priorityInput = document.createElement('select');
      priorityInput.classList.add('priority-input');
      const select = document.createElement('option');
      select.setAttribute('value', 'Select');
      select.textContent = 'Select';
      const high = document.createElement('option');
      high.setAttribute('value', 'High');
      high.textContent = 'High';
      const medium = document.createElement('option');
      medium.setAttribute('value', 'Medium');
      medium.textContent = 'Medium';
      const low = document.createElement('option');
      low.setAttribute('value', 'Low');
      low.textContent = 'Low';
      priorityInput.appendChild(select);
      priorityInput.appendChild(high);
      priorityInput.appendChild(medium);
      priorityInput.appendChild(low);
      taskPriority.replaceWith(priorityInput);
      priorityInput.addEventListener('change', () => {
        task.priority = priorityInput.value;
        localStorage.setItem('projects', JSON.stringify(projects));
        priorityInput.replaceWith(taskPriority);
        removeAllChildNodes(tasksList);
        listTasks();
      });
    });

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const taskBody = document.createElement('div');
    taskBody.classList.add('task-body');
    
    taskItem.appendChild(itemHeader);
    titleContainer.appendChild(taskTitle);
    titleContainer.appendChild(taskPriority);
    taskBody.appendChild(titleContainer);
    taskBody.appendChild(taskDescription);
    taskItem.appendChild(taskBody);
    
    tasksList.appendChild(taskItem);
  });

  function deleteTask() {
    const projects = JSON.parse(localStorage.getItem('projects')); 
    const projectTitle = document.getElementById('projects-title');
    const name = projectTitle.textContent;
    const project = projects.find((project) => project.name === name);
    const tasks = project.tasks;
    const index = tasks.findIndex((task) => task.title === this.getAttribute('id'));
    tasks.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    removeAllChildNodes(tasksList);
    listTasks();
  }
}

export { showTaskForm, addTask, listTasks, removeAllChildNodes }