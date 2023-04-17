function header() {
  const header = document.createElement('header');
  header.classList.add('header');
  const title = document.createElement('p');
  title.classList.add('main-title');
  title.textContent = 'This single page todo list app was built with webpack and javascript, uses local storage to store data. You can create multiple projects and each project can have a list of tasks with a due-date, a description and priority.';
  header.appendChild(title);
  const root = document.getElementById('root');
  root.appendChild(header);
  return header;
}
export default header;