import Project from './Project';
import displayProjects from './projects';
const addProject = (name) => {
  const input = document.querySelector('#project-input');
  name = input.value;
  if (name === '') {
    console.log('Please enter a project name');
    return;
  }
  const project = new Project(name);
  input.value = '';
  const projects = localStorage.getItem('projects');
  if (projects) {
    const projectsArray = JSON.parse(projects);
    projectsArray.push(project);
    localStorage.setItem('projects', JSON.stringify(projectsArray));
  } else {
    const projectsArray = [];
    projectsArray.push(project);
    localStorage.setItem('projects', JSON.stringify(projectsArray));
  }
  const projectsContainer = document.querySelector('#projects-container');
  projectsContainer.remove();
  displayProjects();
}
export default addProject;