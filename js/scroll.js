let menu = document.querySelector('menu')
let header = document.querySelector('.header')
let menu_height = menu.offsetHeight;
let header_height = header.offsetHeight;


window.addEventListener('resize', function() {
  menu_height = menu.offsetHeight;
  header_height = header.offsetHeight;
});


document.addEventListener('scroll', function() {
  if (window.pageYOffset >= menu_height + header_height) {
    menu.classList.add('fixed')
  }
  else {
    menu.classList.remove('fixed')
  }
});
