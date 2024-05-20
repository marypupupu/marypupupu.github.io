let menu = document.querySelector('menu')
let header = document.querySelector('.header')
document.addEventListener('scroll', function() {
  if (window.pageYOffset >= menu.offsetHeight + header.offsetHeight) {
    menu.classList.add('fixed')
  }
  else {
    menu.classList.remove('fixed')
  }
});