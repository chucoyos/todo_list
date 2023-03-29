const projects =  () => {
  const projects = []
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects');
  projectContainer.innerHTML = 'Projects';
  const wrapper = document.querySelector('#root');
  wrapper.appendChild(projectContainer);
  return projects;
}

export default projects;