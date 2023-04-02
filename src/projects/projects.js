import Project from "./Project";
import newProject from "./newProject";
import deleteProject from "./deleteProject";
import displayProjects from "./projects";
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
    projectsList.insertBefore(newProjectContainer, projectsList.firstChild);
  });
  // End of projects header

  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]));
  }

  const projects = JSON.parse(localStorage.getItem('projects'));

  // If there are no projects, create a default project and call displayProjects
  if (projects.length === 0) {
    const defaultProject = new Project('Default Project');
    const projectsArray = [];
    projectsArray.push(defaultProject);
    localStorage.setItem('projects', JSON.stringify(projectsArray));
    displayProjects();
    return;
  }


  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projects-container');

  const projectsBody = document.createElement('div');
  projectsBody.setAttribute('id', 'projects-body');
  const projectsList = document.createElement('ul');
  projectsList.setAttribute('id', 'projects-list');
  for (let project of projects) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.name;
    projectsList.appendChild(projectItem);
  }
  const root = document.querySelector('#root');
  projectsContainer.appendChild(projectsHeader);
  projectsContainer.appendChild(projectsBody);
  projectsBody.appendChild(projectsList);
  root.appendChild(projectsContainer);
  return projectsContainer;
}

export default projects;