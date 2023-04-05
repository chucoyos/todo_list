
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

  // replace edit button with save button
  const editProjectButton = document.getElementById('edit-project-button');
  const saveProjectButton = document.createElement('button');
  saveProjectButton.textContent = '✔️';
  saveProjectButton.setAttribute('id', 'save-project-button');
  editProjectButton.replaceWith(saveProjectButton);
  const cancelEditButton = document.createElement('button');
  cancelEditButton.textContent = '❌';
  cancelEditButton.setAttribute('id', project.name);
  const deleteProjectButton = document.getElementById('delete-project-button');
  deleteProjectButton.replaceWith(cancelEditButton);
  cancelEditButton.addEventListener('click', () => {
    editProjectInput.replaceWith(currentProject);
    saveProjectButton.replaceWith(editProjectButton);
    cancelEditButton.replaceWith(deleteProjectButton);
    console.log(project.name);
  }
  );
}

export { deleteProject, editProject }