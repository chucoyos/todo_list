const projects =  () => {
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
  projectsContainer.appendChild(projectsList);
  const wrapper = document.querySelector('#root');
  wrapper.appendChild(projectsContainer);
  return projects;
}

export default projects;