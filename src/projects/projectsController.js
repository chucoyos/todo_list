import { showNewProjectForm } from './eventListeners';
function showProject(project) {
  const projectContainer = document.createElement('div');
  projectContainer.setAttribute('id', 'project-container');
  const projectsContainer = document.getElementById('projects-container');
  const projectHeader = document.getElementById('projects-header');
  const projectsBody = document.getElementById('projects-body');
  const projectTitle = document.getElementById('projects-title');
  const addProjectButton = document.getElementById('add-project-button');
  // TODO remove event listener from add project button
  addProjectButton.removeEventListener('click', showNewProjectForm);
 


  projectTitle.textContent = project.name;
  const buttonText = document.querySelector('.front');
  buttonText.textContent = 'Add Task';
  projectsContainer.removeChild(projectsBody);
  projectsContainer.replaceWith(projectContainer);
  const backToProjects = document.createElement('p');
  backToProjects.textContent = '👈️ Back to projects';
  backToProjects.setAttribute('id', 'back-to-projects');
  projectContainer.appendChild(backToProjects);
  projectContainer.appendChild(projectHeader);
  backToProjects.addEventListener('click', () => {
    addProjectButton.addEventListener('click', showNewProjectForm, false);
    projectsContainer.appendChild(projectHeader);
    projectsContainer.appendChild(projectsBody);
    projectContainer.replaceWith(projectsContainer);
    buttonText.textContent = 'Add Project';
    projectTitle.textContent = 'Projects';
    return;
  });
 
}

function editProject(project) {
  // replace project title with input
  const editProjectInput = document.createElement('input');
  editProjectInput.classList.add('project-input');
  editProjectInput.setAttribute('type', 'text');
  const projectItem = document.getElementById(project.name);
  //  get the current project title and replace it with the input
  const currentTitle = projectItem.querySelector('.project-title');
  currentTitle.replaceWith(editProjectInput);
  editProjectInput.value = project.name;
  editProjectInput.focus();
  
  // replace edit button with save button
  let editButtonId = project.name + '-edit-button';
  let deleteButtonId = project.name + '-delete-button';
  let saveButtonId = project.name + '-save-button';
  let cancelButtonId = project.name + '-cancel-button';
  const editProjectButton = document.getElementById(editButtonId);
  const deleteProjectButton = document.getElementById(deleteButtonId);
  const saveProjectButton = document.createElement('button');
  saveProjectButton.textContent = '✔️';
  saveProjectButton.setAttribute('id', saveButtonId);
  projectItem.replaceChild(saveProjectButton, editProjectButton);
  // replace delete button with cancel button
  const cancelProjectButton = document.createElement('button');
  cancelProjectButton.textContent = '❌';
  cancelProjectButton.setAttribute('id', cancelButtonId);
  projectItem.replaceChild(cancelProjectButton, deleteProjectButton);
  // add event listeners to save and cancel buttons
  cancelProjectButton.addEventListener('click', () => {
    projectItem.replaceChild(editProjectButton, saveProjectButton);
    projectItem.replaceChild(deleteProjectButton, cancelProjectButton);
    editProjectInput.replaceWith(currentTitle);
    return;
  });
  saveProjectButton.addEventListener('click', () => {
    const projects = JSON.parse(localStorage.getItem('projects')); // get projects from local storage
    const updatedProjects = projects.filter((proj) => proj.name !== project.name); // remove the old project
    project.name = editProjectInput.value; // update the project name
    updatedProjects.push(project); // add the updated project
    localStorage.setItem('projects', JSON.stringify(updatedProjects));// update local storage
    currentTitle.textContent = project.name;
    projectItem.setAttribute('id', project.name);
    editButtonId = project.name + '-edit-button';
    deleteButtonId = project.name + '-delete-button';
    editProjectInput.replaceWith(currentTitle);
    editProjectButton.setAttribute('id', editButtonId); // update the edit button id
    deleteProjectButton.setAttribute('id', deleteButtonId); // update the delete button id
    saveProjectButton.setAttribute('id', saveButtonId);
    cancelProjectButton.setAttribute('id', cancelButtonId);
    projectItem.replaceChild(editProjectButton, saveProjectButton);
    projectItem.replaceChild(deleteProjectButton, cancelProjectButton);
    return;
  });
}

function deleteProject(project) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const updatedProjects = projects.filter((proj) => proj.name !== project.name);
  localStorage.setItem('projects', JSON.stringify(updatedProjects));
  const addProjectButton = document.getElementById('add-project-button');
}

export { showProject, deleteProject, editProject }