
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
  const sideNav = document.createElement('div');
  sideNav.classList.add('side-nav');
  const closeNav = document.createElement('p');
  closeNav.classList.add('close-nav');
  closeNav.textContent = '\u2715';
  closeNav.addEventListener('click', () => {
    toggleSideNav();
  });
  
  const appInfo = document.createElement('p');
  appInfo.classList.add('app-info');
  appInfo.textContent = 'The single page todo list app with webpack and javascript is out!';
  const appInfo2 = document.createElement('p');
  appInfo2.classList.add('app-info');
  appInfo2.textContent = 'Click Add Project to start!';
  sideNav.appendChild(appInfo);
  sideNav.appendChild(appInfo2);
  sideNav.appendChild(closeNav);
  nav.appendChild(sideNav);

  function toggleSideNav() {
    if (sideNav.style.width === '100%') {
      sideNav.setAttribute('style', 'width: 0');
    } else {
      sideNav.setAttribute('style', 'width: 100%');
    }
  }

  hamburgerMenu.addEventListener('click', () => {
    toggleSideNav();
  });
     
  nav.appendChild(left);
  nav.appendChild(right);
  nav.appendChild(hamburgerMenu);
  const root = document.getElementById('root');
  root.appendChild(nav);
  return nav;
}
export default nav;