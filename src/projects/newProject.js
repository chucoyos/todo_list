import addProject from "./addProject"

const newProject = () => {
  const newProjectContainer = document.createElement('div');
  newProjectContainer.setAttribute('id', 'new-project-container');
  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('id', 'new-project-btn');
  newProjectBtn.textContent = 'New Project';
  newProjectBtn.addEventListener('click', addProject);
  const projectInput = document.createElement('input');
  projectInput.setAttribute('id', 'project-input');
  projectInput.setAttribute('type', 'text');
  projectInput.setAttribute('placeholder', 'Project name');
  newProjectContainer.appendChild(newProjectBtn);
  newProjectContainer.appendChild(projectInput);
  newProjectContainer.classList.add('project-item');
  const listItem = document.createElement('li');
  listItem.appendChild(newProjectContainer);
  return newProjectContainer;
}

export default newProject;