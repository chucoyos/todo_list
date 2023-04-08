import newProject from "./newProject";

const showNewProjectForm = function showNewProjectForm() {
  const addProjectButton = document.getElementById('add-project-button');
  const projectsList = document.getElementById('projects-list');
  const newProjectContainer = newProject();
  projectsList.insertBefore(newProjectContainer, projectsList.firstChild);
  addProjectButton.disabled = true;
}

export { showNewProjectForm }