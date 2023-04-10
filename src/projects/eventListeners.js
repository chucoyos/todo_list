import newProject from "./newProject";

const showNewProjectForm = function showNewProjectForm() {
  const addProjectButton = document.getElementById('add-project-button');
  const projectsList = document.getElementById('projects-list');
  const newProjectContainer = newProject();
  projectsList.insertBefore(newProjectContainer, projectsList.firstChild);
  addProjectButton.disabled = true;
}

const cancelAddTask = function cancelAddTask() {
  const addProjectButton = document.getElementById('add-project-button');
  const TasksContainer = document.getElementById('project-container');
  const tasksBody = document.getElementById('tasks-body');
  TasksContainer.removeChild(tasksBody);
  addProjectButton.disabled = false;
}

export { showNewProjectForm, cancelAddTask }

// project.tasks.push({ title: 'New Task', description: 'New Description', 
// dueDate: '2020-12-12', priority: 'High'});