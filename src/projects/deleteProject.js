const deleteProject = () => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  console.log(projects);
}
export default deleteProject;