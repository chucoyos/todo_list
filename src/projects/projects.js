import Project from "./Project";
import newProject from "./newProject";
import { deleteProject, editProject } from "./projectsController";
import displayProjects from "./projects";
const projects =  () => {
  // Projects header
  const projectsHeader = document.createElement('div');
  projectsHeader.setAttribute('id', 'projects-header');
  const projectTitle = document.createElement('h1');
  projectTitle.setAttribute('id', 'projects-title');
  projectTitle.textContent = 'Projects';


  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'add-project-button');
  addProjectButton.classList.add('pushable');
  const btnShadow = document.createElement('span');
  btnShadow.classList.add('shadow');
  const btnEdge = document.createElement('span');
  btnEdge.classList.add('edge');
  const btnFront = document.createElement('span');
  btnFront.classList.add('front');
  btnFront.textContent = 'Add Project';
  addProjectButton.appendChild(btnShadow);
  addProjectButton.appendChild(btnEdge);
  addProjectButton.appendChild(btnFront);

  projectsHeader.appendChild(projectTitle);
  projectsHeader.appendChild(addProjectButton);


  addProjectButton.addEventListener('click', () => {
    const newProjectContainer = newProject();
    projectsList.insertBefore(newProjectContainer, projectsList.firstChild);
    addProjectButton.disabled = true;
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
  const projectsList = document.createElement('div');
  projectsList.setAttribute('id', 'projects-list');

  for (let project of projects) {
    let editButtonId = project.name + '-edit-button';
    let deleteButtonId = project.name + '-delete-button';
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.setAttribute('id', project.name);
    const projectTitle = document.createElement('p');
    projectTitle.textContent = project.name;
    projectTitle.classList.add('project-title');
    projectItem.appendChild(projectTitle);
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = '🗑️';
    deleteProjectButton.setAttribute('id', deleteButtonId);
    deleteProjectButton.addEventListener('click', () => {
      deleteProject(project);
      projectsList.removeChild(projectItem);
      return;
    });
    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = '✏️';
    editProjectButton.setAttribute('id', editButtonId);
    editProjectButton.addEventListener('click', () => {
      editProject(project);
      return;
    });
    projectItem.appendChild(deleteProjectButton);
    projectItem.appendChild(editProjectButton);
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