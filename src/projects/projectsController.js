
function deleteProject(project) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const updatedProjects = projects.filter((proj) => proj.name !== project.name);
  localStorage.setItem('projects', JSON.stringify(updatedProjects));
  const addProjectButton = document.getElementById('add-project-button');
}

function editProject(project) {
  // const projects = JSON.parse(localStorage.getItem('projects'));
  // const updatedProjects = projects.filter((proj) => proj.name !== project.name);
  // localStorage.setItem('projects', JSON.stringify(updatedProjects));
  // const addProjectButton = document.getElementById('add-project-button');

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
  
  // TODO PLACE THE BUTTONS IN THE RIGHT PLACE
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
    // replace input with project title
    const projectTitle = document.createElement('p');
    projectTitle.textContent = project.name;
    projectTitle.classList.add('project-title');
    editProjectInput.replaceWith(projectTitle);
    // replace save button with edit button
    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = '✏️';
    editProjectButton.setAttribute('id', editButtonId);
    projectItem.replaceChild(editProjectButton, saveProjectButton);
    // replace cancel button with delete button
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = '🗑️';
    deleteProjectButton.setAttribute('id', deleteButtonId);
    projectItem.replaceChild(deleteProjectButton, cancelProjectButton);
  }
  );
}

export { deleteProject, editProject }