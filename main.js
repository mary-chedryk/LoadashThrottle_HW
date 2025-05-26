// Task 1 
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const resizeImage = _.debounce((size) => {
  image.style.width = `${size}px`;
}, 100);

slider.addEventListener('input', (e) => {
  const size = e.target.value;
  resizeImage(size);
});

// Task 2
const box = document.getElementById('box');

const moveBox = _.debounce((e) => {
    const x = e.clientX;
    const y = e.clientY;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}, 100);

document.addEventListener('mousemove', moveBox);