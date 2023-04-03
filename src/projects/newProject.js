import addProject from "./addProject"

const newProject = () => {
  const newProjectContainer = document.createElement('div');
  newProjectContainer.setAttribute('id', 'new-project-container');
  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('id', 'new-project-btn');
  newProjectBtn.textContent =  '✔️';
  newProjectBtn.addEventListener('click', addProject);
  const cancelProjectBtn = document.createElement('button');
  cancelProjectBtn.setAttribute('id', 'cancel-project-btn');
  cancelProjectBtn.textContent = '❌';
  cancelProjectBtn.addEventListener('click', () => {
    newProjectContainer.remove();
    const addProjectButton = document.getElementById('add-project-button');
    addProjectButton.disabled = false;
  });
  const projectInput = document.createElement('input');
  projectInput.setAttribute('id', 'project-input');
  projectInput.setAttribute('type', 'text');
  projectInput.setAttribute('placeholder', 'Project name');
  newProjectContainer.appendChild(projectInput);
  newProjectContainer.appendChild(cancelProjectBtn);
  newProjectContainer.appendChild(newProjectBtn);
  newProjectContainer.classList.add('project-item');
  const listItem = document.createElement('li');
  listItem.appendChild(newProjectContainer);
  return newProjectContainer;
}

export default newProject;