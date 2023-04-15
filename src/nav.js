function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const left = document.createElement('p');
  left.classList.add('nav-text');
  left.textContent = 'The single page todo list app with webpack and javascript is out!';
  const right = document.createElement('p');
  right.textContent = 'Click Add Project to start!';
  right.classList.add('nav-text');
  const hamburgerMenu = document.createElement('p');
  hamburgerMenu.textContent = '\u2261'
  hamburgerMenu.classList.add('hamburger-menu');
  nav.appendChild(left);
  nav.appendChild(right);
  nav.appendChild(hamburgerMenu);
  const root = document.getElementById('root');
  root.appendChild(nav);
  return nav;
}
export default nav;