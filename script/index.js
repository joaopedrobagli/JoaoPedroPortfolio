const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

if (button) {
  button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
  });
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});




