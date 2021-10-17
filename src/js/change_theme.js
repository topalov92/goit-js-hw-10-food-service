const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  check: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

let colorTheme = 'theme';

const changeTheme = evt => {
  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
};

refs.check.addEventListener('change', changeTheme);

const currentTheme = localStorage.getItem(colorTheme);

if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.check.checked = true;
}