
const projects =  () => {

  // Projects header
  const projectsHeader = document.createElement('div');
  projectsHeader.setAttribute('id', 'projects-header');
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = 'Projects';
  projectsHeader.appendChild(projectTitle);
  // End of projects header

  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]));
  }

  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projects-container');
  const projectsList = document.createElement('ul');
  for (let project of projects) {
    const projectItem = document.createElement('li');
    projectItem.textContent = project.name;
    projectsList.appendChild(projectItem);
  }

  projectsContainer.appendChild(projectTitle);
  projectsContainer.appendChild(projectsList);
  const root = document.querySelector('#root');
  root.appendChild(projectsContainer);
  return projects;
}

export default projects;