const nav_menu = document.getElementById('navMenu');
const hamburgerBtn_toggle = document.getElementById('hamburgerBtn');

hamburgerBtn_toggle.addEventListener('click', () => {
//   hamburgerBtn_toggle.classList.toggle('active');
  nav_menu.classList.toggle('active');
});