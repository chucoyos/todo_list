import Project from './Project';
const addProject = (name) => {
  const input = document.querySelector('#project-input');
  name = input.value;
  if (name === '') {
    console.log('Please enter a project name');
    return;
  }
  const project = new Project(name);
  input.value = '';
  console.log(project);
}
export default addProject;