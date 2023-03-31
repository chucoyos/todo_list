import newProject from "./newProject";
const projects =  () => {

  // Projects header
  const projectsHeader = document.createElement('div');
  projectsHeader.setAttribute('id', 'projects-header');
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = 'Projects';
  const addProjectButton = document.createElement('button');
  addProjectButton.textContent = 'Add Project';
  addProjectButton.setAttribute('id', 'add-project-button');
  projectsHeader.appendChild(projectTitle);
  projectsHeader.appendChild(addProjectButton);

  addProjectButton.addEventListener('click', () => {
    const newProjectContainer = newProject();
    projectsBody.insertBefore(newProjectContainer, projectsList);
  });
  // End of projects header

  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]));
  }

  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projects-container');

  const projectsBody = document.createElement('div');
  projectsBody.setAttribute('id', 'projects-body');
  const projectsList = document.createElement('ul');
  for (let project of projects) {
    const projectItem = document.createElement('li');
    projectItem.textContent = project.name;
    projectsList.appendChild(projectItem);
  }

  projectsContainer.appendChild(projectsHeader);
  projectsContainer.appendChild(projectsBody);
  projectsBody.appendChild(projectsList);
  const root = document.querySelector('#root');
  root.appendChild(projectsContainer);
    return projectsContainer;
}

export default projects;