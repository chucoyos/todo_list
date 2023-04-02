function deleteProject(project) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const updatedProjects = projects.filter((proj) => proj.name !== project.name);
  localStorage.setItem('projects', JSON.stringify(updatedProjects));
}

export { deleteProject }