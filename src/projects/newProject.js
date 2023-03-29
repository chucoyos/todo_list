import addProject from "./addProject";
const newProject = () => {
  const newProjectContainer = document.createElement('div');
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
  const wrapper = document.querySelector('#root');
  wrapper.appendChild(newProjectContainer);
  return newProjectContainer;
}

export default newProject;