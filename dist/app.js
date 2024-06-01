// MENU VARIABLES
const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');
const main = document.querySelector('main');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  main.classList.toggle('opacity-10');

  menuButtonSpans.forEach((span) => {
    span.classList.toggle('animado');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuItems.classList.add('hidden');
    main.classList.remove('opacity-10');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  });
});

// CIERRA MENU ON RESIZE

window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  }
};

/**DARK MODE*/

const darkButton = document.querySelector('#darkButton');
const darkIcon = document.querySelector('#darkIcon');

darkButton.addEventListener('click', function () {
  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      darkIcon.classList.remove('bi-sun-fill');
      darkIcon.classList.add('bi-moon-fill');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      darkIcon.classList.remove('bi-moon-fill');
      darkIcon.classList.add('bi-sun-fill');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      darkIcon.classList.remove('bi-moon-fill');
      darkIcon.classList.add('bi-sun-fill');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      darkIcon.classList.remove('bi-sun-fill');
      darkIcon.classList.add('bi-moon-fill');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
/*VARIABLES  JOBS SECTION*/

const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (id) {
    articles.forEach((article) => {
      article.classList.add('hidden');
    });
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
});

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    firstLink.classList.remove(
      'border-sky-500',
      'bg-white',
      'dark:bg-slate-700'
    );
  });
});


// /*TOOLTIP EN ICONOS*/
// document.addEventListener("DOMContentLoaded", function() {
//   const icons = document.querySelectorAll('.icon-container');
  
//   icons.forEach(icon => {
//     const tooltip = icon.querySelector('.tooltip');
    
//     icon.addEventListener('mouseover', function() {
//       tooltip.classList.remove('hidden');
//     });
    
//     icon.addEventListener('mouseout', function() {
//       tooltip.classList.add('hidden');
//     });
//   });
// });
