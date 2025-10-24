const toggleBtn = document.getElementById('invert-toggle');
const root = document.documentElement;

function updateButton() {
  const isMobile = window.innerWidth <= 640;

  if (root.classList.contains('inverted')) {
    if (isMobile) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
      toggleBtn.innerHTML = '<span class="mode-label">Switch to Dark Mode</span>';
    }
    toggleBtn.classList.remove('dark-mode');
    toggleBtn.classList.add('light-mode');
  } else {
    if (isMobile) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      toggleBtn.innerHTML = '<span class="mode-label">Switch to Light Mode</span>';
    }
    toggleBtn.classList.remove('light-mode');
    toggleBtn.classList.add('dark-mode');
  }
}

// On page load
if (localStorage.getItem('theme') === 'inverted') {
  root.classList.add('inverted');
}

updateButton();

// Update on click
toggleBtn.addEventListener('click', () => {
  root.classList.toggle('inverted');
  localStorage.setItem(
    'theme',
    root.classList.contains('inverted') ? 'inverted' : 'normal'
  );
  updateButton();
});

window.addEventListener('resize', updateButton);
