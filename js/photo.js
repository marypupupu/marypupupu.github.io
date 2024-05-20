let modal = document.querySelector(".modal-content");
let images = document.querySelectorAll(".gallery__image");
let image_counter = 0;
let right_arrow = document.querySelector(".modal__arrow_right");
let left_arrow = document.querySelector(".modal__arrow_left");


document.querySelectorAll('.gallery__image').forEach(card => card.addEventListener('click', function() {
  image_counter = Number(this.id);
  let s = images[image_counter].getAttribute('src');
  document.querySelector(".modal").setAttribute('style', "visibility: visible");
  modal.setAttribute('style', "background-image: url('"+s+"')");
  left_arrow.setAttribute('style', 'opacity: 100');
  right_arrow.setAttribute('style', 'opacity: 100');
  if (image_counter === 0) {
    left_arrow.setAttribute('style', 'opacity: 0');
  }
  if (image_counter === images.length - 1) {
    right_arrow.setAttribute('style', 'opacity: 0');
  }
}));


right_arrow.addEventListener('click', function () {
  if (image_counter < images.length) {
    image_counter += 1;
    let s = images[image_counter].getAttribute('src');
    document.querySelector(".modal").setAttribute('style', "visibility: visible");
    modal.setAttribute('style', "background-image: url('"+s+"')");
    left_arrow.setAttribute('style', 'opacity: 100');
    if (image_counter === images.length - 1) {
      right_arrow.setAttribute('style', 'opacity: 0');
    }
  }
});


left_arrow.addEventListener('click', function () {
  if (image_counter > 0) {
  image_counter -= 1;
  let s = images[image_counter].getAttribute('src');
  document.querySelector(".modal").setAttribute('style', "visibility: visible");
  modal.setAttribute('style', "background-image: url('"+s+"')");
  right_arrow.setAttribute('style', 'opacity: 100');
  if (image_counter === 0) {
    left_arrow.setAttribute('style', 'opacity: 0');
  }
  }
});

